"use client";

import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import Text from "../ui/Text";
import Input from "../forms/Input";
import { ArticleIcon, BracketsSquareIcon, BrowserIcon, BuildingOfficeIcon, CheckerboardIcon, EarSlashIcon, EnvelopeIcon, EnvelopeOpenIcon, FacebookLogoIcon, GlobeHemisphereEastIcon, HouseLineIcon, InstagramLogoIcon, LinkedinLogoIcon, MapTrifoldIcon, OptionIcon, PaintRollerIcon, PhoneIcon, SpeakerSimpleHighIcon, StarFourIcon, StorefrontIcon, TrophyIcon, WarehouseIcon, WhatsappLogoIcon, YoutubeLogoIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import Button from "../ui/Button";
import Image from "next/image";
import Icon from "../icons/Icon";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, XCircleIcon } from "@phosphor-icons/react/dist/ssr";

import Logo from "../../../public/logo-fast-sistemas-construtivos.svg";
import Franshising from "../../../public/franchising/fachada-de-uma-franquia-da-fast-sistemas-construtivos.png";
import LogoWhite from "../../../public/icon-fast-sistemas-construtivos-white.svg";

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
    }

    & .line {
        width: 100%;
        height: 1px;
        background-color: var(--color-dark);
        opacity: 0.2;
    }
`

const Franchising = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--color-dark);
    padding: 4px; 
    border-radius: 22px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 6px;
        border-radius: 32px;
    }

    & .franchising__image {
        border-radius: 20px 0 0 20px;
        width: 50%;
        height: auto;
        position: relative;
        z-index: 1;
        border-right: 2px solid var(--color-bg);

        @media (max-width: 768px) {
            width: 100%;
            height: 50%;
            border-radius: 26px 26px 0 0;
            border-right: none;
            border-bottom: 2px solid var(--color-bg);
        }
    }

    & .franchising__absolute-logo {
        width: 82px;
        height: 82px;
        border-radius: 50%;
        background-color: var(--color-dark);
        border: 2px solid var(--color-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;

        @media (max-width: 768px) {
            top: 36%;
            width: 62px;
            height: 62px;
        }

        & > img {
            width: 48px;
            height: auto;

            @media (max-width: 768px) {
                width: 36px;
            }
        }
    }

    & .franchising__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 22px;
        width: 50%;
        padding: 24px 48px 24px 62px;

        @media (max-width: 768px) {
            width: 100%;
            height: 50%;
            padding: 48px 16px 16px 16px;
        }

        & .franchising__badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            @media (max-width: 768px) {
                gap: 16px;
            }

            & .franchising__icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 10px;
                background-color: #ffffff10;
                border: 1px solid #ffffff20;

                @media (max-width: 768px) {
                    width: 36px;
                    height: 36px;
                }

                & > svg {
                    width: 18px;
                    height: 18px;
                    color: #ffffff;
                    fill: #ffffff;

                    @media (max-width: 768px) {
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            & .franchising__badge-text {
                font-size: 14px;
                font-weight: 200;
                font-family: var(--font-body);
                color: var(--color-muted-white);

                @media (max-width: 768px) {
                    font-size: 12px;
                }

                & > strong {
                    color: var(--color-surface);
                    font-weight: 400;
                }
            }
        }

        & .franchising__content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;

            & .franchising__title {
                color: var(--color-surface);
                font-size: 26px;
                font-family: var(--font-body);
                letter-spacing: -1px;
                font-weight: 500;
                line-height: 1.2;

                @media (max-width: 768px) {
                    font-size: 22px;
                }
            }

            & .franchising__description {
                color: var(--color-muted-white);
                font-size: 16px;
                font-family: var(--font-display);
                font-weight: 400;
            }

            & .franchising__button {
                --btn-color: var(--color-surface);
                --btn-on: var(--color-dark);
                font-weight: 500;
                margin-top: 8px;
            }
        }
    }
`

const Newsletter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    gap: 48px;
    margin: 32px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }

    & .newsletter__wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 2px;

        @media (max-width: 768px) {
            width: 100%;
        }

        & .newsletter__title {
            font-size: 32px;
            font-family: var(--font-body);
            letter-spacing: -2px;
            color: var(--color-fg);
            font-weight: 600;

            @media (max-width: 768px) {
                font-size: 24px;
                letter-spacing: -1px;
            }
        }

        & .newsletter__description {
            font-size: 16px;
            font-family: var(--font-display);
            color: var(--color-muted);
            line-height: 1.2;

            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }

    & .newsletter__form {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;

        @media (max-width: 768px) {
            width: 100%;
            justify-content: flex-start;
        }

        & .newsletter__button {
            --btn-color: var(--color-dark);
            --btn-on: var(--color-gray-surface);
        }
    }
`

const Navegation = styled.aside`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    margin: 32px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }

    & .navegation__company {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;
        width: 30%;

        @media (max-width: 768px) {
            width: 100%;
            gap: 16px;
        }

        & .navegation__image {
            width: 180px;
            height: auto;
        }

        & .navegation__slogan {
            font-size: 16px;
            font-family: var(--font-body);
            color: var(--color-fg);
        }

        & .navegation__socials {
            display: flex;
            flex-direction: row;
            list-style: none;
            gap: 8px;
            align-items: center;
            justify-content: center;

            & .navegation__social-item {
                border: 1px solid var(--color-fg);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--radius-all);
                transition: all 0.1s ease-out;

                &:hover {
                    background-color: var(--color-fg);
                    
                    & > a > svg {
                        color: var(--color-bg);
                        fill: var(--color-bg);
                    }
                }

                & > a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding: 6px;

                    & > svg {
                        width: 18px;
                        height: 18px;
                        color: var(--color-fg);
                        fill: var(--color-fg);
                        transition: all 0.1s ease-out;
                    }
                }
            }
        }
    }

    & .navegation__routes {
        width: 70%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 32px 16px;

        @media (max-width: 768px) {
            width: 100%;
            gap: 32px;
        }

        & .navegation__menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;
            width: calc(25% - 16px);

            @media (max-width: 768px) {
                width: calc(50% - 16px);
            }
            
            & .navegation__menu-title {
                font-size: 18px;
                font-weight: 700;
                font-family: var(--font-alt);
                letter-spacing: -0.6px;
                margin-bottom: 12px;

                @media (max-width: 768px) {
                    font-size: 16px;
                    margin-bottom: 8px;
                }
            }

            & .navegation__menu-link {
                display: flex;
                align-items: center;
                justify-content: center;

                & > a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    font-family: var(--font-display);
                    transition: all 0.1s ease;
                    width: 100%;
                    color: var(--color-muted);

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }

                    &:hover {
                        gap: 10px;
                        color: var(--color-dark);

                        & > svg {
                            fill: var(--color-dark);
                        }
                    }

                    & > svg {
                        width: 18px;
                        height: 18px;
                        transition: all 0.1s ease;

                        @media (max-width: 768px) {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
        }
    }
`

const Policies = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 16px;
    }

    & .policies__copyright {
        font-size: 14px;
        font-family: var(--font-alt);
        color: var(--color-lg);
    }

    & .policies__terms {
        font-size: 14px;
        font-family: var(--font-alt);
        color: var(--color-lg);

        & > a {
            color: var(--color-dark);
            font-weight: 600;
            text-decoration: underline;

            &:hover {
                color: var(--color-link);
            }
        }
    }
`

const NewsletterBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 2000;
`

const NewsletterModal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(560px, calc(100vw - 32px));
    background: var(--color-bg);
    border: 6px solid #f5f5f5;
    border-radius: 24px;
    box-shadow: var(--shadow-md);
    z-index: 2001;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    & .modal__step {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    & .modal__step--center {
        align-items: center;
        text-align: center;
    }

    & .modal__title {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.5px;
        line-height: 1.15;
        color: var(--color-dark);

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    & .modal__text {
        font-size: 14px;
        line-height: 1.35;
        color: var(--color-muted);
        font-family: var(--font-alt);

        @media (max-width: 768px) {
            font-size: 14px;
        }

        & a {
            color: var(--color-dark);
            font-weight: 500;
            text-decoration: underline;

            &:hover {
                color: var(--color-link);
            }
        }
    }

    & .modal__actions {
        display: flex;
        gap: 10px;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 12px;

        & > button {
            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
`

const NewsletterConfirmButton = styled(Button)`
    --btn-color: var(--color-dark);
    --btn-on: var(--color-bg);
`

const NewsletterCancelButton = styled(Button)`
    --btn-color: var(--color-dark);
    --btn-on: var(--color-bg);
`

const NewsletterFeedback = styled.div`
    width: 100%;
    min-height: 168px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;

    & .feedback__icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-dark);

        & svg {
            width: 28px;
            height: 28px;
        }
    }

    & .feedback__spinner {
        width: 18px;
        height: 18px;
        border-radius: 999px;
        border: 2px solid #f5f5f5;
        border-top-color: var(--color-dark);
        animation: spin 0.9s linear infinite;
    }

    & .feedback__text {
        font-size: 14px;
        line-height: 1.25;
        font-family: var(--font-alt);
        color: var(--color-muted);
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

type NewsletterModalState = "consent" | "loading" | "success" | "error";

export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [isNewsletterConsentOpen, setIsNewsletterConsentOpen] = useState(false);
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
    const [newsletterModalState, setNewsletterModalState] = useState<NewsletterModalState>("consent");
    const [newsletterError, setNewsletterError] = useState<string | null>(null);

    const NEWSLETTER_LOADING_MIN_MS = 2000;
    const NEWSLETTER_SUCCESS_VISIBLE_MS = 2000;

    const canSubmitNewsletter = useMemo(() => newsletterEmail.trim().length > 0, [newsletterEmail]);

    useEffect(() => {
        if (!isNewsletterConsentOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && newsletterModalState !== "loading") setIsNewsletterConsentOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isNewsletterConsentOpen, newsletterModalState]);

    useEffect(() => {
        if (!isNewsletterConsentOpen) return;
        setNewsletterModalState("consent");
        setNewsletterError(null);
    }, [isNewsletterConsentOpen]);

    useEffect(() => {
        if (!newsletterSubmitted) return;
        const t = window.setTimeout(() => setNewsletterSubmitted(false), 4500);
        return () => window.clearTimeout(t);
    }, [newsletterSubmitted]);

    const submitNewsletter = async (email: string) => {
        // Base implementation (replace with your real endpoint later)
        await new Promise((r) => setTimeout(r, 1100));
        const lowered = email.trim().toLowerCase();
        if (lowered.includes("fail") || lowered.includes("erro")) {
            throw new Error("Não foi possível concluir agora. Tente novamente.");
        }
    };

    return <FooterContainer>
        <Franchising>
            <Image className="franchising__image" src={Franshising} alt="" width={500} height={500} />
            <div className="franchising__absolute-logo">
                <Image src={LogoWhite} alt="Logotipo Fast Sistemas Construtivos" width={80} height={80} />
            </div>
            <article className="franchising__container">
                <div className="franchising__badge">
                    <div className="franchising__icon">
                        <TrophyIcon />
                    </div>
                    <Text as="span" className="franchising__badge-text">
                        Expandindo o <strong>Mercado com Inovação.</strong> Sua oportunidade de Investir!
                    </Text>
                </div>
                <div className="franchising__content">
                    <Text as="h2" className="franchising__title">
                        Somos a 1° Franqueadora de Drywall e Steel Frame do Brasil associada à ABF
                    </Text>
                    <Text as="p" className="franchising__description">
                        Com equipe altamente qualificada e mais de 25 anos de experiência, a Fast desenvolveu uma metodologia de trabalho de sucesso.
                    </Text>
                    <Button className="franchising__button" variant="solid">
                        Ser franqueado
                    </Button>
                </div>
            </article>
        </Franchising>
        <Newsletter>
            <div className="newsletter__wrapper">
                <Text as="h2" className="newsletter__title">
                    Fique por dentro
                </Text>
                <Text as="p" className="newsletter__description">
                    Cadastre o seu e-mail e receba novidades e promoções exclusivas.
                </Text>
            </div>
            <form
                className="newsletter__form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!canSubmitNewsletter) return;
                    setIsNewsletterConsentOpen(true);
                }}
            >
                <Input
                    type="email"
                    placeholder="Digite seu e-mail..."
                    id="newsletter-email"
                    name="newsletter-email"
                    autoComplete="email"
                    icon={EnvelopeIcon}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.currentTarget.value)}
                    required
                />
                <Button
                    className="newsletter__button"
                    type="submit"
                    id="newsletter-submit"
                    variant="solid"
                >
                    Enviar
                </Button>
            </form>
        </Newsletter>
        <div className="line"></div>
        <Navegation>
            <div className="navegation__company">
                <Image
                    className="navegation__image"
                    alt="Logotipo Fast Sistemas Construtivos"
                    src={Logo}
                    width={220}
                    height={60}
                />
                <Text as="p" className="navegation__slogan">
                    Inovação construtiva, confiança garantida.
                </Text>
                <ol className="navegation__socials">
                    <li className="navegation__social-item">
                        <a href="" target="_blank">
                            <FacebookLogoIcon />
                        </a>
                    </li>
                    <li className="navegation__social-item">
                        <a href="" target="_blank">
                            <InstagramLogoIcon />
                        </a>
                    </li>
                    <li className="navegation__social-item">
                        <a href="" target="_blank">
                            <YoutubeLogoIcon />
                        </a>
                    </li>
                    <li className="navegation__social-item">
                        <a href="" target="_blank">
                            <LinkedinLogoIcon />
                        </a>
                    </li>
                </ol>
            </div>
            <main className="navegation__routes">
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Steel Frame
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={HouseLineIcon}
                            />
                            Residencial
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={BuildingOfficeIcon}
                            />
                            Comercial
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={OptionIcon}
                            />
                            Telhados e Lajes
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Drywall
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={BracketsSquareIcon}
                            />
                            Forros
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={BrowserIcon}
                            />
                            Paredes
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={CheckerboardIcon}
                            />
                            Complementos
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Acústica
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={SpeakerSimpleHighIcon}
                            />
                            Forros acústicos
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={EarSlashIcon}
                            />
                            Tratamento de acústica
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Sistemas
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={PaintRollerIcon}
                            />
                            Obras
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={MapTrifoldIcon}
                            />
                            Franquia
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={GlobeHemisphereEastIcon}
                            />
                            Lojas
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Casas
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={WarehouseIcon}
                            />
                            Casas Pré Fabricadas
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Aprendizado
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={ArticleIcon}
                            />
                            Blog
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Contato
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={WhatsappLogoIcon}
                            />
                            WhatsApp
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={PhoneIcon}
                            />
                            +55 (24) 98191-1292
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="" target="_blank">
                            <Icon 
                                svg={EnvelopeOpenIcon}
                            />
                            E-mail
                        </a>
                    </li>
                </ol>
                <ol className="navegation__menu">
                    <Text as="h6" className="navegation__menu-title">
                        Explore
                    </Text>
                    <li className="navegation__menu-link">
                        <a href="/lojas" target="_blank">
                            <Icon 
                                svg={StorefrontIcon}
                            />
                            Nossas Lojas
                        </a>
                    </li>
                    <li className="navegation__menu-link">
                        <a href="/sobre" target="_blank">
                            <Icon 
                                svg={BookOpenIcon}
                            />
                            Sobre a Fast
                        </a>
                    </li>
                </ol>
            </main>
        </Navegation>
        <div className="line"></div>
        <Policies>
            <Text as="p" className="policies__copyright">
                © 2025 Fast Sistemas Construtivos. Todos os direitos reservados.
            </Text>
            <Text as="p" className="policies__terms">
                Acesse nossa <Link href="/politicas/privacidade">Política de Privacidade</Link>, <Link href="/politicas/termos">Termos de Uso</Link> e a nossa <Link href="/politicas/cookies">Política de Cookies</Link>.
            </Text>
        </Policies>

        {isNewsletterConsentOpen ? (
            <>
                <NewsletterBackdrop onClick={() => {
                    if (newsletterModalState === "loading") return;
                    setIsNewsletterConsentOpen(false);
                }} />
                <NewsletterModal
                    role="dialog"
                    aria-modal="true"
                    aria-label="Consentimento para newsletter"
                    onClick={(e) => e.stopPropagation()}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {newsletterModalState === "consent" ? (
                            <motion.div
                                key="consent"
                                className="modal__step"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                            >
                                <Text as="h3" className="modal__title">
                                    Confirme e receba novidades da Fast
                                </Text>
                                <Text as="p" className="modal__text">
                                    Ao prosseguir, você confirma que leu e concorda com a nossa{" "}
                                    <Link href="/politicas/privacidade">Política de Privacidade</Link>, os{" "}
                                    <Link href="/politicas/termos">Termos de Uso</Link> e a{" "}
                                    <Link href="/politicas/cookies">Política de Cookies</Link>.
                                </Text>
                                <div className="modal__actions">
                                    <NewsletterConfirmButton
                                        type="button"
                                        variant="solid"
                                        onClick={async () => {
                                            setNewsletterError(null);
                                            setNewsletterModalState("loading");
                                            const startedAt = performance.now();
                                            try {
                                                await submitNewsletter(newsletterEmail);
                                                const elapsed = performance.now() - startedAt;
                                                const remaining = Math.max(0, NEWSLETTER_LOADING_MIN_MS - elapsed);
                                                if (remaining > 0) {
                                                    await new Promise((r) => setTimeout(r, remaining));
                                                }
                                                setNewsletterModalState("success");
                                                setNewsletterSubmitted(true);
                                                window.setTimeout(() => {
                                                    setIsNewsletterConsentOpen(false);
                                                    setNewsletterEmail("");
                                                }, NEWSLETTER_SUCCESS_VISIBLE_MS);
                                            } catch (err) {
                                                const message = err instanceof Error ? err.message : "Não foi possível concluir agora.";
                                                setNewsletterError(message);
                                                setNewsletterModalState("error");
                                            }
                                        }}
                                    >
                                        Concordo e enviar
                                    </NewsletterConfirmButton>
                                    <NewsletterCancelButton
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsNewsletterConsentOpen(false)}
                                    >
                                        Cancelar
                                    </NewsletterCancelButton>
                                </div>
                            </motion.div>
                        ) : null}

                        {newsletterModalState === "loading" ? (
                            <motion.div
                                key="loading"
                                className="modal__step modal__step--center"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                            >
                                <NewsletterFeedback>
                                    <div className="feedback__icon" aria-hidden="true">
                                        <span className="feedback__spinner" />
                                    </div>
                                    <Text as="p" className="feedback__text">
                                        1 segundo, estamos validando<br />suas informações
                                    </Text>
                                </NewsletterFeedback>
                            </motion.div>
                        ) : null}

                        {newsletterModalState === "success" ? (
                            <motion.div
                                key="success"
                                className="modal__step modal__step--center"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                            >
                                <NewsletterFeedback>
                                    <div className="feedback__icon" aria-hidden="true">
                                        <CheckIcon weight="bold" />
                                    </div>
                                    <Text as="p" className="feedback__text">Perfeito, enviado com sucesso!</Text>
                                </NewsletterFeedback>
                            </motion.div>
                        ) : null}

                        {newsletterModalState === "error" ? (
                            <motion.div
                                key="error"
                                className="modal__step"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
                            >
                                <NewsletterFeedback>
                                    <div className="feedback__icon" aria-hidden="true">
                                        <XCircleIcon />
                                    </div>
                                    <Text as="p" className="feedback__text">{newsletterError ?? "Teve um erro, tente novamente"}</Text>
                                </NewsletterFeedback>
                                <div className="modal__actions" style={{ marginTop: 4 }}>
                                    <NewsletterConfirmButton
                                        type="button"
                                        variant="solid"
                                        onClick={() => setNewsletterModalState("consent")}
                                    >
                                        Tentar novamente
                                    </NewsletterConfirmButton>
                                    <NewsletterCancelButton
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsNewsletterConsentOpen(false)}
                                    >
                                        Fechar
                                    </NewsletterCancelButton>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </NewsletterModal>
            </>
        ) : null}

        {newsletterSubmitted ? (
            <Text as="p" className="policies__terms" style={{ paddingBottom: 12 }}>
                Inscrição registrada. Você pode cancelar a qualquer momento.
            </Text>
        ) : null}
    </FooterContainer>
}