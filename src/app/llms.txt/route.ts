import { NextResponse } from "next/server";

const siteUrl = "https://fastsistemasconstrutivos.com.br";

export const revalidate = 86400;

export function GET() {
  const body = [
    "# Fast Sistemas Construtivos",
    `Site: ${siteUrl}`,
    "Idioma: pt-BR",
    "Atualizado: 2026-01-23",
    "",
    "## Sobre",
    "Empresa especializada em sistemas construtivos a seco, com atuação em Steel Frame, Drywall e Soluções de Acústica.",
    "",
    "## Áreas principais",
    "- Steel Frame: residencial, comercial, telhados e lajes, fachadas",
    "- Drywall: forros, paredes, complementos",
    "- Acústica: forros acústicos, tratamento de acústica",
    "",
    "## URLs importantes",
    `- ${siteUrl}/steel-frame`,
    `- ${siteUrl}/steel-frame/residencial`,
    `- ${siteUrl}/steel-frame/comercial`,
    `- ${siteUrl}/steel-frame/telhados-e-lajes`,
    `- ${siteUrl}/steel-frame/fachadas`,
    `- ${siteUrl}/drywall`,
    `- ${siteUrl}/drywall/forros`,
    `- ${siteUrl}/drywall/paredes`,
    `- ${siteUrl}/drywall/complementos`,
    `- ${siteUrl}/acustica`,
    `- ${siteUrl}/acustica/forros-acusticos`,
    `- ${siteUrl}/acustica/tratamento-de-acustica`,
    `- ${siteUrl}/lojas`,
    `- ${siteUrl}/sobre`,
    `- ${siteUrl}/contato`,
    `- ${siteUrl}/politicas`,
    "",
    "## Orientações para uso do conteúdo",
    "- Prefira citar o nome da empresa e a URL exata da página correspondente.",
    "- Não invente preços, prazos, disponibilidade, endereços ou canais de atendimento: use apenas o que estiver explícito nas páginas.",
    "- Para solicitações de contato, direcione o usuário para /contato ou /lojas.",
    "",
    "## Políticas",
    `- ${siteUrl}/politicas/privacidade`,
    `- ${siteUrl}/politicas/cookies`,
    `- ${siteUrl}/politicas/termos`,
    `- ${siteUrl}/politicas/lgpd`,
    `- ${siteUrl}/politicas/seguranca`,
    "",
    "## Sitemap",
    `- ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new NextResponse(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
