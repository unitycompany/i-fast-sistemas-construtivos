"use client";

import { PolicyArticle } from "../_components/PolicyContent";

export default function TermosDeUsoPage() {
	return (
		<PolicyArticle className="legal-text">
			<h1>Termos de Uso</h1>
			<p className="policy-updated">Última atualização: 16/01/2026</p>
			<p className="policy-lead">
				Estes Termos de Uso regulam o acesso e a utilização do site institucional de
				<strong> Fast Drywall Franchising Ltda.</strong>. Ao navegar no Site, você concorda com estes Termos.
				Caso não concorde, recomendamos não utilizar o Site.
			</p>

			<section className="policy-section" aria-labelledby="tu-aceite">
				<h2 id="tu-aceite">1. Aceite e atualizações</h2>
				<p>
					Podemos atualizar estes Termos a qualquer momento, por motivos legais, técnicos ou operacionais.
					A versão vigente será publicada nesta página, com indicação de data.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-uso">
				<h2 id="tu-uso">2. Uso permitido</h2>
				<p>Você se compromete a utilizar o Site de forma lícita e compatível com sua finalidade institucional.</p>
				<ul>
					<li>Não realizar tentativas de invasão, varredura, engenharia reversa ou exploração de vulnerabilidades.</li>
					<li>Não inserir conteúdo ilícito, ofensivo, malicioso ou que viole direitos de terceiros.</li>
					<li>Não interferir no funcionamento do Site, servidores, redes ou serviços relacionados.</li>
				</ul>
			</section>

			<section className="policy-section" aria-labelledby="tu-propriedade">
				<h2 id="tu-propriedade">3. Propriedade intelectual</h2>
				<p>
					Todo o conteúdo do Site (textos, marcas, logos, layout, imagens, vídeos, códigos e demais elementos)
					é de propriedade de <strong>Fast Drywall Franchising Ltda.</strong> ou de terceiros licenciadores, e é protegido
					por leis de propriedade intelectual.
				</p>
				<p>
					É proibida a reprodução, distribuição, modificação, exibição pública ou exploração comercial do conteúdo
					sem autorização prévia e expressa, salvo quando permitido por lei.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-links">
				<h2 id="tu-links">4. Links e serviços de terceiros</h2>
				<p>
					O Site pode conter links para páginas e serviços de terceiros (por exemplo, redes sociais, provedores de
					mídia, ferramentas de mensuração e parceiros). Não controlamos práticas de privacidade, segurança ou
					conteúdo desses terceiros. Recomendamos a leitura das políticas aplicáveis.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-isencao">
				<h2 id="tu-isencao">5. Isenções e limitações de responsabilidade</h2>
				<ul>
					<li>
						O Site é disponibilizado "como está", podendo passar por instabilidades, manutenções, atualizações ou
						indisponibilidades.
					</li>
					<li>
						Embora adotemos boas práticas de segurança, nenhum ambiente online é isento de riscos.
					</li>
					<li>
						Não garantimos que o Site estará livre de erros, interrupções ou vulnerabilidades, tampouco que o conteúdo
						atenda integralmente a expectativas específicas do usuário.
					</li>
				</ul>
				<p>
					Na máxima extensão permitida pela lei, <strong>Fast Drywall Franchising Ltda.</strong> não será responsável por
					danos indiretos, lucros cessantes, perda de dados ou prejuízos decorrentes do uso ou impossibilidade de uso
					do Site.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-privacidade">
				<h2 id="tu-privacidade">6. Privacidade e cookies</h2>
				<p>
					O tratamento de dados pessoais decorrente do uso do Site é regido pela nossa
					<a href="/politicas/privacidade"> Política de Privacidade</a> e pela
					<a href="/politicas/cookies"> Política de Cookies</a>.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-foro">
				<h2 id="tu-foro">7. Lei aplicável e foro</h2>
				<p>
					Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de
					<strong> Rio de Janeiro/RJ</strong>, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir
					questões relacionadas a estes Termos, salvo hipóteses legais de competência diversa.
				</p>
			</section>

			<section className="policy-section" aria-labelledby="tu-contato">
				<h2 id="tu-contato">8. Contato</h2>
				<p>
					Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail <strong>privacidade@fastsistemasconstrutivos.com.br</strong>.
				</p>
			</section>
		</PolicyArticle>
	);
}

