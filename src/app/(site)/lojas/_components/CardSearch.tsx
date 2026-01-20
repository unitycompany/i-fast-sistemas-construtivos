"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";

const CardSearchContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }

    & .card__image {
        position: relative;
        width: 100px;
        height: 82px;
        border-radius: 8px;
        overflow: hidden;

        @media (max-width: 768px) {
            width: 100px;
            height: 62px;
        }
        
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &-dot {
            position: absolute;
            bottom: 6px;
            right: 6px;
            width: 12px;
            height: 12px;
            background-color: var(--color-muted);
            border-radius: 50%;

            animation: cardSearchDotPulse 1.6s ease-in-out infinite;
        }

        &-dot.is-open {
            background-color: var(--color-success, #1a7f37);
        }

        &-dot.is-closed {
            background-color: var(--color-danger, #e5484d);
        }
    }

    @keyframes cardSearchDotPulse {
        0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.18);
        }
        70% {
            transform: scale(1.15);
            opacity: 0.85;
            box-shadow: 0 0 0 12px rgba(0, 0, 0, 0);
        }
        100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }

    & .card__texts {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
        justify-content: center;
        width: 100%;

        & > h2 {
            font-size: 20px;
            line-height: 120%;
            font-weight: 500;
            letter-spacing: -0.5px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 18px;
            }
        }

        & > span {
            font-size: 14px;
            line-height: 120%;
            font-weight: 500;
            letter-spacing: -0.25px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 12px;
            }
        }

        & > p {
            font-size: 14px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.5px;
            color: var(--color-muted);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 12px;
            }
        }
    }
`

interface CardSearchProps {
    nome: string;
    adress: string;
    imageUrl: string;
    km: number;
    hours?: string;
    weekendHours?: string;
}

function parseTimeRange(text?: string) {
    if (!text) return null;
    const rx = /(\d{1,2})(?:h|:)?(\d{2})?\s*(?:às|as|\-|a)\s*(\d{1,2})(?:h|:)?(\d{2})?/i;
    const match = text.match(rx);
    if (!match) return null;
    const h1 = Number(match[1]);
    const m1 = match[2] ? Number(match[2]) : 0;
    const h2 = Number(match[3]);
    const m2 = match[4] ? Number(match[4]) : 0;
    if ([h1, m1, h2, m2].some((n) => Number.isNaN(n))) return null;
    return { open: h1 * 60 + m1, close: h2 * 60 + m2 };
}

function isOpenNow(params: { now: Date; hours?: string; weekendHours?: string }) {
    const { now, hours, weekendHours } = params;
    const day = now.getDay();
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    const weekRange = parseTimeRange(hours);
    const satRange = parseTimeRange(weekendHours);
    const todayRange = day === 6 ? satRange : day === 0 ? null : weekRange;
    return !!todayRange && minutesNow >= todayRange.open && minutesNow < todayRange.close;
}

export default function CardSearch({
    nome,
    adress,
    imageUrl,
    km,
	hours,
	weekendHours
}: CardSearchProps) {
	const open = isOpenNow({ now: new Date(), hours, weekendHours });

    return <CardSearchContainer>
        <aside className="card__image">
            <div className={`card__image-dot ${open ? "is-open" : "is-closed"}`}></div>
            <img src={imageUrl} alt={nome} />
        </aside>
        <main className="card__texts">
            <Text as="h2">{nome}</Text>
            <Text as="span">{km.toFixed(1)}KM de distância</Text>
            <Text as="p">{adress}</Text>
        </main>
    </CardSearchContainer>;
}