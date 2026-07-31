import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Imagens/logo.png";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const duration = 900; // ms — ajuste aqui para mais/menos lento
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <button onClick={() => scrollTo('hero')} aria-label="Ir para o início" className={styles.header__logo_btn}>
            <img src={logo} alt="WTE Elétrica" className={styles["logo-img"]} />
          </button>
        </div>

        <nav className={`${styles.header__nav} ${menuOpen ? styles["header__nav--open"] : ""}`}>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('hero')}>
            Home
          </button>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('sobre')}>
            Sobre
          </button>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('servicos')}>
            Serviços
          </button>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('atuacao')}>
            Regiões
          </button>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('parceiros')}>
            Parceiros
          </button>
          <button className={styles["header__nav-link"]} onClick={() => scrollTo('contato')}>
            Contatos
          </button>
        </nav>

        <div className={styles.header__right}>
          <div className={styles.header__social}>
            <a
              href="https://www.facebook.com/wteeletrica.wteeletrica?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/wteeletrica/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@wteeletrica"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburger__line} ${menuOpen ? styles["hamburger__line--open"] : ""}`} />
            <span className={`${styles.hamburger__line} ${menuOpen ? styles["hamburger__line--open"] : ""}`} />
            <span className={`${styles.hamburger__line} ${menuOpen ? styles["hamburger__line--open"] : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
