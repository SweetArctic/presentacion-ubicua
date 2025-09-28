import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import slides from "./slides";
import DetailScreen from "./DetailScreen";
import "./styles.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sidebarPrevState = useRef(false);
  const navigate = useNavigate();

  const slide = slides[index];

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => {
    setIndex(i);
    setSidebarOpen(false);
    setShowDetail(false);
  };

  const openDetail = () => {
    sidebarPrevState.current = sidebarOpen;
    setSidebarOpen(false);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSidebarOpen(sidebarPrevState.current);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Computación Ubicua</h1>
          <p className="muted">
            Diapositiva {index + 1} / {slides.length}
          </p>
        </div>

        <div className="header-actions">
          <button
            onClick={() => setSidebarOpen((s) => !s)}
            className="ghost"
          >
            Fuentes
          </button>

          {/* Botón que lleva a la intro */}
          <button onClick={() => navigate("/intro")} className="ghost">
            Presentación
          </button>

          <motion.button
            onClick={() => setDarkMode((d) => !d)}
            className="ghost icon-btn"
            whileTap={{ rotate: 180, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={darkMode ? "/sun.svg" : "/moon.svg"}
              alt="toggle theme"
              className="icon-img"
            />
          </motion.button>

          <button onClick={() => setIndex(0)} className="ghost">
            Inicio
          </button>
          <button onClick={prev} className="ghost">
            Anterior
          </button>
          <button onClick={next} className="primary">
            Siguiente
          </button>
        </div>
      </header>

      <main className="main-area">
        <AnimatePresence mode="wait">
          {!showDetail ? (
            <motion.article
              key={slide.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="slide"
            >
              <div className="slide-head">
                <h2>{slide.title}</h2>
                {slide.subtitle && (
                  <p className="subtitle">{slide.subtitle}</p>
                )}
              </div>

              <section className="slide-body">{slide.body}</section>

              <div className="slide-actions">
                <button className="secondary" onClick={openDetail}>
                  Ver más
                </button>
                <div className="pager">
                  <button onClick={() => setIndex(0)} className="ghost">
                    ⤴ Inicio
                  </button>
                </div>
              </div>
            </motion.article>
          ) : (
            <DetailScreen
              key={`detail-${slide.id}`}
              title={slide.detailTitle || slide.title}
              body={slide.detailBody || slide.body}
              onBack={closeDetail}
              sources={slide.sources}
            />
          )}
        </AnimatePresence>

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h4>Diapositivas</h4>
            <button
              className="close"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="slide-list">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`slide-link ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                <div className="num">{i + 1}</div>
                <div className="meta">
                  <div className="title">{s.title}</div>
                  <div className="sub muted">{s.subtitle}</div>
                </div>
              </button>
            ))}
          </nav>

          <div className="sidebar-sources">
            <h5>Fuentes de esta diapositiva</h5>
            <ul>
              {slide.sources && slide.sources.length > 0 ? (
                slide.sources.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {src.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="muted">Sin fuentes añadidas</li>
              )}
            </ul>
          </div>
        </aside>
      </main>

      <footer className="app-footer">
        <div className="progress">
          <div
            className="bar"
            style={{
              width: `${((index + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </footer>
    </div>
  );
}
