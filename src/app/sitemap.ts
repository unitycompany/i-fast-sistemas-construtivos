import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://fastsistemasconstrutivos.com.br";

const routes: Array<{ path: string; priority?: number; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },

  { path: "/politicas", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politicas/privacidade", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politicas/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politicas/termos", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politicas/seguranca", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politicas/lgpd", priority: 0.3, changeFrequency: "yearly" },

  { path: "/steel-frame", priority: 0.9, changeFrequency: "monthly" },
  { path: "/steel-frame/residencial", priority: 0.8, changeFrequency: "monthly" },
  { path: "/steel-frame/comercial", priority: 0.8, changeFrequency: "monthly" },
  { path: "/steel-frame/telhados-e-lajes", priority: 0.8, changeFrequency: "monthly" },
  { path: "/steel-frame/fachadas", priority: 0.8, changeFrequency: "monthly" },

  { path: "/drywall", priority: 0.9, changeFrequency: "monthly" },
  { path: "/drywall/forros", priority: 0.8, changeFrequency: "monthly" },
  { path: "/drywall/paredes", priority: 0.8, changeFrequency: "monthly" },
  { path: "/drywall/complementos", priority: 0.8, changeFrequency: "monthly" },

  { path: "/acustica", priority: 0.9, changeFrequency: "monthly" },
  { path: "/acustica/forros-acusticos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/acustica/tratamento-de-acustica", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
