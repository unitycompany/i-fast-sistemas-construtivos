import React from "react";
import styled from "@emotion/styled";

type ButtonVariant = "solid" | "outline";

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    width: max-content;
    white-space: nowrap;
    border-radius: var(--radius-all);
    font-family: var(--font-body);
    color: var(--color-fg);
    border: none;
    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 400;
    line-height: 100%;
    cursor: pointer;

    &.ui-button--solid,
    &.ui-button--outline {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        border: 1px solid var(--btn-border);
        background-color: transparent;
        color: var(--btn-fg);
        transition: color 0.12s ease-out, border-color 0.12s ease-out, transform 0.12s ease-out;

        --btn-color: var(--color-dark);
        --btn-on: var(--color-bg);

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: var(--radius-all);
            background-color: var(--btn-color);
            opacity: var(--btn-fill);
            transition: opacity 0.125s ease-out;
            z-index: -1;
        }

        &:hover {
            color: var(--btn-fg-hover);
            border-color: var(--btn-border-hover);
            transform: translateY(-1px);
        }

        &:hover::before {
            opacity: var(--btn-fill-hover);
        }

        &:focus-visible {
            outline: 3px solid color-mix(in oklab, var(--btn-color), transparent 65%);
            outline-offset: 2px;
        }
    }

    &.ui-button--solid {
        --btn-fill: 1;
        --btn-fill-hover: 0;
        --btn-fg: var(--btn-on);
        --btn-fg-hover: var(--btn-color);
        --btn-border: transparent;
        --btn-border-hover: var(--btn-color);
    }

    &.ui-button--outline {
        --btn-fill: 0;
        --btn-fill-hover: 1;
        --btn-fg: var(--btn-color);
        --btn-fg-hover: var(--btn-on);
        --btn-border: var(--btn-color);
        --btn-border-hover: transparent;
    }

    @media (prefers-reduced-motion: reduce) {
        &.ui-button--solid,
        &.ui-button--outline {
            transition: none;

            &:hover {
                transform: none;
            }

            &::before {
                transition: none;
            }
        }
    }
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export default function Button({
    children,
    className,
    type = "button",
    variant = "solid",
    ...props
}: ButtonProps) {

    const variantClass = variant ? `ui-button--${variant}` : undefined;
    const computedClassName = [variantClass, className].filter(Boolean).join(" ");

    return <ButtonContainer
        className={computedClassName}
        type={type}
        {...props}
    >
        {children}
    </ButtonContainer>
}