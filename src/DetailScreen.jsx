// src/DetailScreen.jsx
import React from "react";
import { motion } from "framer-motion";

export default function DetailScreen({ title, body, onBack, sources }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="detail-screen"
    >
      <div className="detail-top">
        <button className="back-btn" onClick={onBack}>← Volver</button>
        <h2>{title}</h2>
      </div>

      <div className="detail-body">{body}</div>

      {sources && sources.length > 0 && (
        <div className="detail-sources">
          <h4>Fuentes</h4>
          <ul>
            {sources.map((s, i) => (
              <li key={i}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
