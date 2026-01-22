"use client";
import Text from "@/components/ui/Text";
import PublicImage from "@/components/ui/PublicImage";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const WayContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 48px 0 72px;
    gap: 48px;

    @media (max-width: 768px) {
        padding: 24px 0 24px;
    }

    & .texts {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        flex: 1;
        flex-direction: row;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 22px;
        }

        &__title {
            font-size: 38px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 28px;
            }
        }

        &__description {
            font-size: 18px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.5px;
            color: var(--color-muted);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }

    & .trajectory {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 48px;
    }

    & .trajectory__desktop {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background-color: #f5f5f5;
            transform: translateX(-50%);
            pointer-events: none;
        }

        &-progress {
            position: absolute;
            top: 0;
            left: 50%;
            width: 2px;
            background-color: var(--color-dark);
            transform: translateX(-50%);
            height: 0%;
            z-index: 1;
            pointer-events: none;
        }

        &-item {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 96px minmax(0, 1fr);
            align-items: flex-start;
            gap: 12px;
            position: relative;
            margin-top: -160px;
        }

        &-item.is-last::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 12px;
            bottom: 0;
            width: 4px;
            background: var(--color-bg);
            transform: translateX(-50%);
            z-index: 2;
            pointer-events: none;
        }

        &-item:first-of-type {
            margin-top: 0;
        }

        &-center {
            grid-column: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
            z-index: 1;
            align-self: flex-start;
        }

        &-dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
            box-shadow: 0 0 0 4px #fff;
            margin-top: 0;
            position: absolute;
            top: 0;
        }

        &-dot.is-active {
            background-color: var(--color-dark);
            border-color: var(--color-dark);
        }

        &-year {
            font-size: 16px;
            font-weight: 500;
            letter-spacing: -0.3px;
            color: #c5c5c5;
            font-family: var(--font-display);
            position: absolute;
            top: 28px;
            white-space: nowrap;
        }

        &-year.is-active {
            color: var(--color-dark);
        }

        &-year.is-left {
            right: calc(50% + 0px);
            rotate: 90deg;
        }

        &-year.is-right {
            left: calc(50% + 0px);
            rotate: 270deg;
        }

        &-card {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-self: flex-start;
            width: 100%;
            position: relative;
            z-index: 3;
        }

        &-card.is-left {
            grid-column: 1;
            justify-self: end;
        }

        &-card.is-right {
            grid-column: 3;
            justify-self: start;
        }

        &-title {
            font-size: 32px;
            font-weight: 500;
            color: var(--color-dark);
            line-height: 120%;
            letter-spacing: -0.5px;
            font-family: var(--font-display);
            margin-top: 8px;
        }

        &-text {
            font-size: 18px;
            line-height: 120%;
            letter-spacing: -0.2px;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &-image {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 6 / 3;
            background: #f5f5f5;
        }

        &-more {
            margin-top: 6px;
            font-size: 16px;
        }
    }

    & .trajectory__mobile {
        display: none;
        flex-direction: column;
        gap: 0px;
        width: 100%;

        &-item {
            display: grid;
            grid-template-columns: 12% 88%;
            gap: 6px;
            align-items: flex-start;
            width: 100%;
        }

        &-timeline {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            height: 100%;


            &::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                width: 2px;
                background-color: #f5f5f5;
                left: 0px;
            }
        }

        &-timeline.is-last {
            height: 12px !important;
            min-height: 12px !important;
            align-self: flex-start;
        }

        &-timeline.is-last::before {
            display: none !important;
        }

        &-progress {
            position: absolute;
            top: 0;
            left: 0px;
            width: 2px;
            background-color: var(--color-dark);
            z-index: 0;
            height: 0%;
        }

        &-timeline.is-last .trajectory__mobile-progress {
            display: none !important;
        }


        &-year {
            font-size: 16px;
            font-weight: 500;
            letter-spacing: -0.5px;
            color: #c5c5c5;
            font-family: var(--font-display);
            rotate: 90deg;
            position: absolute;
            left: 2px;
            top: 28px;
        }

        &-dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
            box-shadow: 0 0 0 4px #fff;
            z-index: 1;
            padding: 0;
            cursor: pointer;
            outline: none;
            position: absolute;
            top: 4px;
            left: -5px;
            transition: all 0.2s ease-in-out;
        }

        &-dot.is-active {
            background-color: var(--color-dark);
            border-color: var(--color-dark);
        }

        &-year.is-active {
            color: var(--color-dark);
        }

        &-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            padding: 0 0px 48px 0px;
        }

            pointer-events: none;
        &-title {
            font-size: 22px;
            font-weight: 500;
            color: var(--color-dark);
            line-height: 120%;
            letter-spacing: -0.5px;
            font-family: var(--font-display);
            margin-top: 8px;
        }

        &-text {
            width: 100%;
            font-size: 15px;
            line-height: 120%;
            letter-spacing: -0.2px;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &-image {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 6 / 3;
            background: #f5f5f5;
        }

        &-more {
            margin-top: 6px;
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {

        & .trajectory {
            gap: 18px;
            padding: 0px;
        }

        & .trajectory__desktop {
            display: none;
        }

        & .timeline,
        & .trajectory__carousel {
            display: none;
        }

        & .trajectory__mobile {
            display: flex;
        }
    }
`

export default function WaySection() {
    const timeline = [
        {
            year: 1995,
            title: "O começo de tudo",
            description:
                "A Fast Sistemas foi fundada com foco em especialização técnica, elevando o padrão de produtos e suporte ao mercado.",
            image: "/others/loja-da-fast-sistemas-construtivos.png",
        },
        {
            year: 2020,
            title: "Expansão e novas lojas",
            description:
                "Ampliamos nossa presença física e logística para atender mais regiões com rapidez e eficiência.",
            image: "/others/loja-da-fast-internamente.jpg",
        },
        {
            year: 2022,
            title: "Ecosistema em movimento",
            description:
                "Integração de soluções e parceiros estratégicos para acelerar obras e entregar mais performance.",
            image: "/others/convencao-da-fast-sistemas-construtivos.jpg",
        },
        {
            year: 2024,
            title: "Tecnologia e inovação",
            description:
                "Processos otimizados e novos serviços impulsionam a experiência do cliente em cada etapa da obra.",
            image: "/others/unity_company.jpeg",
        },
        {
            year: 2025,
            title: "Serviços completos",
            description:
                "Soluções integradas do projeto à construção final, com foco em agilidade e alto desempenho.",
            image: "/others/obra-de-steel-frame.jpg",
        },
        {
            year: 2026,
            title: "Futuro colaborativo",
            description:
                "Mais inovação, sustentabilidade e parcerias para transformar o mercado de construção a seco.",
            image: "/others/convencao-da-fast-sistemas-construtivos-vertical.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeProgress, setActiveProgress] = useState(0);
    const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const desktopItemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const desktopContainerRef = useRef<HTMLDivElement | null>(null);
    const [desktopProgress, setDesktopProgress] = useState(0);
    const cardVariants = {
        hidden: (index: number) => ({
            opacity: 0,
            y: 40,
            scale: 0.96,
            rotate: index % 2 === 0 ? -2.5 : 2.5,
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
        },
    };

    const mobileCardVariants = {
        hidden: { opacity: 0, x: -18, y: 18, scale: 0.985, rotate: 0 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
    };

    const jumpVariants = {
        idle: { y: 0, scale: 1 },
        active: { y: -4, scale: 1.06 },
    };

    useEffect(() => {
        let ticking = false;

        const updateMobileProgress = () => {
            const items = mobileItemRefs.current.filter(Boolean) as HTMLDivElement[];
            if (!items.length) return;

            const viewportCenter = window.innerHeight * 0.5;
            let nextActiveIndex = 0;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top <= viewportCenter) {
                    nextActiveIndex = index;
                }
            });

            const activeItem = items[nextActiveIndex];
            if (activeItem) {
                const rect = activeItem.getBoundingClientRect();
                const start = rect.top + 12;
                const end = rect.bottom - 12;
                const rawProgress = (viewportCenter - start) / Math.max(end - start, 1);
                const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
                setActiveProgress(clampedProgress);
            }

            setActiveIndex(nextActiveIndex);
        };

        const updateDesktopProgress = () => {
            const container = desktopContainerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const viewportCenter = window.innerHeight * 0.5;
            const start = rect.top;
            const end = rect.bottom;
            const rawProgress = (viewportCenter - start) / Math.max(end - start, 1);
            const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
            setDesktopProgress(clampedProgress * rect.height);

            const items = desktopItemRefs.current.filter(Boolean) as HTMLDivElement[];
            if (!items.length) return;
            let nextActiveIndex = 0;
            items.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top <= viewportCenter) {
                    nextActiveIndex = index;
                }
            });
            setActiveIndex(nextActiveIndex);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isMobile = window.matchMedia("(max-width: 768px)").matches;
                    if (isMobile) {
                        updateMobileProgress();
                    } else {
                        updateDesktopProgress();
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [timeline.length]);

    return (
        <WayContainer>
            <article className="texts">
                <Text as="h1" className="texts__title">
                    Mais de 25 anos de história no mercado, crescendo desde sempre para você
                </Text>
                <Text as="p" className="texts__description">
                    A Fast Sistemas Construtivos oferece soluções completas e inovadoras para sua obra desde o projeto a construção final
                </Text>
            </article>

            <div className="trajectory">
                <div className="trajectory__desktop" ref={desktopContainerRef}>
                    <span
                        className="trajectory__desktop-progress"
                        style={{
                            height: `${desktopProgress}px`,
                        }}
                        aria-hidden="true"
                    />
                    {timeline.map((item, index) => (
                        <div
                            key={item.year}
                            className={`trajectory__desktop-item ${index % 2 === 0 ? "is-left" : "is-right"} ${index === timeline.length - 1 ? "is-last" : ""}`}
                            ref={(el) => {
                                desktopItemRefs.current[index] = el;
                            }}
                        >
                            <motion.div
                                className={`trajectory__desktop-card ${index % 2 === 0 ? "is-left" : "is-right"}`}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={index <= activeIndex ? "visible" : "hidden"}
                                transition={{ type: "spring", stiffness: 140, damping: 20 }}
                            >
                                <div className="trajectory__desktop-image">
                                    <PublicImage
                                        fill
                                        src={item.image}
                                        alt={item.title}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <Text as="h3" className="trajectory__desktop-title">
                                    {item.title}
                                </Text>
                                <Text as="p" className="trajectory__desktop-text">
                                    {item.description}
                                </Text>
                                <Button variant="solid" className="trajectory__desktop-more">
                                    Entrar em contato
                                </Button>
                            </motion.div>
                            <div className="trajectory__desktop-center">
                                <motion.span
                                    className={`trajectory__desktop-dot ${index <= activeIndex ? "is-active" : ""}`}
                                    aria-hidden="true"
                                    variants={jumpVariants}
                                    animate={index === activeIndex ? "active" : "idle"}
                                    key={`desktop-dot-${item.year}-${activeIndex}`}
                                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                />
                                <motion.span
                                    className={`trajectory__desktop-year ${index <= activeIndex ? "is-active" : ""} ${index % 2 === 0 ? "is-left" : "is-right"}`}
                                    variants={jumpVariants}
                                    animate={index === activeIndex ? "active" : "idle"}
                                    key={`desktop-year-${item.year}-${activeIndex}`}
                                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                >
                                    {item.year}
                                </motion.span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trajectory__mobile">
                    {timeline.map((item, index) => (
                        <div
                            key={item.year}
                            className={`trajectory__mobile-item ${index === timeline.length - 1 ? "is-last" : ""}`}
                            id={`timeline-${item.year}`}
                            ref={(el) => {
                                mobileItemRefs.current[index] = el;
                            }}
                        >
                            <div className={`trajectory__mobile-timeline ${index === timeline.length - 1 ? "is-last" : ""}`}>
                                <span
                                    className="trajectory__mobile-progress"
                                    style={{
                                        height: `${index < activeIndex ? 100 : index === activeIndex ? activeProgress * 100 : 0}%`,
                                    }}
                                    aria-hidden="true"
                                />
                                <motion.span
                                    className={`trajectory__mobile-year ${index <= activeIndex ? "is-active" : ""}`}
                                    variants={jumpVariants}
                                    animate={index === activeIndex ? "active" : "idle"}
                                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                >
                                    {item.year}
                                </motion.span>
                                <motion.button
                                    type="button"
                                    className={`trajectory__mobile-dot ${index <= activeIndex ? "is-active" : ""}`}
                                    aria-label={`Ver ano ${item.year}`}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        document.getElementById(`timeline-${item.year}`)?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                    variants={jumpVariants}
                                    animate={index === activeIndex ? "active" : "idle"}
                                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                />
                            </div>
                            <motion.div
                                className="trajectory__mobile-content"
                                variants={mobileCardVariants}
                                initial="hidden"
                                animate={index <= activeIndex ? "visible" : "hidden"}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="trajectory__mobile-image">
                                    <PublicImage
                                        fill
                                        src={item.image}
                                        alt={item.title}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <Text as="h3" className="trajectory__mobile-title">
                                    {item.title}
                                </Text>
                                <Text as="p" className="trajectory__mobile-text">
                                    {item.description}
                                </Text>
                                <Button variant="solid" className="trajectory__mobile-more">
                                    Entrar em contato
                                </Button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </WayContainer>
    );
}