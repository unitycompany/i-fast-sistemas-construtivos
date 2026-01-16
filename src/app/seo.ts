export const SITE_URL = "https://fastsistemasconstrutivos.com.br";
export const SITE_NAME = "Fast Sistemas Construtivos";
export const DEFAULT_TITLE = "Fast Sistemas Construtivos | Inovação construtiva, confiança garantida";
export const DEFAULT_DESCRIPTION =
  "Mais de 25 anos de experiência em construção. Especialistas em Drywall, Acústica e Steel Frame. Fast Sistemas Construtivos é a maior rede de lojas do Brasil.";

export function absoluteUrl(pathname: string) {
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  return `${SITE_URL}${pathname}`;
}

export function jsonLdWebPage(params: {
  url: string;
  name: string;
  description: string;
  dateModified?: string;
}) {
  const { url, name, description, dateModified } = params;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name,
    description,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-fast-sistemas-construtivos.svg"),
      },
    },
    ...(dateModified ? { dateModified } : {}),
  };
}
