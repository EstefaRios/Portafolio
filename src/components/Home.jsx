import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/Home.module.css";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="inicio" className={styles.inicio}>
      {/* Fondo estrellado con efecto y movimiento */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0c0c22" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["trail"],
                parallax: {
                  enable: true,
                  force: 20,
                  smooth: 100,
                },
              },
              resize: true,
            },
            modes: {
              trail: {
                delay: 0.4,
                quantity: 3,
                particles: {
                  color: { value: "#ffffff" },
                  size: { value: 2 },
                  opacity: {
                    value: 0.4,
                    animation: {
                      enable: true,
                      speed: 0.5,
                      minimumValue: 0.1,
                    },
                  },
                  move: {
                    speed: 0.1,
                    direction: "none",
                    outModes: { default: "destroy" },
                  },
                },
              },
            },
          },
          particles: {
            number: {
              value: 250,
              density: {
                enable: true,
                area: 1000,
              },
            },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: {
              value: 0.4,
              animation: {
                enable: true,
                speed: 0.2,
                minimumValue: 0.2,
              },
            },
            size: {
              value: { min: 1, max: 2 },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
              },
            },
            move: {
              enable: true,
              speed: 0.02,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            links: {
              enable: false,
            },
          },
        }}
      />

      {/* Constelaciones */}
      <Particles
  id="constelaciones"
  init={particlesInit}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
  }}
  options={{
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    particles: {
      number: {
        value: 90,
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 2 },
        random: true,
      },
      opacity: {
        value: 0.6,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        outModes: { default: "bounce" },
        random: true,
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.3,
        width: 0.5,
        blink: false,
        triangles: {
          enable: false,
        },
      },
    },
  }}
          />
<Particles
  id="constelaciones"
  init={particlesInit}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
  }}
  options={{
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: {
        value: 45,
        density: {
          enable: true,
          area: 1200, // mayor área para menos agrupamiento
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.9,
        random: true,
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 1.5, max: 2.5 },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.1,
        direction: "none",
        outModes: { default: "out" },
        random: true,
        straight: false,
      },
      links: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 0.12,
        width: 0.5,
        triangles: { enable: false },
        shadow: { enable: false },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
  }}
/>



      {/* Capa oscura */}
      <div className={styles.overlay}></div>

      {/* Contenido principal */}
      <div className={styles.contenedor}>
        <div className={styles.inicioContenido}>
          <h2 className={styles.titulo}>Desarrolladora Frontend</h2>
          <p className={styles.descripcion}>
            <Typewriter
              words={[
                "Transformo ideas en experiencias digitales.",
                "Diseño interfaces atractivas.",
                "Construyo soluciones modernas.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <a href="#proyectos" className={styles.btn}>
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
