"use client"; // Necessário para usar hooks como useState e useEffect

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se a página for rolada mais de 10px, marcamos como "scrolled"
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className={styles.navOverlay}>
          <Link
            href="/#home"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/#experiencias"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Experiências
          </Link>
          <Link
            href="/#projetos"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Projetos
          </Link>
          <Link
            href="/about-me"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Sobre mim
          </Link>
        </div>
      )}

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.year}>2025</p>
          <p>[RESUME]</p>
        </div>

        {/* Adicionamos uma classe condicional aqui */}
        <div
          className={`${styles.centerTop} ${isScrolled ? styles.hidden : ""}`}
        >
          <p>UX/UI Design | Product Design | Graphic Design</p>
        </div>

        <div className={styles.headerRight}>
          <div
            className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
