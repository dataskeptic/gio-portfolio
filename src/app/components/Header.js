"use client"; // Necessário para usar hooks como useState e useEffect

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <p className={styles.year}>2025</p>
        <p>[RESUME]</p>
      </div>

      {/* Adicionamos uma classe condicional aqui */}
      <div className={`${styles.centerTop} ${isScrolled ? styles.hidden : ''}`}>
        <p>UX/UI Design | Product Design | Graphic Design</p>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
