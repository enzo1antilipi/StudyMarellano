'use client'

import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import {  Inter } from "next/font/google"
import {useState,useEffect}from 'react'
// import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400", // Extra Bold
});

export default function Home() {

    const [imageSrc, setImageSrc] = useState("/home_desktop.jpg"); // Imagen por defecto (desktop)

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setImageSrc("/home_mobile.jpg"); // Imagen para mobile
      } else {
        setImageSrc("/home_desktop.jpg"); // Imagen para desktop
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);
  return (
    <div >
      <main >
        
        
         <section className="containerImgHome">
          <Image
           className="imgLogo"
            src={imageSrc}
            alt=""
            width={2000}
            height={2000}
            priority
          />
            
          <div   className={`text ${inter.className}`}><h1>Estudio Jurídico <br/>Marellano y Asociados</h1>
          <p className="parrafo">Compromiso, experiencia y excelencia en cada caso. <br/>Defendemos tus derechos con integridad y dedicación.</p>
          </div>
        </section>

        <section className="SectionPractice">
          <div className="containerPractice">
            
            <div className="cuadro">
              <h3 >Familia</h3>
              <p >Asesoramos en temas como divorcios, alimentos, tenencia y acuerdos familiares, ofreciendo soluciones personalizadas que priorizan el bienestar de los involucrados.</p>
              <div className="containerSeemore">
               <Link href="/practice"  className="seeMore">
               <span className="vermas">
                    Ver más
                    </span>
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Civil y Comercial</h3>
              <p className={inter.className} >Brindamos apoyo en contratos, transacciones comerciales y resolución de conflictos, protegiendo tus intereses y fortaleciendo la seguridad jurídica de tus proyectos.
                </p>
                <div className='containerSeemore'>
                  <Link href="/practice"  className="seeMore">
                    Ver más
                </Link>
                </div>
            </div>

            
            <div className="cuadro">
              <h3>Laboral</h3>
              <p>Defendemos los derechos de trabajadores y empleadores, gestionando reclamos por despidos, indemnizaciones y conflictos laborales con profesionalismo y equidad.</p>
                 <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver más
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Derecho inmobiliario</h3>
              <p>Te acompañamos en la gestión de bienes raíces, ofreciendo seguridad jurídica en compraventas, alquileres y sucesiones, protegiendo tu patrimonio en cada operación.</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver más
                </Link>
                </div>
            </div>
            <div className="cuadro">
              <h3>Derecho sucesorio</h3>
              <p>Asesoramos y gestionamos sucesiones, herencias y testamentos, asegurando una distribución justa del patrimonio con transparencia y seguridad jurídica.</p>
                 <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver más
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
                    Ver más
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Civil y Comercial</h3>
              <p>Brindamos apoyo en contratos, transacciones comerciales y resolución de conflictos...
                </p>
                <div className='containerSeemore'>
                  <Link href="/practice"  className="seeMore">
                    Ver más
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
                    Ver más
                </Link>
                </div>
            </div>
            <div className="cuadro2">
              <h3>Derecho inmobiliario</h3>
              <p>Te acompañamos en la gestión de bienes raíces, ofreciendo seguridad jurídica en...</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver más
                </Link>
                </div>
            </div>
            <div className="cuadro" style={{marginTop:"5px"}}>
              <h3>Derecho sucesorio</h3>
              <p>Asesoramos y gestionamos sucesiones, herencias y testamentos asegurando...</p>
              <div className="containerSeemore">
              <Link href="/practice"  className="seeMore">
                    Ver más
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
             <Link href="/about"  className="seeMore">
               <span className="vermas">
                    Ver más
                    </span>
                </Link>

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

        {/* <section className="sectionAboutAbogado">
          <div className="containerImgAbout">
             <div className="containerDescriptionAbout">

            <h1>Foto</h1>
          </div>
          <div className="datosPhotos">
            <h1>Dr. Arellano Larrosa Marcos </h1>
            <p>Breve descripcion si es necesaria</p>
            
            <p>Numero de matricula link</p>
          </div>

          </div>

        </section> */}
        <section className="sectionAboutAbogado">
          <div className="row1">
            <div className="containerImgAbout">
              {/* Imagen del abogado */}
              <div className="photoContainer">
                <img src="/marcos.jpg" alt="Dr. Arellano Larrosa Marcos" className="photo"/>
              </div>

              {/* Descripción */}
              <div className="containerDescriptionAbout">
                <h1 className="abogadoNombre">Dr. Arellano Larrosa Marcos</h1>
                <p className="abogadoDescripcion">
                  Profesional con experiencia en derecho civil comercial e inmobiliario , 15 años de experiencia en docencia.
                  Experiencia en corretaje y martillero comercial.
                </p>
                <p className="matricula">
                  Número de matrícula: <a href="https://colegioabogados.com" target="_blank" className="matriculaLink">M-603 CPAPM</a>
                </p>
              </div>
              
              
            </div>
            
             </div>
              <div className="row1">
            <div className="containerImgAbout">
              {/* Imagen del abogado */}
              <div className="photoContainer">
                <img src="/juan.jpg" alt="Dr. Arellano Larrosa Marcos" className="photo"/>
              </div>

              {/* Descripción */}
              <div className="containerDescriptionAbout">
                <h1 className="abogadoNombre">Dr. Juan Manuel Lanciotti Roberts</h1>
                <p className="abogadoDescripcion">
                  Abogado especializado en derecho civil y penal con más de 15 años de experiencia.
                </p>
                <p className="matricula">
                  Número de matrícula: <a href="https://colegioabogados.com" target="_blank" className="matriculaLink"> M-510 CPAPM</a>
                </p>
              </div>
              
              
            </div>
            <div className="containerImgAbout">
              {/* Imagen del abogado */}
              <div className="photoContainer">
                <img src="/gonzalo.jpg" alt="Dr. Arellano Larrosa Marcos" className="photo" />
              </div>

              {/* Descripción */}
              <div className="containerDescriptionAbout">
                <h1 className="abogadoNombre">Dr. Gonzalo Garcia Almiron</h1>
                <p className="abogadoDescripcion">
                  Abogado especializado en derecho civil y penal con más de 15 años de experiencia.
                </p>
                <p className="matricula">
                  Número de matrícula: <a href="https://colegioabogados.com" target="_blank" className="matriculaLink">M-504 CPAPM</a>
                </p>
              </div>
              
            </div>
             </div>
              <div className="row1">
              <div className="containerImgAbout">
              {/* Imagen del abogado */}
              <div className="photoContainer">
                <img src="/cuis.jpg" alt="Dr. Arellano Larrosa Marcos" className="photo"/>
              </div>

              {/* Descripción */}
              <div className="containerDescriptionAbout">
                <h1 className="abogadoNombre">Dr. Lucas Cuis Braga</h1>
                <p className="abogadoDescripcion">
                  Profesional egresado en la UBA con trayectoria en derecho penal, civil y comercial.
                </p>
                <p className="matricula">
                  Número de matrícula: <a href="https://colegioabogados.com" target="_blank" className="matriculaLink">M-556 CPAPM</a>
                </p>
              </div>
              
            </div>
            <div className="containerImgAbout">
              {/* Imagen del abogado */}
              <div className="photoContainer">
                <img src="/rocio.jpg" alt="Dr. Arellano Larrosa Marcos" className="photo"/>
              </div>

              {/* Descripción */}
              <div className="containerDescriptionAbout">
                <h1 className="abogadoNombre">Dra. Rocio Bahamonde Diaz </h1>
                <p className="abogadoDescripcion">
                  Abogado especializado en derecho civil y penal con más de 15 años de experiencia.
                </p>
                <p className="matricula">
                  Número de matrícula: <a href="https://colegioabogados.com" target="_blank" className="matriculaLink"> M-551 CPAPM</a>
                </p>
              </div>
              
              
            </div>
              </div>
          </section>

      </main>
    </div>
  );
}
