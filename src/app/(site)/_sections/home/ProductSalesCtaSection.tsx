"use client";
import Button from "@/components/ui/Button";
import PublicImage from "@/components/ui/PublicImage";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { openContactConversionPopup } from "@/components/forms/ContactConversionFormPopup";
import { motion } from "framer-motion";
import { microHover, sectionMotion } from "@/utils/motion";

const ProductSalesContainer = styled(motion.section)`
  padding: 4px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark);
  border-radius: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-image: url('/others/loja-da-fast-internamente.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 24px;
    z-index: 5;
  }

  & .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 72px 24px;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
      width: 100%;
      padding: 48px 16px;
    }

    &__title {
      font-size: 38px;
      line-height: 100%;
      font-weight: 500;
      letter-spacing: -1px;
      color: var(--color-bg);
      font-family: var(--font-display);
      max-width: 600px;
      text-align: center;

      @media (max-width: 768px) {
          font-size: 28px;
      }
    }

    &__description {
      font-size: 18px;
      line-height: 120%;
      font-weight: 400;
      letter-spacing: -0.5px;
      color: var(--color-muted-white);
      font-family: var(--font-display);
      width: 80%;
      text-align: center;

      @media (max-width: 768px) {
          font-size: 16px;
      }
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    &__button-contact.ui-button--solid,
    &__button-contact.ui-button--outline {
      --btn-color: var(--color-bg);
      --btn-on: var(--color-dark);
    }

    &__button-shop.ui-button--solid,
    &__button-shop.ui-button--outline {
      --btn-color: var(--color-bg);
      --btn-on: var(--color-dark);
    }
  }
`

export default function ProductSalesCtaSection() {
  return <ProductSalesContainer {...sectionMotion}>
    <aside className="content">
      <Text as="h1" className="content__title">
        Quer comprar produtos de qualidade e com preços baixos?
      </Text>
      <Text as="p" className="content__description">
        Aproveite nossas ofertas exclusivas e garanta já os melhores produtos do mercado!
      </Text>
      <div className="content__container">
        <motion.div {...microHover} style={{ display: "inline-flex" }}>
          <Button
            type="button"
            id="button_contact-us"
            className="content__button-contact"
            variant="solid"
            onClick={() => {
              openContactConversionPopup();
            }}
          >
            Entrar em contato
          </Button>
        </motion.div>
        <motion.div {...microHover} style={{ display: "inline-flex" }}>
          <Button
            type="button"
            id="button_shop"
            className="content__button-shop"
            variant="outline"
          >
            Loja online
          </Button>
        </motion.div>
      </div>
    </aside>
  </ProductSalesContainer>
}
