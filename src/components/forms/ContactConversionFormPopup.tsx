"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Text from "../ui/Text";
import Input from "./Input";
import { CheckIcon, EnvelopeIcon, PhoneCallIcon, User } from "@phosphor-icons/react";
import Button from "../ui/Button";
import styled from "@emotion/styled";
import { CheckIcon as CheckIconSSR, XIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";

const OPEN_EVENT = "contact-popup:open";

export function openContactConversionPopup() {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

const Container = styled.dialog`
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    &[open] {
        display: flex;
    }

    &::backdrop {
        background: rgba(0, 0, 0, 0.2);
    }

    & .close {
        position: absolute;
        top: 28px;
        right: 28px;
        cursor: pointer;
        padding: 6px;
        border: 4px solid #f5f5f5;
        border-radius: 99px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            top: 28px;
            right: 28px;
        }

        & svg {
            width: 14px;
            height: 14px;
        }
    }

    & > form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 32px;
        width: min(420px, calc(100vw - 48px));
        max-width: 420px;
        min-height: min(420px, calc(100vh - 160px));
        padding: 24px;
        border-radius: 32px;
        background-color: var(--color-bg);
        border: 6px solid #f5f5f5;

        @media (max-width: 768px) {
            padding: 22px;
            gap: 14px!important;
            min-height: auto;
        }

        & .form__step {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 32px;

            @media (max-width: 768px) {
                gap: 26px!important;
            }
        }

        & .form__title {
            font-size: 28px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 24px;
                margin-bottom: 8px;
            }
        }

        & > aside,
        & .form__step > aside {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            flex-direction: column;

            & .form__input {
                width: 100%;

                & > input {
                    &::placeholder {
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 1;
                    }
                }
            }
        }

        & > div,
        & .form__step > div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        & .form__privacy-policy {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;

            & .form__checkbox {
                position: relative;
                width: 22px;
                height: 22px;
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            & #privacy_policy_agreement {
                appearance: none;
                -webkit-appearance: none;
                width: 22px;
                height: 22px;
                border-radius: 8px;
                border: 1px solid var(--color-dark);
                background-color: transparent;
                display: inline-block;
                cursor: pointer;
                position: absolute;
                inset: 0;

                &:checked {
                    background-color: var(--color-dark);
                }

                &:focus-visible {
                    outline: 1px solid color-mix(in oklab, var(--color-dark), transparent 70%);
                    outline-offset: 2px;
                }
            }

            & .form__checkbox-icon {
                position: relative;
                width: 12px;
                height: 12px;
                opacity: 0;
                pointer-events: none;
                color: var(--color-bg);
            }

            & #privacy_policy_agreement:checked + .form__checkbox-icon {
                opacity: 1;
            }

            & > p {
                font-size: 12px;
                line-height: 120%;
                font-weight: 300;
                letter-spacing: -0.5px;
                color: var(--color-muted);

                & > a {
                    color: var(--color-dark);
                    text-decoration: underline;

                    &:hover {
                        color: var(--color-link);
                    }
                }
            }
        }

        & .form__buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;

            & #submit_contact_form {
                width: 100%;
            }
        }

        & .form__feedback {
            width: 100%;
            min-height: 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-align: center;

            & .feedback__icon {
                width: 38px;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;

                & svg {
                    width: 26px;
                    height: 26px;
                }
            }

            & .feedback__spinner {
                width: 20px;
                height: 20px;
                border-radius: 999px;
                border: 6px solid #f5f5f5;
                border-top-color: var(--color-dark);
                animation: spin 0.9s linear infinite;
            }

            & .feedback__text {
                font-size: 14px;
                line-height: 1.2;
                font-weight: 300;
                letter-spacing: -0.4px;
                color: var(--color-muted);
                font-family: var(--font-alt);
            }
        }
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
        & .feedback__spinner {
            animation: none;
        }
    }

`

type ContactSubmitState = "form" | "loading" | "success" | "error";

function formatBrPhoneWithFixedCountry(input: string) {
    // Keeps +55 fixed and formats as: +55 (21) 98765-4321
    let digits = input.replace(/\D/g, "");
    if (digits.startsWith("55")) digits = digits.slice(2);
    digits = digits.slice(0, 11);

    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);

    if (!ddd) return "+55";
    if (!rest) return `+55 (${ddd})`;

    const isMobile = rest.length > 8;
    const first = isMobile ? rest.slice(0, 5) : rest.slice(0, 4);
    const second = isMobile ? rest.slice(5, 9) : rest.slice(4, 8);
    const formattedNumber = second ? `${first}-${second}` : first;

    return `+55 (${ddd}) ${formattedNumber}`;
}

export default function ContactConversionFormPopup() {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [submitState, setSubmitState] = useState<ContactSubmitState>("form");
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telDigits, setTelDigits] = useState("");

    const CONTACT_LOADING_MIN_MS = 2000;
    const CONTACT_SUCCESS_VISIBLE_MS = 2000;

    const isValid = useMemo(() => {
        const trimmedEmail = email.trim();
        const looksLikeEmail = /.+@.+\..+/.test(trimmedEmail);
        // DDD + number (10 or 11 digits; WhatsApp usually 11)
        return name.trim().length > 1 && looksLikeEmail && telDigits.trim().length >= 10;
    }, [name, email, telDigits]);

    const lockBodyScroll = useCallback(() => {
        if (typeof document === "undefined") return;
        document.body.style.overflow = "hidden";
    }, []);

    const unlockBodyScroll = useCallback(() => {
        if (typeof document === "undefined") return;
        document.body.style.overflow = "";
    }, []);

    const open = useCallback(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (dialog.open) return;
        lockBodyScroll();
        dialog.showModal();
    }, [lockBodyScroll]);

    const close = useCallback(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (!dialog.open) return;
        dialog.close();
        unlockBodyScroll();

        setSubmitState("form");
        setSubmitError(null);
    }, [unlockBodyScroll]);

    useEffect(() => {
        const dialog = dialogRef.current;
        const handleOpenEvent = () => open();
        const handleDialogClose = () => unlockBodyScroll();

        window.addEventListener(OPEN_EVENT, handleOpenEvent);
        dialog?.addEventListener("close", handleDialogClose);
        dialog?.addEventListener("cancel", handleDialogClose);
        return () => {
            window.removeEventListener(OPEN_EVENT, handleOpenEvent);
            dialog?.removeEventListener("close", handleDialogClose);
            dialog?.removeEventListener("cancel", handleDialogClose);
        };
    }, [open, unlockBodyScroll]);

    return (
        <Container
            ref={dialogRef}
            id="contactForm"
            onClick={(e) => {
                if (e.target === dialogRef.current) close();
            }}
        >
            <div
                className="close"
                role="button"
                tabIndex={0}
                aria-label="Fechar"
                onClick={(e) => {
                    e.stopPropagation();
                    close();
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        close();
                    }
                }}
            >
                <XIcon />
            </div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();

                    if (submitState === "loading") return;

                    if (!isValid) {
                        setSubmitError("Verifique nome, e-mail e WhatsApp.");
                        setSubmitState("error");
                        return;
                    }

                    setSubmitError(null);
                    setSubmitState("loading");
                    const startedAt = performance.now();

                    try {
                        // Placeholder behavior (replace with real API later)
                        await new Promise((r) => setTimeout(r, 900));
                        const elapsed = performance.now() - startedAt;
                        const remaining = Math.max(0, CONTACT_LOADING_MIN_MS - elapsed);
                        if (remaining > 0) {
                            await new Promise((r) => setTimeout(r, remaining));
                        }

                        setSubmitState("success");
                        await new Promise((r) => setTimeout(r, CONTACT_SUCCESS_VISIBLE_MS));

                        setName("");
                        setEmail("");
                        setTelDigits("");
                        close();
                    } catch (err) {
                        const message = err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.";
                        setSubmitError(message);
                        setSubmitState("error");
                    }
                }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {submitState === "form" ? (
                        <motion.div
                            key="form"
                            className="form__step"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                        >
                            <Text as="h1" className="form__title">Entrar em contato</Text>

                            <aside>
                                <Input
                                    className="form__input"
                                    type="text"
                                    id="name"
                                    placeholder="Digite seu nome..."
                                    icon={User}
                                    value={name}
                                    onChange={(e) => setName(e.currentTarget.value)}
                                />
                                <Input
                                    className="form__input"
                                    type="email"
                                    id="email"
                                    placeholder="Qual seu melhor e-mail?"
                                    icon={EnvelopeIcon}
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                />
                                <Input
                                    className="form__input"
                                    type="tel"
                                    id="tel"
                                    name="tel"
                                    placeholder="(21) 98765-4321"
                                    icon={PhoneCallIcon}
                                    inputMode="numeric"
                                    autoComplete="tel"
                                    value={formatBrPhoneWithFixedCountry(telDigits)}
                                    onChange={(e) => {
                                        const nextDigits = e.currentTarget.value.replace(/\D/g, "").replace(/^55/, "").slice(0, 11);
                                        setTelDigits(nextDigits);
                                    }}
                                />
                            </aside>

                            <div className="form__privacy-policy">
                                <span className="form__checkbox">
                                    <input type="checkbox" id="privacy_policy_agreement" required />
                                    <CheckIcon className="form__checkbox-icon" weight="bold" />
                                </span>
                                <Text as="p">
                                    Ao selecionar esse campo, você declara que concorda com a nossa <a href="/politicas/privacidade">política de privacidade</a> e{" "}
                                    <a href="/politicas/termos">termos de uso</a>.
                                </Text>
                            </div>

                            <div className="form__buttons">
                                <Button type="submit" id="submit_contact_form" disabled={!isValid}>
                                    Enviar formulário
                                </Button>
                            </div>
                        </motion.div>
                    ) : null}

                    {submitState === "loading" ? (
                        <motion.div
                            key="loading"
                            className="form__feedback"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                        >
                            <div className="feedback__icon" aria-hidden="true">
                                <span className="feedback__spinner" />
                            </div>
                            <Text as="p" className="feedback__text">2 segundos, estamos validando<br />suas informações</Text>
                        </motion.div>
                    ) : null}

                    {submitState === "success" ? (
                        <motion.div
                            key="success"
                            className="form__feedback"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                        >
                            <div className="feedback__icon" aria-hidden="true">
                                <CheckIconSSR weight="bold" />
                            </div>
                            <Text as="p" className="feedback__text">Enviado com sucesso!</Text>
                        </motion.div>
                    ) : null}

                    {submitState === "error" ? (
                        <motion.div
                            key="error"
                            className="form__feedback"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                        >
                            <div className="feedback__icon" aria-hidden="true">
                                <XIcon />
                            </div>
                            <Text as="p" className="feedback__text">{submitError ?? "Não foi possível enviar. Tente novamente."}</Text>
                            <div className="form__buttons" style={{ justifyContent: "center", marginTop: 8 }}>
                                <Button type="button" variant="solid" onClick={() => setSubmitState("form")}>Tentar novamente</Button>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </form>
        </Container>
    );
}
