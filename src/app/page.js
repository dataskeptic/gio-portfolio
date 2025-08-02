import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gio Silveira</h1>
        <p>UX/ UI Developer</p>
      </header>
      
      <main className={styles.main}>
        <section className={styles.about}>
          <h2>About Me</h2>
          <p>Your introduction goes here...</p>
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
