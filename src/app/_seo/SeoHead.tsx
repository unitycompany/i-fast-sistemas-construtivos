import React from "react";
import { absoluteUrl, jsonLdArticle, jsonLdBreadcrumbList, jsonLdWebPage, SITE_NAME } from "@/app/seo";

export function SeoHead(props: {
  pathname: string;
  title: string;
  description: string;
  dateModified?: string;
  ogType?: "website" | "article";
  robots?: string;
}) {
  const { pathname, title, description, dateModified, ogType = "website", robots } = props;

  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(pathname);

  const webPageJsonLd = jsonLdWebPage({
    url,
    name: fullTitle,
    description,
    ...(dateModified ? { dateModified } : {}),
  });

  const breadcrumbJsonLd = jsonLdBreadcrumbList({ pathname, lastCrumbName: title });

  const articleJsonLd =
    ogType === "article"
      ? jsonLdArticle({
          url,
          headline: fullTitle,
          description,
          ...(dateModified ? { dateModified } : {}),
        })
      : null;

  const ogImage = absoluteUrl("/opengraph-image");
  const twitterImage = absoluteUrl("/twitter-image");

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta name="robots" content={robots ?? "index, follow, max-image-preview:large"} />
      <meta name="googlebot" content={robots ?? "index, follow, max-image-preview:large"} />

      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {dateModified ? <meta property="og:updated_time" content={dateModified} /> : null}
      {ogType === "article" && dateModified ? (
        <meta property="article:modified_time" content={dateModified} />
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      <link rel="alternate" type="text/plain" href={absoluteUrl("/llms.txt")} title="LLMs.txt" />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [webPageJsonLd, articleJsonLd, breadcrumbJsonLd].filter(Boolean)
          ),
        }}
      />
    </>
  );
}
