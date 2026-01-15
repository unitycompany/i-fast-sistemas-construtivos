"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PublicImage from "@/components/ui/PublicImage";
import { motion } from "framer-motion";
import { useSectionMotion } from "@/utils/motion";

const ClientsContainer = styled(motion.section)`
  width: 100%;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  & .texts {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
      flex: 1;
      flex-direction: row;

      @media (max-width: 768px) {
          flex-direction: column;
          gap: 16px;
      }

      &__title {
          font-size: 38px;
          line-height: 100%;
          font-weight: 500;
          letter-spacing: -1px;
          color: var(--color-dark);
          font-family: var(--font-display);
          max-width: 600px;
          text-align: center;

          @media (max-width: 768px) {
              font-size: 28px;
          }
      }
  }
`

const Carousel = styled.div`
  width: 100%;

  & .swiper {
      width: 100%;

      & .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          height: 180px;

          @media (max-width: 768px) {
            height: 120px;
          }
          
          & .carousel_image {
            width: 120px;
            height: 120px;
            object-fit: contain;
            object-position: center;

            @media (max-width: 768px) {
              width: 72px;
              height: 72px;
            }
          }
      }
  }
`

export default function ClientsSection() {
  const sectionMotion = useSectionMotion();

  return <ClientsContainer {...sectionMotion}>
    <article className="texts">
      <Text as="h1" className="texts__title">
        Conheça alguns clientes com quem já trabalhamos
      </Text>
    </article>
    <Carousel>
      <Swiper
        spaceBetween={8}
        slidesPerView={2}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
      >
        <SwiperSlide>
          <PublicImage src="/brands/maracana.jpg" alt="Maracana" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/mcdonald.svg" alt="Maracana" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/olimpiadas.svg" alt="Olimpiadas 2016" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/localiza.svg" alt="Olimpiadas 2016" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/smartfit.svg" alt="Olimpiadas 2016" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/sesc.svg" alt="Olimpiadas 2016" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
        <SwiperSlide>
          <PublicImage src="/brands/torra.jpg" alt="Olimpiadas 2016" loading="lazy" className="carousel_image"/>
        </SwiperSlide>
      </Swiper>
    </Carousel>

  </ClientsContainer>;
}
