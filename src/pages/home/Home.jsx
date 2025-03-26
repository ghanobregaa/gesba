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
            <div className={styles.box}>a</div>
            <div className={styles.box}>a</div>
          </div>
        </div>
      </section>
    </>
  );
}
