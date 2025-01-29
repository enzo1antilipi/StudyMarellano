import Link from "next/link"
import styles from "../styles/Navbar.module.css"
export default function Navbar(){



    return(
       
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                 <li>
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
            </ul>
        </nav>
    )
}