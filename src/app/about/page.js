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
                <h1 className={inter.className} style={{ color:"#512D16", marginTop:"-25px"}}>Estudio Juridico Marellanos <br/> y Asociados</h1>
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
            <p className={styles.paragraph}>En el Estudio Marellano, nos dedicamos a brindar soluciones legales integrales con un enfoque profesional, ético y personalizado. Contamos con un equipo de abogados especializados en diversas ramas del derecho, comprometidos con la defensa de los derechos e intereses de nuestros clientes.

Nuestra misión es ofrecer un servicio jurídico eficiente y accesible, asegurando acompañamiento en cada etapa del proceso legal. Nos destacamos en áreas clave como Derecho de Familia, Civil y Comercial, Laboral e Inmobiliario, proporcionando asesoramiento estratégico y representación tanto en instancias de negociación como en litigios judiciales.

Creemos en la importancia de la mediación y la resolución de conflictos de manera justa y equilibrada, priorizando siempre el bienestar de las personas y la seguridad jurídica en cada caso. Trabajamos con un enfoque práctico y orientado a resultados, ayudando a nuestros clientes a tomar decisiones informadas con confianza y tranquilidad.

En el Estudio Marellano, entendemos que cada situación es única, por lo que ofrecemos soluciones adaptadas a las necesidades particulares de individuos y empresas. Nuestro compromiso es proteger tus derechos y brindarte la mejor asistencia legal para que puedas avanzar con seguridad en cada aspecto de tu vida y negocio.</p>
        </div>
    </section>       
    )
}