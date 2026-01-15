"use client";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";

const RoutesContainer = styled.section`
  width: 100%;
  padding: 48px 0 48px 0;
  position: relative;
  isolation: isolate;

  & .bg {
    position: absolute;
    inset: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background-color: #F5f5f5;
    z-index: -1;
  }

   & .controls {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 12px;
    transform: translate(-50%, 50%);
    z-index: 10;
    display: none;

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
      position: absolute;

      & > svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  & .swiper {
    width: 100%;

    & .swiper-slide {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid var(--color-border);
      padding: 24px 32px;
      border-radius: 8px;
      gap: 32px;
      background-color: var(--color-bg);

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 24px 32px;
        gap: 16px;
      }

      & .card__logo {
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        border-radius: 999px;
        width: 82px;
        height: 82px;
        border: 4px solid #f5f5f5;

        @media (max-width: 768px) {
          width: 72px;
          height: 72px;
        }

        & > img {
          width: auto;
          height: 41px;
          object-fit: contain;
          object-position: center;
          transition: transform 0.25s ease-in-out;

          &:hover {
            transform: rotate(6deg);
          }

          @media (max-width: 768px) {
            height: 36px;
          }
        }
      }

      & .card__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;
        flex: 1;

        @media (max-width: 768px) {
          align-items: center;
          gap: 18px;
        }

        & .card__text {
          font-size: 18px;
          line-height: 110%;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: var(--color-dark);
          font-family: var(--font-display);

          @media (max-width: 768px) {
            font-size: 18px;
            text-align: center;
            width: 85%;
          }
        }

        & .card__button {
          background-color: transparent;
          color: var(--color-dark);
          border: 1px solid var(--color-dark);
          font-size: 16px;
          transition: all 0.0850s ease-out;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: var(--radius-all);
            transition: all 0.1250s ease-out;
            background-color: transparent;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 4px);
            height: calc(100% - 4px);
          }

          &:hover {
            color: var(--color-bg);
          }

          &:hover::before {
            z-index: -1;
            background-color: var(--color-dark);
          }

          @media (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`

export default function RoutesSection() {

  const swiperRef = useRef<SwiperClass | null>(null);

  const cards = [
    {
      image: '/logo-fast-homes.png',
      alt: 'Fast Homes',
      text: 'Quer construir sua casa em menos de 6 meses?',
      textButton: 'Construir minha casa',
      link: '/ecossitema/fasthomes',
    },
    {
      image: '/icon-fast-sistemas-construtivos.svg',
      alt: 'Fast Sistemas Construtivos',
      text: 'Quer comprar produtos pelo menor preço do mercado?',
      textButton: 'Loja online',
      link: '/ecossitema/fastsistemasconstrutivos',
    },
    {
      image: '/icon-steelconecta-black.png',
      alt: 'Steel Conecta',
      text: 'Quer fazer parte do ecossistema da Fast?',
      textButton: 'Fazer parte',
      link: '/ecossitema/steelconecta',
    },
  ]

  return <RoutesContainer>
    <div className="bg"></div>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={8}
      slidesPerView={3}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.05,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.05,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      }}
    >
      {
        cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card__logo">
              <img src={card.image} alt={card.alt} />
            </div>
            <aside className="card__container">
              <Text as="h6" className="card__text">
                {card.text}
              </Text>
              <Button type="button" id={`button_${card.alt.replace(/\s+/g, '-').toLowerCase()}`} className="card__button" onClick={() => window.location.href = card.link}>
                {card.textButton}
              </Button>
            </aside>
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
  </RoutesContainer>
}
