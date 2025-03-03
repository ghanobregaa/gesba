import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.row}>
          <a>Início</a>
          <a>Sobre nós</a>
          <a>Comunicados</a>
          <a>Eventos</a>
          <a>Produção</a>
          <a>Produtores</a>
          <a>Documentação</a>
          <a>Contactos</a>
        </div>
      </div>
    </div>
  );
}
