import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.bkg}>
        <div className={styles.logo}>
          <img src="logo.svg" />
        </div>
        <div className={styles.row}>
          <a>Sobre nós</a>
          <a>Comunicados</a>
          <a>Produção</a>
          <a>Produtores</a>
          <a>Documentação</a>
          <a>Contactos</a>
        </div>
      </div>
    </div>
  );
}
