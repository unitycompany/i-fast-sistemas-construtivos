export default function LoadingPoliticas() {
  return (
    <div
      style={{
        minHeight: "60dvh",
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
    >
      <div
        aria-label="Carregando"
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
          border: "3px solid var(--color-border)",
          borderTopColor: "var(--color-dark)",
          animation: "politicas-spin 0.8s linear infinite",
        }}
      />
      <style>{`
        @keyframes politicas-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-label="Carregando"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
