"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

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
