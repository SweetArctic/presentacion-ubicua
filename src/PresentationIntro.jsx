import React, { useState, useEffect } from "react";
import {
  useTransition,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import styles from "./presentationIntro.module.css";

const pages = [
  // Página A: Integrantes
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: "linear-gradient(135deg, #f3f4f6, #d1d5db)", // gris claro profesional
        color: "#1f2937", // texto gris oscuro
      }}
    >
      <div className={styles.content}>
        <h2>Integrantes</h2>
        <ul>
          <li>Juan José Burbano</li>
          <li>Juan Fernando Rosero</li>
          <li>Danilo Andrés Montezuma</li>
        </ul>
      </div>
    </animated.div>
  ),

  // Página B: Tema e introducción
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)", // gris azulado elegante
        color: "#0f172a", // azul petróleo oscuro
      }}
    >
      <div className={styles.content}>
        <h2>Tema</h2>
        <p>Computación Ubicua</p>
        <h3>Introducción</h3>
        <p>
          La computación ubicua se centra en integrar la tecnología en el entorno
          físico para que sea accesible en todo momento y lugar, de manera
          invisible para el usuario.
        </p>
      </div>
    </animated.div>
  ),

  // Página C: Botón para volver a App
  ({ style }) => {
    const navigate = useNavigate();
    return (
      <animated.div
        style={{
          ...style,
          background: "linear-gradient(135deg, #e5e7eb, #9ca3af)", // gris sobrio
          color: "#111827",
        }}
      >
        <button className={styles.startBtn} onClick={() => navigate("/app")}>
          Iniciar Presentación
        </button>
      </animated.div>
    );
  },
];

export default function PresentationIntro() {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div
      className={`flex fill ${styles.container}`}
      onClick={index < 2 ? onClick : undefined}
    >
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
