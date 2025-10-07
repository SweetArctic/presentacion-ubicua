// src/slides.js

const slideColors = {
  color1: "#2ECC71", // Juan José (verde)
  color2: "#2768F5", // Danilo (azul)
  color3: "#FFA500", // Juan Fernando (naranja)
};

const slides = [
  // --- Introducción general ---
  {
    id: "intro",
    title: "Conexiones inalámbricas",
    subtitle: "Origen, evolución y propósito",
    color: 3,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          Las conexiones inalámbricas surgieron de la necesidad humana de comunicarse y
          transmitir información sin la limitación de cables físicos. Desde los primeros
          experimentos de telegrafía sin hilos hasta la era moderna del Internet de las Cosas,
          su evolución ha transformado por completo la interacción tecnológica.
        </p>
        <ul>
          <li>Reducción de la dependencia de infraestructura física.</li>
          <li>Movilidad y acceso ubicuo a la información.</li>
          <li>Interconexión global de personas y dispositivos.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <p>
          La comunicación inalámbrica se basa en la transmisión de ondas electromagnéticas,
          permitiendo enviar información por el aire. Su desarrollo se impulsó por la necesidad
          militar, la expansión de las telecomunicaciones y, más recientemente, por la demanda
          de conectividad universal.
        </p>
        <img
          src="/img/comparativas.jpeg"
          alt="Comparativas de tecnologías inalámbricas"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "IEEE History Center", href: "https://ethw.org/Wireless_Communication" }
    ],
  },

  // --- Juan José ---
  {
    id: "rfid_iot",
    title: "RFID e Internet de las Cosas (IoT)",
    subtitle: "Identificación y conectividad inteligente",
    color: 1,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color1}`, paddingBottom: "0.5rem" }}>
        <p>
          RFID (Identificación por Radiofrecuencia) y IoT (Internet de las Cosas) se combinan
          para crear sistemas automatizados capaces de registrar y procesar datos en tiempo real.
        </p>
        <ul>
          <li>RFID identifica objetos mediante ondas de radio sin contacto físico.</li>
          <li>IoT permite que esos datos se integren en redes y plataformas conectadas.</li>
          <li>Aplicación: sistemas de asistencia automatizados y monitoreo de personas u objetos.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <h3>Arquitectura de un sistema RFID-IoT</h3>
        <p>Tarjeta RFID → Lector → Microcontrolador (ESP32) → WiFi → Servidor → App Móvil.</p>
        <h3>Ventajas</h3>
        <ul>
          <li>Registro automático y en tiempo real.</li>
          <li>Sin errores manuales y acceso remoto.</li>
          <li>Económico, escalable y con trazabilidad de datos.</li>
        </ul>
        <h3>Aplicaciones</h3>
        <p>Educación, empresas, gimnasios, transporte público y más.</p>
        <img
          src="/img/casos-de-uso-simple.jpeg"
          alt="Casos de uso RFID-IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "NXP RFID Solutions", href: "https://www.nxp.com/products/rfid-nfc" },
    ],
  },

  // --- Danilo (Contenido completo del .docx) ---
  {
    id: "tecnologias_corto_alcance",
    title: "Tecnologías de corto alcance",
    subtitle: "WiFi, Bluetooth, Zigbee y Thread",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li><strong>WiFi (IEEE 802.11):</strong> 50-100 m, alta velocidad, consumo elevado.</li>
          <li><strong>Bluetooth/BLE:</strong> 1-100 m, bajo consumo, ideal para wearables.</li>
          <li><strong>Zigbee:</strong> 10-100 m, muy bajo consumo, topología mesh.</li>
          <li><strong>Thread/Matter:</strong> interoperabilidad para hogares inteligentes.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <h3>WiFi para IoT</h3>
        <p>
          Utiliza estándares 802.11n/ac/ax con frecuencias 2.4, 5 y 6 GHz. Ideal para
          dispositivos de alto rendimiento como cámaras IP y electrodomésticos conectados.
        </p>
        <h3>Bluetooth y BLE</h3>
        <p>
          Opera en 2.4 GHz con topologías punto a punto o malla. BLE optimiza consumo y
          permite múltiples conexiones simultáneas.
        </p>
        <h3>Zigbee</h3>
        <p>
          Estándar IEEE 802.15.4 con red mesh autorreparable. Soporta hasta cientos de
          dispositivos, ideal para automatización del hogar.
        </p>
        <img
          src="/img/comparativas.jpeg"
          alt="Comparativas de tecnologías de corto alcance"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "IEEE Xplore - Wireless Standards", href: "https://ieeexplore.ieee.org/" },
    ],
  },

  {
    id: "tecnologias_largo_alcance",
    title: "Tecnologías de largo alcance",
    subtitle: "LoRaWAN, Sigfox, NB-IoT, LTE-M",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li><strong>LoRaWAN:</strong> 2–15 km urbano, 45 km rural, consumo muy bajo.</li>
          <li><strong>Sigfox:</strong> hasta 50 km, muy bajo consumo, bajo ancho de banda.</li>
          <li><strong>NB-IoT:</strong> cobertura extendida, ideal para medidores inteligentes.</li>
          <li><strong>LTE-M:</strong> más rápido, compatible con redes LTE existentes.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <h3>LoRaWAN</h3>
        <p>
          Usa modulación LoRa (chirp spread spectrum). Arquitectura con nodos, gateways y
          servidores de red. Ideal para agricultura inteligente y monitoreo ambiental.
        </p>
        <h3>Sigfox</h3>
        <p>
          Red operada globalmente con modulación ultra narrow band. Extremadamente eficiente,
          pero con limitaciones de datos.
        </p>
        <img
          src="/img/lorawan.jpeg"
          alt="Tecnologías de largo alcance"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "LoRa Alliance", href: "https://lora-alliance.org/" },
      { label: "Sigfox Official", href: "https://www.sigfox.com/" }
    ],
  },

  {
    id: "protocolos_iot",
    title: "Protocolos de comunicación IoT",
    subtitle: "Capas, estructuras y ejemplos",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li><strong>MQTT:</strong> Publish/Subscribe, ideal para telemetría.</li>
          <li><strong>CoAP:</strong> REST sobre UDP, ligero y rápido.</li>
          <li><strong>HTTP/HTTPS:</strong> estándar web para dispositivos potentes.</li>
          <li><strong>WebSocket:</strong> conexión bidireccional persistente.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <h3>Modelo de capas IoT</h3>
        <p>
          Física (transmisión), Enlace (control de acceso), Red (IPv6/6LoWPAN), Transporte
          (TCP/UDP) y Aplicación (MQTT, CoAP, HTTP). Cada capa optimiza eficiencia y seguridad.
        </p>
        <img
          src="/img/mqtt-vs-coap.jpeg"
          alt="Protocolos IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "EMQX IoT Protocols", href: "https://www.emqx.com/en/blog/iot-protocols-mqtt-coap-lwm2m" }
    ],
  },

  // --- Juan Fernando ---
  {
    id: "retos_seguridad",
    title: "Retos y seguridad en redes inalámbricas",
    subtitle: "Privacidad, autenticación y cifrado",
    color: 3,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li>Autenticación segura (WPA3, certificados, PSK).</li>
          <li>Cifrado de extremo a extremo (AES, TLS).</li>
          <li>Gestión de claves y rotación periódica.</li>
          <li>Mitigación de ataques en entornos IoT masivos.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <p>
          Las redes inalámbricas deben equilibrar rendimiento y seguridad. Las vulnerabilidades
          en cifrados débiles o dispositivos mal configurados pueden comprometer miles de nodos
          interconectados.
        </p>
        <img
          src="/img/satelital.png"
          alt="Seguridad en redes inalámbricas"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "Wi-Fi Alliance WPA3 Overview", href: "https://www.wi-fi.org/discover-wi-fi/security" },
    ],
  },

  {
    id: "conclusion_final",
    title: "Conclusión",
    subtitle: "El futuro de la conectividad",
    color: 3,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          Las conexiones inalámbricas representan uno de los pilares del mundo digital moderno.
          Desde la telegrafía hasta las redes satelitales, su evolución continúa impulsando la
          sociedad hacia un entorno completamente interconectado.
        </p>
      </div>
    ),
    detailBody: (
      <>
        <p>
          El futuro se orienta hacia redes autónomas, adaptativas y sostenibles, con inteligencia
          artificial gestionando la comunicación entre millones de dispositivos. La conectividad
          total ya no es un sueño: es una realidad en construcción.
        </p>
        <img
          src="/img/satelital.png"
          alt="Futuro de la conectividad"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "IEEE Future Networks", href: "https://futurenetworks.ieee.org/" }
    ],
  },

  {
    id: "iot_satelital",
    title: "IoT Satelital",
    subtitle: "Conectividad global sin fronteras",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Las tecnologías IoT satelitales amplían la conectividad a zonas donde las redes
          terrestres no alcanzan. Proveen cobertura global para aplicaciones críticas.
        </p>
        <ul>
          <li><strong>Órbitas:</strong> LEO (Iridium, Swarm), GEO (Inmarsat, Thuraya).</li>
          <li><strong>Cobertura:</strong> Total, incluyendo océanos y regiones polares.</li>
          <li><strong>Latencia:</strong> 20–600 ms según órbita.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <h3>Aplicaciones</h3>
        <ul>
          <li>Monitoreo marítimo y flotas pesqueras.</li>
          <li>Infraestructura petrolera offshore.</li>
          <li>Agricultura remota y comunicaciones de emergencia.</li>
        </ul>
        <img
          src="/img/satelital.png"
          alt="IoT Satelital"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "Iridium Global Network", href: "https://www.iridium.com/" },
      { label: "Inmarsat Official", href: "https://www.inmarsat.com/" },
    ],
  },

  {
    id: "protocolos_tecnologia",
    title: "Protocolos específicos por tecnología",
    subtitle: "Comunicación optimizada según el tipo de red",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li><strong>WiFi:</strong> WPA3, DHCP, TCP/IP, HTTP/HTTPS para transmisión directa.</li>
          <li><strong>Bluetooth:</strong> GATT/GAP, L2CAP, ATT para conexión punto a punto.</li>
          <li><strong>Zigbee:</strong> IEEE 802.15.4, red mesh con cifrado AES-128.</li>
          <li><strong>LoRaWAN:</strong> LoRa PHY, MAC y cifrado end-to-end basado en AES.</li>
          <li><strong>Sigfox:</strong> Protocolo propietario UNB (Ultra Narrow Band) de baja tasa.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <p>
          Cada tecnología inalámbrica utiliza protocolos adaptados a su propósito. 
          WiFi y Bluetooth priorizan velocidad y compatibilidad, mientras Zigbee y LoRaWAN optimizan eficiencia energética y cobertura.
        </p>
        <img
          src="/img/zigbee.jpeg"
          alt="Protocolos por tecnología"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "LoRaWAN Specification 1.1", href: "https://lora-alliance.org/resource-hub/lorawanr-specification-v11/" },
      { label: "Bluetooth SIG Documentation", href: "https://www.bluetooth.com/specifications/specs/" },
    ],
  },

  {
    id: "gestion_dispositivos",
    title: "Gestión y actualización de dispositivos IoT",
    subtitle: "Mantenimiento, configuración y escalabilidad",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li><strong>OTA (Over-The-Air):</strong> permite actualizar firmware de forma remota.</li>
          <li><strong>Comisionamiento:</strong> registro y autenticación de nuevos nodos.</li>
          <li><strong>Monitorización:</strong> detección de fallos, consumo y conectividad.</li>
          <li><strong>Gestión remota:</strong> configuración mediante dashboards o APIs.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <p>
          El mantenimiento OTA reduce costos y mejora la seguridad. Los dispositivos pueden 
          recibir nuevas funciones o parches sin intervención física, lo que aumenta la vida útil de la red.
        </p>
        <img
          src="/img/topologias-bluetooth.jpeg"
          alt="Gestión de dispositivos"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "AWS IoT Device Management", href: "https://aws.amazon.com/iot-device-management/" },
      { label: "Azure IoT Hub Documentation", href: "https://learn.microsoft.com/en-us/azure/iot-hub/" },
    ],
  },

  {
    id: "referencias_academicas",
    title: "Referencias y fuentes técnicas",
    subtitle: "Documentación y normativas de referencia",
    color: 2,
    body: (
      <div style={{ borderBottom: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <ul>
          <li>IEEE 802.11, 802.15.4, 802.16 — Estándares base de comunicación inalámbrica.</li>
          <li>IETF RFC 7252 — CoAP Protocol.</li>
          <li>LoRa Alliance — Especificaciones y certificaciones globales.</li>
          <li>Bluetooth SIG — Documentación oficial GATT, GAP, L2CAP.</li>
          <li>ETSI — Normativas europeas para espectro y seguridad IoT.</li>
        </ul>
      </div>
    ),
    detailBody: (
      <>
        <p>
          Las organizaciones internacionales como IEEE, IETF y LoRa Alliance definen las bases 
          técnicas y de seguridad de las redes IoT, garantizando interoperabilidad y confiabilidad global.
        </p>
        <img
          src="/img/clasificacion-iot.jpeg"
          alt="Referencias académicas"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </>
    ),
    sources: [
      { label: "IEEE Standards Association", href: "https://standards.ieee.org/" },
      { label: "IETF CoAP RFC 7252", href: "https://datatracker.ietf.org/doc/html/rfc7252" },
    ],
  },

];

export default slides;