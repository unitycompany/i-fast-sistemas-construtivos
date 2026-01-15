"use client";
import styled from "@emotion/styled";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardService from "../../_components/CardServices";
import "swiper/css";
import { ArrowArcRightIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { sectionMotion } from "@/utils/motion";

const ServicesSectionContainer = styled(motion.section)`
  padding: 48px 0;
  width: 100%;
  position: relative;
  isolation: isolate;

  @media (max-width: 768px) {
    padding: 24px 0;
  }

  & .bg {
    position: absolute;
    inset: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background-color: #F9F9F9;
    z-index: -1;
  }
`

const Carousel = styled.div`
  width: 100%;
  position: relative;

  & .swiper {
      width: 100%;
  }

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
`

export default function ServicesSection() {

  const services = [
    {
      id: "tratamento-acustico",
      title: "Tratamento Acústico",
      description: "Soluções personalizadas para otimizar a acústica de ambientes residenciais e comerciais, garantindo conforto sonoro e qualidade de vida.",
      image: "/services/example.jpg",
    },
    {
      id: "forro-de-drywall",
      title: "Forro de Drywall",
      description: "Instalação de forros em drywall que aliam estética e funcionalidade, proporcionando isolamento térmico e acústico para diversos tipos de ambientes.",
      image: "/services/example.jpg",
    },
    {
      id: "forro-de-acustico",
      title: "Forro Acústico",
      description: "Forros acústicos de alta performance, projetados para reduzir ruídos e melhorar a qualidade sonora em espaços corporativos, educacionais e residenciais.",
      image: "/services/example.jpg",
    },

  ]

  return <ServicesSectionContainer {...sectionMotion}>
    <div className="bg"></div>
    <Carousel>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {
          services.map(service => (
            <SwiperSlide key={service.id}>
              <CardService 
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="controls">
        <div className="controls__prev">
          <ArrowLeftIcon />
        </div>
        <div className="controls__next">
          <ArrowRightIcon />
        </div>
      </div>
    </Carousel>
  </ServicesSectionContainer>;
}
