import Image from 'next/image';
import Header from '../components/Header'; // Importa o Header que já corrigimos
import styles from './about-me.module.css';

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
                Desenvolvo uma abordagem multidisciplinar no UX/UI Design, unindo pensamento analítico e sensibilidade visual. Minha experiência com a gestão do banco de dados arqueológicos despertou meu interesse por interfaces mais funcionais e centradas no usuário. Desde então, venho me aprofundando em UX/ UI com foco em criar experiências digitais acessíveis, intuitivas e que resolvem dores reais, balanceando usabilidade, lógica da informação e impacto social.
              </p>
            </div>
            <h2 className={styles.designerTitle}>A DESIGNER</h2>
          </div>
        </section>

        {/* ================================== */}
        {/* Seção do Artigo Principal (Abaixo) */}
        {/* ================================== */}
        <section className={styles.mainArticleSection}>
          <div className={styles.mainArticle}>
            <p>
              Sou graduada em Arqueologia, com foco principal na Arqueologia Digital, especificamente no uso de bancos de dados aplicados à pesquisa arqueológica. Minha monografia - “Organizando Passados, Estruturando Futuros: Análise dos Bancos de Dados Arqueológicos no Estado do Piauí-Brasil, um Estudo de Caso de Confusões (PI)” - teve como objetivo analisar os três dos principais sistemas de bancos de dados pronunciados no estado. A partir daí, criei uma proposta própria voltada tanto à gestão de dados arqueológicos quanto à logística de campo. As principais dores se encontravam na documentação e registro dos sistemas, mas também aspectos relacionados ao design da interface e à experiência do usuário.
            </p>
            <p>
              Durante a graduação, percebi que não me identificava com a prática tradicional da Arqueologia, principalmente em seus rituais. Cheguei a concluir um tecnólogo em design gráfico - uma área que sempre me interessou, mas que até então não havia tido a oportunidade de explorar. Foi aí que pude conhecer o universo do UX/UI Design, pelo qual me encantei e venho me aprofundando desde então.
            </p>
            <p>
              Acredito que minha formação multidisciplinar me permite trazer uma perspectiva única para o design de produtos digitais. A Arqueologia me ensinou a lidar com grandes volumes de dados, a estruturar informações de forma lógica e a pensar em sistemas duráveis para o registro, acesso e preservação do conhecimento - habilidades fundamentais na criação de produtos digitais organizados e de usabilidade visual. Já o design gráfico me proporcionou domínio sobre aspectos visuais e comunicacionais, essenciais para criar interfaces intuitivas, desejáveis e esteticamente agradáveis.
            </p>
            <p>
              Hoje, sigo estudando e me aperfeiçoando constantemente em UX/UI, com foco em compreender melhor os usuários, mapear suas jornadas, propor soluções eficazes e testar hipóteses. Meu objetivo, que também é o que orienta a minha intenção, é continuar contribuindo para projetos que valorizem tanto a usabilidade quanto o impacto social e cultural do design.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
