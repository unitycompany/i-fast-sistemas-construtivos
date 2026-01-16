"use client";

import Button from "@/components/ui/Button";
import { PolicyArticle } from "../_components/PolicyContent";

export default function LgpdPage() {
	return (
		<PolicyArticle className="legal-text">
			<h1>Central de Privacidade (LGPD)</h1>
			<p className="policy-updated">Última atualização: 16/01/2026</p>
			<p className="policy-lead">
				Este é o canal para você exercer seus direitos como titular de dados pessoais, nos termos da LGPD.
				Se preferir, você também pode solicitar diretamente pelo e-mail do Encarregado (DPO):
				<strong> [INSERIR E-MAIL DO DPO]</strong>.
			</p>

			<section className="policy-section" aria-labelledby="lgpd-direitos">
				<h2 id="lgpd-direitos">1. Quais direitos você pode exercer</h2>
				<ul>
					<li>
						<strong>Confirmação e acesso:</strong> confirmar se tratamos seus dados e acessar cópia/relatório.
					</li>
					<li>
						<strong>Retificação:</strong> corrigir dados incompletos, inexatos ou desatualizados.
					</li>
					<li>
						<strong>Anonimização, bloqueio ou eliminação:</strong> para dados desnecessários, excessivos ou tratados
						em desconformidade.
					</li>
					<li>
						<strong>Portabilidade:</strong> quando aplicável, receber dados em formato interoperável.
					</li>
					<li>
						<strong>Informações sobre compartilhamento:</strong> com quem compartilhamos e para quais finalidades.
					</li>
					<li>
						<strong>Revogação de consentimento e opt-out:</strong> para comunicações de marketing e cookies não
						essenciais (quando aplicável).
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="lgpd-form">
				<h2 id="lgpd-form">2. Envie sua solicitação</h2>
				<p>
					Preencha o formulário abaixo para registrar sua solicitação. Para sua segurança, podemos solicitar
					comprovação de identidade antes de atender ao pedido.
				</p>

				<form className="policy-form" action="#" method="post">
					<div className="field">
						<label htmlFor="lgpd-name">Nome completo</label>
						<input id="lgpd-name" name="name" type="text" autoComplete="name" placeholder="Seu nome" required />
					</div>

					<div className="field">
						<label htmlFor="lgpd-email">E-mail</label>
						<input
							id="lgpd-email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder="seuemail@exemplo.com"
							required
						/>
					</div>

					<div className="field">
						<label htmlFor="lgpd-type">Tipo de solicitação</label>
						<select id="lgpd-type" name="requestType" defaultValue="acesso" required>
							<option value="acesso">Acesso / Confirmação</option>
							<option value="retificacao">Retificação</option>
							<option value="exclusao">Exclusão / Eliminação</option>
							<option value="portabilidade">Portabilidade</option>
							<option value="revogacao">Revogação de consentimento / Opt-out</option>
							<option value="informacoes">Informações e compartilhamentos</option>
						</select>
					</div>

					<div className="field">
						<label htmlFor="lgpd-message">Detalhes da solicitação</label>
						<textarea
							id="lgpd-message"
							name="message"
							placeholder="Descreva sua solicitação e, se possível, indique o e-mail/telefone que você utilizou no contato ou newsletter."
							required
						/>
					</div>

					<div className="actions">
						<Button type="submit" variant="solid">
							Enviar solicitação
						</Button>
						<p className="hint">
							Prazo: responderemos no prazo legal aplicável. Em regra, buscamos concluir em até
							<strong> 15 dias</strong>, conforme orientações usuais na legislação brasileira.
						</p>
					</div>
				</form>

				<div className="policy-note">
					<strong>Para sua segurança,</strong> podemos solicitar comprovação de identidade antes de atender à
					solicitação.
				</div>
			</section>

			<section className="policy-section" aria-labelledby="lgpd-mkt">
				<h2 id="lgpd-mkt">3. Informações sobre marketing, UTMs e mensuração</h2>
				<p>
					Para mensurar e otimizar campanhas, podemos registrar parâmetros de URL (como <code>utm_*</code>,
					<code>gclid</code>, <code>fbclid</code>) e utilizar ferramentas de terceiros (ex.: Meta e Google) para análise de
					conversões e atribuição. Quando aplicável, você pode gerenciar preferências de cookies e optar por não
					receber comunicações de marketing.
				</p>
			</section>
		</PolicyArticle>
	);
}


