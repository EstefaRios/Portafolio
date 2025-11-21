import React from 'react';
import styles from '../styles/Modal.module.css';
import biocafeImg from '../assets/biocafe.jpg';
import femployImg from '../assets/femploy.jpg';
import labtrackImg from '../assets/labtrack.png';
import beaconhelpImg from '../assets/beaconhelp.png';


const dataProyectos = {
  biocafe: {
    titulo: 'BioCafé',
    descripcion: 'Plataforma que facilita el monitoreo y análisis del proceso de fermentación del café en tiempo real.',
    tecnologias: ['React', 'CSS Modules', 'Plotly.js', 'NestJS', 'MongoDB', 'EmailJS API'],
    imagen: biocafeImg,
    enlace: 'https://biocafe.onrender.com/',
  },
  femploy: {
    titulo: 'Femploy',
    descripcion: 'App intuitiva para la gestión de perfiles profesionales, selección y talento humano.(darle click en iniciar sesión para ver el proyecto)',
    tecnologias: ['React', 'Tailwind CSS'],
    imagen: femployImg,
    enlace: 'https://femploy.netlify.app/',
  },
  labtrack: {
    titulo: 'LabTrack',
    descripcion: 'Sistema integral de gestión de laboratorio con seguimiento de muestras, resultados y reportes automatizados. Credenciales: CC 7890818896 — 1985-03-13. Nota: Esperar 2 minutos si no carga, la base de datos se duerme.',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'NestJS'],
    imagen: labtrackImg,
    enlace: 'https://labtrack-front.onrender.com',
  },
  beaconhelp: {
    titulo: 'BeaconHelp',
    descripcion: 'Aplicación de seguridad personal con alertas de emergencia, contactos de confianza y recursos de apoyo.',
    tecnologias: ['React', 'CSS Modules', 'Geolocation API'],
    imagen: beaconhelpImg,
    enlace: 'https://beaconhelp.netlify.app/',
  },
};

const Modal = ({ proyecto, cerrar }) => {
  const datos = dataProyectos[proyecto];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.cerrar} onClick={cerrar}>×</button>
        <div className={styles.modalContent}>
          <h2>{datos.titulo}</h2>
          <img src={datos.imagen} alt={`Captura de ${datos.titulo}`} className={styles.modalImage} />
          <p>{datos.descripcion}</p>
          <h4>Tecnologías usadas:</h4>
          <ul className={styles.techList}>
            {datos.tecnologias.map((tech, index) => (
              <li key={index} className={styles.techItem}>{tech}</li>
            ))}
          </ul>
          <a
            href={datos.enlace}
            target="_blank"
            rel="noreferrer"
            className={styles.modalLink}
          >
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
