import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { HiBars3, HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
export default function Navbar() {
  const [climate, setClimate] = useState([]);
  const [open, setOpen] = useState(false);
  const [topo, setTopo] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setTopo(true);
      } else {
        setTopo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollDirection(true); // Scrolling Up
      } else {
        setScrollDirection(false); // Scrolling Down
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  async function getData() {
    try {
      fetch(
        "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/2310300.json"
      )
        .then((res) => res.json())
        .then((data) => setClimate(data));
    } catch {}
  }

  return scrollDirection || open ? (
    <div
      className={`${styles.navbar} ${open ? styles.open : ""} ${
        !topo ? styles.topo : ""
      } ${scrollDirection && !open ? styles.showP : ""}`}
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
          {open ? <HiMiniXMark size={45} /> : <HiMiniBars3 size={35} />}
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
  ) : (
    ""
  );
}
