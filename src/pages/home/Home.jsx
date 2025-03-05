import CountUp from "react-countup";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import { useRef } from "react";
import { useIsVisible } from "../../components/viewer/viewer";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
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
          <div ref={ref} className={`${styles.rowCount}`}>
            {isVisible ? (
              <div className={styles.columnN}>
                <div className={styles.number}>
                  <CountUp end={2900} separator=" " />
                </div>
                <div className={styles.subText}>Produtores</div>
              </div>
            ) : (
              ""
            )}
            {isVisible ? (
              <div className={styles.columnN}>
                <div className={styles.number}>
                  <CountUp end={150101} separator=" " suffix=" kg" />
                </div>
                <div className={styles.subText}>Produção março</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      {/* <section className={styles.section3}>a</section> */}
      <Footer />
    </>
  );
}
