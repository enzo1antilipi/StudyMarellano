import styles from '../styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer(){

    return(
      <footer className={styles.container}>
      <div className={styles.content}>
       

        <div className={styles.social}>
          <h3>Contáctanos</h3>
          <div className={styles.icons}>
            <a href="#" target="_blank" rel="noopener noreferrer">
               <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
               <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                   <FaLinkedin />
            </a>
          </div>
        </div>
         <div className={styles.info}>
          <h2>Estudio Jurídico Marellanos y Asociados</h2>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Pixels&Code. Todos los derechos reservados.</p>
      </div>
    </footer>
    )
}