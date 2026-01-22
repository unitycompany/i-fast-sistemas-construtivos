"use client";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, MoneyWavyIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";

const MvvContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 24px 0 48px 0;

    @media (max-width: 768px) {
        padding: 24px 0;
    }

    & .controls {
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        position: relative;
        z-index: 10;
        display: none;
        margin-top: 24px;

        @media (max-width: 768px) {
            display: flex;
        }

        &__prev {
            left: -16px;
        }

        &__next {
            right: -16px;
        }

        &__prev, &__next {
            background-color: var(--color-bg);
            border-radius:99px;
            border: 4px solid #F9F9F9;
            width: 48px;
            height: 48px;
            display: flex;  
            align-items: center;
            justify-content: center;
            cursor: pointer;

            & > svg {
                width: 24px;
                height: 24px;
            }
        }
    }

    & .mvv__carousel {
        width: 100%;
        height: auto;

        & .mvv__carousel-item {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 22px;

            &-header {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 12px;

                @media (max-width: 768px) {
                    gap: 14px;
                }

                &-icon {
                    width: 58px;
                    height: 58px;
                    background-color: #f5f5f5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;

                    @media (max-width: 768px) {
                        width: 48px;
                        height: 48px;
                    }

                    & > svg {
                        color: var(--color-dark);
                        width: 28px;
                        height: 28px;

                        @media (max-width: 768px) {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }

                &-titles {
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 4px;
                    flex-direction: column;

                    &-mintitle {
                        font-size: 14px;
                        line-height: 100%;
                        font-weight: 400;
                        letter-spacing: -0.2px;
                        color: var(--color-muted);
                        font-family: var(--font-display);

                        @media (max-width: 768px) {
                            font-size: 14px;
                        }
                    }

                    &-title {
                        font-size: 24px;
                        line-height: 100%;
                        font-weight: 500;
                        letter-spacing: -0.5px;
                        color: var(--color-dark);
                        font-family: var(--font-display);

                        @media (max-width: 768px) {
                            font-size: 20px;
                        }
                    }
                }
            }

            &-description {
                font-size: 18px;
                line-height: 100%;
                font-weight: 300;
                letter-spacing: -0.2px;
                color: var(--color-muted);
                font-family: var(--font-display);

                @media (max-width: 768px) {
                    font-size: 18px;
                }
            }
        }
    }
`

export default function MvvSection() {

    const swiperRef = useRef<SwiperClass | null>(null);

    const mvv = [
        {
            icon: EyeIcon,
            minTitle: "Visão de Futuro",
            title: "Crescimento Objetivo",
            description: "Buscar o crescimento sustentável da empresa, ampliando nossa participação no mercado e fortalecendo nossa marca.",
        },
        {
            icon: TargetIcon,
            minTitle: "Você é nossa missão",
            title: "Foco no cliente",
            description: "Buscar o crescimento sustentável da empresa, ampliando nossa participação no mercado e fortalecendo nossa marca.",
        },
        {
            icon: MoneyWavyIcon,
            minTitle: "Investimos na sua experiência",
            title: "Sua experiência importa",
            description: "Buscar o crescimento sustentável da empresa, ampliando nossa participação no mercado e fortalecendo nossa marca.",
        },
    ]

    return <MvvContainer>
        <main className="mvv__carousel">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                spaceBetween={8}
                slidesPerView={3}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                    },
                }}
            >
                {
                    mvv.map((item, index) => (
                        <SwiperSlide key={index} className="mvv__carousel-item">
                            <div className="mvv__carousel-item-header">
                                <div className="mvv__carousel-item-header-icon">
                                    <item.icon size={48} weight="light" />
                                </div>
                                <div className="mvv__carousel-item-header-titles">
                                    <Text as="span" className="mvv__carousel-item-header-titles-mintitle">{item.minTitle}</Text>
                                    <Text as="h4" className="mvv__carousel-item-header-titles-title">{item.title}</Text>
                                </div>
                            </div>
                            <aside className="mvv__carousel-item-description">
                                <Text as="p" className="mvv__carousel-item-description-text">{item.description}</Text>
                            </aside>
                            <Button variant="outline" className="mvv__carousel-item-button">Entrar em contato</Button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="controls">
                <div
                    className="controls__prev"
                    role="button"
                    tabIndex={0}
                    aria-label="Banner anterior"
                    onClick={() => swiperRef.current?.slidePrev()}
                    onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") swiperRef.current?.slidePrev();
                    }}
                >
                    <ArrowLeftIcon />
                </div>
                <div
                    className="controls__next"
                    role="button"
                    tabIndex={0}
                    aria-label="Próximo banner"
                    onClick={() => swiperRef.current?.slideNext()}
                    onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") swiperRef.current?.slideNext();
                    }}
                >
                    <ArrowRightIcon />
                </div>
                </div>
        </main>
    </MvvContainer>
}