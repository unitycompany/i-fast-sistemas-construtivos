"use client";
import Text from "@/components/ui/Text";
import STORE_UNITS from "./_data/storesDb";
import styled from "@emotion/styled";
import SearchSection from "./_sections/search";
import Card from "./_components/Card";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const LojasContent = styled.main`
    padding: 96px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    & .lojas__texts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 48px;
        width: 100%;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        & > h1 {
            font-size: 38px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-dark);
            font-family: var(--font-display);
            text-align: center;
            width: 50%;

            @media (max-width: 768px) {
                font-size: 28px;
                width: 100%;
            }
        }

        & > p {
            font-size: 16px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.5px;
            color: var(--color-muted);
            font-family: var(--font-display);
            display: inline-flex;
            align-items: center;
            gap: 6px;

            @media (max-width: 768px) {
                font-size: 16px;

            }
        }
    }

    & .lojas__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 8px;
        width: 100%;
        margin-top: -24px;

        @media (max-width: 768px) {
            margin-top: -32px;
        }
    }
`

export default function LojasPage() {
    const [selectedStoreId, setSelectedStoreId] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(8);
    const searchParams = useSearchParams();
    const autoSelectedRef = useRef<string | null>(null);

    const totalStores = STORE_UNITS.length;

    useEffect(() => {
        if (visibleCount >= totalStores) return;
        const step = 6;
        const interval = window.setInterval(() => {
            setVisibleCount((prev) => (prev >= totalStores ? prev : Math.min(prev + step, totalStores)));
        }, 140);
        return () => window.clearInterval(interval);
    }, [totalStores, visibleCount]);

    const visibleStores = useMemo(
        () => STORE_UNITS.slice(0, visibleCount),
        [visibleCount]
    );

    const scrollToStore = useCallback((storeId: string, attempts = 0) => {
        if (typeof window === "undefined") return;
        const target = document.getElementById(`store-card-${storeId}`);
        if (!target) {
            if (attempts < 6) {
                window.setTimeout(() => scrollToStore(storeId, attempts + 1), 80);
            }
            return;
        }
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        if ("focus" in target) {
            (target as HTMLElement).focus({ preventScroll: true });
        }
    }, []);

    const handleSelectStore = useCallback((storeId: string) => {
        setSelectedStoreId(storeId);
        const index = STORE_UNITS.findIndex((store) => store.id === storeId);
        if (index >= 0 && index + 1 > visibleCount) {
            setVisibleCount(index + 1);
        }
        scrollToStore(storeId);
    }, [scrollToStore, visibleCount]);

    useEffect(() => {
        const fromQuery = searchParams.get("store");
        const fromHash = typeof window !== "undefined"
            ? (window.location.hash?.match(/^#store-card-(.+)$/)?.[1] ?? null)
            : null;

        const storeId = fromQuery || fromHash;
        if (!storeId) return;
        if (autoSelectedRef.current === storeId) return;
        autoSelectedRef.current = storeId;
        handleSelectStore(storeId);
    }, [handleSelectStore, searchParams]);

	return <LojasContent>
        <aside className="lojas__texts">
            <Text as="h1">
                Conheça todas as nossas unidades
            </Text>
        </aside>
        <SearchSection onSelectStore={handleSelectStore} />
        <main className="lojas__cards">
            {
                visibleStores.map((store, index) => (
                    <Card
                        key={`${index}-${store.id}`}
                        imageUrl={store.imageUrl}
                        id={store.id}
                        mapUrl={store.mapUrl}
                        name={store.name}
                        address={store.addressLine1}
                        email={store.email}
                        phone={store.phone}
                        hours={store.hours}
                        weekendHours={store.hoursWeekend}
                        isSelected={selectedStoreId === store.id}
                        enterDelayMs={index * 40}
                    />
                ))
            }
        </main>
    </LojasContent>
}
