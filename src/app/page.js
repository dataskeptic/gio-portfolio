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

          <ProjectCard
            title={arqueoProData.title}
            tags={arqueoProData.tags}
            description={arqueoProData.project_description}
            features={arqueoProData.features}
            image={arqueoProData.image}
            hoverTitle={arqueoProData.hoverTitle}
          />
        </section>

        <section className={styles.contact}>
          <h2>Contact</h2>
          {/* Your contact info goes here */}
        </section>
      </main>
    </div>
  );
}
