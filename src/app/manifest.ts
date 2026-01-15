import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fast Sistemas Construtivos",
    short_name: "Fast",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/fastsistemasconstrutivos.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
