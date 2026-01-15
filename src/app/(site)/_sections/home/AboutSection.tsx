"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { sectionMotion } from "@/utils/motion";

import ImageAbout from "../../../../../public/others/about.jpeg";
import { Autoplay } from "swiper/modules";

const AboutSectionContainer = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding-top: 48px;

    @media (max-width: 768px) {
        gap: 24px;
        padding-top: 48px;
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

    & > img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        object-position: center;
        border-radius: 12px;

        @media (max-width: 768px) {
            height: 280px;
        }
    }
`

const Carousel = styled.div`
    width: 100%;

    .swiper {
        width: 100%;

        &-slide {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 12px;

            & .number {
                font-size: 62px;
                line-height: 100%;
                font-weight: 400;
                letter-spacing: -2px;
                font-family: var(--font-display);

                @media (max-width: 768px) {
                    font-size: 36px;
                }
            }

            & .description {
                font-size: 16px;
                line-height: 120%;
                font-weight: 400;
                letter-spacing: -0.5px;
                color: var(--color-muted);
                font-family: var(--font-display);

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }
`

export default function AboutSection() {
    return <AboutSectionContainer id="about" {...sectionMotion}>
    <article className="texts">
        <Text as="h1" className="texts__title">
            Com mais de 25 anos em experiência no mercado de construção a seco
        </Text>
        <Text as="p" className="texts__description">
            A Fast Sistemas Construtivos oferece soluções completas e inovadoras para sua obra desde o projeto a construção final
        </Text>
    </article>
    <Image 
        src={ImageAbout} 
        loading="lazy" 
        alt="Sobre a Fast Sistemas Construtivos" 
    />
    <Carousel>
        <Swiper
            spaceBetween={32}
            slidesPerView={2}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 48,
                },
            }}
        >
            <SwiperSlide>
                <Text as="h2" className="number">
                    31%
                </Text>
                <Text as="p" className="description">
                    A cada 3 pessoas que compram, 1 vira cliente recorrente pela qualidade
                </Text>
            </SwiperSlide>
            <SwiperSlide>
                <Text as="h2" className="number">
                    + 25
                </Text>
                <Text as="p" className="description">
                    Mais de 25 anos de experiência entregando todo tipo de produto
                </Text>
            </SwiperSlide>
            <SwiperSlide>
                <Text as="h2" className="number">
                    + 1M 
                </Text>
                <Text as="p" className="description">
                    Mais de 1 milhão de clientes atendidos em todo o Brasil
                </Text>
            </SwiperSlide>
            <SwiperSlide>
                <Text as="h2" className="number">
                    96%
                </Text>
                <Text as="p" className="description">
                    Uma taxa de satisfação acima da média em todos os setores
                </Text>
            </SwiperSlide>
        </Swiper>
    </Carousel>
  </AboutSectionContainer>
}
