import { absoluteUrl, jsonLdWebPage, SITE_NAME } from "@/app/seo";

const pathname = "/sobre";

export default function Head() {
  const title = `Sobre | ${SITE_NAME}`;
  const description =
    "Conheça a trajetória da Fast Sistemas Construtivos, nossa história, missão, valores e evolução em mais de 25 anos de mercado.";

  const url = absoluteUrl(pathname);
  const jsonLd = jsonLdWebPage({ url, name: title, description, dateModified: "2026-01-22" });

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteUrl("/opengraph-image")} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl("/twitter-image")} />

      <link rel="alternate" type="text/plain" href={absoluteUrl("/llms.txt")} title="LLMs.txt" />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
