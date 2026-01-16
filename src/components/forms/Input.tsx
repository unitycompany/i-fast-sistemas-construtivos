"use client";

import styled from "@emotion/styled";
import Icon from "../icons/Icon";
import React from "react";

const Label = styled.label`
    border: 1px solid var(--color-fg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    width: fit-content;
    border-radius: var(--radius-all);
    background-color: var(--color-background);

    & > input {
        border: none;
        background-color: transparent;
        flex: 1;
        font-family: var(--font-display);
        color: var(--color-fg);
        font-weight: 600;
        font-size: 16px;
        width: auto;
        min-width: 160px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: var(--color-muted);
            font-weight: 400;
        }
    }

    & > svg {
        width: 20px;
        height: 20px;
        color: var(--color-fg);
        fill: var(--color-fg);
    }
`

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

interface InputProps extends NativeInputProps {
    type: string;
    icon?: React.ComponentProps<typeof Icon>["svg"];
    className?: string;
}

export default function Input({
    type,
    required = true,
    placeholder = 'Digite aqui...',
    className,
    id,
    icon: IconComponent,
    ...inputProps
}: InputProps) {
    return (
        <>
            <Label 
                className={className}
            >
                <input 
                    type={type} 
                    required={required} 
                    placeholder={placeholder} 
                    id={id}  
                    {...inputProps}
                />
                {
                    IconComponent ? <Icon svg={IconComponent} aria-hidden="true" focusable="false" /> : null
                }
            </Label>
        </>
    )
}