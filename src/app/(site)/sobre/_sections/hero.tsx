"use client";
import Button from "@/components/ui/Button";
import PublicImage from "@/components/ui/PublicImage";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";

const HeroContainer = styled.section`
    width: 100%;
    padding: 144px 24px 48px 24px;
    min-height: 640px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;

    @media (max-width: 768px) {
        padding: 144px 0 48px 0;
        justify-content: flex-end;
        align-items: flex-end;
        min-height: 90vh;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -20px;
        width: calc(100% + 40px);
        height: 100%;
        background-image: url('/others/convencao-da-fast-sistemas-construtivos.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        border-radius: 24px;

        @media (max-width: 768px) {
            background-image: url('/others/convencao-da-fast-sistemas-construtivos-vertical.jpg');
        }
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -20px;
        width: calc(100% + 40px);
        height: 100%;
        background: linear-gradient(200deg, rgba(0, 0, 0, 0.00) 30%, #000 80%);
        border-radius: 24px;
        z-index: 0;

        @media (max-width: 768px) {
            background: linear-gradient(200deg, rgba(0, 0, 0, 0.00) 0%, #000 90%);    
        }
    }

    & .hero__content {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
            width: 100%;    
            gap: 24px;
        }

        &-image {
            width: 200px;
            height: auto;
            object-fit: contain;

            @media (max-width: 768px) {
                width: 150px;
            }
        }

        &-title {
            font-size: 48px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-bg);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 28px;
            }
        }

        &-description {
            font-size: 18px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.5px;
            color: var(--color-muted-white);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 16px;
            }
        }

        &-div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            width: 100%;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 24px;
            }

            &-button {
                --btn-color: var(--color-bg);
                --btn-on: var(--color-dark);
            }

            &-persons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;

                @media (max-width: 768px) {
                    gap: 12px;
                }

                & ul {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                    width: calc(42px + 45px);

                    & li {
                        border: 2px solid var(--color-dark);
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                        overflow: hidden;
                        position: absolute;

                        & img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                        &:nth-of-type(2) {
                            left: 15px;
                        }
                        &:nth-of-type(3) {
                            left: 30px;
                        }
                        &:nth-of-type(4) {
                            left: 45px;
                        }
                    }
                }

                &-texts{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 0px;

                    & > span {
                        font-size: 16px;
                        font-weight: 500;
                        color: var(--color-bg);
                        letter-spacing: -0.5px;

                        @media (max-width: 768px) {
                            font-size: 14px;
                        }
                    }

                    & > span:last-of-type {
                        font-size: 14px;
                        font-weight: 300;
                        color: var(--color-muted-white);

                        @media (max-width: 768px) {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
`

export default function HeroSection() {
    return <HeroContainer>
        <main className="hero__content">
            <PublicImage src="/logo-fast-sistemas-construtivos-white.svg" alt="Logo Fast Sistemas Construtivos" className="hero__content-image" />
            <Text as="h1" className="hero__content-title">
                A maior empresa de construção a seco do Brasil 
            </Text>
            <Text as="p" className="hero__content-description">
                Aqui na Fast você encontra todos os produtos com os melhores preços, ideal para você que tem obra pra fazer meu amigo.
            </Text>
            <div className="hero__content-div">    
                <Button className="hero__content-div-button" variant="solid">
                    Entrar em contato
                </Button>
                <aside className="hero__content-div-persons">
                    <ul>
                        <li>
                            <PublicImage src="/others/cliente-fast-sistemas-construtivos-1.jpg" alt="Cliente Fast Sistemas Construtivos" className="hero__content-div-persons-image" />
                        </li>
                        <li>
                            <PublicImage src="/others/cliente-fast-sistemas-construtivos-2.jpg" alt="Cliente Fast Sistemas Construtivos" className="hero__content-div-persons-image" />
                        </li>
                        <li>
                            <PublicImage src="/others/cliente-fast-sistemas-construtivos-3.jpg" alt="Cliente Fast Sistemas Construtivos" className="hero__content-div-persons-image" />
                        </li>
                        <li>
                            <PublicImage src="/others/cliente-fast-sistemas-construtivos-4.jpg" alt="Cliente Fast Sistemas Construtivos" className="hero__content-div-persons-image" />
                        </li>
                    </ul>
                    <div className="hero__content-div-persons-texts">
                        <Text as="span">
                            + de 2 Milhões de clientes atendidos
                        </Text>
                        <Text as="span">
                            Venha para a Fast você também!
                        </Text>
                    </div>

                </aside>
            </div>
        </main>
    </HeroContainer>
}