// components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedor}>
        <p>&copy; 2025 Estefanía Ríos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
