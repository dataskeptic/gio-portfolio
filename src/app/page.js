import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";

const arqueoProData = {
  title: "ArqueoPro: Seu campo na palma da mão",
  tags: ["UX DESIGN", "UI DESIGN", "USER RESEARCH", "PRODUCT DESIGN"],
  project_description: "Organizei a estrutura, fluxo de uso e todo o processo de design do aplicativo voltada para otimizar a coleta e gestão de dados arqueológicos em campo integrado com GPS. O aplicativo está em atual fase de implementação. Foram mapeadas e integradas no aplicativo categorias essenciais como:",
  features: [
    "Formulários de coleta e registro de dados;",
    "Tags de categorização de membros de equipe;",
    "Divisão de projetos e arquivos relacionados;",
    "Registro de Locais (sítios, pontos georreferenciados)",
    "GPS: disponibilização de mapas, gravação de caminhamento e marcação de pontos georreferenciados.",
  ],
  image: "/arqueopro.png",
  hoverTitle: "Solução digital para campo arqueológico: app de coleta de dados integrado com GPS."
};

const jaguaracambeData = {
  title: "Novo de design do site da ONG Jaguaracambé (versão de 2023).",
  tags: ["UX DESIGN", "UI DESIGN", "WEB DESIGN", "LANDING PAGE"],
  project_description: "Realizei o redesign completo do site da ONG ambientalista, com foco em melhorar a navegação, a clareza das informações e o engajamento do público com as causas e projetos da instituição. Reestruturei a hierarquia de conteúdo para tornar o acesso mais intuitivo e a experiência do usuário mais fluida, tanto em desktop quanto em dispositivos móveis. O design pode ser acessado pelo site oficial da ONG Jaguaracambé, o projeto foi entregue em 2023. As principais melhorias incluem:",
  features: [
    "Padronização de cores, tipografia, botões, formulários e espaçamento para criar uma identidade visual coesa;",
    "Melhoria do contraste entre texto e fundo para garantir legibilidade;",
    "Criação de hierarquia visual clara com títulos, subtítulos e elementos de destaque;",
  ],
  image: "/jaguaracambe.png",
  hoverTitle: "Redesign do site da ONG Jaguaracambé para melhorar navegação e engajamento."
};

// Dados para a seção da Linha do Tempo
// Cole este array no topo do seu componente Home em page.js
const timelineData = [
  {
    title: "UX/UI Designer - Freelancer/ ONG",
    subtitle: "Jaguaracambé",
    details: [
      "UX/UI Design",
      "Product Design",
      "Fluxos de Usuário",
      "Wireframes",
      "Prototipagem",
      "Teste de Usabilidade",
      "Design de Landing Page",
    ],
  },
  {
    title: "Superior - Design Gráfico",
    subtitle: "Tecnólogo, UNOPAR",
    details: [
      "Criação de projetos de comunicação visual e design;",
      "Elaboração e avaliação técnica de projetos;",
      "Gestão e planejamento de projetos gráficos;",
      "Métodos e processos de criação em ilustração e design;",
    ],
  },
  {
    title: "Designer Gráfico - Boon Agência de Marketing",
    subtitle: "",
    details: [
      "Layouts criativos: posts, banners, stories e anúncios, focando em engajamento e identidade visual;",
      "Adequação de peças para diferentes redes sociais;",
      "Design de materiais institucionais e promocionais impressos;",
    ],
  },
  {
    title: "Programa UX Unicórnio",
    subtitle: "Leandro Rezende",
    details: [
      "Formação em UX, UI e Product Design",
      "Pesquisa de experiência de usuário",
      "UX Research e UX Strategy",
      "Design de Interfaces",
      "Mapeamento de Jornada",
      "UX em ambientes ágeis",
      "Interação homem-máquina",
      "Figma",
    ],
  },
  {
    title: "Designer Instrucional - FADEX/ Projeto SEDUC TEC",
    subtitle: "",
    details: [
      "Estruturação de roteiros para edição de aulas técnicas para o Ensino Médio;",
      "Desenvolvimento e conteúdos de aprendizagem: materiais didáticos como textos, roteiros para vídeos, design de cenas e avaliações e recursos multimídia;",
    ],
  },
  {
    title: "Outro Curso",
    subtitle: "Tecnólogo, UNOPAR: Arqueologia Digital e Banco de Dados",
    details: [
        "Elaboração e avaliação técnica de projetos;",
        "Gestão e planejamento de projetos gráficos;",
        "Métodos e processos de criação em ilustração e design;",
    ],
  },
  {
    title: "UX/UI Designer - Freelancer/ ArqueoPro",
    subtitle: "",
    details: [
      "UX/UI Design",
      "Product Design",
      "Arquitetura da Informação",
      "Pesquisa com usuários",
      "Fluxos de uso",
      "Wireframing",
      "Prototipagem",
      "Testes de usabilidade",
      "Style Guide",
      "Design Gráfico",
      "Mobile First",
      "Levantamento de requisitos",
    ],
  },
];



export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftTop}>
          <div className={styles.year}>
            <p>2025</p>
          </div>
          <div className={styles.resume}>
            <p>[RESUME]</p>
          </div>
        </div>
        <div className={styles.centerTop}>
          <p>UX/UI Design | Product Design | Graphic Design</p>
        </div>
        <div className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

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

        <section className={styles.projects}>
          <div className={styles.portfolioHeaderContainer}>
            <div className={styles.contentWrapper}>
              <div className={styles.portfolioPill}>
                <span>Portfolio</span>
              </div>
              <div className={styles.lineConnector}></div>
              <div className={styles.quoteContainer}>
                <p>
                  "The secret to successful product design is <br />
                  understanding what the real problem is."
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
            />

            <ProjectCard
              title={jaguaracambeData.title}
              tags={jaguaracambeData.tags}
              description={jaguaracambeData.project_description}
              features={jaguaracambeData.features}
              image={jaguaracambeData.image}
              hoverTitle={jaguaracambeData.hoverTitle}
            />
          </div>
        </section>

        {/* Habilidades e Conhecimentos Section */}
        <section className={styles.skillsSection}>
          <div className={styles.skillsContent}>
            <h2 className={styles.skillsTitle}>
              Principais Habilidades e Conhecimentos
            </h2>
            <ul className={styles.skillsList}>
              <li>
                UX/UI Design para sites e aplicativos (experiência prática em
                processos completos)
              </li>
              <li>Realização de pesquisas</li>
              <li>Prototipação</li>
              <li>Design Gráfico</li>
              <li>Noções de HTML e CSS</li>
              <li>
                Design Instrucional: atuação no desenvolvimento de projetos
                educacionais digitais
              </li>
              <li>Criação de sites WordPress com Elementor</li>
              <li>
                Atualizada nas principais diretrizes, boas práticas e tendências
                de design digital
              </li>
              <li>
                Facilidade em seguir cronogramas, com comprometimento e paixão
                pelo que faço
              </li>
            </ul>

            <h3 className={styles.toolsTitle}>Ferramentas</h3>
            <div className={styles.toolsGrid}>
              
              <img
                src="/icons/figma.svg"
                alt="Figma logo"
                className={styles.toolIcon}
              />
              <img
                src="/icons/illustrator.png"
                alt="Adobe Illustrator logo"
                className={styles.toolIcon}
              />
              <img
                src="/icons/photoshop.png"
                alt="Adobe Photoshop logo"
                className={styles.toolIcon}
              />
              <img
                src="/icons/maze.svg"
                alt="Maze logo"
                className={styles.toolIcon}
              />
              <img
                src="/icons/webflow.svg"
                alt="Webflow logo"
                className={styles.toolIcon}
              />
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
  {/* Cabeçalho "SOBRE A Designer" */}
  <div className={styles.aboutHeader}>
    <h2 className={styles.aboutTitle}>SOBRE</h2>
    <p className={styles.aboutSubtitle}>A Designer</p>
  </div>

  {/* A Timeline em si */}
  <div className={styles.timeline}>
    {/* Este wrapper é essencial para o novo CSS funcionar corretamente */}
    <div className={styles.timelineItemsWrapper}>
      {timelineData.map((item, index) => (
        <div 
          key={index} 
          className={`
            ${styles.timelineItem} 
            ${index % 2 !== 0 ? styles.left : styles.right}
            ${index % 2 === 0 ? styles.bigCircle : ''}
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
    
    {/* Ícone final da Timeline */}
    <div className={styles.timelineEnd}>
      <div className={styles.timelineEndIcon}>
        <img 
          src="/icons/hourglass.svg" 
          alt="Hourglass icon" 
          className={styles.iconSvg}
        />
      </div>
    </div>
  </div>
</section>

{/* Título "Cases" - FORA da seção da timeline */}
<div className={styles.casesHeader}>
  <div className={styles.casesTitlePill}>
    Cases
  </div>
</div>



        

        <section className={styles.contact}>
          <h2>Contact</h2>
          
        </section>
      </main>
    </div>
  );
}
