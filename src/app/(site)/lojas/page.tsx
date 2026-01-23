import { Suspense } from "react";
import LojasClient from "./LojasClient";

export default function LojasPage() {
  return (
    <Suspense fallback={null}>
      <LojasClient />
    </Suspense>
  );
}
