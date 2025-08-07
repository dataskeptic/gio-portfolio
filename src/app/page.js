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

        <section className={styles.contact}>
          <h2>Contact</h2>
          {/* Your contact info goes here */}
        </section>
      </main>
    </div>
  );
}
