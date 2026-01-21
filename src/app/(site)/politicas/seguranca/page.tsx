"use client";

import { PolicyArticle } from "../_components/PolicyContent";

export default function SegurancaPage() {
	return (
		<PolicyArticle className="legal-text">
			<h1>Segurança da Informação</h1>
			<p className="policy-updated">Última atualização: 16/01/2026</p>
			<p className="policy-lead">
				A segurança da informação é um pilar para <strong>Fast Drywall Franchising Ltda.</strong>. Esta página descreve,
				de forma transparente e acessível, as principais medidas técnicas e administrativas aplicadas para
				proteger dados e reduzir riscos. Nenhuma medida isolada elimina totalmente riscos, mas trabalhamos com
				camadas de proteção e melhoria contínua.
			</p>

			<section className="policy-section" aria-labelledby="sec-https">
				<h2 id="sec-https">1. Criptografia em trânsito (HTTPS/SSL)</h2>
				<p>
					Utilizamos certificado digital (SSL/TLS) para disponibilizar o Site via <code>HTTPS</code>. Isso significa que
					os dados trafegam criptografados entre seu navegador e nossos servidores, reduzindo risco de interceptação
					em redes públicas e ataques do tipo "man-in-the-middle".
				</p>
				<ul>
					<li>
						<strong>O que isso protege:</strong> formulários de contato, navegação autenticada (quando houver) e tráfego em
						geral.
					</li>
					<li>
						<strong>O que não substitui:</strong> cuidados do usuário (dispositivo limpo, senhas fortes) e políticas de acesso.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="sec-acesso">
				<h2 id="sec-acesso">2. Acesso restrito e controle interno</h2>
				<p>
					Adotamos o princípio do <strong>menor privilégio</strong>: somente pessoas autorizadas e com necessidade real de
					acesso conseguem visualizar ou tratar dados pessoais.
				</p>
				<ul>
					<li>
						<strong>Controle de permissões:</strong> perfis de acesso por função e revisão periódica.
					</li>
					<li>
						<strong>Autenticação:</strong> uso de autenticação forte (ex.: MFA/2FA) quando disponível.
					</li>
					<li>
						<strong>Rastreabilidade:</strong> registros (logs) para auditoria e investigação de incidentes.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="sec-parceiros">
				<h2 id="sec-parceiros">3. Hospedagem e parceiros seguros</h2>
				<p>
					Utilizamos provedores de infraestrutura e serviços com padrões reconhecidos de segurança (editável conforme
					sua arquitetura), como <strong>AWS</strong>, <strong>Google Cloud</strong>, <strong>Microsoft Azure</strong> ou equivalentes.
					Quando contratamos terceiros (ex.: mensuração, CRM, e-mail marketing), adotamos critérios de segurança,
					confidencialidade e minimização de dados.
				</p>
				<ul>
					<li>
						<strong>Contratos e DPA:</strong> cláusulas de proteção de dados, confidencialidade e obrigações do operador.
					</li>
					<li>
						<strong>Transferência internacional:</strong> quando aplicável, utilizamos salvaguardas para tratar dados fora do
						Brasil.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="sec-monitoramento">
				<h2 id="sec-monitoramento">4. Monitoramento, prevenção e resposta a incidentes</h2>
				<p>
					Mantemos práticas de monitoramento e proteção para reduzir riscos de ataques, abusos, malwares e acessos
					não autorizados.
				</p>
				<ul>
					<li>
						<strong>Monitoramento de disponibilidade e eventos:</strong> alertas e observabilidade.
					</li>
					<li>
						<strong>Proteção de borda:</strong> regras de firewall/WAF, rate limiting e mitigação de tráfego suspeito.
					</li>
					<li>
						<strong>Backups:</strong> rotinas de backup e restauração para continuidade.
					</li>
					<li>
						<strong>Gestão de incidentes:</strong> processos internos para identificar, conter, investigar e corrigir.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="sec-marketing">
				<h2 id="sec-marketing">5. Segurança e privacidade em ferramentas de marketing (Meta/Google/UTM)</h2>
				<p>
					Para mensurar campanhas e desempenho do Site, podemos utilizar ferramentas como Meta e Google (ex.: tags,
					pixels, conversões) e registrar parâmetros de URL (<code>utm_*</code>, <code>gclid</code>, <code>fbclid</code> e
					correlatos). Essa coleta é descrita nas páginas de <a href="/politicas/privacidade">Privacidade</a> e
					<a href="/politicas/cookies">Cookies</a>, incluindo bases legais e opções de gerenciamento.
				</p>
				<div className="policy-note">
					<strong>Transparência e controle:</strong> sempre que aplicável, usamos mecanismos de consentimento para cookies
					não essenciais e oferecemos opt-out para comunicações de marketing.
				</div>
			</section>

			<section className="policy-section" aria-labelledby="sec-boas-praticas">
				<h2 id="sec-boas-praticas">6. Boas práticas para você</h2>
				<ul>
					<li>
						<strong>Verifique o cadeado/HTTPS:</strong> confirme que você está em domínio oficial.
					</li>
					<li>
						<strong>Não compartilhe senhas ou códigos:</strong> não solicitamos senhas por e-mail/WhatsApp.
					</li>
					<li>
						<strong>Mantenha seu dispositivo atualizado:</strong> navegador e sistema com correções de segurança.
					</li>
					<li>
						<strong>Desconfie de mensagens suspeitas:</strong> golpes podem se passar por marcas (phishing).
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="sec-contato">
				<h2 id="sec-contato">7. Contato</h2>
				<p>
					Se você identificar vulnerabilidade, comportamento suspeito ou tiver dúvidas sobre segurança e privacidade,
					entre em contato: <strong>privacidade@fastsistemasconstrutivos.com.br</strong>.
				</p>
			</section>
		</PolicyArticle>
	);
}


