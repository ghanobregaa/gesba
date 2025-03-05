import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { HiBars3, HiMiniBars3, HiMiniXMark, HiXMark } from "react-icons/hi2";
export default function Navbar() {
  const [climate, setClimate] = useState(0);
  const [open, setOpen] = useState(false);
  const [topo, setTopo] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setTopo(false);
      } else {
        setTopo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function getData() {
    try {
      fetch(
        "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/2310300.json"
      )
        .then((res) => res.json())
        .then((data) => setClimate(data.data[0].tMax));
    } catch {}
  }

  return (
    <div
      className={`${styles.navbar} ${open ? styles.open : ""} ${
        !topo ? styles.topo : styles.notTopo
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          {open || !topo ? (
            <img src="logo_black.svg" />
          ) : (
            <img src="logo.svg" />
          )}
        </div>
        <div
          className={styles.hamburguer}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <HiXMark size={35} /> : <HiBars3 size={35} />}
        </div>

        <div className={styles.rowContent}>
          <a>Sobre nós</a>
          <a>Produção</a>
          <a>Produtores</a>
          <a>Documentação</a>
          <a>Contactos</a>
        </div>
      </div>
      <div className={styles.rowContentHamburguer}>
        <a>Sobre nós</a>
        <a>Produção</a>
        <a>Produtores</a>
        <a>Documentação</a>
        <a>Contactos</a>
      </div>
    </div>
  );
}
