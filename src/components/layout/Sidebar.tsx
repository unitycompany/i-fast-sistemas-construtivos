"use client";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Text from "../ui/Text";

import SIDEBAR_LINKS from "@/app/(site)/_data/SidebarLinks";
import SidebarContent from "./SidebarContent";
import SidebarLink from "./SidebarLink";

function useIsMobile(breakpointPx: number) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(`(max-width: ${breakpointPx}px)`);

        const sync = () => setIsMobile(mediaQueryList.matches);
        sync();

        if (typeof mediaQueryList.addEventListener === "function") {
            mediaQueryList.addEventListener("change", sync);
            return () => mediaQueryList.removeEventListener("change", sync);
        }

        mediaQueryList.addListener(sync);
        return () => mediaQueryList.removeListener(sync);
    }, [breakpointPx]);

    return isMobile;
}

const SidebarContainer = styled.aside`
    width: 100%;
    padding: 24px 24px 32px 24px;
    background-color: var(--color-bg);
    border-top: 1px solid #05050510;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 24px;
    position: fixed;
    z-index: 999;
    top: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        overflow: auto;
        height: 100vh;
        justify-content: flex-start;
    }
`

export default function Sidebar() {
    const isMobile = useIsMobile(768);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    useEffect(() => {
        if (isMobile && expandedIndex === null) setExpandedIndex(0);
    }, [isMobile, expandedIndex]);

    return <SidebarContainer>
        {SIDEBAR_LINKS.map((link, i) => (
            <SidebarContent key={i}
                title={link.title}
                collapsible={isMobile}
                expanded={!isMobile || expandedIndex === i}
                onToggle={() => {
                    if (!isMobile) return;
                    setExpandedIndex((current) => (current === i ? null : i));
                }}
            >
                {link.items.map((sublink, j) => (
                    <SidebarLink 
                        key={j}
                        icon={sublink.icon}
                        title={sublink.label}
                        colorKey={sublink.colorKey}
                        onClick={() => window.open(sublink.href, '_self')}
                        description={sublink.description ?? ""}
                    />
                ))}
            </SidebarContent>
        ))}
    </SidebarContainer>
}