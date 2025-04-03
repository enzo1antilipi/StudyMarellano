'use client'
import styles from "../styles/Practice.module.css"
import Image from "next/image"

export default function practice(){


    return(
    <section className={styles.sectionContainerPractice}>
        <div className={styles.containerGeneral}>
        <div className={styles.containerParagraph}>


        <div className={styles.paragraphContainer}>
             <div className={styles.backgroundLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" className={styles.svg} viewBox="0 0 24 24"><g fill=""><path d="M13 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/><path fillRule="evenodd" d="M16.196 12.48a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442a3 3 0 0 0-.289-.088V20.93a1.071 1.071 0 0 1-2.131.151L10.643 16h-.286l-.726 5.08a1.071 1.071 0 0 1-2.131-.15V15a3.5 3.5 0 1 1 0-7H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.5 10a1.5 1.5 0 0 0 0 3z" clipRule="evenodd"/><path d="M17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0"/></g></svg>
                </div>
           
            <div className={styles.container}>
                <div className={styles.contenendorMobil}>
                    <div className={styles.backgroundLogoMobil}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className={styles.svg} viewBox="0 0 24 24"><g fill=""><path d="M13 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/><path fillRule="evenodd" d="M16.196 12.48a1 1 0 0 1-1.177-.784c-.17-.85-.629-1.227-1.23-1.442a3 3 0 0 0-.289-.088V20.93a1.071 1.071 0 0 1-2.131.151L10.643 16h-.286l-.726 5.08a1.071 1.071 0 0 1-2.131-.15V15a3.5 3.5 0 1 1 0-7H12v.002c.702.01 1.617.067 2.461.369c1.149.41 2.19 1.283 2.52 2.933a1 1 0 0 1-.785 1.177M7.5 10a1.5 1.5 0 0 0 0 3z" clipRule="evenodd"/><path d="M17 14.4c0-.223.087-.365.213-.466a.9.9 0 0 1 .537-.184c.187 0 .392.067.537.184a.56.56 0 0 1 .213.466V21a.75.75 0 0 0 1.5 0v-6.6c0-.71-.32-1.269-.771-1.634a2.4 2.4 0 0 0-1.479-.516c-.5 0-1.045.166-1.479.516A2.06 2.06 0 0 0 15.5 14.4a.75.75 0 0 0 1.5 0"/></g></svg>
                    </div>
                    <h1 className={styles.titleSectionMobil}>Familia</h1>
                </div>
            <h1 className={styles.titleSectionDesktop}>Familia</h1>
            <div className={styles.contenedorparrafo}>
                <p className={styles.paragraph}>En el Estudio Marellano, comprendemos la importancia de brindar apoyo en los momentos más delicados que afectan a las familias. Ofrecemos asesoramiento integral en cuestiones tales como divorcios, uniones convivenciales, filiaciones, adopciones, regímenes de comunicación, alimentos y todas las cuestiones derivadas de la responsabilidad parental. Nuestro objetivo es garantizar soluciones justas y equilibradas que prioricen el bienestar de todas las partes, especialmente priorizando el interés superior del niño, niña o adolescente.
Nos enfocamos en mediar y resolver conflictos de manera eficiente, evitando litigios innecesarios siempre que sea posible. Sabemos que cada familia es única, y por eso trabajamos de manera personalizada para proteger tus derechos y los de tus seres queridos en cada etapa del proceso legal.</p>
           </div>
            </div>
        </div>
        <div className={styles.paragraphContainer}>
             <div className={styles.backgroundLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className={styles.svg} viewBox="0 0 20 20"><path fill="" d="M9.988.4q4.036 0 6.825 2.784Q19.599 5.968 19.6 10c.001 4.032-.913 4.936-2.74 6.744Q13.952 19.6 9.988 19.6q-3.917 0-6.753-2.832Q.4 13.936.4 10c0-3.936.945-4.896 2.835-6.816Q6 .4 9.988.4M2.56 7.421Q2.13 8.636 2.13 10q0 3.192 2.33 5.52q2.332 2.328 5.552 2.328c3.22 0 4.013-.784 5.599-2.352a7.4 7.4 0 0 0 1.311-1.68l-3.618-1.611c-.246 1.217-1.331 2.04-2.643 2.137v1.48H9.559v-1.48c-1.077-.013-2.118-.453-2.914-1.15l1.322-1.333c.637.6 1.274.869 2.143.869c.563 0 1.188-.22 1.188-.955c0-.26-.1-.44-.26-.577l-.915-.407l-1.14-.507c-.563-.252-1.04-.464-1.52-.677L2.56 7.42zm7.452-5.293q-3.268 0-5.527 2.304q-.614.62-1.07 1.297l3.67 1.633c.332-1.017 1.3-1.635 2.474-1.704v-1.48h1.102v1.48a4.14 4.14 0 0 1 2.412.88l-1.26 1.297c-.466-.33-1.054-.563-1.642-.563c-.477 0-1.15.148-1.15.747q.001.137.085.243l1.228.547l.83.37l1.542.686l4.92 2.19q.243-.967.244-2.055q0-3.288-2.307-5.568q-2.283-2.304-5.551-2.304"/></svg>
                </div>
             <div className={styles.container}>
                   <div className={styles.contenendorMobil}>
                    <div className={styles.backgroundLogoMobil}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className={styles.svg} viewBox="0 0 20 20"><path fill="" d="M9.988.4q4.036 0 6.825 2.784Q19.599 5.968 19.6 10c.001 4.032-.913 4.936-2.74 6.744Q13.952 19.6 9.988 19.6q-3.917 0-6.753-2.832Q.4 13.936.4 10c0-3.936.945-4.896 2.835-6.816Q6 .4 9.988.4M2.56 7.421Q2.13 8.636 2.13 10q0 3.192 2.33 5.52q2.332 2.328 5.552 2.328c3.22 0 4.013-.784 5.599-2.352a7.4 7.4 0 0 0 1.311-1.68l-3.618-1.611c-.246 1.217-1.331 2.04-2.643 2.137v1.48H9.559v-1.48c-1.077-.013-2.118-.453-2.914-1.15l1.322-1.333c.637.6 1.274.869 2.143.869c.563 0 1.188-.22 1.188-.955c0-.26-.1-.44-.26-.577l-.915-.407l-1.14-.507c-.563-.252-1.04-.464-1.52-.677L2.56 7.42zm7.452-5.293q-3.268 0-5.527 2.304q-.614.62-1.07 1.297l3.67 1.633c.332-1.017 1.3-1.635 2.474-1.704v-1.48h1.102v1.48a4.14 4.14 0 0 1 2.412.88l-1.26 1.297c-.466-.33-1.054-.563-1.642-.563c-.477 0-1.15.148-1.15.747q.001.137.085.243l1.228.547l.83.37l1.542.686l4.92 2.19q.243-.967.244-2.055q0-3.288-2.307-5.568q-2.283-2.304-5.551-2.304"/></svg>
                    </div>
                    <h1 className={styles.titleSectionMobil}>Civil y comercial</h1>
                </div>
             <h1 className={styles.titleSectionDesktop}>Civil y comercial</h1>
               
                <div className={styles.contenedorparrafo}>
            <p className={styles.paragraph}> El Estudio Marellano cuenta con una amplia experiencia en el área civil y comercial, ofreciendo soluciones legales adaptadas a las necesidades tanto de individuos como de empresas. Asistimos en la redacción y revisión de contratos, resolución de conflictos comerciales, defensa de consumidor y reclamaciones por daños y perjuicios.
                Nuestro equipo se dedica a proteger tus intereses en todas las transacciones y litigios. Además, brindamos asesoramiento estratégico para prevenir futuros inconvenientes legales, fortaleciendo la seguridad jurídica de tu patrimonio y tus negocios. Estamos comprometidos con ofrecer un enfoque práctico y eficiente que te permita avanzar con confianza en tus proyectos.
            </p>
            </div>
            </div>
        </div>
        <div className={styles.paragraphContainer}>
             <div className={styles.backgroundLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" className={styles.svg} viewBox="0 0 24 24"><path fill="" d="M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5z"/></svg>
            </div>
             
             <div className={styles.container}>
                   <div className={styles.contenendorMobil}>
                    <div className={styles.backgroundLogoMobil}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className={styles.svg} viewBox="0 0 24 24"><path fill="" d="M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5z"/></svg>

                    </div>
                    <h1 className={styles.titleSectionMobil}>Laboral</h1>
                </div>
           <h1 className={styles.titleSectionDesktop}>Laboral</h1>
           <div className={styles.contenedorparrafo}> 
            <p className={styles.paragraph}> En el campo del Derecho Laboral, en el Estudio Marellano representamos tanto a trabajadores como a empleadores en la resolución de conflictos laborales. Ofrecemos asistencia en reclamos por despidos, indemnizaciones, accidentes de trabajo, enfermedades profesionales y conflictos sindicales, siempre garantizando un trato justo y respetando los derechos de ambas partes. Trabajamos para alcanzar acuerdos equitativos que eviten largas disputas judiciales, aunque también estamos preparados para defender tus intereses en tribunales si fuera necesario. Nuestro compromiso es asegurar que tus derechos laborales estén protegidos en todo momento.

                </p>
            </div>
            </div>
        </div>
        <div className={styles.paragraphContainer}>
            <div className={styles.backgroundLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" className={styles.svg} viewBox="0 0 24 24"><path fill="" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
            </div> 
            <div className={styles.container}>
                   <div className={styles.contenendorMobil}>
                    <div className={styles.backgroundLogoMobil}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className={styles.svg} viewBox="0 0 24 24"><path fill="" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
                    </div>
                    <h1 className={styles.titleSectionMobil}>Derecho inmobiliario</h1>
                </div>
                <h1 className={styles.titleSectionDesktop}>Derecho inmobiliario</h1>
            <div className={styles.contenedorparrafo}>
            <p className={styles.paragraph}>En el Estudio Marellano, contamos con especialistas en Derecho Inmobiliario para asesorarte en la gestión y protección de tus bienes raíces. Ofrecemos servicios que incluyen la redacción y análisis de contratos de compraventa, alquileres, sucesiones y conflictos relacionados con la propiedad.

                Entendemos la importancia de cada inversión inmobiliaria, por lo que trabajamos para brindarte seguridad jurídica en cada operación. Nuestro equipo se asegura de que cada detalle legal esté en regla, ayudándote a tomar decisiones informadas y confiables en el manejo de tu patrimonio inmobiliario.            </p>
            
            </div>
            </div>
            
        </div>
        {/* -------- */}
          <div className={styles.paragraphContainer}>
            <div className={styles.backgroundLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg>
            </div> 
            <div className={styles.container}>
                   <div className={styles.contenendorMobil}>
                    <div className={styles.backgroundLogoMobil}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg>
                    </div>
                    <h1 className={styles.titleSectionMobil}>Derecho sucesorio</h1>
                </div>
                <h1 className={styles.titleSectionDesktop}>Derecho sucesorio</h1>
            <div className={styles.contenedorparrafo}>
            <p className={styles.paragraph}>En el Estudio Marellano, contamos con especialistas en Derecho Sucesorio para asesorarte en la planificación y gestión de herencias. Brindamos asistencia en la tramitación judicial, redacción de testamentos, y partición de bienes, garantizando una transmisión patrimonial justa y segura. Nos encargamos de resolver conflictos sucesorios con un enfoque legal, preciso y humano, asegurando que cada proceso se lleve a cabo con transparencia y conforme a la normativa vigente. Nuestro objetivo es brindarte tranquilidad y acompañamiento en cada etapa del proceso sucesorio.
            </p>

            </div>
            </div>
            
        </div>
        </div>
        {/* seccion contacto */}
        <div className={styles.containerContact}>
            <h1>Contáctanos</h1>
            {/* <button className={styles.buttonContact}>2804556677</button>
              <button className={styles.buttonEmail}>correo@gmail.com</button> */}

               <a href="tel:2804603334" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className={styles.iconw} viewBox="0 0 24 24"><path fill="" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
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
        </div>
        <div className={styles.container_btt_mobile}>
                    <button onClick={()=> window.open("https://wa.me/+5492804969326","_blank")} className={styles.button_mobile}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className={styles.icons_whatsapp} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/></g></svg>Comunicate </button>
                </div>
    </section>       
    )
}