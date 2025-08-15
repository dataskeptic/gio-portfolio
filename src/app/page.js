import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Link from "next/link";

const arqueoProData = {
  title: "ArqueoPro: Seu campo na palma da mão",
  tags: ["UX DESIGN", "UI DESIGN", "USER RESEARCH", "PRODUCT DESIGN"],
  project_description:
    "Organizei a estrutura, fluxo de uso e todo o processo de design do aplicativo voltada para otimizar a coleta e gestão de dados arqueológicos em campo integrado com GPS. O aplicativo está em atual fase de implementação. Foram mapeadas e integradas no aplicativo categorias essenciais como:",
  features: [
    "Formulários de coleta e registro de dados;",
    "Tags de categorização de membros de equipe;",
    "Divisão de projetos e arquivos relacionados;",
    "Registro de Locais (sítios, pontos georreferenciados)",
    "GPS: disponibilização de mapas, gravação de caminhamento e marcação de pontos georreferenciados.",
  ],
  image: "/arqueopro.png",
  link: "https://medium.com/@giosilvdsign/arqueopro-solu%C3%A7%C3%A3o-integrada-de-coleta-e-armazenamento-de-dados-arqueol%C3%B3gicos-e-gps-em-aplicativo-3b297ccb0d12",
  hoverTitle:
    "Solução digital para campo arqueológico: app de coleta de dados integrado com GPS.",
};

const jaguaracambeData = {
  title: "Novo de design do site da ONG Jaguaracambé (versão de 2023).",
  tags: ["UX DESIGN", "UI DESIGN", "WEB DESIGN", "LANDING PAGE"],
  project_description:
    "Realizei o redesign completo do site da ONG ambientalista, com foco em melhorar a navegação, a clareza das informações e o engajamento do público com as causas e projetos da instituição. Reestruturei a hierarquia de conteúdo para tornar o acesso mais intuitivo e a experiência do usuário mais fluida, tanto em desktop quanto em dispositivos móveis. O design pode ser acessado pelo site oficial da ONG Jaguaracambé, o projeto foi entregue em 2023. As principais melhorias incluem:",
  features: [
    "Padronização de cores, tipografia, botões, formulários e espaçamento para criar uma identidade visual coesa;",
    "Melhoria do contraste entre texto e fundo para garantir legibilidade;",
    "Criação de hierarquia visual clara com títulos, subtítulos e elementos de destaque;",
  ],
  image: "/jaguaracambe.png",
  link: "https://medium.com/@giosilvdsign/novo-site-para-a-ong-jaguaracamb%C3%A9-design-de-2023-80e6dc466f8c",
  hoverTitle:
    "Redesign do site da ONG Jaguaracambé para melhorar navegação e engajamento.",
};

const timelineData = [
  {
    title: "UX/UI Designer - Freelancer/ ONG",
    subtitle: "Jaguaracambé | 2023 - 2 meses",
    details: [
      "UX/UI Design.",
      "Product Design.",
      "Fluxos de Usuário.",
      "Wireframes.",
      "Prototipagem.",
      "Teste de Usabilidade.",
      "Design de Landing Page.",
    ],
  },
  {
    title: "Superior - Design Gráfico",
    subtitle: "Tecnólogo, UNOPAR | 2022 - 2023",
    details: [
      "Criação de projetos de comunicação visual e design.",
      "Elaboração e avaliação técnica de projetos.",
      "Gestão e planejamento de projetos gráficos.",
      "Métodos e processos de criação em ilustração e design.",
    ],
  },
  {
    title: "Estágio - Design Gráfico",
    subtitle: "PSL Empreendimentos | 2023 - 3 meses",
    details: [
      "Criação de materiais de marketing, propaganda e demais materiais gráficos (gráficos e digitais como banners, folders e artes para TV).",
      "Desenvolvimento e execução estratégias de tráfego pago.",
      "Criação de layouts e designs para apresentações corporativas.",
      "Processo de criação, execução e montagem de materiais promocionais.",
      "Colaboração com fornecedores externos, como gráficas, para garantir que os trabalhos sejam impressos.",
      "Gerenciamento de 3 perfis de redes sociais dos empreendimentos da empresa.",
      "Produção de vídeos e material fotográfico para a empresa.",
      "Tratamento de imagens fotográficas.",
      "Edição de vídeo.",
      "Criação de arte e materiais promocionais para os 3 perfis das redes sociais dos empreendimentos da empresa.",
    ],
  },
  {
    title: "Outros Curso",
    subtitle: "Tecnólogo, UNOPAR: Arqueologia Digital e Banco de Dados",
    details: [
      "Figma: Design Colaborativo do Básico ao Protótipo Responsivo | Udemy | 2023.",
      "Product Design: Master Digital Product Design: UX Research e UI Design | Udemy | 2023.",
      "Illustrator: Adobe Illustrator CC | Espaço Pixel | 2018.",
    ],
  },
  {
    title: "Designer Gráfico",
    subtitle: "Boom Agência de Marketing | 2024 - 3 meses",
    details: [
      "Layouts criativos: posts, banners, stories e anúncios, focando em engajamento e identidade visual.",
      "Adequação de peças para diferentes redes sociais.",
      "Design de materiais institucionais e promocionais impressos.",
    ],
  },
  {
    title: "Programa UX Unicórnio",
    subtitle: "Leandro Rezende | 2024 - 2025",
    details: [
      "Formação em UX, UI e Product Design.",
      "Pesquisa de experiência de usuário.",
      "UX Research e UX Strategy.",
      "Design de Interfaces.",
      "Mapeamento de Jornada.",
      "UX em ambientes ágeis.",
      "Interação homem-máquina.",
      "Figma.",
    ],
  },
  {
    title: "Designer Instrucional",
    subtitle: "FADEX/ Projeto SEDUC TEC | 2024 - 2025; 1 ano 7 meses",
    details: [
      "Estruturação de roteiros para edição de aulas técnicas para o Ensino Médio.",
      "Desenvolvimento e conteúdos de aprendizagem: materiais didáticos como textos, roteiros para vídeos, design de cenas e avaliações e recursos multimídia.",
    ],
  },
  {
    title: "Superior em Arqueologia",
    subtitle: "UFPI | 2019 - 2025",
    details: [
      "Superior em Arqueologia, com maior ênfase de estudos em Arqueologia Digital e Banco de Dados. A monografia teve como foco a análise de bancos de dados arqueológicos e a proposta de modelagem para bancos de dados voltados às necessidades arqueológicas e logísticas. O produto proposto está em fase de implementação.",
    ],
  },
  {
    title: "UX/UI Designer",
    subtitle: "Freelancer/ ArqueoPro | 2025 - 6 meses",
    details: [
      "UX/UI Design.",
      "Product Design.",
      "Arquitetura da Informação.",
      "Pesquisa com usuários.",
      "Fluxos de uso.",
      "Wireframing.",
      "Prototipagem.",
      "Testes de usabilidade.",
      "Style Guide.",
      "Design Gráfico.",
      "Mobile First.",
      "Levantamento de requisitos.",
    ],
  },
];

const casesData = [
  {
    title: "Pesquisas com Usuários",
    image: "/cases/user-research.png",
    link: "https://medium.com/@giosilvdsign/arqueopro-pesquisas-com-usu%C3%A1rio-ddf2573d0c4e",
  },
  {
    title: "Acessibilidade e Escolhas de Design",
    image: "/cases/styleguide.png",
    link: "https://medium.com/@giosilvdsign/arqueopro-superando-desafios-do-sol-forte-no-trabalho-de-campo-arqueol%C3%B3gico-para-a-coleta-de-dados-e61b54a2b82a",
  },
  {
    title: "Design, Design Patterns e Modelagem de Dados",
    image: "/cases/styleguide2.png",
    link: "https://medium.com/@giosilvdsign/design-e-design-patterns-em-banco-de-dados-arqueol%C3%B3gicos-an%C3%A1lise-e-proposta-de-modelagem-4a3ed12a4174",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.home}>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>
              <div className={styles.firstLine}>
                <span className={styles.flirtation}>G</span>
                <span className={styles.breamcatcher}>IO</span>
              </div>
              <div className={styles.secondLine}>
                <span className={styles.flirtation}>S</span>
                <span className={styles.breamcatcher}>ILVEIRA</span>
              </div>
            </h1>
          </div>

          <div className={styles.navigation}>
            <button className={styles.portfolioBtn}>
              <span className={styles.dot}></span>
              Portfolio
            </button>
            <button className={styles.curriculoBtn}>
              <span className={styles.dotOutline}></span>
              Currículo
            </button>
          </div>

          <div className={styles.subTitleContainer}>
            <p className={styles.subTitle}>
              Desenvolvo interfaces e ideias em soluções <br />
              digitais de alto impacto, combinando <br />
              estratégia e design centrado no usuário.
            </p>
          </div>
        </section>

        <section id="projetos" className={styles.projects}>
          <div className={styles.portfolioHeaderContainer}>
            <div className={styles.contentWrapper}>
              <div className={styles.portfolioPill}>
                <span>Portfolio</span>
              </div>
              <div className={styles.lineConnector}></div>
              <div className={styles.quoteContainer}>
                <p>
                  &quot;The secret to successful product design is <br />
                  understanding what the real problem is.&quot;
                </p>
                <span>– Don Norm</span>
              </div>
            </div>
          </div>

          <div className={styles.projectCardsContainer}>
            <ProjectCard
              title={arqueoProData.title}
              tags={arqueoProData.tags}
              description={arqueoProData.project_description}
              features={arqueoProData.features}
              image={arqueoProData.image}
              hoverTitle={arqueoProData.hoverTitle}
              link={arqueoProData.link}
            />

            <ProjectCard
              title={jaguaracambeData.title}
              tags={jaguaracambeData.tags}
              description={jaguaracambeData.project_description}
              features={jaguaracambeData.features}
              image={jaguaracambeData.image}
              hoverTitle={jaguaracambeData.hoverTitle}
              link={jaguaracambeData.link}
            />
          </div>
        </section>

        <section className={styles.skillsSection}>
          <div className={styles.skillsContent}>
            <h2 className={styles.skillsTitle}>
              Principais Habilidades e Conhecimentos
            </h2>
            <ul className={styles.skillsList}>
              <li>
                UX/UI Design para sites e aplicativos (experiência prática em
                processos completos).
              </li>
              <li>Realização de pesquisas.</li>
              <li>Prototipação.</li>
              <li>Design Gráfico.</li>
              <li>Noções de HTML e CSS.</li>
              <li>
                Design Instrucional: atuação no desenvolvimento de projetos
                educacionais digitais.
              </li>
              <li>Criação de sites WordPress com Elementor.</li>
              <li>
                Atualizada nas principais diretrizes, boas práticas e tendências
                de design digital.
              </li>
              <li>
                Facilidade em seguir cronogramas, com comprometimento e paixão
                pelo que faço.
              </li>
            </ul>

            <h3 className={styles.toolsTitle}>Ferramentas</h3>
            <div className={styles.toolsGrid}>
              <Image
                src="/icons/figma.svg"
                alt="Figma logo"
                className={styles.toolIcon}
                width={64}
                height={64}
              />
              <Image
                src="/icons/illustrator.png"
                alt="Adobe Illustrator logo"
                className={styles.toolIcon}
                width={64}
                height={64}
              />
              <Image
                src="/icons/photoshop.png"
                alt="Adobe Photoshop logo"
                className={styles.toolIcon}
                width={64}
                height={64}
              />
              <Image
                src="/icons/maze.svg"
                alt="Maze logo"
                className={styles.toolIcon}
                width={64}
                height={64}
              />
              <Image
                src="/icons/webflow.svg"
                alt="Webflow logo"
                className={styles.toolIcon}
                width={64}
                height={64}
              />
            </div>
          </div>
        </section>

        <section id="experiencias" className={styles.aboutSection}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle}>SOBRE</h2>
            <p className={styles.aboutSubtitle}>A Designer</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItemsWrapper}>
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`
            ${styles.timelineItem} 
            ${index % 2 !== 0 ? styles.left : styles.right}
            ${index % 2 === 0 ? styles.bigCircle : ""}
          `}
                >
                  <div className={styles.timelineContent}>
                    <h3>{item.title}</h3>
                    {item.subtitle && <h4>{item.subtitle}</h4>}
                    <ul>
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.timelineEnd}>
              <div className={styles.timelineEndIcon}>
                <Image
                  src="/icons/hourglass.svg"
                  alt="Hourglass icon"
                  className={styles.iconSvg}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.casesSection}>
          <div className={styles.casesHeader}>
            <div className={styles.casesTitlePill}>Cases</div>
          </div>

          <div className={styles.casesGrid}>
            {casesData.map((caseItem, index) => (
              <a key={index} href={caseItem.link} className={styles.caseItem}>
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  className={styles.caseImage}
                  width={500}
                  height={500}
                />

                <div className={styles.caseItemOverlay}>
                  <h3>{caseItem.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <img
            src="/contact-background.png"
            alt="Fundo artístico abstrato"
            className={styles.contactBackgroundImage}
          />

          <div className={styles.contactContentWrapper}>
            <div className={styles.contactContainer}>
              <div className={styles.speechBubble}>
                <p>
                  Seja Bem vindo! Quer conhecer mais sobre a trajetória de Gio
                  Silveira?
                </p>
                <Link href="/about-me">Ok, quero conhecer.</Link>
              </div>

              <div className={styles.middleContent}>
                <div className={styles.profileImageContainer}>
                  <img
                    src="/profile.png"
                    alt="Foto de perfil de Gio Silveira"
                  />
                </div>

                <div className={styles.lineConnectorBox}>
                  <div className={styles.lineHorizontal}></div>
                  <div className={styles.lineVertical}></div>
                </div>

                <div className={styles.contactBox}>
                  <p>
                    <strong>Linkedin:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/giovanna-silveira-a34662261/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /Giovana Silveira
                    </a>
                  </p>
                  <p>
                    <strong>E-mail:</strong>{" "}
                    <a href="mailto:giosilvdsign@gmail.com">
                      giosilvdsign@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Medium:</strong>{" "}
                    <a
                      href="https://medium.com/@giosilvdsign"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @giosilvdsign
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bottomNav}>
              <a href="#top" className={styles.backToTop}>
                Back to top
              </a>

              <a
                href="/Currículo Gio Silveira UXUI Designer.pdf" 
                download="Curriculo-Gio-Silveira.pdf"
                className={styles.curriculoButton} 
              >
                <span>Currículo</span>
                <span className={styles.downloadText}>baixar</span>{" "}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
