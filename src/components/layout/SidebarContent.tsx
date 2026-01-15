"use client";
import styled from "@emotion/styled";
import React from "react";
import Text from "../ui/Text";
import { ArrowDownIcon, CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

const SidebarContentContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 18px;
    width: 100%;

    & .sidebar__content-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (max-width: 768px) {
            cursor: pointer;
        }

        & .sidebar__content-title {
            font-weight: 600;
            font-size: 18px;
            color: var(--color-dark);
            font-family: var(--font-display);
            letter-spacing: -0.4px;
            line-height: 1;
        }

        & .sidebar__content-expand-button {
            border: none;
            background: transparent;
            cursor: pointer;
            display: none;

            @media (max-width: 768px) {
                display: block;
            }

            & > svg {
                color: var(--color-dark);
                font-size: 20px;
                transition: all 0.3s ease;
            }
        }
    }

    & .sidebar__content-collapsible {
        width: 100%;

        @media (max-width: 768px) {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.35s ease;
        }

        &.is-expanded {
            @media (max-width: 768px) {
                grid-template-rows: 1fr;
            }
        }
    }

    & .sidebar__content-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 18px;
        width: 100%;

        @media (max-width: 768px) {
            overflow: hidden;
            min-height: 0;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
            transition: opacity 0.2s ease, transform 0.35s ease;
        }
    }

    & .sidebar__content-collapsible.is-expanded .sidebar__content-list {
        @media (max-width: 768px) {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
    }
`

interface SidebarContentProps {
    title: string;
    children: React.ReactNode;
    expanded?: boolean;
    collapsible?: boolean;
    onToggle?: () => void;
}

export default function SidebarContent({
    title = 'Default Title',
    children,
    expanded = true,
    collapsible = false,
    onToggle,
}: SidebarContentProps) {
    return <SidebarContentContainer>
        <div
            className="sidebar__content-header"
            onClick={collapsible ? onToggle : undefined}
            role={collapsible ? "button" : undefined}
            tabIndex={collapsible ? 0 : undefined}
            onKeyDown={(e) => {
                if (!collapsible) return;
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onToggle?.();
                }
            }}
        >
            <Text as="h4" className="sidebar__content-title">
                {title}
            </Text>
            <button
                type="button"
                className="sidebar__content-expand-button"
                aria-expanded={expanded}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggle?.();
                }}
            >
                {expanded ? <ArrowDownIcon /> : <CaretDownIcon />}
            </button>
        </div>
        <div className={`sidebar__content-collapsible ${expanded ? "is-expanded" : ""}`.trim()}>
            <ol className="sidebar__content-list">
                {children}
            </ol>
        </div>
    </SidebarContentContainer>
}