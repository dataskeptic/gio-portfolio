import Image from "next/image";
import Header from "../components/Header"; // Importa o Header que já corrigimos
import styles from "./about-me.module.css";

export default function AboutMePage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* ================================== */}
        {/* Seção Superior (Imagem e Intro)    */}
        {/* ================================== */}
        <section className={styles.heroSection}>
          {/* Coluna da Imagem */}
          <div className={styles.imageContainer}>
            <Image
              src="/profile-me.png" // Garanta que o nome do arquivo está correto
              alt="Foto de perfil de Gio Silveira"
              width={500}
              height={750}
              className={styles.profileImage}
            />
          </div>

          {/* Coluna do Texto Introdutório e Título */}
          <div className={styles.introContainer}>
            <div className={styles.introText}>
              <p>
                Desenvolvo uma abordagem multidisciplinar no UX/UI Design, unindo pensamento analítico e sensibilidade visual. Minha experiência com sistemas de banco de dados arqueológicos despertou meu interesse por interfaces mais funcionais e centradas no usuário.
                Desde então, venho me aprofundando em UX/UI com foco em criar experiências digitais acessíveis, intuitivas e que entreguem valor real, equilibrando usabilidade, lógica da informação e impacto social.
              </p>
            </div>
            <h2 className={styles.designerTitle}>A DESIGNER</h2>
          </div>
        </section>

        <section className={styles.mainArticleSection}>
          <div className={styles.mainArticle}>
            <p>
              Sou graduada em Arqueologia, com foco principal na Arqueologia Digital, especialmente no uso de bancos de dados aplicados à pesquisa arqueológica. Minha monografia — “Escavando o Passado, Estruturando o Futuro: Análise dos Bancos de Dados Arqueológicos e Proposta de Modelagem para a Serra das Confusões (PI)” — teve como objetivo analisar três dos principais sistemas de bancos de dados arqueológicos em uso no Brasil e propor uma modelagem própria voltada tanto à gestão de dados arqueológicos quanto à logística de campo. No trabalho, explorei não apenas a estruturação técnica desses sistemas, mas também aspectos relacionados ao design da interface e à experiência do usuário. 
            </p>
            <p>
              Durante a graduação, percebi que não me identificava com a prática profissional tradicional da arqueologia. Isso me levou a iniciar e concluir um tecnólogo em Design Gráfico — uma área que sempre me interessou, mas que até então não havia tido a oportunidade de explorar. Nesse processo, conheci o universo do UX/UI Design, pelo qual me encantei e venho me aprofundando desde então.  
            </p>
            <p>
              Acredito que minha formação multidisciplinar me permite trazer uma perspectiva rica e diferenciada para o UX/UI Design. A vivência em Arqueologia me ensinou a lidar com grandes volumes de dados, a estruturar informações de forma lógica e a pensar em sistemas voltados à documentação, acesso e preservação do conhecimento — habilidades fundamentais na criação de produtos digitais funcionais e centrados no usuário. Já o Design Gráfico me proporcionou domínio sobre aspectos visuais e comunicacionais, essenciais para criar interfaces intuitivas, acessíveis e esteticamente agradáveis. 
            </p>
            <p>
              Hoje, sigo estudando e me aperfeiçoando constantemente em UX/UI, com foco em compreender melhor os usuários, mapear suas jornadas, propor soluções eficientes e criar experiências digitais que realmente façam sentido. Minha intenção é continuar contribuindo para projetos que valorizem tanto a usabilidade quanto o impacto social e cultural do design.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.contactSection}>
        <img
          src="contact-background2.png"
          alt="Fundo artístico para a seção de contato"
          className={styles.contactBackgroundImage}
        />
        <div className={styles.contactOverlay}>
          <h2 className={styles.contactTitle}>CONTATE ME</h2>
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
              <a href="mailto:giosilvdsign@gmail.com">giosilvdsign@gmail.com</a>
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
      </footer>
    </div>
  );
}
