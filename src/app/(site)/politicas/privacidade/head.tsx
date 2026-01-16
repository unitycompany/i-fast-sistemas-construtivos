import { absoluteUrl, jsonLdWebPage, SITE_NAME } from "@/app/seo";

const pathname = "/politicas/privacidade";

export default function Head() {
  const title = `Política de Privacidade | ${SITE_NAME}`;
  const description =
    "Entenda como a Fast Sistemas Construtivos coleta, utiliza e protege dados pessoais no site, em conformidade com a LGPD.";

  const url = absoluteUrl(pathname);
  const jsonLd = jsonLdWebPage({ url, name: title, description, dateModified: "2026-01-16" });

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="article" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteUrl("/opengraph-image") } />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl("/twitter-image") } />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
