// components/Proyectos.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Proyectos.module.css';
import Modal from './Modal';

const Proyectos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [mouseActive, setMouseActive] = useState(false);

  const linternaRef = useRef(null);
  const areaRef = useRef(null);
  const fondoRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!areaRef.current) return;
      
      const rect = areaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      // Ajustar el porcentaje Y para compensar que fondoTexto tiene height: 200%
      const yPercent = (y / rect.height) * 50; // 50% porque el elemento es 200% de alto
      
      setMousePos({ x, y });
      setMouseActive(true);
      
      // Actualizar variables CSS para el gradiente
      if (areaRef.current) {
        areaRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
        areaRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
      }
      
      // Añadir clase para desactivar animación automática
      if (fondoRef.current) {
        fondoRef.current.classList.add(styles.mouseActive);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (!areaRef.current || !e.touches[0]) return;
      
      const touch = e.touches[0];
      const rect = areaRef.current.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      // Ajustar el porcentaje Y para compensar que fondoTexto tiene height: 200%
      const yPercent = (y / rect.height) * 50; // 50% porque el elemento es 200% de alto
      
      setMousePos({ x, y });
      setMouseActive(true);
      
      // Actualizar variables CSS para el gradiente
      if (areaRef.current) {
        areaRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
        areaRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
      }
      
      // Añadir clase para desactivar animación automática
      if (fondoRef.current) {
        fondoRef.current.classList.add(styles.mouseActive);
      }
    };

    const handlePointerLeave = () => {
      if (!areaRef.current) return;
      
      setMousePos({ x: -1000, y: -1000 });
      setMouseActive(false);
      
      // Quitar clase para reactivar animación automática
      if (fondoRef.current) {
        fondoRef.current.classList.remove(styles.mouseActive);
      }
      
      // Resetear variables CSS
      if (areaRef.current) {
        areaRef.current.style.setProperty('--mouse-x', '50%');
        areaRef.current.style.setProperty('--mouse-y', '50%');
      }
    };

    const handleTouchEnd = () => {
      if (!areaRef.current) return;
      
      setMousePos({ x: -1000, y: -1000 });
      setMouseActive(false);
      
      // Quitar clase para reactivar animación automática
      if (fondoRef.current) {
        fondoRef.current.classList.remove(styles.mouseActive);
      }
      
      // Resetear variables CSS
      if (areaRef.current) {
        areaRef.current.style.setProperty('--mouse-x', '50%');
        areaRef.current.style.setProperty('--mouse-y', '50%');
      }
    };

    if (areaRef.current) {
      // Mouse events
      areaRef.current.addEventListener('mousemove', handlePointerMove);
      areaRef.current.addEventListener('mouseleave', handlePointerLeave);
      
      // Touch events
      areaRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
      areaRef.current.addEventListener('touchend', handleTouchEnd);
      areaRef.current.addEventListener('touchcancel', handleTouchEnd);
    }

    return () => {
      if (areaRef.current) {
        areaRef.current.removeEventListener('mousemove', handlePointerMove);
        areaRef.current.removeEventListener('mouseleave', handlePointerLeave);
        areaRef.current.removeEventListener('touchmove', handleTouchMove);
        areaRef.current.removeEventListener('touchend', handleTouchEnd);
        areaRef.current.removeEventListener('touchcancel', handleTouchEnd);
      }
    };
  }, []);



  const abrirModal = (proyecto) => {
    setProyectoActivo(proyecto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoActivo(null);
  };

  const pos = mousePos.x < 0 ? { x: 0, y: 0 } : mousePos;

  return (
    <section
      id="proyectos"
      className={styles.proyectos}
      ref={areaRef}
    >
      {/* Fondo animado con linterna */}
      <div
        ref={fondoRef}
        className={styles.fondoTexto}
      >
        <div className={styles.textoRepe}>
          {Array.from({ length: 50 }, (_, i) => (
            <div 
              key={i + 1} 
              className={styles.matrixColumn} 
              data-column={i + 1}
              style={{
                left: `${(i * 100) / 50}%`,
                animationDelay: `${Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.contenedor}>
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Proyectos destacados
        </motion.h2>

        <div className={styles.cards}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>BioCafé ☕</h3>
            <div className={styles.techTags}>
              <span>React</span>
              <span>CSS</span>
            </div>
            <p>Plataforma para seguimiento de fermentación del café. Hecha en React.</p>
            <button onClick={() => abrirModal('biocafe')}>ver caso completo</button>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Femploy 👩‍💻</h3>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Tailwind</span>
            </div>
            <p>Aplicación para gestión de talentos y perfiles profesionales. Desarrollada con React.</p>
            <button onClick={() => abrirModal('femploy')}>ver caso completo</button>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>LabTrack 🔬</h3>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <p>Sistema integral de gestión de laboratorio con seguimiento de muestras y reportes.</p>
            <button onClick={() => abrirModal('labtrack')}>ver caso completo</button>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>BeaconHelp 🚨</h3>
            <div className={styles.techTags}>
              <span>React</span>
              <span>CSS</span>
              <span>Geolocation</span>
            </div>
            <p>App de seguridad personal con alertas de emergencia y contactos de confianza.</p>
            <button onClick={() => abrirModal('beaconhelp')}>ver caso completo</button>
          </motion.div>
        </div>
      </div>

      {modalAbierto && <Modal proyecto={proyectoActivo} cerrar={cerrarModal} />}
    </section>
  );
};

export default Proyectos;
