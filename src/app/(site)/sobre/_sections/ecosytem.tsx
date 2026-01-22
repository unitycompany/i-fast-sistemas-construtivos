"use client";
import PublicImage from "@/components/ui/PublicImage";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { motion, useReducedMotion } from "framer-motion";

const EcosystemContainer = styled(motion.section)`
    width: 100%;
    padding: 96px 0 0px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    isolation: isolate;

    @keyframes cardShineSweep {
        0% {
            transform: translateX(-140%) rotate(12deg);
            opacity: 0;
        }
        15% {
            opacity: 0.25;
        }
        45% {
            transform: translateX(140%) rotate(12deg);
            opacity: 0;
        }
        100% {
            transform: translateX(140%) rotate(12deg);
            opacity: 0;
        }
    }


    @media (max-width: 768px) {
        padding: 24px 0 24px 0;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    & .bg {
        position: absolute;
        inset: 0;
        left: 50%;
        width: 100vw;
        background-color: var(--color-bg);
        transform: translateX(-50%);    
        z-index: -1;
    }
    
    & .ecosystem__title {
        font-size: 38px;
        line-height: 100%;
        font-weight: 500;
        letter-spacing: -1px;
        color: var(--color-dark);
        font-family: var(--font-display);
        width: 40%;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 28px;
            width: 100%;
        }
    }

    & .ecosystem__container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        gap: 8px;

        @media (max-width: 768px) {
            gap: 2px;
            position: relative;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            left: auto;
            top: auto;
            transform: none;
        }

        & .ecosystem__container-item {
            width: 100%;
            height: 184px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #f1f1f1;
            background-color: var(--color-bg);
            border-radius: 6px;
            position: relative;
            will-change: transform, opacity, filter;
            overflow: hidden;

            &::after {
                content: "";
                position: absolute;
                top: -30%;
                left: -60%;
                width: 60%;
                height: 160%;
                background: linear-gradient(
                    120deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.6) 45%,
                    rgba(255, 255, 255, 0) 100%
                );
                mix-blend-mode: screen;
                opacity: 0;
                pointer-events: none;
                animation: cardShineSweep 4.8s ease-in-out infinite;
            }

            @media (max-width: 768px) {
                width: 100%;
                height: 96px;
                border-radius: 2px;
            }

            & > img {
                width: 132px;
                height: 132px;
                object-fit: contain;

                @media (max-width: 768px) {
                    width: 74px;
                    height: 96px;
                }
            }

            &:nth-of-type(1) {
                top: 0;
            }

            &:nth-of-type(2) {
                top: 0px;

                @media (max-width: 768px) {
                    top: 0px;
                }
            }

            &:nth-of-type(3) {
                top: 0px;
                
                @media (max-width: 768px) {
                    top: 0px;
                }
            }

            &:nth-of-type(4) {
                top: 0px;

                @media (max-width: 768px) {
                    top: 0px;  
                }
            }

            &:nth-of-type(5) {
                top: 0px;

                @media (max-width: 768px) {
                    top: 0px;
                }
            }

            &:nth-of-type(6) {
                top: 0;
            }

        }
    }
`

export default function EcosystemSection() {
    const prefersReducedMotion = useReducedMotion();
    const itemEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
    const interactiveMotion = prefersReducedMotion
        ? {}
        : {
              whileHover: {
                  scale: 1.04,
                  transition: { duration: 0.35, ease: itemEase },
              },
              whileTap: {
                  scale: 0.98,
                  transition: { duration: 0.15 },
              },
          };
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.18,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 12,
            scale: prefersReducedMotion ? 1 : 0.88,
            filter: prefersReducedMotion ? "blur(0px)" : "blur(2px)",
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: prefersReducedMotion ? 0 : 1.1,
                ease: itemEase,
            },
        },
    };

    return <EcosystemContainer>
        <div className="bg"></div>
        {/* <Text as="h1" className="ecosystem__title">
            O Ecossitema mais completo da construção a seco
        </Text> */}
        <motion.main
            className="ecosystem__container"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3, once: true }}
            variants={containerVariants}
        >
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-fasthomes.png" alt="Ecossitema i-Fast" />
            </motion.div>
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-novametalica.png" alt="Ecossitema i-Fast" />
            </motion.div>
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-steelconecta-black.png" alt="Ecossitema i-Fast" />
            </motion.div>
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-fastobras.png" alt="Ecossitema i-Fast" />
            </motion.div>
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-unity-company.png" alt="Ecossitema i-Fast" />
            </motion.div>
            <motion.div className="ecosystem__container-item" variants={itemVariants} {...interactiveMotion}>
                <PublicImage src="/ecosystem/logo-v2-fast-sistemas-construtivos.svg" alt="Ecossitema i-Fast" />
            </motion.div>
        </motion.main>
    </EcosystemContainer>
}