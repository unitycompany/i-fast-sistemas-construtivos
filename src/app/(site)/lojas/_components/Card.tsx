"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { EnvelopeIcon, MapPinIcon, PhoneCallIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useMemo, useState } from "react";

const CardContainer = styled.article`
    @keyframes cardDotPulse {
        0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.18);
        }
        70% {
            transform: scale(1.15);
            opacity: 0.85;
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
        100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 6px;
    border-radius: 18px;
    position: relative;
    border: 2px solid #f5f5f5;

    & .card__image {
        position: relative;
        width: 100%;
        height: 220px;
        border-radius: 14px;
        overflow: hidden;
        background-color: #f5f5f5;

        &-status {
            position: absolute;
            top: 6px;
            left: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 10px;
            gap: 8px;
            background-color: var(--color-bg);
            border-radius: 8px;

            &-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: var(--color-muted);

                animation: cardDotPulse 1.6s ease-in-out infinite;
            }

            &.is-open .card__image-status-dot {
                background-color: var(--color-success, #1a7f37);
            }

            &.is-closed .card__image-status-dot {
                background-color: var(--color-danger, #e5484d);
            }

            &-info {
                font-size: 14px;
                line-height: 120%;
                font-weight: 400;
                color: var(--color-dark);
                letter-spacing: -1px;
            }
        }

        &-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    & .card__location {
        border: 2px solid #f5f5f5;
        background-color: var(--color-bg);
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 8px;
        top: 198px;
        transform: translateY(-50%);
        cursor: pointer;

        & > svg {
            width: 24px;
            height: 24px;
        }
    }

    & .card__info {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
        flex-direction: column;
        padding: 12px;

        &-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;

            &-name {
                font-size: 20px;
                line-height: 110%;
                font-weight: 500;
                letter-spacing: -0.5px;
            }

            &-address {
                font-size: 14px;
                line-height: 120%;
                font-weight: 400;
                letter-spacing: -0.25px;
                color: var(--color-muted);
            }
        }

        &-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;
            list-style: none;
            padding: 4px 0;

            &-item {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                width: 100%;

                &-link {
                    border: none;
                    background: none;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 8px;
                    text-decoration: none;
                    color: var(--color-muted);
                    font-size: 14px;
                    width: 100%;

                    & > svg {
                        width: 16px;
                        height: 16px;
                    }

                    &-text {
                        font-size: 14px;
                        line-height: 120%;
                        font-weight: 400;
                        width: 100%;
                    }
                }
            }
        }

        &-hours {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2px;

            &-week {
                font-size: 14px;
                line-height: 120%;
                font-weight: 400;
                color: var(--color-muted);
                letter-spacing: -0.5px;

                & strong {
                    font-weight: 600;
                    color: var(--color-dark);
                }
            }

            &-weekends {
                font-size: 14px;
                line-height: 120%;
                font-weight: 400;
                color: var(--color-muted);
                letter-spacing: -0.5px;

                & strong {
                    font-weight: 600;
                    color: var(--color-dark);
                }
            }
        }
    }
`

const WEEKDAY_LABELS: Record<number, string> = {
    1: "seg",
    2: "ter",
    3: "qua",
    4: "qui",
    5: "sex",
    6: "sáb",
    0: "dom",
};

function pad2(n: number) {
    return String(n).padStart(2, "0");
}

function formatTimePt(minutesFromMidnight: number) {
    const h = Math.floor(minutesFromMidnight / 60);
    const m = minutesFromMidnight % 60;
    return m === 0 ? `${h}h` : `${h}h${pad2(m)}`;
}

function parseTimeRange(text?: string) {
    if (!text) return null;
    // Exemplos aceitos:
    // - 08h às 18h
    // - 08:00 às 18:00
    // - 8h às 18h
    const rx = /(\d{1,2})(?:h|:)?(\d{2})?\s*(?:às|as|\-|a)\s*(\d{1,2})(?:h|:)?(\d{2})?/i;
    const match = text.match(rx);
    if (!match) return null;
    const h1 = Number(match[1]);
    const m1 = match[2] ? Number(match[2]) : 0;
    const h2 = Number(match[3]);
    const m2 = match[4] ? Number(match[4]) : 0;
    if ([h1, m1, h2, m2].some((n) => Number.isNaN(n))) return null;
    return {
        open: h1 * 60 + m1,
        close: h2 * 60 + m2,
    };
}

function computeOpenStatus(params: {
    now: Date;
    weekRange: { open: number; close: number } | null;
    satRange: { open: number; close: number } | null;
}) {
    const { now, weekRange, satRange } = params;
    const day = now.getDay(); // 0 dom ... 6 sáb
    const minutesNow = now.getHours() * 60 + now.getMinutes();

    const todayRange = day === 6 ? satRange : day === 0 ? null : weekRange;
    const isOpenNow = !!todayRange && minutesNow >= todayRange.open && minutesNow < todayRange.close;
    if (isOpenNow) {
        return { isOpen: true, label: "Aberto agora" };
    }

    // Se não temos range, mostramos fechado sem previsão confiável
    if (!weekRange && !satRange) {
        return { isOpen: false, label: "Fechado no momento" };
    }

    function nextOpeningFrom(base: Date) {
        // procura próximos 7 dias por uma janela válida
        for (let addDays = 0; addDays < 7; addDays++) {
            const d = new Date(base);
            d.setDate(base.getDate() + addDays);
            const dow = d.getDay();
            const range = dow === 6 ? satRange : dow === 0 ? null : weekRange;
            if (!range) continue;

            if (addDays === 0) {
                // hoje: só vale se ainda não passou do horário de abertura
                if (minutesNow < range.open) return { addDays, openMinutes: range.open, dow };
                continue;
            }

            return { addDays, openMinutes: range.open, dow };
        }
        return null;
    }

    const next = nextOpeningFrom(now);
    if (!next) return { isOpen: false, label: "Fechado no momento" };

    const timeLabel = formatTimePt(next.openMinutes);
    if (next.addDays === 0) return { isOpen: false, label: `Abre hoje às ${timeLabel}` };
    if (next.addDays === 1) return { isOpen: false, label: `Abre amanhã às ${timeLabel}` };
    return { isOpen: false, label: `Abre ${WEEKDAY_LABELS[next.dow]} às ${timeLabel}` };
}

interface CardProps {
    imageUrl?: string;
    id: string;
    mapUrl?: string;
    name: string;
    address?: string;
    email?: string;
    phone?: string | number;
    hours?: string;
    weekendHours?: string;
}

function formatBrazilPhone(rawDigits: string) {
    const digits = rawDigits.replace(/\D/g, "");
    if (!digits) return "";

    // Aceita: 5521992882282 (55 + DDD + 9 dígitos) ou 21992882282 (DDD + 9 dígitos)
    let country = "55";
    let national = digits;
    if (digits.startsWith("55") && digits.length >= 12) {
        national = digits.slice(2);
    }

    const ddd = national.slice(0, 2);
    const number = national.slice(2);

    if (ddd.length !== 2) return `+${country} ${digits}`;
    if (number.length === 9) return `+${country} (${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
    if (number.length === 8) return `+${country} (${ddd}) ${number.slice(0, 4)}-${number.slice(4)}`;
    return `+${country} (${ddd}) ${number}`;
}

export default function Card({
    imageUrl,
    id,
    mapUrl,
    email,
    name,
    phone,
    hours,
    weekendHours,
    address
}: CardProps) {
	const phoneDigits = String(phone ?? "").replace(/\D/g, "");
	const formattedPhone = formatBrazilPhone(phoneDigits);
	const whatsappNumber = phoneDigits;
    const whatsappMessage = encodeURIComponent(
        `Olá! Vim pelo site, na página de lojas, e vi a unidade "${name}". Gostaria de algumas informações, por favor.`
    );

    const handleMapClick = () => {
        if (!mapUrl) return;
        window.open(mapUrl, "_blank", "noopener,noreferrer");
    };

	const weekRange = useMemo(() => parseTimeRange(hours), [hours]);
	const satRange = useMemo(() => parseTimeRange(weekendHours), [weekendHours]);
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const id = window.setInterval(() => setNow(new Date()), 30_000);
		return () => window.clearInterval(id);
	}, []);

	const openStatus = useMemo(
		() => computeOpenStatus({ now, weekRange, satRange }),
		[now, satRange, weekRange]
	);

    return <CardContainer>
        <aside className="card__image">
            <div className={`card__image-status ${openStatus.isOpen ? "is-open" : "is-closed"}`}>
                <div className="card__image-status-dot"></div>
                <Text as="span" className="card__image-status-info">
					{openStatus.label}
                </Text>
            </div>
            {imageUrl ? (
                <img className="card__image-img" src={imageUrl} alt={id} loading="lazy" title={`loja-de-${id}`}/>
            ) : null}
        </aside>
        <div className="card__location" onClick={handleMapClick}>
            <MapPinIcon />
        </div>
        <main className="card__info">
            <div className="card__info-header">
                <Text as="h3" className="card__info-header-name">
                    {name}
                </Text>
                <Text as="p" className="card__info-header-address">
                    {address} 
                </Text>
            </div>
            <ul className="card__info-list">
                <li className="card__info-list-item">
                    {email ? (
                        <a href={`mailto:${email}`} className="card__info-list-item-link">
                            <EnvelopeIcon />
                            <Text as="span" className="card__info-list-item-text">
                                E-mail
                            </Text>
                        </a>
                    ) : null}
                </li>
                <li className="card__info-list-item">
                    {whatsappNumber ? (
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            className="card__info-list-item-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <WhatsappLogoIcon />
                            <Text as="span" className="card__info-list-item-text">
                                WhatsApp
                            </Text>
                        </a>
                    ) : null}
                </li>
                <li className="card__info-list-item">
                    {phone ? (
                        <a
                            href={`tel:+${phoneDigits}`}
                            className="card__info-list-item-link"
                        >
                            <PhoneCallIcon />
                            <Text as="span" className="card__info-list-item-text">
                                {formattedPhone || phone}
                            </Text>
                        </a>
                    ) : null}
                </li>
            </ul>
            <article className="card__info-hours">
                <Text as="h4" className="card__info-hours-week">
                    <strong>Seg a Sex,</strong> {hours}
                </Text>
                <Text as="h4" className="card__info-hours-weekends">
                    <strong>Sáb,</strong> {weekendHours}
                </Text>
            </article>
        </main>
    </CardContainer>
}