import React from "react";
import type { IconSvg } from "@/components/icons/Icon";
import { BookOpenIcon, BracketsSquareIcon, BrowserIcon, BuildingOfficeIcon, CheckerboardIcon, EarSlashIcon, GridFourIcon, HouseLineIcon, InfoIcon, MapTrifoldIcon, OptionIcon, ParallelogramIcon, PhoneCallIcon, ShoppingCartIcon, SpeakerSimpleHighIcon, StackSimpleIcon, StorefrontIcon, WindowsLogoIcon } from "@phosphor-icons/react/dist/ssr";

export type SidebarLinkItem = {
	label: string;
	/** opcional: cor/tema do item (use como chave; o estilo você decide no componente) */
	colorKey?: string;
	href: string;
	/** chave simples pra você filtrar/selecionar por categoria */
	filterKey: string;
    description?: string;
    icon?: IconSvg;
};

export type SidebarLinkCategory = {
	title: string;
	filterKey: string;
	items: SidebarLinkItem[];
};

export const SIDEBAR_LINKS: SidebarLinkCategory[] = [
	{
		title: "Steel Frame",
		filterKey: "steel-frame",
		items: [
			{ 
                label: "Residencial", 
                description: "Casas modulares e pré fabricadas",
                href: "/steel-frame/residencial", 
                filterKey: "residencial", 
				colorKey: "#12777B",
				icon: HouseLineIcon,
            },
			{ 
                label: "Comercial", 
                description: "Construa seu negócio com Steel Frame",
                href: "/steel-frame/comercial", 
                filterKey: "comercial", 
                colorKey: "#1A7B12",
                icon: BuildingOfficeIcon,
            },
			{ 
                label: "Telhados e Lajes",
                description: "Soluções leves e resistentes para coberturas", 
                href: "/steel-frame/telhados-e-lajes", 
                filterKey: "telhados-e-lajes", 
                colorKey: "#C7C74D",
                icon: OptionIcon,
            },
			{ 
                label: "Fachadas", 
                description: "Fachadas em Steel Frame, moderna e sustentável",
                href: "/steel-frame/fachadas", 
                filterKey: "fachadas",
                colorKey: "#5F6C9F",
                icon: GridFourIcon,
            },
		],
	},
	{
		title: "Drywall",
		filterKey: "drywall",
		items: [
			{ 
                label: "Forros", 
                description: "Diversidade e qualidade em forros para sua obra",
                href: "/drywall/forros", 
                filterKey: "forros", 
                colorKey: "#CF80D7",
                icon: BracketsSquareIcon,
            },
			{ 
                label: "Paredes", 
                description: "Tecnologia avançada para construção moderna",
                href: "/drywall/paredes", 
                filterKey: "paredes", 
                colorKey: "#80D7CF",
                icon: BrowserIcon,
            },
			{ 
                label: "Complementos",
                description: "Maximize a eficiência de forros e paredes", 
                href: "/drywall/complementos", 
                filterKey: "complementos", 
                colorKey: "#C76464",
                icon: CheckerboardIcon,
            },
		],
	},
	{
		title: "Acústica",
		filterKey: "acustica",
		items: [
			{ 
                label: "Forros acústicos", 
                description: "O tratamento acústico vai além de cinemas",
                href: "/acustica/forros-acusticos", 
                filterKey: "forros-acusticos", 
                colorKey: "#66127B",
                icon: SpeakerSimpleHighIcon,
            },
			{ 
                label: "Tratamento de acústica",
                description: "Isolamento e conforto de ambientes", 
                href: "/acustica/tratamento-de-acustica",
                filterKey: "tratamento-de-acustica", 
                colorKey: "#7B5612",
                icon: EarSlashIcon,
            },
		],
	},
	{
		title: "Novidades",
		filterKey: "novidades",
		items: [
			{ 
                label: "Casas Pré Fabricadas", 
                description: "Casas modulares e pré fabricadas",
                href: "https://fasthomes.com.br", 
                filterKey: "casas-pre-fabricadas",
                colorKey: "#005844",
                icon: HouseLineIcon,
            },
			{ 
                label: "Esquadrias de PVC",
                description: "Esquadrias de PVC de Alto Padrão para o seu projeto", 
                href: "/esquadrias-de-pvc", 
                filterKey: "esquadrias-de-pvc", 
                colorKey: "#04B8A9",
                icon: WindowsLogoIcon,
            },
			{ 
                label: "Pisos Vinílicos", 
                description: "Na FAST, você encontra os sofisticados pisos vinílicos",
                href: "/pisos-vinilicos", 
                filterKey: "pisos-vinilicos", 
                colorKey: "#573900",
                icon: ParallelogramIcon,
            },
			{ 
                label: "Quartzolit", 
                description: "Impermeabilizantes, rejuntes e argamassas de qualidade",
                href: "/quartzolit", 
                filterKey: "quartzolit", 
                colorKey: "#DFDF13",
                icon: StackSimpleIcon,
            },
		],
	},
	{
		title: "Explore",
		filterKey: "explore",
		items: [
			{ 
                label: "Virar franqueado", 
                description: "A maior empresa de construção a seco",
                href: "/franquia/virar-franqueado", 
                filterKey: "virar-franqueado", 
                colorKey: "#050505",
                icon: MapTrifoldIcon,
            },
			{ 
                label: "Loja online",
                description: "Visite nosso catálogo online, e solicite um orçamento", 
                href: "https://shop.fastsistemasconstrutivos.com.br", 
                filterKey: "loja-online", 
                colorKey: "#050505",
                icon: ShoppingCartIcon,
            },
			{ 
                label: "Unidades Fast",
                description: "Encontre nossas lojas físicas mais perto de você!", 
                href: "/lojas", 
                filterKey: "unidades", 
                colorKey: "#050505",
                icon: StorefrontIcon,
            },
			{ 
                label: "Sobre a Fast",
                description: "Conheça mais sobre a Fast Sistemas Construtivos!", 
                href: "/sobre", 
                filterKey: "sobre", 
                colorKey: "#050505",
                icon: BookOpenIcon,
            },
			{ 
                label: "Contato",
                description: "Entre em contato com a Fast Sistemas Construtivos!", 
                href: "/contato", 
                filterKey: "contato", 
                colorKey: "#050505",
                icon: PhoneCallIcon,
            },
		],
	},
];

export default SIDEBAR_LINKS;

