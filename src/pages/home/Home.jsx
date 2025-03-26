import CountUp from "react-countup";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className={styles.sectionHome}>
        <div className={styles.center}>
          <div className={styles.column}>
            <h1>GESBA</h1>
            <h2>Juntos fazemos crescer a produção</h2>
            <button className={styles.saberMais}>Saber mais</button>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.box}>
              <h3>
                Banana da Madeira: mais doce, mais saborosa e mais sustentável
              </h3>
              <p>
                Mais pequeninas, mais docinhas e produto nacional, a Banana da
                Madeira continua a dar cartas em Portugal. Em 2024, segundo os
                dados da Direção Regional de Agricultura e Desenvolvimento
                Rural, foram vendidas 24,5 mil toneladas de banana produzida na
                Madeira. Trata-se do segundo melhor ano desde 1999, apenas
                superado por 2023.
              </p>
            </div>
            <div className={styles.box}>
              <h3>Medida 2 – Fileiras agropecuárias: Banana</h3>
              <p>
                Regime de ajuda aos produtores de banana na Região Autônoma da
                Madeira (RAM) que entreguem a sua produção para comercialização
                numa entidade reconhecida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
