import type { IconSvg } from "@/components/icons/Icon";
import {
    ArticleIcon,
    BookOpenIcon,
    BrowserIcon,
    BracketsSquareIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    CheckerboardIcon,
    CookieIcon,
    EarSlashIcon,
    EnvelopeOpenIcon,
    FacebookLogoIcon,
    GearIcon,
    GlobeHemisphereEastIcon,
    HouseLineIcon,
    InstagramLogoIcon,
    KeyholeIcon,
    LinkedinLogoIcon,
    MapTrifoldIcon,
    OptionIcon,
    PaintRollerIcon,
    PhoneCallIcon,
    PhoneIcon,
    SpeakerSimpleHighIcon,
    StorefrontIcon,
    UserCircleCheckIcon,
    WarehouseIcon,
    WhatsappLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export type FooterSocialLink = {
    href: string;
    icon: IconSvg;
    label: string;
};

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
    { href: "", icon: FacebookLogoIcon, label: "Facebook" },
    { href: "", icon: InstagramLogoIcon, label: "Instagram" },
    { href: "", icon: YoutubeLogoIcon, label: "YouTube" },
    { href: "", icon: LinkedinLogoIcon, label: "LinkedIn" },
];

export type FooterMenuItem = {
    label: string;
    href: string;
    icon?: IconSvg;
    targetBlank?: boolean;
};

export type FooterMenuSection = {
    title: string;
    items: FooterMenuItem[];
};

export const FOOTER_MENUS: FooterMenuSection[] = [
    {
        title: "Steel Frame",
        items: [
            { label: "Residencial", href: "/steel-frame/residencial", icon: HouseLineIcon },
            { label: "Comercial", href: "/steel-frame/comercial", icon: BuildingOfficeIcon },
            { label: "Telhados e Lajes", href: "/steel-frame/telhados-e-lajes", icon: OptionIcon },
            { label: "Fachadas", href: "/steel-frame/fachadas", icon: GlobeHemisphereEastIcon },
        ],
    },
    {
        title: "Drywall",
        items: [
            { label: "Forros", href: "/drywall/forros", icon: BracketsSquareIcon },
            { label: "Paredes", href: "/drywall/paredes", icon: BrowserIcon },
            { label: "Complementos", href: "/drywall/complementos", icon: CheckerboardIcon },
        ],
    },
    {
        title: "Acústica",
        items: [
            { label: "Forros acústicos", href: "/acustica/forros-acusticos", icon: SpeakerSimpleHighIcon },
            { label: "Tratamento de acústica", href: "/acustica/tratamento-de-acustica", icon: EarSlashIcon },
        ],
    },
    {
        title: "Sistemas",
        items: [
            { label: "Lojas", href: "/lojas", icon: StorefrontIcon },
        ],
    },
    {
        title: "Casas",
        items: [
            {
                label: "Casas Pré Fabricadas",
                href: "https://fasthomes.com.br",
                icon: WarehouseIcon,
                targetBlank: true,
            },
        ],
    },
    {
        title: "Contato",
        items: [
            {
                label: "WhatsApp",
                href: "https://wa.me/5524981911292",
                icon: WhatsappLogoIcon,
                targetBlank: true,
            },
            { label: "+55 (24) 98191-1292", href: "tel:+5524981911292", icon: PhoneIcon },
            {
                label: "E-mail",
                href: "mailto:atendimento@fastsistemasconstrutivos.com.br",
                icon: EnvelopeOpenIcon,
            },
        ],
    },
    {
        title: "Explore",
        items: [
            { label: "Nossas Lojas", href: "/lojas", icon: StorefrontIcon },
            { label: "Sobre a Fast", href: "/sobre", icon: BookOpenIcon },
            { label: "Contato", href: "/contato", icon: PhoneCallIcon },
        ],
    },
    {
        title: "Politicas",
        items: [
            { label: "Politica de Privacidade", href: "/politicas/privacidade", icon: KeyholeIcon },
            { label: "Termos de Uso", href: "/politicas/termos", icon: CheckCircleIcon },
            { label: "Politica de Cookies", href: "/politicas/cookies", icon: CookieIcon },
            { label: "LGPD", href: "/politicas/lgpd", icon: UserCircleCheckIcon },
            { label: "Segurança", href: "/politicas/seguranca", icon: GearIcon },
        ],
    },
];
