import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: "800", // Extra Bold
});
export default function contact(){


    return(
    <section className={styles.containerSection}>
        <div className={styles.cotainerInformation}>
            <div className={styles.img}>
                 <Image
                   className={styles.imgLogo}
                    src="/telefono.jpg"
                    alt=""
                    width={250}
                    height={200}
                    priority
                  />
            </div>
            <div className={styles.dates}>
                {/* <h1 className={inter.className} style={{fontSize:"40px", color:"#4D3322"}}>Contactanos</h1> */}
                <div className={styles.contactContainer}>
                    <a href="tel:2804603334" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className={styles.iconwha} viewBox="0 0 24 24"><path fill="" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
                         2804603334
                    </a>
                    <a href="mailto:correo@gmail.com" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Enviar correo
                    </a>
                    </div>

                {/* <div className={styles.location}>
                    <h1>Puerto madryn</h1>
                    <h2>Paulina escardo 148 1 of 4</h2>
                </div> */}
                <div className={styles.locationContainer}>
                    <div className={styles.locationCard}>
                        <h1 className={styles.city}>Puerto Madryn</h1>
                        <h2 className={styles.address}>Paulina Escardó 148, 1º Of. 4</h2>
                    </div>
                    </div>

            </div>
            {/* mapa */}
           
        </div>
         <div className={styles.containerMaps}>
                  <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.058727709174!2d-65.03900112467815!3d-42.765963232953645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe024a9cde70a9f7%3A0xb725feeb21d886ad!2sBartolom%C3%A9%20Mitre%20150%2C%20U9120%20Puerto%20Madryn%2C%20Chubut!5e0!3m2!1ses!2sar!4v1736437991135!5m2!1ses!2sar"
              width="90%"
              height="100%"
              style={{ borderRadius: "10px"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
    </section>       
    )
}