"use client";

import { PolicyArticle } from "../_components/PolicyContent";

export default function PoliticaDeCookiesPage() {
	return (
		<PolicyArticle className="legal-text">
			<h1>Política de Cookies</h1>
			<p className="policy-updated">Última atualização: 16/01/2026</p>
			<p className="policy-lead">
				Esta Política explica o que são cookies, quais tipos podem ser utilizados por
				<strong> Fast Drywall Franchising Ltda.</strong> e como você pode gerenciá-los.
			</p>

			<section className="policy-section" aria-labelledby="ck-def">
				<h2 id="ck-def">1. O que são cookies</h2>
				<p>
					Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo quando você visita
					um site. Eles ajudam a reconhecer preferências, manter sessões, medir desempenho e viabilizar recursos.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="ck-dados">
				<h2 id="ck-dados">2. Quais dados podem ser coletados via cookies e tecnologias similares</h2>
				<ul>
					<li>
						<strong>Identificadores técnicos:</strong> identificadores de sessão, preferências de idioma, configurações.
					</li>
					<li>
						<strong>Dados de navegação:</strong> páginas visitadas, cliques, tempo de permanência, origem de tráfego.
					</li>
					<li>
						<strong>Parâmetros de marketing:</strong> registro de parâmetros como <code>utm_*</code>, <code>gclid</code>,
						<code>fbclid</code> e correlatos para atribuição e mensuração.
					</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="ck-tipos">
				<h2 id="ck-tipos">3. Tipos de cookies</h2>

				<h3>3.1 Cookies essenciais (necessários)</h3>
				<p>
					São indispensáveis para o funcionamento do Site e para a entrega de funcionalidades básicas (por exemplo,
					segurança, estabilidade e preferências essenciais). Em geral, não podem ser desativados em nossos sistemas.
				</p>

				<h3>3.2 Cookies analíticos (desempenho e métricas)</h3>
				<p>
					Ajudam a entender como visitantes interagem com o Site, medindo audiência e comportamento (ex.: páginas
					mais acessadas, tempo de navegação). Usamos esses dados para melhorar a experiência e performance.
				</p>
				<p>
					Exemplos de ferramentas (editáveis): Google Analytics, tags via Google Tag Manager e similares.
				</p>

				<h3>3.3 Cookies de marketing (publicidade e remarketing)</h3>
				<p>
					Podem ser utilizados para entregar anúncios mais relevantes, medir campanhas e criar audiências (ex.:
					remarketing). Exemplos (editáveis): Meta Pixel/Meta Ads, Google Ads e similares.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="ck-gestao">
				<h2 id="ck-gestao">4. Como gerenciar cookies</h2>
				<p>
					Você pode gerenciar cookies por meio das configurações do seu navegador, incluindo bloquear ou remover
					cookies já armazenados. Observe que a desativação de cookies essenciais pode afetar o funcionamento do Site.
				</p>
				<ul>
					<li>
						<strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados.
					</li>
					<li>
						<strong>Firefox:</strong> Configurações → Privacidade e Segurança → Cookies e dados de sites.
					</li>
					<li>
						<strong>Safari:</strong> Ajustes/Preferências → Privacidade.
					</li>
					<li>
						<strong>Edge:</strong> Configurações → Cookies e permissões do site.
					</li>
				</ul>
				<p>
					Se o Site utilizar um banner/gerenciador de consentimento (CMP), você poderá ajustar preferências por lá.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="ck-base-legal">
				<h2 id="ck-base-legal">5. Bases legais (LGPD)</h2>
				<p>
					Cookies essenciais podem ser tratados com base em legítimo interesse e/ou necessidade técnica para
					prestação do serviço. Cookies analíticos e de marketing, quando aplicável, são tratados mediante
					consentimento do titular.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="ck-contato">
				<h2 id="ck-contato">6. Contato</h2>
				<p>
					Para dúvidas sobre cookies e privacidade, escreva para <strong>privacidade@fastsistemasconstrutivos.com.br</strong>.
				</p>
			</section>
		</PolicyArticle>
	);
}

