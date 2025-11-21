// components/SobreMi.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/SobreMi.module.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDownload
} from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import ilustracion from '../assets/desarrolladora.png';

const SobreMi = () => {
  const [iconos, setIconos] = useState([]);

  useEffect(() => {
    const cantidad = 25;
    const nuevosIconos = [];

    for (let i = 0; i < cantidad; i++) {
      nuevosIconos.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * (1.6 - 1.2) + 1.2,
        duration: Math.random() * (18 - 12) + 12,
      });
    }

    setIconos(nuevosIconos);
  }, []);

  return (
    <section id="sobremi" className={styles.sobremi}>
      {iconos.map((icono) => (
        <div
          key={icono.id}
          className={styles.iconoLluvia}
          style={{
            left: `${icono.left}%`,
            animationDuration: `${icono.duration}s`,
            animationDelay: `${icono.delay}s`,
            fontSize: `${icono.size}rem`,
          }}
        >
          {'</>'}
        </div>
      ))}

      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <div className={`${styles.encabezado} ${styles.animarTitulo}`}>
            <BiCodeAlt className={`${styles.iconoPrincipal} ${styles.latido}`} />
            <h2>Sobre mí</h2>
          </div>
          <div className={styles.subrayado}></div>

          <p>
            Soy <strong>desarrolladora frontend</strong> especializada en <strong>React</strong>, enfocada en crear interfaces intuitivas, modernas y funcionales. Me apasiona transformar ideas en experiencias digitales atractivas que marquen la diferencia.
          </p>
          <p>
            Domino <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong>. Me destaco por mi creatividad, atención al detalle, orientación al usuario y compromiso con la mejora continua. Amo construir soluciones que no solo funcionen, ¡sino que enamoren visualmente!
          </p>

          <div className={styles.tecnologias}>
            <FaHtml5 className={styles.icono} title="HTML" />
            <FaCss3Alt className={styles.icono} title="CSS" />
            <FaJsSquare className={styles.icono} title="JavaScript" />
            <FaReact className={`${styles.icono} ${styles.iconoReact}`} title="React" />
          </div>

          <a href="/CV_EstefaniaRios.pdf" className={styles.botonCV} download>
            <FaDownload className={styles.iconoDescarga} /> Descargar CV
          </a>
        </div>

        <div className={styles.imagen}>
          <img src={ilustracion} alt="Ilustración desarrolladora frontend" />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
