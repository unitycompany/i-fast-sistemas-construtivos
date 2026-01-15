"use client";

import styled from "@emotion/styled";
import Text from "../ui/Text";
import Input from "../forms/Input";
import { ArticleIcon, BracketsSquareIcon, BrowserIcon, BuildingOfficeIcon, CheckerboardIcon, EarSlashIcon, EnvelopeIcon, EnvelopeOpenIcon, FacebookLogoIcon, GlobeHemisphereEastIcon, HouseLineIcon, InstagramLogoIcon, LinkedinLogoIcon, MapTrifoldIcon, OptionIcon, PaintRollerIcon, PhoneIcon, SpeakerSimpleHighIcon, StarFourIcon, TrophyIcon, WarehouseIcon, WhatsappLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Button from "../ui/Button";
import Image from "next/image";
import Icon from "../icons/Icon";

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
                background-color: var(--color-surface);
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
            border: 1px solid var(--color-gray-surface);
            background-color: var(--color-dark);
            color: var(--color-gray-surface);
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

export default function Footer() {
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
                    <Button className="franchising__button">
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
            <div className="newsletter__form">
                <Input 
                    type="email" 
                    placeholder="Digite seu e-mail..." 
                    id="newsletter-email"
                    icon={EnvelopeIcon}
                />
                <Button
                    className="newsletter__button"
                    type="submit"
                    id="newsletter-submit"
                >
                    Enviar
                </Button>
            </div>
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
            </main>
        </Navegation>
        <div className="line"></div>
        <Policies>
            <Text as="p" className="policies__copyright">
                © 2025 Fast Sistemas Construtivos. Todos os direitos reservados.
            </Text>
            <Text as="p" className="policies__terms">
                Acesse nossa <a href="" target="_blank">Política de Privacidade</a>, <a href="" target="_blank">Termos de Uso</a> e a nossa <a href="" target="_blank">Política de Cookies</a>.
            </Text>
        </Policies>
    </FooterContainer>
}