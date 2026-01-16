"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import Link from "next/link";
import UiButton from "@/components/ui/Button";

export type CookieConsentChoice = "accepted" | "rejected";

type CookieConsentPopupProps = {
	/**
	 * Debug helper: when true, the popup will always show on every page load.
	 * Set to false when you want persistence via localStorage.
	 */
	debugAlwaysShow?: boolean;
	/**
	 * Optional callback when the user makes a choice.
	 */
	onChoice?: (choice: CookieConsentChoice) => void;
};

const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	z-index: 3000;
`;

const Modal = styled.div`
	position: fixed;
	left: 50%;
    bottom: 18px;
	transform: translate(-50%, 0);
	z-index: 3001;
    max-width: 820px;
	background: var(--color-bg);
	border: 6px solid #f5f5f5;
	border-radius: 24px;
    

	padding: 24px 24px;

	@media (max-width: 768px) {
		padding: 22px 22px;
		border-radius: 28px;
        width: calc(100% - 18px);
	}
`;

const Title = styled.h2`
	font-size: 24px;
	line-height: 1.05;
	letter-spacing: -2px;
	font-family: var(--font-body);
	color: var(--color-dark);
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 22px;
		letter-spacing: -1.2px;
	}
`;

const Description = styled.p`
	margin-top: 18px;
	max-width: 62ch;
	font-size: 16px;
	line-height: 1.15;
	font-family: var(--font-display);
	color: var(--color-muted);
	font-weight: 400;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const Actions = styled.div`
	margin-top: 26px;
	display: flex;
	align-items: center;
	gap: 8px;
	flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: 18px;
    }
`;

const AcceptButton = styled(UiButton)`
  --btn-color: var(--color-dark);
  --btn-on: var(--color-bg);

  @media (max-width: 768px) {
    font-size: 16px;
  } 
`;

const RejectButton = styled(UiButton)`
  --btn-color: var(--color-dark);
  --btn-on: var(--color-bg);

  @media (max-width: 768px) {
    font-size: 16px;
  } 
`;

const FooterNote = styled.p`
	margin-top: 22px;
	font-size: 14px;
	line-height: 1.15;
	font-family: var(--font-alt);
	color: var(--color-muted);

    @media (max-width: 768px) {
        font-size: 12px;
    }

	& a {
		color: var(--color-dark);
		text-decoration: underline;
		font-weight: 600;

		&:hover {
			color: var(--color-link);
		}
	}
`;

const STORAGE_KEY = "cookie_consent_choice";

export default function CookieConsentPopup({ debugAlwaysShow = true, onChoice }: CookieConsentPopupProps) {
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		if (debugAlwaysShow) {
			setIsOpen(true);
			return;
		}

		const existing = window.localStorage.getItem(STORAGE_KEY);
		setIsOpen(!existing);
	}, [mounted, debugAlwaysShow]);

	useEffect(() => {
		if (!isOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// For LGPD we keep escape as "close" without consent, but in debug we still allow dismiss.
				setIsOpen(false);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	const choose = useCallback(
		(choice: CookieConsentChoice) => {
			try {
				if (!debugAlwaysShow) window.localStorage.setItem(STORAGE_KEY, choice);
			} catch {
				// ignore storage errors (private mode, blocked storage, etc.)
			}
			onChoice?.(choice);
			setIsOpen(false);
		},
		[debugAlwaysShow, onChoice]
	);

	const portalTarget = useMemo(() => {
		if (typeof document === "undefined") return null;
		return document.body;
	}, []);

	if (!mounted || !portalTarget || !isOpen) return null;

	return createPortal(
		<>
			<Backdrop onClick={() => setIsOpen(false)} aria-hidden="true" />
			<Modal
				role="dialog"
				aria-modal="true"
				aria-label="Consentimento de Cookies"
				onClick={(e) => e.stopPropagation()}
			>
				<Title>Consentimento de Cookies</Title>
				<Description>
					Usamos cookies para melhorar sua experiência. Cookies essenciais são necessários para o funcionamento.
					Os demais (ex.: estatística e marketing) só serão ativados com seu consentimento.
				</Description>

				<Actions>
					<AcceptButton type="button" variant="solid" onClick={() => choose("accepted")}>
						Aceitar
					</AcceptButton>
					<RejectButton type="button" variant="outline" onClick={() => choose("rejected")}>
						Recusar
					</RejectButton>
				</Actions>

				<FooterNote>
					* Em caso de dúvidas, consulte nossa <Link href="/politicas/privacidade">Política de Privacidade </Link>
					e a <Link href="/politicas/cookies"> Política de Cookies</Link>.
				</FooterNote>
			</Modal>
		</>,
		portalTarget
	);
}
