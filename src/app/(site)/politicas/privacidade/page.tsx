"use client";

import { PolicyArticle } from "../_components/PolicyContent";

export default function PoliticaPrivacidadePage() {
	return (
		<PolicyArticle className="legal-text">
			<h1>Política de Privacidade</h1>
			<p className="policy-updated">Última atualização: 16/01/2026</p>
			<p className="policy-lead">
				Esta Política de Privacidade descreve como <strong>Fast Drywall Franchising Ltda.</strong> ("nós", "nosso")
				coleta, utiliza, compartilha e protege dados pessoais em nosso site institucional ("Site"), em
				conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD) e demais normas
				aplicáveis.
			</p>

			<div className="policy-note">
				<strong>Aviso importante:</strong> este documento tem caráter informativo e não substitui orientação jurídica.
				Para adequação completa, revise com seu time jurídico e de segurança.
			</div>

			<section className="policy-section" aria-labelledby="pp-escopo">
				<h2 id="pp-escopo">1. Escopo e definições</h2>
				<p>
					Para fins desta Política, "<strong>dados pessoais</strong>" são informações relacionadas a pessoa natural
					identificada ou identificável. "<strong>tratamento</strong>" compreende operações como coleta, produção,
					recepção, classificação, utilização, acesso, reprodução, transmissão, armazenamento, eliminação,
					avaliação, controle da informação, comunicação e transferência.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="pp-quem">
				<h2 id="pp-quem">2. Quem é o controlador e como falar conosco</h2>
				<p>
					O <strong>Controlador</strong> dos dados pessoais tratados no Site é <strong>Fast Drywall Franchising Ltda.</strong>,
					inscrita sob <strong>40.436.034/0001-48</strong>, com endereço em
					<strong>Rua Equador, 43, Bloco 003, Sala 0720, Santo Cristo, Rio de Janeiro/RJ, CEP 20220-410</strong>.
				</p>
				<p>
					Canal de privacidade (DPO/Encarregado): <strong>[INSERIR E-MAIL DO DPO]</strong>.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="pp-coleta">
				<h2 id="pp-coleta">3. Quais dados coletamos</h2>
				<h3>3.1. Dados fornecidos por você</h3>
				<ul>
					<li>
						<strong>Formulário de contato:</strong> nome, e-mail, telefone (se informado), empresa (se informado) e
						conteúdo da mensagem.
					</li>
					<li>
						<strong>Newsletter/marketing:</strong> nome (se informado), e-mail e preferências de comunicação.
					</li>
				</ul>

				<h3>3.2. Dados coletados automaticamente (navegação e tecnologia)</h3>
				<ul>
					<li>
						<strong>Dados técnicos:</strong> endereço IP, tipo/versão do navegador, idioma, fuso horário, tipo de
						dispositivo, sistema operacional, resolução de tela, páginas visitadas, data/hora de acesso,
						origem/indicação (referrer) e logs de eventos.
					</li>
					<li>
						<strong>Cookies e identificadores:</strong> cookies essenciais, analíticos e de marketing (conforme a Política
						de Cookies), identificadores de sessão e preferências.
					</li>
					<li>
						<strong>Parâmetros de campanha (marketing):</strong> podemos registrar parâmetros de URL como
						<code>utm_source</code>, <code>utm_medium</code>, <code>utm_campaign</code>, <code>utm_content</code>,
						<code>utm_term</code>, além de identificadores como <code>gclid</code>, <code>fbclid</code> e similares, com a
						finalidade de atribuição, mensuração e otimização de campanhas.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="pp-finalidades">
				<h2 id="pp-finalidades">4. Para que usamos os dados (finalidades)</h2>
				<ul>
					<li>
						<strong>Atendimento e relacionamento:</strong> responder solicitações, dúvidas e contatos.
					</li>
					<li>
						<strong>Marketing e comunicação:</strong> envio de newsletter, conteúdos e ofertas (quando aplicável),
						segmentação e mensuração de campanhas.
					</li>
					<li>
						<strong>Melhoria do Site:</strong> entender como o Site é utilizado, melhorar performance, acessibilidade e
						experiência.
					</li>
					<li>
						<strong>Segurança e prevenção a fraudes:</strong> detecção de abusos, ataques, tentativas de invasão e
						proteção de infraestrutura.
					</li>
					<li>
						<strong>Cumprimento de obrigações legais/regulatórias:</strong> quando necessário.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="pp-base-legal">
				<h2 id="pp-base-legal">5. Bases legais (LGPD)</h2>
				<p>
					Tratamos dados pessoais com base em uma ou mais hipóteses legais previstas na LGPD, incluindo:
				</p>
				<ul>
					<li>
						<strong>Consentimento (art. 7º, I):</strong> para comunicações de marketing/newsletter e para cookies não
						essenciais (analíticos/marketing), quando aplicável.
					</li>
					<li>
						<strong>Legítimo interesse (art. 7º, IX):</strong> para melhorar o Site, manter segurança, prevenir fraudes e
						realizar análises internas de performance, observados os limites legais, avaliação de impacto e
						mecanismos de opt-out quando aplicável.
					</li>
					<li>
						<strong>Cumprimento de obrigação legal/regulatória (art. 7º, II):</strong> quando exigido.
					</li>
				</ul>
				<p>
					Quando utilizarmos legítimo interesse, poderemos realizar testes de balanceamento (LIA) para
					assegurar que seus direitos e liberdades sejam preservados.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="pp-compartilhamento">
				<h2 id="pp-compartilhamento">6. Compartilhamento com terceiros e ferramentas</h2>
				<p>
					Para operar e evoluir o Site, podemos compartilhar dados com prestadores de serviços ("Operadores")
					sob contrato, confidencialidade e medidas de segurança compatíveis. Exemplos (editáveis conforme sua
					implementação):
				</p>
				<ul>
					<li>
						<strong>Mensuração e marketing:</strong> Google Analytics/Google Tag Manager, Google Ads,
						Meta Pixel/Meta Ads e ferramentas equivalentes.
					</li>
					<li>
						<strong>Hospedagem e infraestrutura:</strong> provedores de nuvem como AWS, Google Cloud, Azure ou
						similares.
					</li>
					<li>
						<strong>Formulários e atendimento:</strong> plataformas de CRM, e-mail marketing, helpdesk e automação.
					</li>
				</ul>
				<p>
					Alguns fornecedores podem estar localizados fora do Brasil. Nesses casos, adotamos salvaguardas
					apropriadas para transferências internacionais, como cláusulas contratuais, padrões corporativos e
					avaliações de segurança.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="pp-retencao">
				<h2 id="pp-retencao">7. Retenção e descarte</h2>
				<p>
					Mantemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta
					Política, ou conforme prazos legais/regulatórios aplicáveis. Exemplos comuns:
				</p>
				<ul>
					<li>
						<strong>Contatos:</strong> pelo tempo necessário para atendimento e histórico, ou até solicitação de exclusão,
						respeitando obrigações legais.
					</li>
					<li>
						<strong>Marketing:</strong> até que você cancele a inscrição (opt-out) ou revogue consentimento.
					</li>
					<li>
						<strong>Logs de segurança:</strong> por período razoável para investigação e prevenção de incidentes.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="pp-direitos">
				<h2 id="pp-direitos">8. Seus direitos como titular</h2>
				<p>
					Você pode exercer direitos previstos na LGPD, como confirmação de tratamento, acesso, correção,
					anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação de
					consentimento.
				</p>
				<p>
					Para solicitar, acesse a <a href="/politicas/lgpd">Central de Privacidade</a> ou escreva para
					<strong> [INSERIR E-MAIL DO DPO]</strong>.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="pp-seguranca">
				<h2 id="pp-seguranca">9. Segurança da informação</h2>
				<p>
					Adotamos controles técnicos e administrativos para proteger dados pessoais contra acessos não
					autorizados, destruição, perda, alteração, comunicação ou difusão. Detalhes adicionais estão na
					página <a href="/politicas/seguranca">Segurança da Informação</a>.
				</p>
			</section>

			<hr className="policy-divider" />

			<section className="policy-section" aria-labelledby="pp-alteracoes">
				<h2 id="pp-alteracoes">10. Alterações desta Política</h2>
				<p>
					Podemos atualizar este documento para refletir mudanças legais, técnicas ou operacionais. Quando
					aplicável, indicaremos a data de atualização e publicaremos a versão vigente nesta página.
				</p>
			</section>
		</PolicyArticle>
	);
}

