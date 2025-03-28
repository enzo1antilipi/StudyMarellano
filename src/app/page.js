import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import {  Inter } from "next/font/google"

// import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400", // Extra Bold
});

export default function Home() {
  return (
    <div >
      <main >
        
        
         <section className="containerImgHome">
          <Image
           className="imgLogo"
            src="/ley3.png"
            alt=""
            width={2000}
            height={2000}
            priority
          />
            <div className="overlay"></div>
          <div   className={`text ${inter.className}`}>Estudio Juridico Marellanos y Asociados</div>
        </section>

        <section className="SectionPractice">
          <div className="containerPractice">
            
            <div className="cuadro">
              <h3>Familia</h3>
              <p>Asesoramos en temas como divorcios, alimentos, tenencia y acuerdos familiares, ofreciendo soluciones personalizadas que priorizan el bienestar de los involucrados.</p>
              <div className="containerSeemore">
               <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Civil y comercial</h3>
              <p>Brindamos apoyo en contratos, transacciones comerciales y resolución de conflictos, protegiendo tus intereses y fortaleciendo la seguridad jurídica de tus proyectos.
                </p>
                <div className='containerSeemore'>
                  <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>

            
            <div className="cuadro">
              <h3>Laboral</h3>
              <p>Defendemos los derechos de trabajadores y empleadores, gestionando reclamos por despidos, indemnizaciones y conflictos laborales con profesionalismo y equidad.</p>
                 <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Derecho inmobiliario</h3>
              <p>Te acompañamos en la gestión de bienes raíces, ofreciendo seguridad jurídica en compraventas, alquileres y sucesiones, protegiendo tu patrimonio en cada operación.</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro">
              <h3>Derecho sucesorio</h3>
              <p>Asesoramos y gestionamos sucesiones, herencias y testamentos, asegurando una distribución justa del patrimonio con transparencia y seguridad jurídica.</p>
                 <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
          </div>
      {/* mobile version */}
          <div className="mobile-version">
    <div className="containerPracticeMobile">
            <div className="container1">
            <div className="cuadro" style={{marginTop:"5px"}}>
              <h3>Familia</h3>
              <p>Asesoramos en temas como divorcios, alimentos, tenencia y acuerdos familiares, ofreciendo...</p>
              <div className="containerSeemore">
               <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Civil y comercial</h3>
              <p>Brindamos apoyo en contratos, transacciones comerciales y resolución de conflictos...
                </p>
                <div className='containerSeemore'>
                  <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            {/* </div>
            <div className="container2"> */}
            <div className="cuadro" style={{marginTop:"5px"}}>
              <h3>Laboral</h3>
              <p>Defendemos los derechos de trabajadores y empleadores, gestionando reclamos por...</p>
                 <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Derecho inmobiliario</h3>
              <p>Te acompañamos en la gestión de bienes raíces, ofreciendo seguridad jurídica en...</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            <div className="cuadro" style={{marginTop:"5px"}}>
              <h3>Derecho inmobiliario</h3>
              <p>Asesoramos y gestionamos sucesiones, herencias y testamentos asegurando...</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver mas
                </Link>
                </div>
            </div>
            </div>
          </div>
          </div>
        </section>

        <section className="sectionAbout">
          <div className="aboutContainer1">
          <h2 className="titleabout">Sobre Nosotros</h2>
          <div className="paragrphAbout">
           <p>
              Somos una firma legal comprometida con brindar asesoramiento de calidad, adaptándonos a las necesidades cambiantes de nuestros clientes y la comunidad. 
            </p>
            <p>
              Nos especializamos en Derecho Laboral, Civil y la validación de sentencias extranjeras, ofreciendo soluciones personalizadas, eficientes y confidenciales. 
            </p>
            <p>
              Nuestro enfoque en el crecimiento humano y técnico nos permite garantizar un servicio responsable y de avanzada...
            </p>
            <p>Ver mas </p>
    </div>
          </div>
          <div className="aboutContainer2">
            {/* imagen */}
               <Image
                  className="imgAbout"
                  src="/ley1.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  priority
                />
          </div>
        </section>

        <section className="sectionAboutAbogado">
          <div className="containerImgAbout">
             <div className="containerDescriptionAbout">
            {/* descripcion  */}
            <h1>Foto</h1>
          </div>
          <div className="datosPhotos">
            <h1>Dr. Arellano Larrosa Marcos </h1>
            <p>Breve descripcion si es necesaria</p>
            
            <p>Numero de matricula link</p>
          </div>
            {/* imagen */}
          </div>

        </section>
      </main>
    </div>
  );
}
