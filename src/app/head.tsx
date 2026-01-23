import { SeoHead } from "@/app/_seo/SeoHead";
import { DEFAULT_DESCRIPTION } from "@/app/seo";

export default function Head() {
  return (
    <SeoHead
      pathname="/"
      title="Construção a Seco: Steel Frame, Drywall e Acústica"
      description={DEFAULT_DESCRIPTION}
      dateModified="2026-01-23"
    />
  );
}
