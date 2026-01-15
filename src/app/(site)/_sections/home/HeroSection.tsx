"use client";
import PublicImage from "@/components/ui/PublicImage";
import styled from "@emotion/styled";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";
import Link from "next/link";

const HeroContainer = styled.section`
  width: 100%;
  position: relative;

  & .controls {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 12px;
    transform: translate(-50%, 50%);
    z-index: 10;

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
    height: 70vh;
    padding: 0;

    & .swiper-slide {
      width: 100%;
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24px;
      overflow: hidden;

      & .banner__link {
        width: 100%;
        height: 100%;
        display: block;
      }

      & .banner__frame {
        width: 100%;
        height: 70vh;
        min-height: 70vh;
        max-height: 70vh;
        position: relative;
        overflow: hidden;
      }

      & .banner__image {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }
  }
`

export default function HeroSection() {

  const swiperRef = useRef<SwiperClass | null>(null);

  const banners = [
    {
      image: "/banners/banner-example.jpg",
      alt: "Hero Banner 1",
      redirectUrl: "/produtos"
    },
    {
      image: "/banners/banner-example.jpg",
      alt: "Hero Banner 2",
      redirectUrl: "/servicos"
    },
    {
      image: "/banners/banner-example.jpg",
      alt: "Hero Banner 3",
      redirectUrl: "/contato"
    }
  ]

  return <HeroContainer>
    <Swiper
      slidesPerView={1}
      spaceBetween={8}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}

      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}

    >
      {
        banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link className="banner__link" href={banner.redirectUrl}>
              <div className="banner__frame">
                <PublicImage
                  className="banner__image"
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </Link>
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
  </HeroContainer>
}
