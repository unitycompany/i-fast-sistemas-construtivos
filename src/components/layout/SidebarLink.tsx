"use client";
import styled from "@emotion/styled";
import Icon from "../icons/Icon";
import React from "react";
import Text from "../ui/Text";

type SidebarLinkContainerProps = {
    colorKey?: string;
};

const SidebarLinkContainer = styled("button", {
    shouldForwardProp: (prop) => prop !== "colorKey",
})<SidebarLinkContainerProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    cursor: pointer;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    transition: all 0.2s ease;

    &:hover {
        border-left: 2px solid ${(props) => props.colorKey || "var(--color-dark)"};
        padding: 0 8px;
    } 

    & > svg {
        width: 32px;
        height: 32px;

        @media (max-width: 768px) {
            width: 28px;
            height: 28px;
        }
    }

    & .sidebar__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 4px;
        width: 80%;

        & .sidebar__title {
            font-weight: 600;
            font-size: 16px;
            color: var(--color-dark);
            font-family: var(--font-display);
            letter-spacing: -0.4px;
            line-height: 1;
        }

        & .sidebar__description {
            font-weight: 400;
            font-size: 12px;
            color: var(--color-muted);
            font-family: var(--font-body);
            line-height: 1.1;
            letter-spacing: -0.2px;
            text-align: left;
        }
    }
`

interface SidebarLinkProps {
    icon?: React.ComponentProps<typeof Icon>["svg"];
    title: string;
    description: string;
    colorKey?: string;
    onClick: () => void;
}

export default function SidebarLink({
    icon: IconComponent,
    colorKey,
    onClick,
    title = 'Default',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}: SidebarLinkProps) {
    return <SidebarLinkContainer onClick={onClick} colorKey={colorKey}>
        {
            IconComponent ? <Icon svg={IconComponent} color={colorKey} /> : null
        }
        <aside className="sidebar__content">
            <Text as="h6" className="sidebar__title">
                {title}
            </Text>
            <Text as="p" className="sidebar__description">
                {description}
            </Text>
        </aside>
    </SidebarLinkContainer>
}