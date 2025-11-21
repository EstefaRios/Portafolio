import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "../styles/Contacto.module.css";
import { Mail, Phone, MessageCircle, Github, Linkedin } from "lucide-react";

export default function Contacto() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "#0d0d2b" },
    particles: {
      number: { value: 60 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 2 },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.4,
        distance: 120
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { 
      distance: 50,     // reduce la distancia del repulse
      duration: 0.4,    // aumenta la duración (más tiempo = más lento)
      speed: 0.1        // más bajo = más suave
       } }
    }
  };

  return (
    <div id="contacto" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <Particles
        id="tsparticles-contacto"
        init={particlesInit}
        options={particlesOptions}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />

      <div style={{ position: "relative", zIndex: 1 }} className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>
          <MessageCircle className={styles.iconTitle} /> Contáctame
        </h2>
        <p className={styles.contactText}>
          Estoy disponible para nuevas oportunidades. Si tienes un proyecto en mente o deseas que trabajemos juntos,
          ¡no dudes en contactarme!
        </p>

        <div className={styles.buttonContainer}>
          <a href="mailto:estefaniarios031101@gmail.com" className={styles.contactButton}>
            <Mail className={styles.icon} /> Enviar correo
          </a>
          <a href="tel:+573004433139" className={styles.contactButton}>
            <Phone className={styles.icon} /> Llamar ahora
          </a>
          <a
            href="https://wa.me/573004433139?text=Hola%20Estefanía,%20vi%20tu%20portafolio%20y%20estoy%20interesad@%20en%20tu%20trabajo.%20¿Podemos%20hablar?"
            className={styles.contactButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className={styles.icon} /> Chatea ahora
          </a>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://github.com/EstefaRios" target="_blank" rel="noopener noreferrer">
            <Github className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/estefania-rios-reinosa-494a33256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
