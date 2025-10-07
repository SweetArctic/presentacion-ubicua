const slideColors = {
  color1: "#2ECC71",
  color2: "#2768F5",
  color3: "#FFA500",
};

const slides = [

{
  id: "intro_conexiones_inalambricas",
  title: "Introducción a las Conexiones Inalámbricas",
  subtitle: "La comunicación sin cables que conecta al mundo",
  color: 2,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color1}`, paddingBottom: "0.5rem" }}>
      <p>
        Las <strong>conexiones inalámbricas</strong> son sistemas de comunicación que permiten
        transmitir información sin necesidad de cables físicos, utilizando ondas
        electromagnéticas como medio de transporte. Estas tecnologías han revolucionado la forma
        en que interactuamos, compartimos datos y accedemos a servicios digitales.
      </p>

      <p>
        Desde el uso del <strong>WiFi</strong> en nuestros hogares hasta la comunicación entre
        sensores del <strong>Internet de las Cosas (IoT)</strong>, las conexiones inalámbricas son
        la base de la conectividad moderna. Permiten que dispositivos a kilómetros de distancia
        puedan comunicarse en tiempo real, mejorando la eficiencia, movilidad y automatización.
      </p>

      <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <li>📡 Transmisión de datos por ondas de radio, microondas o infrarrojo.</li>
        <li>🔗 Conectividad entre personas, máquinas y sistemas inteligentes.</li>
        <li>🌍 Aplicaciones en telecomunicaciones, IoT, salud, educación y transporte.</li>
      </ul>

      <p>
        Comprender cómo funcionan las conexiones inalámbricas es esencial para explorar las
        tecnologías que nos mantienen comunicados y para diseñar soluciones más inteligentes y
        sostenibles.
      </p>

      <img
        src="/img/intro.jpg"
        alt="Introducción a las conexiones inalámbricas"
        style={{
          width: "20%",
          marginTop: "1rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.25)",
        }}
      />
    </div>
  ),
  detailBody: (
    <p>
      Las conexiones inalámbricas eliminan la dependencia de cables físicos, permitiendo
      comunicación global a través de ondas electromagnéticas.
    </p>
  ),
},

{
  id: "tipos_conexiones_inalambricas",
  title: "Tipos de Conexiones Inalámbricas",
  subtitle: "Diversas tecnologías que hacen posible la comunicación sin cables",
  color: 3,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
      <p>
        Existen distintos <strong>tipos de conexiones inalámbricas</strong> que permiten la
        transmisión de datos según la distancia, velocidad y tipo de aplicación. Estas tecnologías
        utilizan diferentes frecuencias del espectro electromagnético y se adaptan a las
        necesidades de comunicación de cada entorno.
      </p>

      <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <li>
          <strong>WiFi:</strong> conexión local de alta velocidad usada en hogares, empresas y
          dispositivos móviles.
        </li>
        <li>
          <strong>Bluetooth:</strong> ideal para comunicación a corta distancia entre dispositivos,
          como audífonos, relojes o sensores IoT.
        </li>
        <li>
          <strong>Infrarrojo (IR):</strong> transmite datos por luz, requiere línea de visión
          directa. Usado en controles remotos.
        </li>
        <li>
          <strong>Radiofrecuencia (RF):</strong> tecnología base de muchas redes, como RFID y
          comunicaciones satelitales.
        </li>
        <li>
          <strong>Redes Móviles (2G - 5G):</strong> ofrecen conectividad global para voz, datos y
          dispositivos inteligentes.
        </li>
        <li>
          <strong>Satélite:</strong> permite comunicación en zonas sin cobertura terrestre, ideal
          para exploración y monitoreo remoto.
        </li>
      </ul>

      <p>
        Cada tipo de conexión tiene sus propias ventajas y limitaciones en cuanto a
        <strong>alcance, velocidad, consumo de energía</strong> y <strong>costo</strong>.
        Comprenderlas permite seleccionar la más adecuada para cada proyecto o aplicación del
        Internet de las Cosas.
      </p>
    </div>
  ),
  detailBody: (
    <p>
      Las conexiones inalámbricas varían en alcance y velocidad, desde Bluetooth y WiFi hasta
      redes móviles y satelitales que cubren el planeta.
    </p>
  ),
},

{
  id: "rfid_frecuencias",
  title: "Frecuencias de operación en sistemas RFID",
  subtitle: "Clasificación LF, HF y UHF en identificación por radiofrecuencia",
  color: 2,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
      <p>
        Los sistemas RFID utilizan diferentes rangos de frecuencia dependiendo del tipo de
        aplicación, el entorno y la distancia requerida entre el lector y la etiqueta. Estas
        frecuencias determinan la velocidad de lectura, el alcance y la capacidad de penetración
        del sistema.
      </p>
      <ul>
        <li>
          <strong>LF (Low Frequency, 125–134 kHz):</strong> corto alcance y alta tolerancia a
          interferencias. Usado en control de acceso y seguimiento de animales.
        </li>
        <li>
          <strong>HF (High Frequency, 13.56 MHz):</strong> alcance medio y mayor velocidad.
          Popular en tarjetas inteligentes y etiquetas NFC.
        </li>
        <li>
          <strong>UHF (Ultra High Frequency, 860–960 MHz):</strong> largo alcance y lectura
          simultánea de múltiples etiquetas. Ideal para logística y trazabilidad.
        </li>
      </ul>
      <p>
        Cada rango presenta ventajas específicas según el entorno. Por ejemplo, las etiquetas LF
        son más resistentes a materiales metálicos y líquidos, mientras que UHF es más eficiente
        en entornos abiertos. Comprender esta clasificación permite seleccionar la tecnología RFID
        más adecuada para cada escenario IoT.
      </p>
      <img
        src="/img/rfid-frequency-LF-HF-y-UHF-en-Hz.jpg"
        alt="Frecuencias RFID LF HF UHF"
        style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
      />
    </div>
  ),
},

{
  id: "arquitectura_sistema",
  title: "Arquitectura del Sistema",
  subtitle: "Flujo completo de datos en el sistema de asistencia",
  color: 2,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color1}`, paddingBottom: "0.5rem" }}>
      <p>
        Ahora veamos cómo todos los componentes del sistema de asistencia trabajan en conjunto.
        A continuación se explica el flujo completo de datos desde que un estudiante registra su
        asistencia hasta que la información llega a la aplicación móvil.
      </p>

      <ol style={{ lineHeight: "1.8" }}>
        <li>
          <strong>Paso 1:</strong> Un estudiante acerca su tarjeta RFID al lector. Esta tarjeta
          contiene un identificador único que representa su identidad dentro del sistema.
        </li>
        <li>
          <strong>Paso 2:</strong> El lector RFID captura ese identificador y lo envía al
          microcontrolador ESP32 mediante comunicación serial.
        </li>
        <li>
          <strong>Paso 3:</strong> El ESP32 recibe el dato, lo procesa, añade información adicional
          como la fecha y hora exacta, y prepara el paquete de datos para ser enviado.
        </li>
        <li>
          <strong>Paso 4:</strong> Utilizando su conexión WiFi, el ESP32 transmite los datos a un
          servidor en la nube. Aquí intervienen las tecnologías de comunicación inalámbrica vistas
          anteriormente.
        </li>
        <li>
          <strong>Paso 5:</strong> Los datos llegan a una base de datos en la nube, donde se
          almacenan de forma segura. Se pueden utilizar servicios como Firebase, AWS o un servidor
          personalizado con MySQL o MongoDB.
        </li>
        <li>
          <strong>Paso 6:</strong> Finalmente, la aplicación móvil consulta esta base de datos y
          muestra la información en tiempo real. Los profesores pueden visualizar la asistencia,
          generar reportes y hacer seguimiento desde su celular o computadora.
        </li>
      </ol>

      <p>
        Para la comunicación entre dispositivos se utilizan protocolos optimizados para IoT, como{" "}
        <strong>MQTT</strong>, ideal por su bajo consumo y confiabilidad, o{" "}
        <strong>HTTP/HTTPS</strong>, que permite interactuar con APIs REST de forma segura. Estos
        protocolos garantizan la entrega completa y ordenada de los datos.
      </p>

      <img
        src="/img/diagrama.png"
        alt="Arquitectura del sistema de asistencia"
        style={{
          width: "40%",
          marginTop: "1rem",
          borderRadius: "8px",
        }}
      />
    </div>
  ),
  detailBody: (
    <p>
      Esquema del flujo de datos: Tarjeta RFID → Lector → ESP32 → WiFi → Servidor → Base de datos →
      Aplicación móvil.
    </p>
  ),
},


{
  id: "rfid_smart_card",
  title: "Tarjetas RFID inteligentes",
  subtitle: "Identificación y autenticación mediante radiofrecuencia",
  color: 2,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
      <p>
        Las tarjetas RFID inteligentes son una aplicación ampliamente extendida de la
        identificación por radiofrecuencia. Estas tarjetas contienen un chip y una antena que
        permiten la comunicación con un lector RFID sin necesidad de contacto físico.
      </p>
      <p>
        Este tipo de tecnología se utiliza en sistemas de transporte público, control de acceso,
        pagos electrónicos, bibliotecas y hasta en entornos educativos para registro de asistencia.
        Su fiabilidad y rapidez la convierten en una solución ideal para entornos donde se requiere
        autenticación masiva o verificación rápida.
      </p>
      <p>
        Además, combinadas con plataformas IoT, las tarjetas RFID pueden integrarse en sistemas de
        gestión inteligentes, proporcionando trazabilidad, seguridad y automatización de procesos.
      </p>
      <img
        src="/img/RFID-smart-card.jpg"
        alt="Tarjetas RFID inteligentes"
        style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
      />
    </div>
  ),
},

{
  id: "intro_redes_moviles",
  title: "Introducción a las Redes Móviles",
  subtitle: "La evolución de la conectividad inalámbrica",
  color: 3,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
      <p>
        Las <strong>redes móviles</strong> han transformado por completo la forma en que nos
        comunicamos y accedemos a la información. Desde las primeras llamadas analógicas hasta
        la conectividad inteligente del 5G, su evolución ha impulsado el desarrollo de nuevas
        tecnologías, aplicaciones y servicios digitales.
      </p>

      <p>
        Una red móvil permite que dispositivos como teléfonos, tablets o sensores IoT se
        conecten entre sí y a Internet <strong>sin necesidad de cables</strong>, utilizando
        ondas de radio que se transmiten a través de antenas y estaciones base distribuidas
        estratégicamente.
      </p>

      <p>
        Comprender su funcionamiento es fundamental para entender cómo los datos viajan entre
        personas, máquinas y sistemas inteligentes. Además, nos ayuda a visualizar cómo el
        <strong>Internet de las Cosas</strong> (IoT) aprovecha estas redes para comunicarse de
        forma rápida, segura y en tiempo real.
      </p>

      <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <li><strong>1G – 5G:</strong> cada generación mejora la velocidad, cobertura y capacidad.</li>
        <li>Permiten comunicación global e intercambio de datos sin cables.</li>
        <li>Base esencial para el funcionamiento de sistemas IoT y ciudades inteligentes.</li>
      </ul>

      <img
        src="/img/intro-redes.jpeg"
        alt="Introducción a las redes móviles"
        style={{
          width: "20%",
          marginTop: "1rem",
          borderRadius: "8px",
        }}
      />
    </div>
  ),
  detailBody: (
    <p>
      Las redes móviles son el puente entre los dispositivos físicos y la nube, haciendo posible
      la comunicación constante en cualquier lugar del mundo.
    </p>
  ),
},


{
    id: "evolucion_redes_moviles",
    title: "Evolución de las redes móviles",
    subtitle: "De la 1G analógica al 5G inteligente",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          La evolución de las redes móviles ha sido uno de los procesos tecnológicos más
          trascendentales en la historia de las telecomunicaciones. Desde las redes analógicas de
          primera generación (1G) hasta las plataformas inteligentes y masivamente conectadas de
          quinta generación (5G), cada etapa ha incrementado exponencialmente la capacidad,
          velocidad y cobertura de los sistemas de comunicación.
        </p>
        <p>
          La 1G introdujo la voz móvil analógica; la 2G digitalizó la comunicación, permitiendo
          mensajes SMS; la 3G incorporó acceso a Internet móvil; la 4G trajo transmisión de datos
          a alta velocidad mediante LTE; y la 5G revolucionó el ecosistema IoT con su latencia
          ultrabaja y capacidad para conectar millones de dispositivos simultáneamente.
        </p>
        <p>
          Este avance no solo mejoró la experiencia del usuario, sino que también habilitó nuevas
          industrias: autos conectados, telemedicina, ciudades inteligentes y fábricas
          automatizadas. Cada generación de red ha sentado las bases para la siguiente, acercando
          al mundo a una conectividad total e instantánea.
        </p>
        <img
          src="/img/capacidades-de-frecuencias.jpeg"
          alt="Evolución de las redes móviles"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
        <img
          src="/img/evolution-de-las-redes-moviles2.png"
          alt="Etapas 1G a 5G"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
        <img
          src="/img/evolution-de-las-redes-moviles.png"
          alt="Resumen evolución redes móviles"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

  {
  id: "senales_am_fm",
  title: "Señales de Radiofrecuencia AM y FM",
  subtitle: "Modulación de amplitud y modulación de frecuencia",
  color: 1,
  body: (
    <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
      <p>
        Las <strong>señales de radiofrecuencia (RF)</strong> son ondas electromagnéticas utilizadas
        para transmitir información sin cables. Dentro de ellas, las modulaciones <strong>AM</strong>
        (Amplitud Modulada) y <strong>FM</strong> (Frecuencia Modulada) son las más conocidas y
        representan dos formas distintas de codificar la información en una onda portadora.
      </p>

      <h3 style={{ marginTop: "1rem" }}>Diferencias principales:</h3>
      <ul style={{ lineHeight: "1.8" }}>
        <li>
          <strong>AM (Amplitud Modulada):</strong> la información se transmite variando la amplitud
          de la onda. Es más sensible al ruido e interferencias, pero tiene un alcance más amplio.
        </li>
        <li>
          <strong>FM (Frecuencia Modulada):</strong> la información se transmite variando la
          frecuencia de la onda. Ofrece mejor calidad de sonido y mayor resistencia a interferencias,
          aunque con un rango más corto.
        </li>
      </ul>

      <p>
        Estas modulaciones fueron la base de la radio tradicional y siguen siendo esenciales en la
        comunicación moderna, incluyendo sistemas de transmisión, radiocomunicaciones y aplicaciones
        en el <strong>Internet de las Cosas (IoT)</strong>, donde también se utilizan principios de
        modulación similares.
      </p>

      <img
        src="/img/am-y-fm.jpg"
        alt="Comparación entre señal AM y FM"
        style={{
          width: "50%",
          marginTop: "1rem",
          borderRadius: "8px",
        }}
      />
    </div>
  ),
  detailBody: (
    <p>
      La AM varía la amplitud de la señal, mientras que la FM cambia la frecuencia. Ambas técnicas
      representan los fundamentos de la comunicación por radiofrecuencia.
    </p>
  ),
},

  {
    id: "espectro_luz_infrarroja",
    title: "Espectro electromagnético y luz infrarroja",
    subtitle: "Fundamentos de la transmisión inalámbrica",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          Las comunicaciones inalámbricas se basan en la transmisión de ondas electromagnéticas
          a través del espectro electromagnético. Este abarca desde las ondas de radio de baja
          frecuencia hasta los rayos gamma, y dentro de él se encuentran las frecuencias utilizadas
          para tecnologías como WiFi, Bluetooth, 5G e infrarrojo.
        </p>
        <p>
          La luz infrarroja, en particular, ha sido ampliamente utilizada en los primeros sistemas
          de control remoto, transmisión punto a punto y comunicación entre dispositivos cercanos.
          Aunque limitada por la línea de visión y el alcance, su bajo costo y ausencia de
          interferencia electromagnética la hacen ideal para entornos específicos.
        </p>
        <p>
          Entender la ubicación de las bandas de frecuencia dentro del espectro permite optimizar
          el diseño de sistemas IoT, evitando interferencias y aprovechando al máximo las
          propiedades físicas de cada rango de onda.
        </p>
        <img
          src="/img/espectro-luz-infrarroja.png"
          alt="Espectro de luz infrarroja"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

  {
    id: "capacidad_frecuencias",
    title: "Capacidades y rangos de frecuencia",
    subtitle: "Bases físicas de la comunicación inalámbrica",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          Las diferentes bandas de frecuencia dentro del espectro electromagnético determinan
          la velocidad, el alcance y la calidad de las comunicaciones inalámbricas. Las frecuencias
          bajas (como las de radio y VHF) se propagan a largas distancias pero con menor capacidad
          de transmisión de datos, mientras que las frecuencias altas (como las de microondas y
          milimétricas) ofrecen gran velocidad a costa de un menor rango.
        </p>
        <p>
          Comprender las propiedades de cada rango es fundamental para el diseño de redes
          eficientes. Por ejemplo, las tecnologías IoT de largo alcance como LoRaWAN o Sigfox
          utilizan bandas sub-GHz, mientras que WiFi y 5G operan en frecuencias más altas
          optimizadas para ancho de banda.
        </p>
        <p>
          El equilibrio entre alcance, penetración y velocidad depende directamente de la
          frecuencia utilizada. Por ello, la gestión del espectro es una tarea estratégica en el
          desarrollo de nuevas generaciones de redes.
        </p>
        <img
          src="/img/capacidades-de-frecuencias.jpeg"
          alt="Capacidades de frecuencias"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

  {
    id: "arbol_decision",
    title: "Árbol de decisión en sistemas IoT",
    subtitle: "Selección de tecnologías y protocolos adecuados",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Un árbol de decisión permite determinar qué tecnología IoT implementar según variables
          como el rango de comunicación, el consumo energético, el costo y la infraestructura
          disponible. Este enfoque metodológico guía el diseño de redes inalámbricas eficientes
          y sostenibles.
        </p>
        <ul>
          <li>Facilita la comparación objetiva entre opciones tecnológicas.</li>
          <li>Reduce errores de planificación en proyectos de IoT.</li>
          <li>Integra factores técnicos, económicos y ambientales.</li>
        </ul>
        <p>
          En la práctica, cada nodo del árbol representa una decisión técnica, como el tipo de
          red, el protocolo de enlace o la frecuencia de operación. Esto es esencial para el
          desarrollo de soluciones escalables y optimizadas.
        </p>
        <img
          src="/img/arbol-de-decision.jpeg"
          alt="Árbol de decisión IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Ejemplo visual de un árbol de decisión para redes IoT.</p>,
  },

  {
    id: "casos_uso",
    title: "Casos de uso del Internet de las Cosas",
    subtitle: "Aplicaciones prácticas y cotidianas",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Los casos de uso del Internet de las Cosas abarcan sectores tan diversos como la salud,
          la industria, la educación y el transporte. Cada aplicación utiliza sensores y redes
          conectadas para recopilar, procesar y compartir información en tiempo real.
        </p>
        <ul>
          <li><strong>Salud:</strong> monitoreo remoto de pacientes.</li>
          <li><strong>Industria:</strong> mantenimiento predictivo de maquinaria.</li>
          <li><strong>Educación:</strong> control automatizado de asistencia y recursos.</li>
          <li><strong>Ciudades inteligentes:</strong> gestión del tráfico y alumbrado público.</li>
        </ul>
        <img
          src="/img/casos-de-uso-simple.jpeg"
          alt="Casos de uso IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Representación gráfica de ejemplos de IoT en distintos ámbitos.</p>,
  },

  {
    id: "clasificacion_iot",
    title: "Clasificación de tecnologías IoT",
    subtitle: "Agrupación por alcance, consumo y propósito",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Las tecnologías IoT pueden clasificarse según su rango de comunicación, velocidad de
          transmisión, consumo energético y topología de red. Esta clasificación permite elegir
          la opción adecuada para cada escenario.
        </p>
        <ul>
          <li><strong>Corto alcance:</strong> WiFi, Bluetooth, Zigbee.</li>
          <li><strong>Largo alcance:</strong> LoRaWAN, Sigfox, NB-IoT.</li>
          <li><strong>Satelital:</strong> IoT de cobertura global.</li>
        </ul>
        <p>
          Comprender esta clasificación es esencial para el diseño de arquitecturas eficientes y
          compatibles entre sí dentro del ecosistema del Internet de las Cosas.
        </p>
        <img
          src="/img/clasificacion-iot.jpeg"
          alt="Clasificación IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Ejemplo de agrupación visual de las principales tecnologías IoT.</p>,
  },

  {
    id: "coap_protocolo",
    title: "Protocolo CoAP",
    subtitle: "Comunicación ligera y eficiente para IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          El protocolo CoAP (Constrained Application Protocol) está diseñado para dispositivos
          con recursos limitados. Opera sobre UDP y sigue el paradigma REST, similar a HTTP,
          permitiendo interacciones ligeras y rápidas entre dispositivos IoT.
        </p>
        <ul>
          <li>Usa métodos GET, POST, PUT y DELETE.</li>
          <li>Ideal para redes de baja potencia y sensores embebidos.</li>
          <li>Optimizado para comunicación máquina a máquina (M2M).</li>
        </ul>
        <img
          src="/img/coap.jpeg"
          alt="Protocolo CoAP"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Comparativa entre CoAP y otros protocolos de aplicación IoT.</p>,
  },

  {
    id: "comparacion_visual",
    title: "Comparación visual de tecnologías inalámbricas",
    subtitle: "Diferencias entre redes de comunicación IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Esta representación visual muestra las principales diferencias entre tecnologías IoT
          en cuanto a velocidad, alcance, consumo energético y costo. Comparar estos parámetros
          es clave para diseñar soluciones eficientes según el contexto de uso.
        </p>
        <ul>
          <li>WiFi: alta velocidad, corto alcance.</li>
          <li>LoRaWAN: bajo consumo, largo alcance.</li>
          <li>Sigfox: comunicación simple, datos limitados.</li>
          <li>Zigbee: redes en malla confiables para automatización.</li>
        </ul>
        <img
          src="/img/comparacion-visual-de-tectnologias.jpeg"
          alt="Comparación visual IoT"
          style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Resumen visual de las características comparativas de IoT.</p>,
  },

  {
    id: "las_5_capas",
    title: "Las cinco capas de los protocolos IoT",
    subtitle: "Modelo conceptual de comunicación en IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          El modelo de cinco capas en IoT describe cómo los datos se originan, procesan y
          transmiten hasta llegar a su destino. Cada capa cumple una función específica, desde
          la adquisición de datos hasta la aplicación final.
        </p>
        <ol>
          <li><strong>Percepción:</strong> sensores y actuadores.</li>
          <li><strong>Transporte:</strong> transmisión de datos (TCP/UDP).</li>
          <li><strong>Red:</strong> direccionamiento y enrutamiento.</li>
          <li><strong>Procesamiento:</strong> análisis de información.</li>
          <li><strong>Aplicación:</strong> interacción con el usuario.</li>
        </ol>
        <p>
          Este modelo sirve como base para la interoperabilidad entre distintas plataformas IoT
          y protocolos de comunicación.
        </p>
        <img
          src="/img/las-5-capas-de-los-protocolos.jpeg"
          alt="Capas de comunicación IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Ejemplo educativo del flujo de datos en las capas IoT.</p>,
  },

  {
    id: "lorawan",
    title: "Tecnología LoRaWAN",
    subtitle: "Redes de baja potencia y largo alcance",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          LoRaWAN (Long Range Wide Area Network) es una tecnología de comunicación LPWAN
          diseñada para transmitir datos a grandes distancias con un consumo mínimo de energía.
          Se utiliza ampliamente en agricultura inteligente, monitoreo ambiental y ciudades
          conectadas.
        </p>
        <ul>
          <li>Opera en bandas ISM sin licencia.</li>
          <li>Alcance de hasta 15 km en zonas rurales.</li>
          <li>Topología de estrella con gateways y servidores de red.</li>
        </ul>
        <img
          src="/img/lorawan.jpeg"
          alt="LoRaWAN IoT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Esquema de red LoRaWAN y flujo de datos.</p>,
  },

  {
    id: "mqtt",
    title: "Protocolo MQTT",
    subtitle: "Comunicación ligera basada en publicación y suscripción",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          MQTT (Message Queuing Telemetry Transport) es un protocolo ampliamente usado en IoT por
          su bajo consumo de ancho de banda y su eficiencia en redes inestables. Funciona con una
          arquitectura de tipo <em>publish/subscribe</em>, donde los dispositivos publican
          mensajes en tópicos gestionados por un broker central.
        </p>
        <ul>
          <li>Ideal para sensores, medidores inteligentes y control remoto.</li>
          <li>Basado en TCP/IP, ofrece entrega garantizada y priorización de mensajes.</li>
          <li>Ligero, confiable y fácil de implementar en microcontroladores.</li>
        </ul>
        <img
          src="/img/mqtt.jpeg"
          alt="Protocolo MQTT"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Diagrama de funcionamiento del protocolo MQTT.</p>,
  },

  {
    id: "mqtt_vs_coap",
    title: "Comparativa MQTT vs CoAP",
    subtitle: "Protocolos de comunicación ligera en IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          MQTT y CoAP son los protocolos más utilizados para el intercambio de datos en IoT.
          Mientras MQTT emplea un modelo basado en publicación y suscripción sobre TCP, CoAP
          utiliza el modelo cliente-servidor sobre UDP. La elección depende del contexto del
          proyecto y las limitaciones del hardware.
        </p>
        <ul>
          <li><strong>MQTT:</strong> Fiabilidad y control de entrega.</li>
          <li><strong>CoAP:</strong> Rapidez y bajo consumo.</li>
          <li>Ambos pueden coexistir en ecosistemas híbridos de IoT.</li>
        </ul>
        <img
          src="/img/mqtt-vs-coap.jpeg"
          alt="MQTT vs CoAP"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Comparación directa de los dos protocolos más comunes en IoT.</p>,
  },

  {
    id: "rfid",
    title: "Tecnología RFID",
    subtitle: "Identificación por radiofrecuencia aplicada al IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          RFID (Radio Frequency Identification) permite identificar objetos, personas o animales
          mediante etiquetas electrónicas que se comunican con lectores de radiofrecuencia. Su
          integración con IoT facilita la trazabilidad y la automatización en múltiples sectores.
        </p>
        <ul>
          <li>Etiquetas pasivas y activas según el tipo de energía.</li>
          <li>Aplicaciones en logística, retail, control de acceso y educación.</li>
          <li>Complemento ideal para sistemas de monitoreo inteligente.</li>
        </ul>
        <img
          src="/img/RFIDjuanjose.png"
          alt="Sistema RFID"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Ejemplo de arquitectura RFID conectada a red IoT.</p>,
  },

  {
    id: "satelital",
    title: "IoT satelital",
    subtitle: "Conectividad global sin límites geográficos",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          El IoT satelital amplía el alcance de la comunicación a nivel global, permitiendo la
          conexión de dispositivos en zonas rurales, marítimas o desérticas. Su cobertura total
          lo convierte en una solución clave para aplicaciones críticas y de emergencia.
        </p>
        <ul>
          <li>Utiliza satélites en órbitas LEO y GEO.</li>
          <li>Permite monitoreo remoto en cualquier parte del planeta.</li>
          <li>Compatible con redes terrestres híbridas.</li>
        </ul>
        <img
          src="/img/satelital.png"
          alt="IoT Satelital"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Ejemplo visual de la conectividad satelital aplicada al IoT.</p>,
  },

  {
    id: "topologias_bluetooth",
    title: "Topologías de red Bluetooth",
    subtitle: "Estructura de comunicación en dispositivos personales",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <p>
          Bluetooth permite la comunicación entre dispositivos cercanos usando topologías
          específicas como punto a punto, estrella o malla. Su versión BLE (Bluetooth Low Energy)
          está optimizada para IoT, combinando bajo consumo con conectividad estable.
        </p>
        <ul>
          <li>Piconet: conexión entre un maestro y múltiples esclavos.</li>
          <li>Scatternet: interconexión de varias piconets.</li>
          <li>Mesh: comunicación descentralizada para automatización del hogar.</li>
        </ul>
        <img
          src="/img/topologias-bluetooth.jpeg"
          alt="Topologías Bluetooth"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
    detailBody: <p>Representación visual de las distintas estructuras Bluetooth.</p>,
  },

    {
    id: "rfid_iot",
    title: "RFID e Internet de las Cosas (IoT)",
    subtitle: "Identificación y conectividad inteligente",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <h3>RFID (Identificación por Radiofrecuencia)</h3>
        <ul>
          <li>Tecnología que identifica objetos mediante ondas de radio sin contacto físico.</li>
          <li>Componentes: Tarjeta (tag) + Lector + Sistema de procesamiento.</li>
          <li>Frecuencia HF (13.56 MHz) ideal para control de asistencia.</li>
        </ul>

        <h3>IoT (Internet of Things)</h3>
        <ul>
          <li>Red de dispositivos conectados que procesan datos automáticamente.</li>
          <li>ESP32: Microcontrolador con WiFi/Bluetooth integrado.</li>
          <li>Actúa como puente entre RFID y la nube.</li>
        </ul>

        <img
          src="/img/RFID e IoT para Sistemas de Asistencia.png"
          alt="RFID e Internet de las Cosas"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

  {
    id: "sistema_asistencia",
    title: "Sistema de Asistencia Automatizado",
    subtitle: "Control eficiente basado en RFID e IoT",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color2}`, paddingBottom: "0.5rem" }}>
        <h3>Arquitectura del Sistema</h3>
        <p>
          Tarjeta RFID → Lector → ESP32 → WiFi → Servidor/Base de datos → App Móvil
        </p>

        <h3>Ventajas</h3>
        <ul>
          <li>✓ Registro automático en tiempo real.</li>
          <li>✓ Sin errores de registro manual.</li>
          <li>✓ Acceso desde cualquier dispositivo.</li>
          <li>✓ Económico y escalable.</li>
          <li>✓ Datos seguros y trazables.</li>
        </ul>

        <h3>Aplicaciones</h3>
        <p>Educación, empresas, eventos, gimnasios, transporte público.</p>

        <img
          src="/img/Sistema de Asistencia Automatizado.jpg"
          alt="Sistema de asistencia automatizado"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

    {
    id: "conclusion_final",
    title: "Conclusión general sobre las conexiones inalámbricas",
    subtitle: "El futuro de la conectividad y los sistemas inteligentes",
    color: 2,
    body: (
      <div style={{ borderTop: `2px solid ${slideColors.color3}`, paddingBottom: "0.5rem" }}>
        <p>
          Las conexiones inalámbricas representan uno de los pilares fundamentales del desarrollo
          tecnológico contemporáneo. Gracias a ellas, la comunicación, la automatización y la
          transferencia de información se realizan sin depender de cables físicos, impulsando la
          creación de ecosistemas inteligentes donde personas, objetos y sistemas interactúan de
          forma continua.
        </p>
        <p>
          Desde las redes de baja potencia hasta la conectividad satelital, cada tecnología ha
          aportado herramientas únicas para resolver los retos de cobertura, velocidad y consumo
          energético. El Internet de las Cosas se ha consolidado como el motor de esta evolución,
          permitiendo que los datos fluyan entre dispositivos distribuidos en todo el planeta.
        </p>
        <p>
          Mirando hacia el futuro, las redes 6G, la inteligencia artificial y la computación en el
          borde (<em>edge computing</em>) transformarán aún más la manera en que nos conectamos.
          El objetivo ya no es solo transmitir información, sino hacerlo de manera más eficiente,
          sostenible y segura, habilitando una sociedad completamente interconectada.
        </p>
        <img
          src="/img/conclusión.jpg"
          alt="Conclusión sobre las conexiones inalámbricas"
          style={{ width: "70%", marginTop: "1rem", borderRadius: "8px" }}
        />
      </div>
    ),
  },

];

export default slides;
