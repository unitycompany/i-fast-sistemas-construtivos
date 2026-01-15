"use client";
import { useCallback, useEffect, useRef } from "react";
import Text from "../ui/Text";
import Input from "./Input";
import { CheckIcon, EnvelopeIcon, PhoneCallIcon, User } from "@phosphor-icons/react";
import Button from "../ui/Button";
import styled from "@emotion/styled";
import { ChecksIcon, SealCheckIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

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
        max-width: 420px;
        padding: 24px;
        border-radius: 32px;
        background-color: var(--color-bg);
        border: 6px solid #f5f5f5;

        & .form__title {
            font-size: 28px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 28px;
            }
        }

        & > aside {
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
                        font-size: 14px;
                        line-height: 1;
                    }
                }
            }
        }

        & > div {
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
    }

`

export default function ContactConversionFormPopup() {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

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
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Text as="h1" className="form__title">Entrar em contato</Text>

                <aside>
                    <Input className="form__input" type="text" id="name" placeholder="Deigite seu nome..." icon={User} />
                    <Input className="form__input" type="email" id="email" placeholder="Qual seu melhor e-mail?" icon={EnvelopeIcon} />
                    <Input className="form__input" type="tel" id="tel" placeholder="Por fim, seu WhatsApp" icon={PhoneCallIcon} />
                </aside>

                <div className="form__privacy-policy">
                    <span className="form__checkbox">
                        <input type="checkbox" id="privacy_policy_agreement" required />
                        <CheckIcon className="form__checkbox-icon" weight="bold" />
                    </span>
                    <Text as="p">
                         Ao selecionar esse campo, você declara que concorda com a nossa <a href="/politica-de-privacidade">política de privacidade</a> e{" "}
                        <a href="/termos-de-uso">termos de uso</a>.
                    </Text>
                </div>

                <div className="form__buttons">
                    <Button type="submit" id="submit_contact_form">
                        Enviar formulário
                    </Button>
                </div>
            </form>
        </Container>
    );
}
