"use client";
import Button from "@/components/ui/Button";
import PublicImage from "@/components/ui/PublicImage";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import Image from "next/image";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    & .card__image {
        width: 100%;
        height: 260px;
        border-radius: 12px;
    }

    & .card__logo-absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
        height: 64px;
        border-radius: 99px;
        background-color: var(--color-bg);
        border: 6px solid #F9F9F9;
        display: flex;
        align-items: center;
        justify-content: center;

        & > img {
            width: 32px;
            height: 32px;
            object-fit: cover;
            object-position: center;
        }
    }

    & .card__infos {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 18px;
        height: 260px;
        padding: 0 48px;
        border-radius: 12px;
        background-color: var(--color-bg);

        @media (max-width: 768px) {
            padding: 0 24px;
        }

        &-title {
            font-size: 28px;
            font-weight: 400;
            color: var(--color-dark);
            font-family: var(--font-display);
            letter-spacing: -1px;
        }

        &-description {
            font-size: 16px;
            font-weight: 300;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &-button {
            background-color: transparent;
            border: 1px solid var(--color-dark);
            color: var(--color-dark);
            font-size: 16px;
        }
    }
`

interface CardServiceProps {
    image: string;
    title: string;
    description: string;
}

export default function CardService({
    image, 
    title,
    description
}: CardServiceProps) {
    return <Card>
        <Image src={image} alt={title} width={160} height={64} className="card__image"/>
        <div className="card__logo-absolute">
            <PublicImage src="/icon-fast-sistemas-construtivos.svg" alt="Logo da fast sistemas construtivos"  loading="lazy" />
        </div>
        <main className="card__infos">
            <Text as="h4" className="card__infos-title">{title}</Text>
            <Text as="p" className="card__infos-description">{description}</Text>
            <Button
                type="button"
                className="card__infos-button"
                id="service-button"
            >   
                Conhecer mais
            </Button>
        </main>
    </Card>
}