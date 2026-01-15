"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import ImageEcosystemDesktop from "../../../../../public/ecosystem/mapa-ecosystem-fast-sistemas-construtivos-desktop.jpg";
import ImageEcosystemMobile from "../../../../../public/ecosystem/mapa-ecosystem-fast-sistemas-construtivos-mobile.jpg";
import PublicImage from "@/components/ui/PublicImage";

const EcosystemSectionContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 96px 0;

    @media (max-width: 768px) {
        padding: 48px 0;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
    }
    
        & .map {
                position: relative;
                width: 100%;
                height: auto;
                overflow: visible;
        }

        & .map > picture {
        display: block;
        width: 100%;
    }

        & .map > picture > img {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: center;
    }

        & .hotspot {
                position: absolute;
                z-index: 2;
            cursor: pointer;
            box-sizing: border-box;
        }

        & .hotspot__tooltip {
                position: absolute;
                top: calc(100% + 10px);
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--color-bg);
                border: 1px solid var(--color-border);
                border-radius: 16px;
                display: flex;
                padding: 4px;
                width: auto;
                color: var(--color-fg);
                font-family: var(--font-body);
            opacity: 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) ;
            gap: 12px;
            visibility: hidden;
            pointer-events: none;
            transform: translateX(-50%) translateY(8px);
            transition:
                opacity var(--dur-normal) var(--ease-standard) .2s,
                transform var(--dur-normal) var(--ease-standard) .2s,
                visibility 0s linear calc(.2s + var(--dur-normal));
                z-index: 3;
        }

        & .hotspot__media {
            display: flex;
            align-items: center;
            justify-content: center;

            & > img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 12px;
            }
        }

        & .hotspot__content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            width: 180px;
            gap: 4px;
            padding: 4px 0;
            
            & .hotspot__title {
                font-size: 20px;
                font-weight: 500;
                letter-spacing: -1.5px;
            }

            & .hotspot__desc {
                font-size: 14px;
                color: var(--color-muted);
                line-height: 1.2;
            }

            & .hotspot__cta {
                width: 100%;
                text-align: center;
                font-size: 16px;
                background-color: var(--color-dark);
                padding: 8px;
                border-radius: 12px;
                color: var(--color-bg);
                font-family: var(--font-body);
                letter-spacing: -1px;
            }
        }

        /* Desktop only: abre e fecha apenas por hover */
        @media (hover: hover) and (pointer: fine) {
                & .hotspot:hover .hotspot__tooltip {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        transform: translateX(-50%) translateY(0);
                        transition:
                    opacity var(--dur-normal) var(--ease-standard) 0s,
                    transform var(--dur-normal) var(--ease-standard) 0s,
                                visibility 0s;
                }
        }

        @media (max-width: 768px) {
                & .hotspot {
                        display: none;
                }

                & .hotspot__tooltip {
                        min-width: 200px;
                }
        }
`

export default function EcosystemSection() {
    const hotspots = [
        {
            id: "nova-metalica",
            left: 4,
            top: 8,
            width: 30,
            height: 30,
            title: "Nova Metálica",
            description: "Aço leve direto da fábrica com os melhores preços.",
            image: "/others/nova_m.avif",
            href: "/",
            cta: "Saiba mais",
        },
        {
            id: "unity",
            left: 30,
            top: 68,
            width: 16,
            height: 26,
            title: "Unity Company",
            description: "Inteligência e tráfego gerando demanda real.",
            image: "/others/unity_company.jpeg",
            href: "/",
            cta: "Ver detalhes",
        },
        {
            id: "fast-franquias",
            left: 63,
            top: 8,
            width: 33,
            height: 28,
            title: "Fast Franquias",
            description: "Mais de 50 unidades da Fast pelo Brasil.",
            image: "/franchising/fachada-de-uma-franquia-da-fast-sistemas-construtivos.png",
            href: "/",
            cta: "Conhecer",
        },
        {
            id: "fast-sistemas",
            left: 38,
            top: 36,
            width: 30,
            height: 28,
            title: "Fast Sistemas",
            description: "Líder do mercado de construção a seco.",
            image: "/others/loja-da-fast-sistemas-construtivos.png",
            href: "/",
            cta: "Saiba mais",
        },
        {
            id: "steel-conecta",
            left: 8,
            top: 52,
            width: 22,
            height: 30,
            title: "Steel Conecta",
            description: "Faça parte do ecossistema Fast agora mesmo.",
            image: "/others/steel_conecta.avif",
            href: "/",
            cta: "Abrir",
        },
        {
            id: "fast-homes",
            left: 70,
            top: 58,
            width: 26,
            height: 36,
            title: "Fast Homes",
            description: "Do projeto às chaves, sua casa está aqui!.",
            image: "/others/fast_homes.avif",
            href: "/",
            cta: "Ver",
        },
    ] as const;

    return <EcosystemSectionContainer>
        <div className="map">
            <picture>
                    <source media="(max-width: 768px)" srcSet={ImageEcosystemMobile.src} />
                    <Image
                            src={ImageEcosystemDesktop}
                            alt="Mapa do Ecossistema Fast Sistemas Construtivos"
                            priority
                    />
            </picture>

            {hotspots.map((hotspot) => (
                <div
                    key={hotspot.id}
                    className="hotspot"
                    style={{
                        left: `${hotspot.left}%`,
                        top: `${hotspot.top}%`,
                        width: `${hotspot.width}%`,
                        height: `${hotspot.height}%`,
                    }}
                >
                    <div className="hotspot__tooltip" role="tooltip">
                        <div className="hotspot__media">
                            <PublicImage
                                src={hotspot.image}
                                alt={hotspot.title}
                            />
                        </div>
                        <div className="hotspot__content">
                            <p className="hotspot__title">{hotspot.title}</p>
                            <p className="hotspot__desc">{hotspot.description}</p>
                            <Link className="hotspot__cta" href={hotspot.href}>{hotspot.cta}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </EcosystemSectionContainer>
}
