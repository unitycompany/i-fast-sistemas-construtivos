"use client";

import { PolicyArticle } from "./_components/PolicyContent";

export default function PolicyPage() {
  return (
    <PolicyArticle className="legal-text">
      <h1>Políticas e Conformidade</h1>
      <p className="policy-lead">
        Selecione uma política no menu ao lado para visualizar o conteúdo. Esta área reúne documentos de
        conformidade, privacidade, cookies e segurança.
      </p>
      <div className="policy-note">
        <strong>Dica:</strong> se você está buscando exercer direitos da LGPD (acesso, correção, exclusão), abra a
        página <a href="/politicas/lgpd">Central de Privacidade</a>.
      </div>
    </PolicyArticle>
  );
}