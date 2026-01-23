export const SITE_URL = "https://fastsistemasconstrutivos.com.br";
export const SITE_NAME = "Fast Sistemas Construtivos";
export const DEFAULT_TITLE = "Fast Sistemas Construtivos | Inovação construtiva, confiança garantida";
export const DEFAULT_DESCRIPTION =
  "Mais de 25 anos de experiência em construção. Especialistas em Drywall, Acústica e Steel Frame. Fast Sistemas Construtivos é a maior rede de lojas do Brasil.";

export const SITE_LOGO_PATH = "/fastsistemasconstrutivos.svg";

export const ORG_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

export function absoluteUrl(pathname: string) {
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  return `${SITE_URL}${pathname}`;
}

export function jsonLdOrganization(params?: {
  sameAs?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
    areaServed?: string;
    availableLanguage?: string;
  };
}) {
  const sameAs = params?.sameAs?.filter(Boolean);
  const contactPoint = params?.contactPoint;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE_LOGO_PATH),
    },
    ...(sameAs && sameAs.length ? { sameAs } : {}),
    ...(contactPoint
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: contactPoint.contactType ?? "customer support",
            ...(contactPoint.telephone ? { telephone: contactPoint.telephone } : {}),
            ...(contactPoint.email ? { email: contactPoint.email } : {}),
            ...(contactPoint.areaServed ? { areaServed: contactPoint.areaServed } : {}),
            ...(contactPoint.availableLanguage
              ? { availableLanguage: contactPoint.availableLanguage }
              : {}),
          },
        }
      : {}),
  };
}

export function jsonLdWebSite(params?: {
  potentialSearchUrl?: string;
}) {
  const potentialSearchUrl = params?.potentialSearchUrl;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "pt-BR",
    ...(potentialSearchUrl
      ? {
          potentialAction: {
            "@type": "SearchAction",
            target: potentialSearchUrl,
            "query-input": "required name=search_term_string",
          },
        }
      : {}),
  };
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
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "pt-BR",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    publisher: {
      "@id": ORG_ID,
    },
    ...(dateModified ? { dateModified } : {}),
  };
}

export function jsonLdArticle(params: {
  url: string;
  headline: string;
  description: string;
  dateModified?: string;
}) {
  const { url, headline, description, dateModified } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "pt-BR",
    ...(dateModified ? { dateModified } : {}),
  };
}

export function jsonLdBreadcrumbList(params: {
  pathname: string;
  lastCrumbName: string;
}) {
  const clean = params.pathname.split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);

  const crumbs: Array<{ name: string; url: string }> = [
    { name: "Início", url: absoluteUrl("/") },
  ];

  let current = "";
  for (let i = 0; i < parts.length; i++) {
    current += `/${parts[i]}`;
    const isLast = i === parts.length - 1;
    crumbs.push({
      name: isLast ? params.lastCrumbName : parts[i].replace(/-/g, " "),
      url: absoluteUrl(current),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(clean)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
