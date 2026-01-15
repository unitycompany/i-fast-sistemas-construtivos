"use client";

import styled from "@emotion/styled";
import { ListIcon, ShoppingCartIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Text from "../ui/Text";
import Image from "next/image";

type HeaderContainerProps = {
    $isSidebarOpen?: boolean;
};

const HeaderContainer = styled("header", {
    shouldForwardProp: (prop) => prop !== "$isSidebarOpen",
})<HeaderContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 12px 24px 32px 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    height: 80px;
    transition: background-color var(--dur-slow) var(--ease-standard);
    background-color: ${(props) => (props.$isSidebarOpen ? "var(--color-bg)" : "transparent")};

    @media (max-width: 768px) {
        padding: 16px 24px 32px 24px;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        mask-image: linear-gradient(to bottom, rgba(255, 252, 225, 1) 0%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(255, 252, 225, 1) 0%, transparent 100%);
        pointer-events: none;
        z-index: -1;
        background-color: var(--color-bg);
        transition: opacity var(--dur-slow) var(--ease-standard);
        opacity: ${(props) => (props.$isSidebarOpen ? 0 : 1)};
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        mask-image: linear-gradient(to bottom, rgba(255, 252, 225, 1) 0%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(255, 252, 225, 1) 0%, transparent 100%);
        pointer-events: none;
        z-index: -1;
        background-color: var(--color-bg);
        transition: opacity var(--dur-slow) var(--ease-standard);
        opacity: ${(props) => (props.$isSidebarOpen ? 0 : 1)};
    }

    & > img {
        object-fit: contain;
        width: 180px;
        height: auto;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 140px;
        }
    }
`

type MenuButtonProps = {
    $isSidebarOpen?: boolean;
};

const Menu = styled("button", {
    shouldForwardProp: (prop) => prop !== "$isSidebarOpen",
})<MenuButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    background: transparent;
    cursor: pointer;

    &:nth-child(3){
        @media (max-width: 768px) {
            display: none;
        }
    }

    & > svg {
        color: var(--color-dark);
        font-size: 20px;
    }

    & > span {
        font-size: 18px;
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--color-dark);
        letter-spacing: -1px;
    }

    & .menu__icon {
        position: relative;
        width: 20px;
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        & > svg {
            position: absolute;
            inset: 0;
            margin: auto;
            transition:
                opacity var(--dur-normal) var(--ease-standard),
                transform var(--dur-slow) var(--ease-standard);
            will-change: opacity, transform;
        }

        & .icon--bars {
            opacity: ${(props) => (props.$isSidebarOpen ? 0 : 1)};
            transform: ${(props) => (props.$isSidebarOpen ? "rotate(-90deg) scale(0.85)" : "rotate(0deg) scale(1)")};
        }

        & .icon--close {
            opacity: ${(props) => (props.$isSidebarOpen ? 1 : 0)};
            transform: ${(props) => (props.$isSidebarOpen ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.85)")};
        }
    }

    & .menu__label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 64px;

        & > span {
            transition: opacity var(--dur-normal) var(--ease-standard), transform var(--dur-slow) var(--ease-standard);
            will-change: opacity, transform;
        }

        & .label--menu {
            opacity: ${(props) => (props.$isSidebarOpen ? 0 : 1)};
            transform: ${(props) => (props.$isSidebarOpen ? "translateY(-2px)" : "translateY(0)")};
            position: ${(props) => (props.$isSidebarOpen ? "absolute" : "static")};
        }

        & .label--close {
            opacity: ${(props) => (props.$isSidebarOpen ? 1 : 0)};
            transform: ${(props) => (props.$isSidebarOpen ? "translateY(0)" : "translateY(2px)")};
            position: ${(props) => (props.$isSidebarOpen ? "static" : "absolute")};
        }
    }
`

interface HeaderProps {
    onMenuClick?: () => void;
    isSidebarOpen?: boolean;
}

export default function Header({ onMenuClick, isSidebarOpen = false }: HeaderProps) {
    return <HeaderContainer $isSidebarOpen={isSidebarOpen}>
        <Menu onClick={onMenuClick} $isSidebarOpen={isSidebarOpen} aria-expanded={isSidebarOpen}>
            <span className="menu__icon" aria-hidden>
                <ListIcon className="icon--bars" />
                <XIcon className="icon--close" />
            </span>
            <span className="menu__label" aria-hidden>
                <Text as="span" className="label--menu">Menu</Text>
                <Text as="span" className="label--close">Fechar</Text>
            </span>
        </Menu>
        <Image 
            src="/logo-fast-sistemas-construtivos.svg"
            alt="Fast Sistemas Construtivos"
            width={200}
            height={50}
            onClick={() => window.open('/', '_self')}
            title="Voltar para a página inicial"
        />
        <Menu>
            <Text as="span">Loja online</Text>
            <ShoppingCartIcon />
        </Menu>
    </HeaderContainer>
}