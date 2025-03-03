import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div className={styles.homeBkg}>a</div>
      </section>
    </>
  );
}
