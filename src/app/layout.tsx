import type { Metadata } from "next";
import { DM_Sans, Manrope, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import { absoluteUrl, jsonLdOrganization, jsonLdWebSite } from "@/app/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const siteUrl = "https://fastsistemasconstrutivos.com.br";
const siteName = "Fast Sistemas Construtivos";
const title = "Fast Sistemas Construtivos | Inovação construtiva, confiança garantida";
const description =
  "Mais de 25 Anos de Experiencia em Construção Especialistas em Drywall, Acústica e Steel Frame. Fast Sistemas Construtivos é a maior rede de lojas do Brasil.";
const logoPath = "/fastsistemasconstrutivos.svg";
const ogImagePath = "/opengraph-image";
const twitterImagePath = "/twitter-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description: description,
  applicationName: siteName,
  icons: {
    icon: [{ url: logoPath, type: "image/svg+xml" }],
    shortcut: [logoPath],
    apple: [logoPath],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    title: title,
    description: description,
    images: [
      {
        url: ogImagePath,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [twitterImagePath],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "format-detection": "telephone=no",
    "referrer": "strict-origin-when-cross-origin",
  },
};

function JsonLd() {
  const jsonLd = [
    jsonLdOrganization({
      contactPoint: {
        email: "atendimento@fastsistemasconstrutivos.com.br",
        telephone: "+55-24-98191-1292",
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: "pt-BR",
      },
    }),
    jsonLdWebSite(),
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${urbanist.variable} ${manrope.variable}`}>
      <head>
        <JsonLd />
        <link rel="icon" href={logoPath} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={logoPath} />
        <link rel="alternate" type="text/plain" href={absoluteUrl("/llms.txt")} title="LLMs.txt" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
