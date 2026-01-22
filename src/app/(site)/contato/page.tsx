"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import Link from "next/link";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import {
    CaretDownIcon,
    EnvelopeIcon,
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    PhoneCallIcon,
    User,
    YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useEffect, useMemo, useRef, useState } from "react";
import STORE_UNITS, { type StoreUnit } from "../lojas/_data/storesDb";

type SubmitState = "idle" | "loading" | "success" | "error";

function formatBrPhoneWithFixedCountry(input: string) {
    let digits = input.replace(/\D/g, "");
    if (digits.startsWith("55")) digits = digits.slice(2);
    digits = digits.slice(0, 11);

    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);

    if (!ddd) return "+55";
    if (!rest) return `+55 (${ddd})`;

    const isMobile = rest.length > 8;
    const first = isMobile ? rest.slice(0, 5) : rest.slice(0, 4);
    const second = isMobile ? rest.slice(5, 9) : rest.slice(4, 8);
    const formattedNumber = second ? `${first}-${second}` : first;

    return `+55 (${ddd}) ${formattedNumber}`;
}

const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 96px 0 24px 0;
    margin-bottom: 96px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 96px;
    position: relative;

    @media (max-width: 768px) {
        gap: 48px;
    }

    & .bg {
        position: absolute;
        inset: 0;
        left: 50%;
        top: 50%;
        height: calc(100% + 40px);
        width: calc(100% + 40px);
        transform: translate(-50%, -50%);
        border-radius: 24px;
        border: 1px solid #f1f1f1;
        z-index: -1;
    }

    & .contact__title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        &-title {
            font-size: 38px;
            line-height: 100%;
            font-weight: 500;
            letter-spacing: -1px;
            color: var(--color-dark);
            font-family: var(--font-display);

            @media (max-width: 768px) {
                font-size: 28px;
            }
        }

        &-description {
            font-size: 18px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.5px;
            color: var(--color-muted);
            font-family: var(--font-display);
            width: 60%;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 14px;
                width: 100%;
            }
        }
    }

    & .contact__container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 96px;
        flex-direction: row;
        position: relative;

        @media (max-width: 768px) {
            flex-direction: column-reverse;
            gap: 48px;
        }
            
        &-infos {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: flex-start;
            justify-content: center;

            @media (max-width: 768px) {
                width: 100%;
            }

            &-list {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 24px;
                width: 100%;

                @media (max-width: 768px) {
                    gap: 16px;
                }

                &-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 4px;
                    width: 100%;

                    @media (max-width: 768px) {
                        width: 100%;
                    }

                    &-label {
                        font-size: 16px;
                        line-height: 120%;
                        font-weight: 400;
                        color: var(--color-muted);
                        letter-spacing: -0.2px;
                        font-family: var(--font-display);

                        @media (max-width: 768px) {
                            font-size: 14px;
                        }
                    }

                    &-value {
                        font-size: 20px;
                        line-height: 120%;
                        font-weight: 400;
                        color: var(--color-dark);
                        letter-spacing: -0.2px;
                        font-family: var(--font-display);

                        @media (max-width: 768px) {
                            font-size: 16px;
                        }
                    }

                    & .navegation__social-list {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                        gap: 8px;
                        margin-top: 8px;
                        align-items: center;
                        justify-content: center;

                        &-item {
                            border: 1px solid var(--color-fg);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: var(--radius-all);
                            transition: all 0.1s ease-out;

                            &:hover {
                                background-color: var(--color-fg);
                                
                                & > a > svg {
                                    color: var(--color-bg);
                                    fill: var(--color-bg);
                                }
                            }

                            & > a {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 100%;
                                height: 100%;
                                padding: 6px;

                                & > svg {
                                    width: 18px;
                                    height: 18px;
                                    color: var(--color-fg);
                                    fill: var(--color-fg);
                                    transition: all 0.1s ease-out;
                                }
                            }
                        }
                    }
                }

            }

            &-line {
                width: 100%;
                height: 1px;
                background: #f1f1f1;
            }

            &-stores {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                gap: 24px;

                &-title {
                    font-size: 22px;
                    line-height: 120%;
                    font-weight: 500;
                    letter-spacing: -0.5px;
                    font-family: var(--font-display);
                }
            }
        }

        &-form {
            flex: 1;
            height: 100%;

            display: flex;
            flex-direction: column;
            gap: 18px;
            width: 100%;

            & .contactForm__grid {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 14px;

                @media (max-width: 768px) {
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                }
            }

            & .contactForm__colSpan2 {
                grid-column: 1 / -1;
            }

            & .contactForm__field {
                width: 100%;
            }

            /* Override do componente Input para casar com o layout do print */
            & .contactForm__input {
                width: 100%;
                border: 1px solid #f1f1f1;
                background: #fafafa;
                border-radius: 999px;
                padding: 14px 18px;

                & > input {
                    min-width: 0;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: -0.2px;
                    color: var(--color-dark);
                    font-family: var(--font-display);

                    &::placeholder {
                        color: var(--color-muted);
                        font-weight: 400;
                    }
                }

                & > svg {
                    width: 18px;
                    height: 18px;
                    color: var(--color-muted);
                    fill: var(--color-muted);
                }
            }

            & .contactForm__textarea {
                width: 100%;
                border: 1px solid #f1f1f1;
                background: #fafafa;
                border-radius: 18px;
                padding: 16px 18px;
                min-height: 140px;
                resize: vertical;
                font-family: var(--font-display);
                font-size: 14px;
                font-weight: 500;
                letter-spacing: -0.2px;
                color: var(--color-dark);

                &:focus {
                    outline: none;
                }

                &::placeholder {
                    color: var(--color-muted);
                    font-weight: 400;
                }
            }

            & .companySelect {
                width: 100%;
                position: relative;

                &.is-open .companySelect__trigger {
                    border-radius: 16px 16px 0 0;
                    background: #ffffff;
                }

                &__trigger {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 14px 18px;
                    border: 1px solid #f1f1f1;
                    border-radius: 999px;
                    background: #fafafa;
                    cursor: pointer;
                }

                &__text {
                    font-size: 14px;
                    line-height: 120%;
                    font-weight: 500;
                    letter-spacing: -0.2px;
                    color: var(--color-muted);
                    font-family: var(--font-display);
                    text-align: left;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    &.is-selected {
                        color: var(--color-dark);
                    }
                }

                &__icon {
                    flex: 0 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-muted);

                    & > svg {
                        width: 18px;
                        height: 18px;
                    }
                }

                &__panel {
                    position: absolute;
                    top: calc(100% - 1px);
                    left: 0;
                    right: 0;
                    z-index: 30;
                    border: 1px solid #f1f1f1;
                    border-top: none;
                    border-radius: 0 0 16px 16px;
                    background: #ffffff;
                    overflow: hidden;
                    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.06);
                }

                &__list {
                    list-style: none;
                    padding: 6px;
                    margin: 0;
                    max-height: 220px;
                    overflow: auto;
                    overscroll-behavior: contain;
                    -webkit-overflow-scrolling: touch;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                &__option {
                    width: 100%;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    border-radius: 12px;
                    padding: 12px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 14px;
                    line-height: 120%;
                    font-weight: 600;
                    letter-spacing: -0.2px;
                    color: var(--color-dark);
                    font-family: var(--font-display);
                    transition: background 140ms ease;

                    &:hover {
                        background: #f7f7f7;
                    }

                    &:focus-visible {
                        outline: 2px solid rgba(0, 0, 0, 0.08);
                    }
                }
            }

            & .contactForm__privacy {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
            }

            & .contactForm__checkbox {
                position: relative;
                width: 22px;
                height: 22px;
                flex: 0 0 auto;
            }

            & .contactForm__checkboxInput {
                appearance: none;
                -webkit-appearance: none;
                width: 22px;
                height: 22px;
                border-radius: 8px;
                border: 1px solid var(--color-dark);
                background-color: transparent;
                display: inline-block;
                cursor: pointer;
                position: absolute;
                inset: 0;

                &:checked {
                    background-color: var(--color-dark);
                }

                &:focus-visible {
                    outline: 1px solid color-mix(in oklab, var(--color-dark), transparent 70%);
                    outline-offset: 2px;
                }
            }

            & .contactForm__privacyText {
                font-size: 14px;
                line-height: 120%;
                font-weight: 400;
                letter-spacing: -0.4px;
                color: var(--color-muted);
                font-family: var(--font-display);

                & a {
                    color: var(--color-dark);
                    text-decoration: underline;

                    &:hover {
                        color: var(--color-link);
                    }
                }
            }

            & .contactForm__submit {
                width: 100%;
                justify-content: center;
                border-radius: 999px;
                padding: 16px 18px;
                font-size: 16px;
                letter-spacing: -0.4px;
            }

            & .contactForm__feedback {
                font-size: 13px;
                line-height: 120%;
                letter-spacing: -0.2px;
                font-family: var(--font-display);
                color: var(--color-muted);
            }

            & .contactForm__feedback.is-error {
                color: var(--color-danger, #e5484d);
            }

            & .contactForm__feedback.is-success {
                color: var(--color-success, #1a7f37);
            }
        }
    }

    & .contact__container-infos-stores {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
    }

    & .storeSelector {
        width: 100%;
        position: relative;

        &.is-open .storeSelector__trigger {
            border-radius: 16px 16px 0 0;
            background: #ffffff;
        }

        &__trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px 18px;
            border: 1px solid #f1f1f1;
            border-radius: 999px;
            background: #fafafa;
            cursor: pointer;
            transition: background 160ms ease, border-radius 160ms ease;

            &:hover {
                background: #ffffff;
            }

            &:focus-visible {
                outline: 2px solid rgba(0, 0, 0, 0.08);
                outline-offset: 2px;
            }
        }

        &__triggerText {
            font-size: 14px;
            line-height: 120%;
            font-weight: 500;
            letter-spacing: -0.2px;
            color: var(--color-muted);
            font-family: var(--font-display);
            text-align: left;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &.is-selected {
                color: var(--color-dark);
            }
        }

        &__icon {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-muted);

            & > svg {
                width: 18px;
                height: 18px;
            }
        }

        &__panel {
            position: absolute;
            top: calc(100% - 1px);
            left: 0;
            right: 0;
            z-index: 30;
            border: 1px solid #f1f1f1;
            border-top: none;
            border-radius: 0 0 16px 16px;
            background: #ffffff;
            overflow: hidden;
            box-shadow: 0 18px 38px rgba(0, 0, 0, 0.06);
        }

        &__search {
            padding: 10px 12px;
            border-bottom: 1px solid #f1f1f1;

            & > input {
                width: 100%;
                border: none;
                background: transparent;
                font-family: var(--font-display);
                font-size: 14px;
                color: var(--color-dark);
                letter-spacing: -0.2px;
                padding: 8px 6px;

                &:focus {
                    outline: none;
                }

                &::placeholder {
                    color: var(--color-muted);
                    font-weight: 400;
                }
            }
        }

        &__list {
            list-style: none;
            padding: 6px;
            margin: 0;
            max-height: 260px;
            overflow: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        &__option {
            width: 100%;
            border: none;
            background: transparent;
            cursor: pointer;
            border-radius: 12px;
            padding: 10px 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            transition: background 140ms ease;

            &:hover {
                background: #f7f7f7;
            }

            &:focus-visible {
                outline: 2px solid rgba(0, 0, 0, 0.08);
            }
        }

        &__optionName {
            font-size: 14px;
            line-height: 120%;
            font-weight: 600;
            letter-spacing: -0.2px;
            color: var(--color-dark);
            font-family: var(--font-display);
        }

        &__optionMeta {
            font-size: 12px;
            line-height: 120%;
            font-weight: 400;
            letter-spacing: -0.2px;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &__empty {
            padding: 14px 12px;
            font-size: 13px;
            line-height: 120%;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &__details {
            width: 100%;
            border: 1px solid #f1f1f1;
            border-radius: 14px;
            background: #ffffff;
            padding: 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &__detailsAddress {
            font-size: 14px;
            line-height: 130%;
            font-weight: 400;
            letter-spacing: -0.2px;
            color: var(--color-muted);
            font-family: var(--font-display);
        }

        &__actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        &__action {
            padding: 10px 12px;
            border-radius: 999px;
            border: 1px solid #f1f1f1;
            background: #fafafa;
            font-size: 13px;
            line-height: 120%;
            font-weight: 600;
            letter-spacing: -0.2px;
            color: var(--color-dark);
            font-family: var(--font-display);
            text-decoration: none;
            transition: background 160ms ease;

            &:hover {
                background: #ffffff;
            }
        }
    }
`

export default function ContactPage({
    email = "atendimento@fastsistemasconstrutivos.com.br",
    phone = "+55 (24) 99288-2282",
    adress = "Avenida Roberto Silveira, 251 - Centro, Miguel Pereira - RJ, CEP 26900-000"
}) {

    const selectorRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [storeQuery, setStoreQuery] = useState("");
    const [selectedStore, setSelectedStore] = useState<StoreUnit | null>(null);

    const companyRef = useRef<HTMLDivElement | null>(null);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [company, setCompany] = useState<string>("");

    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formWhatsappDigits, setFormWhatsappDigits] = useState("");
    const [formSubject, setFormSubject] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const [submitError, setSubmitError] = useState<string | null>(null);

    const COMPANY_OPTIONS = useMemo(
        () => ["Fast Sistemas Construtivos", "Fast Homes", "Steel Conecta", "Nova M"],
        []
    );

    const filteredStores = useMemo(() => {
        const q = storeQuery.trim().toLowerCase();
        if (!q) return STORE_UNITS;
        return STORE_UNITS.filter((store) => {
            const hay = `${store.name} ${store.city} ${store.state}`.toLowerCase();
            return hay.includes(q);
        });
    }, [storeQuery]);

    useEffect(() => {
        if (!isSelectorOpen) return;
        const id = window.setTimeout(() => searchRef.current?.focus(), 0);
        return () => window.clearTimeout(id);
    }, [isSelectorOpen]);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node | null;
            if (!target) return;
            const clickedStore = selectorRef.current?.contains(target) ?? false;
            const clickedCompany = companyRef.current?.contains(target) ?? false;
            if (clickedStore || clickedCompany) return;
            setIsSelectorOpen(false);
            setIsCompanyOpen(false);
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("touchstart", handlePointerDown);
        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("touchstart", handlePointerDown);
        };
    }, []);

    const isFormValid = useMemo(() => {
        const looksLikeEmail = /.+@.+\..+/.test(formEmail.trim());
        const hasPhone = formWhatsappDigits.trim().length >= 10;
        return (
            formName.trim().length > 1 &&
            looksLikeEmail &&
            hasPhone &&
            company.trim().length > 0 &&
            formSubject.trim().length > 1 &&
            formMessage.trim().length > 4 &&
            agreed
        );
    }, [agreed, company, formEmail, formMessage, formName, formSubject, formWhatsappDigits]);

    const contactMethods = [
        {
            label: "E-mail",
            value: email
        },
        {
            label: "WhatsApp",
            value: phone
        },
        {
            label: "Endereço",
            value: adress
        }
    ]

    return <ContactContainer>
        <div className="bg"></div>
        <aside className="contact__title">
            <Text as="h1" className="contact__title-title">
                Entre em contato
            </Text>
            <Text as="p" className="contact__title-description">
                Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em nos contatar. Nossa equipe está pronta para ouvir você e fornecer o suporte necessário.
            </Text>
        </aside>
        <main className="contact__container">
            <div className="contact__container-infos">
                <ul className="contact__container-infos-list">
                    {
                        contactMethods.map((method, index) => (
                            <li key={index} className="contact__container-infos-list-item">
                                <Text as="span" className="contact__container-infos-list-item-label">
                                    {method.label}
                                </Text>
                                <Text as="h4" className="contact__container-infos-list-item-value">
                                    {method.value}
                                </Text>
                            </li>
                        ))
                    }
                    <li className="contact__container-infos-list-item">
                        <Text as="span" className="contact__container-infos-list-item-label">
                            Redes Sociais
                        </Text>
                        <ol className="navegation__social-list">
                            <li className="navegation__social-list-item">
                                <a href="" target="_blank">
                                    <FacebookLogoIcon />
                                </a>
                            </li>
                            <li className="navegation__social-list-item">
                                <a href="" target="_blank">
                                    <InstagramLogoIcon />
                                </a>
                            </li>
                            <li className="navegation__social-list-item">
                                <a href="" target="_blank">
                                    <YoutubeLogoIcon />
                                </a>
                            </li>
                            <li className="navegation__social-list-item">
                                <a href="" target="_blank">
                                    <LinkedinLogoIcon />
                                </a>
                            </li>
                        </ol>
                    </li>
                </ul>
                <div className="contact__container-infos-line"></div>
                <aside className="contact__container-infos-stores">
                    <Text as="h3" className="contact__container-infos-stores-title">
                        Está buscando uma loja específica?
                    </Text> 
                    <div ref={selectorRef} className={`storeSelector ${isSelectorOpen ? "is-open" : ""}`}
                    >
                        <button
                            type="button"
                            className="storeSelector__trigger"
                            onClick={() => setIsSelectorOpen((v) => !v)}
                            aria-haspopup="listbox"
                            aria-expanded={isSelectorOpen}
                        >
                            <span
                                className={`storeSelector__triggerText ${selectedStore ? "is-selected" : ""}`}
                            >
                                {selectedStore ? selectedStore.name : "Selecione uma loja e saiba mais"}
                            </span>
                            <span className="storeSelector__icon" aria-hidden="true">
                                <CaretDownIcon />
                            </span>
                        </button>

                        {isSelectorOpen ? (
                            <div className="storeSelector__panel">
                                <div className="storeSelector__search">
                                    <input
                                        ref={searchRef}
                                        value={storeQuery}
                                        onChange={(e) => setStoreQuery(e.target.value)}
                                        placeholder="Buscar por cidade, estado ou nome"
                                        aria-label="Buscar loja"
                                    />
                                </div>

                                {filteredStores.length === 0 ? (
                                    <div className="storeSelector__empty">Nenhuma loja encontrada.</div>
                                ) : (
                                    <ul className="storeSelector__list" role="listbox" data-lenis-prevent>
                                        {filteredStores.map((store) => (
                                            <li key={store.id}>
                                                <button
                                                    type="button"
                                                    className="storeSelector__option"
                                                    onClick={() => {
                                                        setSelectedStore(store);
                                                        setIsSelectorOpen(false);
                                                        setStoreQuery("");
                                                    }}
                                                    role="option"
                                                    aria-selected={selectedStore?.id === store.id}
                                                >
                                                    <span className="storeSelector__optionName">{store.name}</span>
                                                    <span className="storeSelector__optionMeta">{store.city} - {store.state}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : null}
                    </div>

                    {selectedStore ? (
                        <div className="storeSelector__details">
                            {selectedStore.addressLine1 ? (
                                <Text as="p" className="storeSelector__detailsAddress">
                                    {selectedStore.addressLine1}
                                </Text>
                            ) : null}
                            <div className="storeSelector__actions">
                                {selectedStore.mapUrl ? (
                                    <a
                                        className="storeSelector__action"
                                        href={selectedStore.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Abrir no mapa
                                    </a>
                                ) : null}
                                <Link className="storeSelector__action" href={`/lojas?store=${selectedStore.id}`}>
                                    Ver detalhes
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </aside>
            </div>
            <form
                className="contact__container-form"
                id="contactForm"
                onSubmit={async (e) => {
                    e.preventDefault();
                    if (submitState === "loading") return;

                    if (!isFormValid) {
                        setSubmitError("Preencha todos os campos e aceite a política.");
                        setSubmitState("error");
                        return;
                    }

                    setSubmitError(null);
                    setSubmitState("loading");

                    try {
                        // Base (placeholder) — conecte aqui seu endpoint quando estiver pronto.
                        await new Promise((r) => setTimeout(r, 900));

                        setSubmitState("success");
                        setFormName("");
                        setFormEmail("");
                        setFormWhatsappDigits("");
                        setCompany("");
                        setFormSubject("");
                        setFormMessage("");
                        setAgreed(false);

                        window.setTimeout(() => {
                            setSubmitState("idle");
                        }, 2400);
                    } catch (err) {
                        const message = err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.";
                        setSubmitError(message);
                        setSubmitState("error");
                    }
                }}
            >
                <div className="contactForm__grid">
                    <div className="contactForm__field">
                        <Input
                            className="contactForm__input"
                            type="text"
                            id="contact-name"
                            name="name"
                            placeholder="Digite seu nome"
                            icon={User}
                            value={formName}
                            onChange={(e) => setFormName(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="contactForm__field">
                        <Input
                            className="contactForm__input"
                            type="email"
                            id="contact-email"
                            name="email"
                            placeholder="Seu e-mail"
                            icon={EnvelopeIcon}
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.currentTarget.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="contactForm__field">
                        <Input
                            className="contactForm__input"
                            type="tel"
                            id="contact-whatsapp"
                            name="whatsapp"
                            placeholder="WhatsApp"
                            icon={PhoneCallIcon}
                            inputMode="numeric"
                            autoComplete="tel"
                            value={formatBrPhoneWithFixedCountry(formWhatsappDigits)}
                            onChange={(e) => {
                                const nextDigits = e.currentTarget.value
                                    .replace(/\D/g, "")
                                    .replace(/^55/, "")
                                    .slice(0, 11);
                                setFormWhatsappDigits(nextDigits);
                            }}
                            required
                        />
                    </div>

                    <div className="contactForm__field">
                        <div
                            ref={companyRef}
                            className={`companySelect ${isCompanyOpen ? "is-open" : ""}`}
                        >
                            <button
                                type="button"
                                className="companySelect__trigger"
                                onClick={() => setIsCompanyOpen((v) => !v)}
                                aria-haspopup="listbox"
                                aria-expanded={isCompanyOpen}
                            >
                                <span className={`companySelect__text ${company ? "is-selected" : ""}`}>
                                    {company ? company : "Seleciona a empresa"}
                                </span>
                                <span className="companySelect__icon" aria-hidden="true">
                                    <CaretDownIcon />
                                </span>
                            </button>

                            {isCompanyOpen ? (
                                <div className="companySelect__panel">
                                    <ul className="companySelect__list" role="listbox" data-lenis-prevent>
                                        {COMPANY_OPTIONS.map((opt) => (
                                            <li key={opt}>
                                                <button
                                                    type="button"
                                                    className="companySelect__option"
                                                    onClick={() => {
                                                        setCompany(opt);
                                                        setIsCompanyOpen(false);
                                                    }}
                                                    role="option"
                                                    aria-selected={company === opt}
                                                >
                                                    {opt}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="contactForm__field contactForm__colSpan2">
                        <Input
                            className="contactForm__input"
                            type="text"
                            id="contact-subject"
                            name="subject"
                            placeholder="Assunto"
                            icon={EnvelopeIcon}
                            value={formSubject}
                            onChange={(e) => setFormSubject(e.currentTarget.value)}
                            required
                        />
                    </div>

                    <div className="contactForm__field contactForm__colSpan2">
                        <textarea
                            className="contactForm__textarea"
                            id="contact-message"
                            name="message"
                            placeholder="Digite aqui sobre o que deseja falar"
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.currentTarget.value)}
                            required
                        />
                    </div>
                </div>

                <div className="contactForm__privacy">
                    <span className="contactForm__checkbox">
                        <input
                            className="contactForm__checkboxInput"
                            type="checkbox"
                            id="privacy_policy_agreement"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.currentTarget.checked)}
                            required
                        />
                    </span>
                    <Text as="p" className="contactForm__privacyText">
                        Ao selecionar esse campo, você declara que concorda com a nossa{" "}
                        <Link href="/politicas/privacidade">política de privacidade</Link>, e{" "}
                        <Link href="/politicas/termos">termos de uso</Link>.
                    </Text>
                </div>

                <Button
                    type="submit"
                    className="contactForm__submit"
                    variant="solid"
                    disabled={!isFormValid || submitState === "loading"}
                >
                    {submitState === "loading" ? "Enviando..." : "Enviar mensagem"}
                </Button>

                {submitState === "error" && submitError ? (
                    <div className="contactForm__feedback is-error">{submitError}</div>
                ) : null}
                {submitState === "success" ? (
                    <div className="contactForm__feedback is-success">Mensagem enviada com sucesso!</div>
                ) : null}
            </form>
        </main>
    </ContactContainer>
} 