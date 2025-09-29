// src/slides.js
const slides = [
  {
    id: "intro",
    title: "Computación Ubicua",
    subtitle: "Evolución, ideas y aplicación",
    body: (
      <>
        <p>
          Computación integrada en el entorno físico: sistemas que se vuelven
          invisibles y están siempre disponibles para asistir al usuario.
        </p>
        <ul>
          <li>Interacción continua entre persona y dispositivos.</li>
          <li>Ejemplos: hogares inteligentes, wearables, ciudades conectadas.</li>
        </ul>
      </>
    ),
    detailTitle: "Más sobre Computación Ubicua",
    detailBody: (
      <>
        <p>
          La computación ubicua busca que la tecnología sea parte del entorno,
          disminuyendo la fricción entre humanos y máquinas. Requiere diseño
          centrado en privacidad, interoperabilidad y arquitectura distribuida.
        </p>
      </>
    ),
    sources: [
      { label: "Weiser (1991) - Concepto seminal", href: "https://en.wikipedia.org/wiki/Mark_Weiser" }
    ],
  },

  {
    id: "rfid",
    title: "RFID (Radio-Frequency IDentification)",
    subtitle: "Identificación y comunicación por campos electromagnéticos",
    body: (
      <>
        <p>
          Tecnología que usa campos electromagnéticos para identificar y, en
          muchos casos, comunicar datos con etiquetas (tags) adheridas a
          objetos.
        </p>
        <ul>
          <li>Lectura a distancia sin contacto ni línea de visión.</li>
          <li>Usos: control de acceso, inventario, pagos contactless, rastreo.</li>
        </ul>
      </>
    ),
    detailTitle: "RFID — definición, tipos y módulos",
    detailBody: (
      <>
        <h3>Componentes</h3>
        <ul>
          <li><strong>Tag:</strong> etiqueta con identificador o datos.</li>
          <li><strong>Lector (reader):</strong> envía interrogación y recibe respuesta.</li>
          <li><strong>Antena:</strong> transmite/recibe señales.</li>
          <li><strong>Software / middleware:</strong> procesa lecturas.</li>
        </ul>

        <h3>Tipos de tags (por alimentación)</h3>
        <ul>
          <li><strong>Pasivos:</strong> sin batería; obtienen energía del lector.</li>
          <li><strong>Activos:</strong> con batería; transmiten por sí mismos.</li>
          <li><strong>Semipasivos:</strong> batería para el circuito interno.</li>
        </ul>

        <h3>Por frecuencia</h3>
        <ul>
          <li><strong>LF (125–134 kHz):</strong> rango corto, atraviesa líquidos/algún metal.</li>
          <li><strong>HF (13.56 MHz):</strong> corto/medio; incluye NFC (pagos, transporte).</li>
          <li><strong>UHF (860–960 MHz):</strong> rango largo; logística/inventario (EPC Gen2).</li>
        </ul>

        <h3>Estándares importantes</h3>
        <ul>
          <li>ISO/IEC 14443 — tarjetas contactless (13.56 MHz).</li>
          <li>ISO/IEC 15693 — HF de rango más largo.</li>
          <li>EPC Gen2 / ISO 18000-6C — UHF para cadena de suministro.</li>
        </ul>

        <h3>Módulos lectores populares</h3>
        <ul>
          <li><strong>MFRC522 / RC522 (13.56 MHz):</strong> barato, ideal para hobby (NXP).</li>
          <li><strong>PN532:</strong> controlador NFC más capaz (NXP).</li>
          <li><strong>RDM6300 (125 kHz):</strong> módulos LF para sistemas legacy.</li>
          <li><strong>Lectores UHF (Impinj, etc.):</strong> para tracking a distancia (industrial).</li>
        </ul>
      </>
    ),
    sources: [
      { label: "Impinj — categorías y tecnología RFID", href: "https://www.impinj.com/products/technology/how-can-rfid-systems-be-categorized" },
      { label: "MFRC522 (datos) — NXP", href: "https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf" },
      { label: "PN532 datasheet — NXP", href: "https://www.nxp.com/docs/en/data-sheet/PN532_C1.pdf" },
      { label: "RDM6300 module", href: "https://www.handsontec.com/dataspecs/module/RDM6300.pdf" }
    ],
  },

  {
    id: "casos",
    title: "Casos de uso",
    subtitle: "Aplicaciones reales",
    body: (
      <>
        <p>Ámbitos con impacto real:</p>
        <ul>
          <li>Hogar inteligente: automatización contextual.</li>
          <li>Salud wearable: monitoreo continuo y alertas.</li>
          <li>Ciudades: sensores de tráfico, gestión, seguridad.</li>
        </ul>
      </>
    ),
    detailTitle: "Casos de uso en detalle",
    detailBody: (
      <>
        <p>
          Ejemplos prácticos: integración de sensores en infraestructuras
          públicas para optimizar energía y servicios, wearables para
          telemedicina, mantenimiento predictivo en industria.
        </p>
      </>
    ),
    sources: [],
  },

  {
    id: "retos",
    title: "Retos y consideraciones",
    subtitle: "Privacidad, seguridad y escalabilidad",
    body: (
      <>
        <ul>
          <li>Privacidad y ética en datos ubicuos.</li>
          <li>Superficies de ataque y seguridad.</li>
          <li>Escalabilidad: edge vs cloud.</li>
          <li>Interoperabilidad y estandarización.</li>
        </ul>
      </>
    ),
    detailTitle: "Retos principales",
    detailBody: (
      <>
        <p>
          Diseñar sistemas ubicuos seguros implica políticas de datos, cifrado,
          autenticación y arquitectura distribuida que minimice la latencia.
        </p>
      </>
    ),
    sources: [],
  },

  {
    id: "conclusion",
    title: "Conclusión",
    subtitle: "Cierre y preguntas",
    body: (
      <>
        <p>
          La computación ubicua es poderosa pero exige resolver privacidad,
          seguridad y gobernanza tecnológica.
        </p>
      </>
    ),
    detailTitle: "Cierre",
    detailBody: (
      <>
        <p>Proporciona una pregunta para discusión y caminos de investigación.</p>
      </>
    ),
    sources: [],
  },

    {
    id: "conclusion",
    title: "Conclusión",
    subtitle: "Cierre y preguntas",
    body: (
      <>
        <p>
          La computación ubicua es poderosa pero exige resolver privacidad,
          seguridad y gobernanza tecnológica.
        </p>
      </>
    ),
    detailTitle: "Cierre",
    detailBody: (
      <>
        <p>Proporciona una pregunta para discusión y caminos de investigación.</p>
      </>
    ),
    sources: [],
  },
];

export default slides;
