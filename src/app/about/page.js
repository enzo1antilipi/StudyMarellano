import styles from "../styles/About.module.css"
import Image from "next/image"
import { Italianno, Inter } from "next/font/google"
const italianno = Italianno({
  subsets: ["latin"], // Idiomas compatibles
  weight: "400", // Peso disponible para Italianno
});

const inter = Inter({
  subsets: ["latin"],
  weight: "800", // Extra Bold
});
export default function about(){

    
    return(
    <section className={styles.containerSection}> 
        <div className={styles.imgContainer}>
            <div className={styles.description}>
                <h1 className={italianno.className} style={{fontSize:"55px"}}>Quienes somos?</h1>
                <h1 className={inter.className} style={{fontSize:"50px", color:"#512D16", marginTop:"-25px"}}>Estudio Marellanos</h1>
                {/* <h2>especializado en Familia,asdasd,asdfasdf,asdf</h2> */}
            </div>
          <div className={styles.img}>
             <Image
                   className={styles.imgLogo}
                    src="/ley1.jpg"
                    alt=""
                    width={2000}
                    height={2000}
                    priority
                  />
        </div>
        </div>
        <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>Nuestra firma se mantiene al frente del asesoramiento legal en la 
                Argentina adaptándose a las cambiantes necesidades de los clientes y de la comunidad. 
                En nuestra vida cotidiana nos enfrentamos con situaciones que exigen tomar decisiones de orden 
                legal. Por tal motivo debemos pensar en la importancia que tiene estar asesorado convenientemente. 
                La permanente mejora del capital humano unida a la revisión constante de los recursos técnicos es lo 
                que nos permite prestar un servicio responsable y de avanzada calidad. Su éxito estuvo basado tanto 
                en sus cualidades comunes como en sus diferentes experiencias e intereses. 
                Nuestra oficina ha continuado fortaleciendo sus prácticas profesionales activas en cuanto a asuntos reglamentarios
                 que comprende las áreas del Derecho Laboral (Accidentes de Trabajo), del Derecho Civil (Sucesiones, Divorcios, 
                 Accidentes de Tránsito y Exequatur – Validacion de Sentencias del Extranjero en la Argentina). La clave de nuestro crecimiento está basada en la atención personalizada de las necesidades de cada uno de nuestros clientes, a través de una actuación diligente, eficiente y confidencial. Justamente esta atención nos ha permitido la permanencia en el mercado y la posibilidad de expandir nuestro equipo, con la incorporación de nuevos y sólidos profesionales en las materias de práctica.</p>
        </div>
    </section>       
    )
}