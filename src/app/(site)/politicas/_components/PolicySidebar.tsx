"use client";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArticleIcon, ChatCircleTextIcon, CheckCircleIcon, CookieIcon, GearIcon, KeyholeIcon, ShieldCheckIcon, UserCircleCheckIcon } from "@phosphor-icons/react/dist/ssr";

const PolicySidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: auto;
    max-width: 250px;
    position: relative;

    @media (max-width: 768px) {
        gap: 32px;
    }
    
    & .policy__title {
        font-size: 22px;
        line-height: 100%;
        font-weight: 500;
        letter-spacing: -1px;
        color: var(--color-dark);
        font-family: var(--font-display);

        @media (max-width: 768px) {
            font-size: 20px;
            letter-spacing: -0.5px;
        }
    }

    & .policy__list {
        list-style: none;
        display: flex;
        flex-direction: column; 
        gap: 12px;
        padding: 0;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 10px;
            z-index: -1;
            width: 1px;
            height: 100%;
            background-color: var(--color-dark);
        }

        & .policy__item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-dark);

            &-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2px;
                border-radius: 50%;
                background-color: var(--color-bg);

                & > svg {
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                }
            }

            & .policy__link {
                font-size: 16px;
                line-height: 110%;
                font-weight: 300;
                letter-spacing: -0.5px;
                font-family: var(--font-body);
                color: var(--color-muted);

                &:hover,
                &[aria-current="page"],
                &[data-active="true"],
                &.is-active {
                    text-decoration: underline;
                    color: var(--color-dark);
                }
            }
        }
    }
`

type PolicySidebarProps = {
    onNavigate?: () => void;
};

export default function PolicySidebar({ onNavigate }: PolicySidebarProps) {

    const pathname = usePathname();

    const normalizePath = (value?: string | null) => {
        if (!value) return "";
        if (value === "/") return "/";
        return value.replace(/\/+$/, "");
    };

    const policies = [
        {
            title: "Política de Privacidade",
            link: "/politicas/privacidade",
            icon: KeyholeIcon
        },
        {
            title: "Termos de Uso",
            link: "/politicas/termos",
            icon: CheckCircleIcon
        },
        {
            title: "Política de Cookies",
            link: "/politicas/cookies",
            icon: CookieIcon
        },
        {
            title: "LGPD",
            link: "/politicas/lgpd",
            icon: UserCircleCheckIcon
        },
        {
            title: "Segurança",
            link: "/politicas/seguranca",
            icon: GearIcon
        }
    ]

    return <PolicySidebarContainer>
        <Text as="h2" size="lg" weight="bold" className="policy__title">
            Acesse nossas políticas
        </Text>
        <ul className="policy__list">
            {policies.map((policy) => (
                <li key={policy.link} className="policy__item">
                    <div className="policy__item-icon">
                        {policy.icon && <policy.icon />}
                    </div>
                    {(() => {
                        const isActive = normalizePath(pathname) === normalizePath(policy.link);
                        return (
                    <Link
                        href={policy.link}
                        className={`policy__link${isActive ? " is-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                        data-active={isActive ? "true" : undefined}
                        onClick={onNavigate}
                    >
                        {policy.title}
                    </Link>
                        );
                    })()}
                </li>
            ))}
        </ul>
    </PolicySidebarContainer>
}