"use client";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { SealCheckIcon } from "@phosphor-icons/react/dist/ssr";
import PublicImage from "@/components/ui/PublicImage";
import { brandAsset } from "@/utils/publicAssets";
import { openContactConversionPopup } from "@/components/forms/ContactConversionFormPopup";
import { motion } from "framer-motion";
import { microHover, sectionMotion } from "@/utils/motion";

const PartnershipsSectionContainer = styled(motion.section)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 48px;
  padding: 48px 0;

  @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 0;
      padding-bottom: 48px;
      gap: 32px;
  }

  & .texts {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 18px;
      flex: 1;
      flex-direction: column;

      @media (max-width: 768px) {
          flex-direction: column;
          gap: 16px;
          width: 100%;
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

      &__list {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 8px;
        width: 100%;
        flex-wrap: wrap;
        padding: 12px 0;

        @media (max-width: 768px) {
          gap: 6px;
        }

        &-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          color: var(--color-muted);
          font-family: var(--font-display);
          padding: 8px 12px;
          border-radius: 99px;
          width: max-content;
          border: 1px solid var(--color-border);

          @media (max-width: 768px) {
            font-size: 14px;
            padding: 6px 10px;
          }

          & > svg {
            width: 18px;
            height: 18px;

            @media (max-width: 768px) {
              width: 16px;
              height: 16px;
            }
          }
        }
      }

      &__button {
        --btn-color: var(--color-dark);
        --btn-on: var(--color-bg);
      }
  }

  & .companies {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
    }

    &__list {
      list-style: none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;

      /* Desktop: quando 1 item está em hover, os demais “apagam” */
      @media (hover: hover) and (pointer: fine) {
        &:hover .companies__list-item {
          opacity: 0.6;
        }

        &:hover .companies__list-item:hover {
          opacity: 1;
          scale: 1.02;
        }
      }

      &-item {
        border: 1px solid var(--color-border);
        border-radius: 4px;
        flex: 1 1 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px;
        transition: all 0.15s ease-out;

        @media (max-width: 768px) {
          padding: 12px;
          border-radius: 2px;
        }

        & > img {
          width: 100%;
          height: 96px;
          object-fit: contain;

          @media (max-width: 768px) {
            height: 38px;
          }
        }
      }
    }
  }
`

export default function PartnershipsSection() {
  return <PartnershipsSectionContainer {...sectionMotion}>
    <article className="texts">
      <Text as="h1" className="texts__title">
        Trabalhamos apenas com o padrão ouro do mercado mundial.
      </Text>
      <Text as="p" className="texts__description">
        Nossa curadoria de produtos garante que sua obra tenha durabilidade e certificação. Não somos apenas distribuidores; somos parceiros estratégicos das maiores indústrias do setor.
      </Text>
      <ul className="texts__list">
        <li className="texts__list-item">
          <SealCheckIcon />
          Steel Frame e Light Steel Frame
        </li>
        <li className="texts__list-item">
          <SealCheckIcon />
          Drywall e Forros Modulares
        </li>
        <li className="texts__list-item">
          <SealCheckIcon />
          Isolamento Térmico e Acústico
        </li>
        <li className="texts__list-item">
          <SealCheckIcon />
          Fachadas (Siding e Cimentícia)
        </li>
      </ul>
      <motion.div {...microHover} style={{ display: "inline-flex" }}>
        <Button 
          className="texts__button"
          type="button"
          id="contact-us-button"
          variant="solid"
          onClick={() => {
            openContactConversionPopup();
          }}
        >
          Entrar em contato
        </Button>
      </motion.div>
    </article>
    <aside className="companies">
      <ul className="companies__list">
        <li className="companies__list-item">
          <PublicImage src={brandAsset("adfors.svg")} alt="Adfors Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("brasilit.svg")} alt="Brasilit Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("ecofiber.svg")} alt="Ecofiber Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("ecophon.svg")} alt="Ecophon Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("isover.svg")} alt="Isover Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("placo.svg")} alt="Placo Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("quartzolit.svg")} alt="Quartzolit Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("sonex.svg")} alt="Sonex Logo" />
        </li>
        <li className="companies__list-item">
          <PublicImage src={brandAsset("owa.svg")} alt="Owa Logo" />
        </li>
      </ul>
    </aside>
  </PartnershipsSectionContainer>
}
