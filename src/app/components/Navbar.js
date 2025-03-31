'use client'

import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import {useState,useEffect} from "react"


export default function Navbar(){
const [isMenuOpen,setIsMenuOpen]= useState (false)

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
}

  const closeMenu = (event) => {
        if (!event.target.closest(`.${styles.navbar}`)) {
            setIsMenuOpen(false);
        }
    };
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú cuando se hace clic en una opción
  };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', closeMenu);
        } else {
            document.removeEventListener('click', closeMenu);
        }

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isMenuOpen]);


    return(
       
        <nav className={styles.navbar}>
            {/* <ul className={styles.navLinks}> */}
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    ☰
                </button>
                 <div className={`${styles.navLinks_container}  ${isMenuOpen ? styles.show : ""}`}>
            <Link className={styles.navLink} href="/"  onClick={handleLinkClick}>Inicio</Link>
            <Link className={styles.navLink} href="/practice"  onClick={handleLinkClick}>Areas de practica</Link>
            <Link className={styles.navLink} href="/about" onClick={handleLinkClick}>Nosotros</Link>
            <Link className={styles.navLink} href="/contact" onClick={handleLinkClick}>Contacto</Link>
            </div>
                 {/* <li>
                <Link href="/" className={styles.navLink}>
                    Inicio
                </Link>
                </li>
                
                <li>
                <Link href="/practice"  className={styles.navLink}>
                Areas practicas
                </Link>
                </li>
                <li>
                <Link href="/about" className={styles.navLink}>
                    Nosotros
                </Link>
                </li>
                <li>
                <Link href="/contact" className={styles.navLink}>
                    Contacto
                </Link>
                </li>
            </ul> */}
        </nav>
    )
}