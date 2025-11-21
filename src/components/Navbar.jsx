import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes, FaHome, FaLaptopCode, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import perfil from '../assets/perfil.png'; // Asegúrate de que esta sea la imagen circular

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proyectos', 'sobremi', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo con imagen */}
        <div className={styles.logoContainer}>
          <img src={perfil} alt="Perfil" className={styles.profileImage} />
          <div className={styles.logo}>Estefanía Ríos</div>
        </div>

        {/* Menú hamburguesa */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Enlaces */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <a 
            href="#inicio" 
            onClick={closeMenu}
            className={activeSection === 'inicio' ? styles.activeLink : ''}
          >
            <FaHome className={styles.icon} />
            <span>Inicio</span>
          </a>
          <a 
            href="#proyectos" 
            onClick={closeMenu}
            className={activeSection === 'proyectos' ? styles.activeLink : ''}
          >
            <FaLaptopCode className={styles.icon} />
            <span>Proyectos</span>
          </a>
          <a 
            href="#sobremi" 
            onClick={closeMenu}
            className={activeSection === 'sobremi' ? styles.activeLink : ''}
          >
            <FaUserAlt className={styles.icon} />
            <span>Sobre mí</span>
          </a>
          <a 
            href="#contacto" 
            onClick={closeMenu}
            className={activeSection === 'contacto' ? styles.activeLink : ''}
          >
            <FaEnvelope className={styles.icon} />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
