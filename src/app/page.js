import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftTop}>
          <div className={styles.year}><p>2025</p></div>
          <div className={styles.resume}><p>[RESUME]</p></div>
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

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Desenvolvo interfaces e ideias em soluções  <br />  
               digitais de alto impacto, combinando <br /> 
               estratégia e design centrado no usuário.
            </p>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          {/* Your projects will go here */}
        </section>

        <section className={styles.contact}>
          <h2>Contact</h2>
          {/* Your contact info goes here */}
        </section>
      </main>
    </div>
  );
}
