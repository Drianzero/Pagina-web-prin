const lessons = [
    {
        id: 'html',
        number: '01',
        title: 'Construye con HTML',
        shortTitle: 'Estructura web',
        tag: 'HTML · ESTRUCTURA',
        heading: 'Tu página empieza con HTML.',
        description: 'HTML organiza el contenido de una página: sus títulos, textos, botones e imágenes. Cada elemento tiene una etiqueta de apertura y otra de cierre.',
        concept: 'Piensa en HTML como el esqueleto de tu sitio. Por ejemplo, <code>&lt;h1&gt;Mi página&lt;/h1&gt;</code> crea el título principal.',
        question: '¿Qué etiqueta se utiliza para crear el título principal de una página?',
        choices: ['&lt;p&gt;', '&lt;h1&gt;', '&lt;button&gt;'],
        answer: 1,
        challenge: 'Cambia el título y agrega otro párrafo en el editor. Ejecuta el código para ver tu página.',
        hint: 'Los títulos usan etiquetas h1 y los párrafos empiezan con la etiqueta p.',
        editor: '<h1>Mi primera página</h1>\n<p>Estoy aprendiendo HTML.</p>\n<button>¡Hola!</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; }\n</style>'
    },
    {
        id: 'css',
        number: '02',
        title: 'Diseña con CSS',
        shortTitle: 'Estilos y color',
        tag: 'CSS · DISEÑO',
        heading: 'Dale personalidad a tu web.',
        description: 'CSS controla cómo se ve una página. Puedes cambiar los colores, el tamaño del texto, el espacio entre elementos y mucho más.',
        concept: 'Una regla CSS combina un selector con estilos. Por ejemplo, <code>p { color: purple; }</code> pinta de morado todos los párrafos.',
        question: '¿Qué lenguaje utilizamos para cambiar los colores y la apariencia de una página?',
        choices: ['CSS', 'HTML', 'Una base de datos'],
        answer: 0,
        challenge: 'Prueba otro color de fondo y cambia el radio de los bordes de la tarjeta.',
        hint: 'Busca las propiedades background y border-radius dentro de la etiqueta style.',
        editor: '<main class="tarjeta">\n  <span>✦</span>\n  <h1>Ideas con estilo</h1>\n  <p>Cambia mis colores en el editor.</p>\n  <button>¡A diseñar!</button>\n</main>\n\n<style>\n  body { font-family: sans-serif; padding: 24px; background: #f0edff; }\n  .tarjeta { padding: 20px; border-radius: 16px; background: white; color: #282344; }\n  span { color: #7258e8; font-size: 28px; }\n  button { border: 0; border-radius: 8px; padding: 10px 14px; background: #7258e8; color: white; }\n</style>'
    },
    {
        id: 'javascript',
        number: '03',
        title: 'Dale vida con JavaScript',
        shortTitle: 'Lógica e interacción',
        tag: 'JAVASCRIPT · INTERACCIÓN',
        heading: 'Haz que las páginas respondan.',
        description: 'JavaScript convierte las páginas estáticas en experiencias interactivas. Puedes escuchar clics, actualizar mensajes y reaccionar a lo que hace la persona.',
        concept: 'Un evento permite responder a una acción. Prueba un botón que cambie su propio texto al hacer clic.',
        question: '¿Qué queremos que ocurra cuando una persona pulsa un botón?',
        choices: ['Que el botón responda a un evento', 'Que el navegador cierre la página', 'Que el HTML deje de existir'],
        answer: 0,
        challenge: 'Cambia el mensaje que aparece después del clic y vuelve a ejecutar el ejemplo.',
        hint: 'El texto que aparece tras el clic está entre comillas en la línea que contiene textContent.',
        editor: '<h1>¡Probemos JavaScript!</h1>\n<p id="mensaje">Todavía no has pulsado el botón.</p>\n<button id="saludar">Púlsame</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  button { border: 0; border-radius: 8px; padding: 10px 14px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  document.querySelector("#saludar").addEventListener("click", () => {\n    document.querySelector("#mensaje").textContent = "¡Tu primer evento funciona!";\n  });\n</script>'
    },
    {
        id: 'semantic-html',
        number: '04',
        title: 'Organiza una página',
        shortTitle: 'HTML semántico',
        tag: 'HTML · ESTRUCTURA',
        heading: 'Organiza tu contenido como un pro.',
        description: 'Las etiquetas semánticas explican qué función tiene cada parte de la página. Así tu código es más fácil de entender y accesible.',
        concept: 'Usa <code>&lt;header&gt;</code> para la cabecera, <code>&lt;main&gt;</code> para el contenido principal y <code>&lt;footer&gt;</code> para el pie.',
        question: '¿Qué etiqueta identifica el contenido principal de una página?',
        choices: ['&lt;main&gt;', '&lt;footer&gt;', '&lt;small&gt;'],
        answer: 0,
        challenge: 'Agrega un enlace dentro de la cabecera y un texto de autor en el pie de página.',
        hint: 'Un enlace se crea con la etiqueta a y el pie de página va dentro de la etiqueta footer.',
        editor: '<header>\n  <h1>Mi rincón creativo</h1>\n</header>\n<main>\n  <article>\n    <h2>Mi primera publicación</h2>\n    <p>Estoy aprendiendo a organizar una página.</p>\n  </article>\n</main>\n<footer>\n  <p>Creado por mí</p>\n</footer>\n\n<style>\n  body { font-family: sans-serif; margin: 0; color: #282344; }\n  header, footer { padding: 18px; background: #282344; color: white; }\n  main { padding: 20px; }\n  article { padding: 16px; border-radius: 12px; background: #f0edff; }\n</style>'
    },
    {
        id: 'flexbox',
        number: '05',
        title: 'Alinea con Flexbox',
        shortTitle: 'Diseño con Flexbox',
        tag: 'CSS · FLEXBOX',
        heading: 'Alinea elementos sin complicarte.',
        description: 'Flexbox ayuda a distribuir elementos en una fila o columna y alinearlos fácilmente, incluso cuando cambia el tamaño de la pantalla.',
        concept: 'Activa <code>display: flex</code> en un contenedor. Luego usa <code>justify-content</code> para distribuir sus elementos.',
        question: '¿Qué propiedad activa el diseño Flexbox en un contenedor?',
        choices: ['display: flex', 'text-align: flex', 'position: row'],
        answer: 0,
        challenge: 'Cambia la alineación de las tarjetas y agrega una tercera tarjeta al contenedor.',
        hint: 'El contenedor es .fila. Prueba justify-content: space-between o center.',
        editor: '<h1>Mis ideas</h1>\n<div class="fila">\n  <div class="tarjeta">HTML</div>\n  <div class="tarjeta">CSS</div>\n  <div class="tarjeta">¡Tú!</div>\n</div>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  .fila { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }\n  .tarjeta { padding: 18px; border-radius: 12px; background: #eeeaff; color: #5940ca; font-weight: bold; }\n</style>'
    },
    {
        id: 'forms',
        number: '06',
        title: 'Crea un formulario',
        shortTitle: 'Formularios HTML',
        tag: 'HTML · FORMULARIOS',
        heading: 'Haz que tu página reciba información.',
        description: 'Los formularios permiten pedir datos a las personas. Las etiquetas label e input hacen que cada campo sea claro y fácil de usar.',
        concept: 'Relaciona <code>&lt;label for="nombre"&gt;</code> con <code>&lt;input id="nombre"&gt;</code> y agrega <code>required</code> para pedir ese dato.',
        question: '¿Qué atributo hace obligatorio completar un campo?',
        choices: ['placeholder', 'required', 'autofocus'],
        answer: 1,
        challenge: 'Prueba a registrarte sin completar los campos y luego llena el formulario con un correo válido.',
        hint: 'Usa input type="email" y agrega el atributo required al campo.',
        editor: '<h1>¡Únete al club!</h1>\n<form id="registro">\n  <label for="nombre">Tu nombre</label>\n  <input id="nombre" name="nombre" placeholder="Escribe tu nombre" required>\n  <label for="correo">Tu correo</label>\n  <input id="correo" name="correo" type="email" placeholder="tu@correo.com" required>\n  <button id="registrarse" type="button">Registrarme</button>\n</form>\n<p id="respuesta" aria-live="polite"></p>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  form { display: grid; gap: 10px; max-width: 300px; }\n  input, button { padding: 10px; border: 1px solid #ddd; border-radius: 8px; }\n  button { background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  document.querySelector("#registrarse").addEventListener("click", () => {\n    const formulario = document.querySelector("#registro");\n    if (formulario.reportValidity()) {\n      document.querySelector("#respuesta").textContent = "¡Gracias por registrarte!";\n    }\n  });\n</script>'
    },
    {
        id: 'variables',
        number: '07',
        title: 'Guarda datos en variables',
        shortTitle: 'Variables JavaScript',
        tag: 'JAVASCRIPT · VARIABLES',
        heading: 'Guarda información para usarla.',
        description: 'Las variables guardan datos que tu programa puede consultar o cambiar. Usa const para valores que no reasignas y let para los que sí pueden cambiar.',
        concept: 'Por ejemplo, <code>const lenguaje = "JavaScript";</code> guarda texto con un nombre que luego puedes reutilizar.',
        question: '¿Cuál palabra se usa para declarar una variable cuyo valor vas a cambiar?',
        choices: ['let', 'const', '&lt;var&gt;'],
        answer: 0,
        challenge: 'Cambia el nombre y la meta en las variables. Pulsa el botón para mostrar tu mensaje.',
        hint: 'Edita el contenido entre comillas después de const nombre y let meta.',
        editor: '<h1>Mi plan de aprendizaje</h1>\n<p id="plan"></p>\n<button id="mostrar">Mostrar mi plan</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  const nombre = "Alex";\n  let meta = "crear mi primera web";\n  document.querySelector("#mostrar").addEventListener("click", () => {\n    document.querySelector("#plan").textContent = nombre + " quiere " + meta + ".";\n  });\n</script>'
    },
    {
        id: 'conditionals',
        number: '08',
        title: 'Toma decisiones con if',
        shortTitle: 'Condiciones',
        tag: 'JAVASCRIPT · CONDICIONES',
        heading: 'Enséñale a tu código a decidir.',
        description: 'Las condiciones permiten ejecutar instrucciones distintas según una situación. if comprueba una condición y else ofrece una alternativa.',
        concept: 'Una decisión sencilla: <code>if (tengoTiempo) { practicar(); } else { descansar(); }</code>.',
        question: '¿Qué bloque se ejecuta cuando la condición de if no se cumple?',
        choices: ['El bloque else', 'El bloque style', 'Ningún bloque puede ejecutarse'],
        answer: 0,
        challenge: 'Cambia el número de horas y comprueba cómo el mensaje cambia según la condición.',
        hint: 'Cambia horasDisponibles y prueba valores mayores y menores que 2.',
        editor: '<h1>¿Qué hago hoy?</h1>\n<p id="consejo"></p>\n<button id="decidir">Pedir consejo</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  const horasDisponibles = 3;\n  document.querySelector("#decidir").addEventListener("click", () => {\n    if (horasDisponibles >= 2) {\n      document.querySelector("#consejo").textContent = "¡Hay tiempo para practicar!";\n    } else {\n      document.querySelector("#consejo").textContent = "Un pequeño paso también cuenta.";\n    }\n  });\n</script>'
    },
    {
        id: 'functions',
        number: '09',
        title: 'Crea tus propias funciones',
        shortTitle: 'Funciones reutilizables',
        tag: 'JAVASCRIPT · FUNCIONES',
        heading: 'Dale un trabajo a cada función.',
        description: 'Una función reúne instrucciones bajo un nombre para poder usarlas cuando las necesites. También puede recibir información y devolver un resultado.',
        concept: 'Declara una función con <code>function saludar(nombre) { ... }</code> y llámala pasando un nombre.',
        question: '¿Qué hacemos para que el código de una función se ejecute?',
        choices: ['La llamamos por su nombre', 'La ponemos en una etiqueta style', 'Cambiamos el color del fondo'],
        answer: 0,
        challenge: 'Escribe tu nombre y prueba el botón. Después modifica la función para que también te dé la bienvenida.',
        hint: 'La función saludar recibe el valor escrito en el campo y arma el texto de respuesta.',
        editor: '<h1>Saludador de programadores</h1>\n<label for="nombre">¿Cómo te llamas?</label>\n<input id="nombre" placeholder="Tu nombre">\n<button id="saludar">Saludar</button>\n<p id="respuesta">¡Tu saludo aparecerá aquí!</p>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  input, button { padding: 10px; border: 1px solid #ddd; border-radius: 8px; }\n  button { background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  function crearSaludo(nombre) {\n    return "¡Hola, " + (nombre || "programador") + "! Sigue aprendiendo.";\n  }\n  document.querySelector("#saludar").addEventListener("click", () => {\n    const nombre = document.querySelector("#nombre").value;\n    document.querySelector("#respuesta").textContent = crearSaludo(nombre);\n  });\n</script>'
    },
    {
        id: 'loops',
        number: '10',
        title: 'Repite tareas con bucles',
        shortTitle: 'Bucles for',
        tag: 'JAVASCRIPT · BUCLES',
        heading: 'Deja que el código repita por ti.',
        description: 'Un bucle repite instrucciones sin que tengas que copiarlas muchas veces. Un bucle for cuenta desde un inicio hasta que se cumple una condición.',
        concept: 'Por ejemplo, <code>for (let i = 1; i &lt;= 3; i++)</code> repite una instrucción tres veces.',
        question: '¿Para qué sirve un bucle?',
        choices: ['Para repetir instrucciones', 'Para cambiar el nombre de un archivo', 'Para conectar una base de datos'],
        answer: 0,
        challenge: 'Cambia el límite del bucle para generar más pasos en tu plan de aprendizaje.',
        hint: 'Busca i <= 5. El número 5 define cuántos pasos aparecen.',
        editor: '<h1>Mi plan de práctica</h1>\n<ol id="pasos"></ol>\n<button id="generar">Crear mis pasos</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  li { margin: 6px 0; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  document.querySelector("#generar").addEventListener("click", () => {\n    const lista = document.querySelector("#pasos");\n    lista.replaceChildren();\n    for (let i = 1; i <= 5; i++) {\n      const paso = document.createElement("li");\n      paso.textContent = "Reto " + i + ": practicar un poco";\n      lista.append(paso);\n    }\n  });\n</script>'
    },
    {
        id: 'arrays',
        number: '11',
        title: 'Explora listas de datos',
        shortTitle: 'Listas y arreglos',
        tag: 'JAVASCRIPT · ARREGLOS',
        heading: 'Guarda varias ideas en una lista.',
        description: 'Los arreglos organizan varios valores en una sola variable. Puedes recorrerlos para presentar cada elemento en una lista de la página.',
        concept: 'Un arreglo contiene valores entre corchetes: <code>const temas = ["HTML", "CSS"];</code>.',
        question: '¿Qué signos se usan para escribir los valores de un arreglo?',
        choices: ['Corchetes [ ]', 'Paréntesis ( )', 'Signos de pregunta ??'],
        answer: 0,
        challenge: 'Añade otro tema al arreglo y pulsa el botón para que aparezca en la lista.',
        hint: 'Agrega una palabra entre comillas, seguida de una coma, dentro de los corchetes de temas.',
        editor: '<h1>Temas que quiero aprender</h1>\n<ul id="temas"></ul>\n<button id="mostrar">Ver mis temas</button>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; color: #282344; }\n  li { margin: 8px 0; padding: 8px; border-radius: 8px; background: #eeeaff; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  const temas = ["HTML", "CSS", "JavaScript"];\n  document.querySelector("#mostrar").addEventListener("click", () => {\n    const lista = document.querySelector("#temas");\n    lista.replaceChildren();\n    temas.forEach((tema) => {\n      const elemento = document.createElement("li");\n      elemento.textContent = "Quiero aprender " + tema;\n      lista.append(elemento);\n    });\n  });\n</script>'
    },
    {
        id: 'dom',
        number: '12',
        title: 'Cambia la página con el DOM',
        shortTitle: 'Interacción con el DOM',
        tag: 'JAVASCRIPT · DOM',
        heading: 'Haz que tu página cambie al instante.',
        description: 'El DOM permite a JavaScript encontrar y modificar elementos de la página. Puedes cambiar texto, estilos y contenido cuando alguien interactúa.',
        concept: 'Usa <code>document.querySelector("#mensaje")</code> para encontrar un elemento y cambiar su <code>textContent</code>.',
        question: '¿Qué propiedad cambia el texto de un elemento HTML?',
        choices: ['textContent', 'border-radius', 'font-family'],
        answer: 0,
        challenge: 'Haz clic en el botón para alternar el tema. Cambia los colores en el editor y vuelve a probarlo.',
        hint: 'El ejemplo busca la tarjeta y cambia su clase entre tema-claro y tema-oscuro.',
        editor: '<main id="tarjeta" class="tema-claro">\n  <h1>Mi espacio de estudio</h1>\n  <p id="mensaje">Este es mi tema claro.</p>\n  <button id="cambiar">Cambiar tema</button>\n</main>\n\n<style>\n  body { font-family: sans-serif; padding: 20px; }\n  #tarjeta { padding: 20px; border-radius: 14px; transition: 250ms; }\n  .tema-claro { background: #eeeaff; color: #282344; }\n  .tema-oscuro { background: #282344; color: white; }\n  button { padding: 10px 14px; border: 0; border-radius: 8px; background: #7258e8; color: white; cursor: pointer; }\n</style>\n\n<script>\n  document.querySelector("#cambiar").addEventListener("click", () => {\n    const tarjeta = document.querySelector("#tarjeta");\n    tarjeta.classList.toggle("tema-oscuro");\n    tarjeta.classList.toggle("tema-claro");\n    document.querySelector("#mensaje").textContent = tarjeta.classList.contains("tema-oscuro")\n      ? "¡Activaste el tema oscuro!"\n      : "Este es mi tema claro.";\n  });\n</script>'
    }
];

const dailyQuizQuestions = [
    {
        id: 'html-heading',
        question: '¿Qué etiqueta crea el título principal de una página?',
        choices: ['<h1>', '<title-text>', '<heading>'],
        answer: 0
    },
    {
        id: 'css-style',
        question: '¿Qué lenguaje se usa para cambiar los colores y estilos de una web?',
        choices: ['HTML', 'CSS', 'SQL'],
        answer: 1
    },
    {
        id: 'js-constant',
        question: '¿Qué palabra declara un valor que no volverás a asignar?',
        choices: ['const', 'repeat', 'style'],
        answer: 0
    },
    {
        id: 'semantic-main',
        question: '¿Qué etiqueta señala el contenido principal de una página?',
        choices: ['<footer>', '<main>', '<small>'],
        answer: 1
    },
    {
        id: 'flexbox',
        question: '¿Qué declaración activa Flexbox?',
        choices: ['display: flex', 'position: flex', 'align: row'],
        answer: 0
    },
    {
        id: 'required',
        question: '¿Qué atributo pide que se complete un campo de formulario?',
        choices: ['placeholder', 'required', 'autofocus'],
        answer: 1
    },
    {
        id: 'variables',
        question: '¿Qué palabra permite cambiar después el valor de una variable?',
        choices: ['let', 'const', '<p>'],
        answer: 0
    },
    {
        id: 'conditionals',
        question: '¿Qué bloque ofrece una alternativa cuando if es falso?',
        choices: ['style', 'else', 'main'],
        answer: 1
    },
    {
        id: 'functions',
        question: '¿Qué hace que se ejecuten las instrucciones de una función?',
        choices: ['Llamarla por su nombre', 'Cambiarle el color', 'Escribirla dentro de un párrafo'],
        answer: 0
    },
    {
        id: 'loops',
        question: '¿Para qué sirve un bucle?',
        choices: ['Para repetir instrucciones', 'Para borrar el HTML', 'Para crear una contraseña'],
        answer: 0
    },
    {
        id: 'arrays',
        question: '¿Qué signos rodean los valores de un arreglo en JavaScript?',
        choices: ['Llaves { }', 'Corchetes [ ]', 'Paréntesis ( )'],
        answer: 1
    },
    {
        id: 'dom-text',
        question: '¿Qué propiedad permite cambiar el texto de un elemento?',
        choices: ['textContent', 'border-radius', 'font-family'],
        answer: 0
    }
];

const dailyQuizStorageKey = 'drian-dev-daily-quiz-v1';
const dailyQuizLength = 5;

const form = document.querySelector('#auth-form');
const authDialog = document.querySelector('#auth-dialog');
const authMessage = document.querySelector('#auth-message');
const authSubmit = document.querySelector('#auth-submit');
const authToggle = document.querySelector('#auth-toggle');
const authPassword = document.querySelector('#auth-password');
const accountButton = document.querySelector('#account-button');
const accountLabel = document.querySelector('#account-label');
const lessonList = document.querySelector('#lesson-list');
const codeEditor = document.querySelector('#code-editor');
const codePreview = document.querySelector('#code-preview');
const editorMessage = document.querySelector('#editor-message');
const editorFilename = document.querySelector('#editor-filename');
const progressBar = document.querySelector('#progress-bar');
const progressTrack = document.querySelector('.progress-track');
const progressPercent = document.querySelector('#progress-percent');
const progressCount = document.querySelector('#progress-count');
const progressCaption = document.querySelector('#progress-caption');

let currentLesson = lessons[0];
let completedLessons = [];
let completedQuizzes = [];
let currentUser = null;
let progressLoaded = false;
let authMode = 'signIn';
let saveQueue = Promise.resolve();
let saveTimer;
let supabaseClient = null;
let dailyGame;
let dailyStorageAvailable = true;
let dailyStorageMessage = '';

function setAuthMessage(message, isError = false) {
    authMessage.textContent = message;
    authMessage.classList.toggle('is-error', isError);
}

function initializeMovementEffects() {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const heroVisual = document.querySelector('.hero-visual');
    const scrollProgress = document.querySelector('#scroll-progress');
    const movementLayers = [
        { element: heroVisual.querySelector('img'), factor: -12 },
        { element: heroVisual.querySelector('.code-top'), factor: 18 },
        { element: heroVisual.querySelector('.code-bottom'), factor: -22 },
        { element: heroVisual.querySelector('.orbit-one'), factor: 10 },
        { element: heroVisual.querySelector('.orbit-two'), factor: -16 },
        { element: heroVisual.querySelector('.spark-one'), factor: 24 },
        { element: heroVisual.querySelector('.spark-two'), factor: -26 }
    ];
    let pointerFrame = 0;
    let scrollFrame = 0;
    let pointerPosition;

    const resetParallax = () => {
        pointerPosition = null;
        if (pointerFrame) {
            window.cancelAnimationFrame(pointerFrame);
            pointerFrame = 0;
        }
        movementLayers.forEach(({ element }) => {
            element.style.removeProperty('--move-x');
            element.style.removeProperty('--move-y');
        });
    };

    const animateParallax = () => {
        pointerFrame = 0;
        if (motionPreference.matches || !pointerPosition) {
            return;
        }

        movementLayers.forEach(({ element, factor }) => {
            element.style.setProperty('--move-x', `${pointerPosition.x * factor}px`);
            element.style.setProperty('--move-y', `${pointerPosition.y * factor}px`);
        });
    };

    const updateScrollProgress = () => {
        scrollFrame = 0;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        scrollProgress.style.setProperty('--scroll-progress', String(percentage));
        scrollProgress.setAttribute('aria-valuenow', String(Math.round(percentage * 100)));
    };

    const onPointerMove = (event) => {
        if (motionPreference.matches || event.pointerType === 'touch') {
            resetParallax();
            return;
        }

        const bounds = heroVisual.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) {
            return;
        }
        pointerPosition = {
            x: (event.clientX - bounds.left) / bounds.width - 0.5,
            y: (event.clientY - bounds.top) / bounds.height - 0.5
        };

        if (!pointerFrame) {
            pointerFrame = window.requestAnimationFrame(animateParallax);
        }
    };

    const updateMotionSupport = () => {
        if (motionPreference.matches) {
            heroVisual.removeEventListener('pointermove', onPointerMove);
            heroVisual.removeEventListener('pointerleave', resetParallax);
            resetParallax();
        } else {
            heroVisual.addEventListener('pointermove', onPointerMove);
            heroVisual.addEventListener('pointerleave', resetParallax);
        }
    };

    const onScroll = () => {
        if (!scrollFrame) {
            scrollFrame = window.requestAnimationFrame(updateScrollProgress);
        }
    };
    motionPreference.addEventListener('change', updateMotionSupport);
    motionPreference.addEventListener('change', updateMotionSupport);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateMotionSupport();
    updateScrollProgress();
}

function initializeCodeBackdrop() {
    const codeBackdrop = document.querySelector('#code-backdrop');
    const codeColumns = [
        {
            position: 'code-column-one',
            duration: '46s',
            delay: '-31s',
            lines: ['const idea = "posible";', 'function aprender() {', '  return practicar();', '}', 'let progreso = 0;', 'if (curiosidad) {', '  progreso++;', '}']
        },
        {
            position: 'code-column-two',
            duration: '58s',
            delay: '-44s',
            lines: ['<main class="proyecto">', '  <h1>Hola, mundo</h1>', '  <p>Aprender haciendo</p>', '</main>', '.proyecto {', '  display: grid;', '  gap: 1rem;', '}']
        },
        {
            position: 'code-column-three',
            duration: '51s',
            delay: '-19s',
            lines: ['const colores = [];', 'boton.addEventListener(', '  "click", () => {', '    crearIdea();', '  }', ');', 'console.log("¡bien!");']
        },
        {
            position: 'code-column-four',
            duration: '64s',
            delay: '-52s',
            lines: ['for (const reto of ruta) {', '  intenta(reto);', '  aprende();', '}', '/* sigue probando */', 'const futuro = hoy;']
        }
    ];

    codeColumns.forEach((column) => {
        const columnElement = document.createElement('div');
        columnElement.className = `code-backdrop-column ${column.position}`;
        columnElement.style.setProperty('--code-duration', column.duration);
        columnElement.style.setProperty('--code-delay', column.delay);

        const track = document.createElement('div');
        track.className = 'code-backdrop-track';

        for (let repeat = 0; repeat < 2; repeat += 1) {
            const block = document.createElement('div');
            block.className = 'code-backdrop-block';

            column.lines.forEach((line, index) => {
                const lineElement = document.createElement('span');
                lineElement.className = `code-backdrop-line code-tone-${index % 3}`;
                lineElement.textContent = line;
                block.append(lineElement);
            });

            track.append(block);
        }

        columnElement.append(track);
        codeBackdrop.append(columnElement);
    });
}

function playEffect(element, className) {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    element.addEventListener('animationend', () => {
        element.classList.remove(className);
    }, { once: true });
}

function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getPreviousDateKey(dateKey) {
    const [year, month, day] = dateKey.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    return getLocalDateKey(date);
}

function createDailyQuestionIds() {
    const questionIds = dailyQuizQuestions.map((question) => question.id);
    for (let index = questionIds.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [questionIds[index], questionIds[swapIndex]] = [questionIds[swapIndex], questionIds[index]];
    }
    return questionIds.slice(0, dailyQuizLength);
}

function isValidDailyRound(round, today) {
    if (
        round?.gameDate !== today
        || !Array.isArray(round.questionIds)
        || round.questionIds.length !== dailyQuizLength
        || new Set(round.questionIds).size !== dailyQuizLength
        || round.questionIds.some((id) => !dailyQuizQuestions.some((question) => question.id === id))
        || !Array.isArray(round.answers)
        || round.answers.length !== dailyQuizLength
        || !Number.isInteger(round.currentIndex)
        || round.currentIndex < 0
        || round.currentIndex >= dailyQuizLength
    ) {
        return false;
    }

    return round.answers.every((answer, index) => {
        const isValidAnswer = answer === null || (
            Number.isInteger(answer)
            && answer >= 0
            && answer < dailyQuizQuestions.find((question) => question.id === round.questionIds[index]).choices.length
        );
        return isValidAnswer && (index < round.currentIndex ? answer !== null : index === round.currentIndex || answer === null);
    });
}

function createDailyGame(savedGame, today) {
    const validStats = savedGame
        && Number.isSafeInteger(savedGame.points)
        && savedGame.points >= 0
        && Number.isSafeInteger(savedGame.streak)
        && savedGame.streak >= 0;
    const points = validStats ? savedGame.points : 0;
    const streak = validStats ? savedGame.streak : 0;
    const lastCompletedDate = validStats
        && typeof savedGame.lastCompletedDate === 'string'
        && /^\d{4}-\d{2}-\d{2}$/.test(savedGame.lastCompletedDate)
        ? savedGame.lastCompletedDate
        : '';

    if (isValidDailyRound(savedGame, today)) {
        return {
            points,
            streak,
            lastCompletedDate,
            gameDate: today,
            questionIds: savedGame.questionIds,
            answers: savedGame.answers,
            currentIndex: savedGame.currentIndex
        };
    }

    return {
        points,
        streak,
        lastCompletedDate,
        gameDate: today,
        questionIds: createDailyQuestionIds(),
        answers: Array(dailyQuizLength).fill(null),
        currentIndex: 0
    };
}

function saveDailyGame() {
    if (!dailyStorageAvailable) {
        return;
    }

    try {
        localStorage.setItem(dailyQuizStorageKey, JSON.stringify(dailyGame));
    } catch (error) {
        console.error('No se pudo guardar el reto diario:', error);
        dailyStorageAvailable = false;
        dailyStorageMessage = 'No se pudieron guardar tus puntos en este navegador.';
        document.querySelector('#daily-storage-note').textContent = dailyStorageMessage;
    }
}

function renderDailyGame() {
    const points = document.querySelector('#daily-points');
    const streak = document.querySelector('#daily-streak');
    const questionCount = document.querySelector('#daily-question-count');
    const questionTitle = document.querySelector('#daily-question');
    const options = document.querySelector('#daily-options');
    const feedback = document.querySelector('#daily-feedback');
    const nextButton = document.querySelector('#daily-next');
    const streakMessage = document.querySelector('#daily-streak-message');
    const storageNote = document.querySelector('#daily-storage-note');
    const isComplete = dailyGame.answers.every((answer) => answer !== null);
    const question = isComplete
        ? null
        : dailyQuizQuestions.find((item) => item.id === dailyGame.questionIds[dailyGame.currentIndex]);
    const selectedAnswer = isComplete ? dailyGame.answers[dailyQuizLength - 1] : dailyGame.answers[dailyGame.currentIndex];
    const answered = selectedAnswer !== null;
    const isCorrect = answered && selectedAnswer === question?.answer;

    points.textContent = String(dailyGame.points);
    streak.textContent = String(dailyGame.streak);
    questionCount.textContent = isComplete
        ? 'RETO DE HOY COMPLETADO'
        : `PREGUNTA ${dailyGame.currentIndex + 1} DE ${dailyQuizLength}`;
    questionTitle.textContent = isComplete ? '¡Completaste el reto de hoy!' : question.question;
    options.replaceChildren();
    feedback.textContent = '';
    feedback.classList.remove('is-error');
    nextButton.hidden = true;

    if (!isComplete) {
        question.choices.forEach((choice, index) => {
            const option = document.createElement('button');
            option.className = 'daily-answer';
            option.type = 'button';
            option.textContent = choice;
            option.disabled = answered;
            option.setAttribute('aria-pressed', String(selectedAnswer === index));
            if (answered && index === question.answer) {
                option.classList.add('is-correct');
            } else if (answered && index === selectedAnswer) {
                option.classList.add('is-incorrect');
            }
            option.addEventListener('click', () => answerDailyQuestion(index));
            options.append(option);
        });

        if (answered) {
            if (isCorrect) {
                feedback.textContent = '¡Correcto! Sumaste 10 puntos.';
            } else {
                feedback.textContent = `Esta vez no. La respuesta correcta era: ${question.choices[question.answer]}.`;
                feedback.classList.add('is-error');
            }
            nextButton.hidden = dailyGame.currentIndex === dailyQuizLength - 1;
        }
    } else {
        const lastQuestion = dailyQuizQuestions.find((item) => item.id === dailyGame.questionIds[dailyQuizLength - 1]);
        const finalAnswerWasCorrect = selectedAnswer === lastQuestion.answer;
        feedback.textContent = `¡Reto terminado! ${finalAnswerWasCorrect ? 'La última respuesta fue correcta.' : 'Sigue practicando y vuelve mañana.'}`;
        streakMessage.textContent = '¡Vuelve mañana para continuar tu racha!';
    }

    if (!isComplete) {
        streakMessage.textContent = dailyGame.lastCompletedDate === getPreviousDateKey(dailyGame.gameDate)
            ? '¡Completa el reto para mantener tu racha!'
            : dailyGame.streak > 0
                ? '¡Tu racha te espera!'
                : '¡Empieza hoy tu racha!';
    }

    storageNote.textContent = dailyStorageMessage || 'Puntos y racha guardados en este navegador.';
}

function answerDailyQuestion(selectedAnswer) {
    if (dailyGame.answers[dailyGame.currentIndex] !== null) {
        return;
    }

    const question = dailyQuizQuestions.find((item) => item.id === dailyGame.questionIds[dailyGame.currentIndex]);
    dailyGame.answers[dailyGame.currentIndex] = selectedAnswer;
    if (selectedAnswer === question.answer) {
        dailyGame.points += 10;
    }

    const isComplete = dailyGame.answers.every((answer) => answer !== null);
    if (isComplete && dailyGame.lastCompletedDate !== dailyGame.gameDate) {
        dailyGame.streak = dailyGame.lastCompletedDate === getPreviousDateKey(dailyGame.gameDate)
            ? dailyGame.streak + 1
            : 1;
        dailyGame.lastCompletedDate = dailyGame.gameDate;
    }

    saveDailyGame();
    renderDailyGame();
    if (selectedAnswer === question.answer) {
        playEffect(document.querySelector('#daily-quiz-card'), 'feedback-correct');
    }
}

function initializeDailyGame() {
    let savedGame = null;
    try {
        const storedGame = localStorage.getItem(dailyQuizStorageKey);
        if (storedGame) {
            savedGame = JSON.parse(storedGame);
        }
    } catch (error) {
        console.error('No se pudo leer el reto diario guardado:', error);
        dailyStorageMessage = 'No se pudo leer el reto guardado; empieza uno nuevo hoy.';
    }

    dailyGame = createDailyGame(savedGame, getLocalDateKey());
    if (!isValidDailyRound(savedGame, dailyGame.gameDate)) {
        saveDailyGame();
    }
    document.querySelector('#daily-next').addEventListener('click', () => {
        if (dailyGame.answers[dailyGame.currentIndex] === null || dailyGame.currentIndex >= dailyQuizLength - 1) {
            return;
        }
        dailyGame.currentIndex += 1;
        saveDailyGame();
        renderDailyGame();
    });
    renderDailyGame();
}

function renderProgress() {
    const totalActivities = lessons.length * 2;
    const completedActivities = completedLessons.length + completedQuizzes.length;
    const percentage = Math.round((completedActivities / totalActivities) * 100);

    progressBar.style.width = `${percentage}%`;
    progressTrack.setAttribute('aria-valuenow', String(percentage));
    progressPercent.textContent = `${percentage}%`;
    progressCount.textContent = `${completedActivities} / ${totalActivities} actividades`;
    progressTrack.closest('.progress-strip').classList.toggle('progress-complete', percentage === 100);

    if (currentUser) {
        progressCaption.textContent = progressLoaded
            ? 'Tu avance se guarda en tu cuenta'
            : 'Cargando tu progreso...';
    } else {
        progressCaption.textContent = 'Progreso temporal · Conecta tu cuenta para guardarlo';
    }

    lessonList.querySelectorAll('.lesson-card').forEach((button) => {
        const lesson = lessons.find((item) => item.id === button.dataset.lesson);
        const isComplete = completedLessons.includes(lesson.id);
        button.classList.toggle('is-complete', isComplete);
        button.querySelector('.lesson-check').textContent = isComplete ? '✓' : '';
        button.setAttribute('aria-current', lesson.id === currentLesson.id ? 'step' : 'false');
    });
}

function renderLesson(feedback = '') {
    document.querySelector('#lesson-tag').textContent = `LECCIÓN ${currentLesson.number} · ${currentLesson.tag}`;
    document.querySelector('#lesson-title').textContent = currentLesson.heading;
    document.querySelector('#lesson-description').textContent = currentLesson.description;
    document.querySelector('#lesson-concept').innerHTML = currentLesson.concept;
    document.querySelector('#editor-filename').textContent = `${currentLesson.id}-practica.html`;
    document.querySelector('#practice-challenge').textContent = currentLesson.challenge;

    const hintButton = document.querySelector('#show-hint');
    const practiceHint = document.querySelector('#practice-hint');
    practiceHint.textContent = currentLesson.hint;
    practiceHint.hidden = true;
    hintButton.textContent = 'Mostrar una pista';
    hintButton.setAttribute('aria-expanded', 'false');
    hintButton.onclick = () => {
        practiceHint.hidden = !practiceHint.hidden;
        hintButton.textContent = practiceHint.hidden ? 'Mostrar una pista' : 'Ocultar pista';
        hintButton.setAttribute('aria-expanded', String(!practiceHint.hidden));
        if (!practiceHint.hidden) {
            playEffect(practiceHint, 'hint-reveal');
        }
    };
    document.querySelector('#open-lab').onclick = () => {
        document.querySelector('#laboratorio').scrollIntoView({ behavior: 'smooth' });
        codeEditor.focus({ preventScroll: true });
    };

    const quizBox = document.querySelector('#quiz-box');
    const quizComplete = completedQuizzes.includes(currentLesson.id);
    const choices = currentLesson.choices.map((choice, index) => `
        <label class="quiz-option">
            <input type="radio" name="quiz-answer" value="${index}" ${quizComplete ? 'disabled' : ''}>
            <span>${choice}</span>
        </label>
    `).join('');

    quizBox.innerHTML = `
        <strong>${currentLesson.question}</strong>
        ${choices}
        <div class="quiz-actions">
            <button class="button button-quiet" id="check-answer" type="button" ${quizComplete ? 'disabled' : ''}>Comprobar respuesta</button>
            <p class="quiz-feedback ${feedback.startsWith('Intenta') ? 'is-error' : ''}" id="quiz-feedback" role="status" aria-live="polite">${feedback || (quizComplete ? '¡Correcto! Reto completado.' : '')}</p>
        </div>
    `;

    const checkAnswer = document.querySelector('#check-answer');
    checkAnswer.addEventListener('click', () => {
        const selected = quizBox.querySelector('input[name="quiz-answer"]:checked');
        const quizFeedback = document.querySelector('#quiz-feedback');

        if (!selected) {
            quizFeedback.textContent = 'Elige una respuesta para comprobarla.';
            quizFeedback.classList.add('is-error');
            playEffect(document.querySelector('#lesson-panel'), 'feedback-wrong');
            return;
        }

        if (Number(selected.value) !== currentLesson.answer) {
            quizFeedback.textContent = 'Intenta de nuevo. ¡Cada error también enseña!';
            quizFeedback.classList.add('is-error');
            playEffect(document.querySelector('#lesson-panel'), 'feedback-wrong');
            return;
        }

        completedQuizzes = [...new Set([...completedQuizzes, currentLesson.id])];
        renderProgress();
        renderLesson('¡Correcto! Reto completado. Sigue con tu siguiente lección.');
        playEffect(document.querySelector('#lesson-panel'), 'feedback-correct');
        saveProgress();
    });

    const completeButton = document.querySelector('#complete-lesson');
    const lessonComplete = completedLessons.includes(currentLesson.id);
    completeButton.disabled = lessonComplete || (currentUser !== null && !progressLoaded);
    completeButton.innerHTML = lessonComplete
        ? 'Lección completada <span aria-hidden="true">✓</span>'
        : 'Marcar lección como completada <span aria-hidden="true">✓</span>';
    document.querySelector('#lesson-status').textContent = lessonComplete
        ? '¡Buen trabajo! El siguiente paso te espera.'
        : currentUser
            ? progressLoaded ? '' : 'Cargando tu avance guardado...'
            : 'Tu avance aquí es temporal. Conecta tu cuenta para conservarlo.';
}

function renderLessonList() {
    lessonList.innerHTML = lessons.map((lesson) => `
        <button class="lesson-card" type="button" data-lesson="${lesson.id}" aria-current="false">
            <span class="lesson-number">${lesson.number}</span>
            <span class="lesson-card-copy">
                <strong>${lesson.title}</strong>
                <span>Lección · 5 min</span>
            </span>
            <span class="lesson-check" aria-hidden="true"></span>
        </button>
    `).join('');

    lessonList.querySelectorAll('.lesson-card').forEach((button) => {
        button.addEventListener('click', () => {
            currentLesson = lessons.find((lesson) => lesson.id === button.dataset.lesson);
            codeEditor.value = currentLesson.editor;
            editorMessage.textContent = '';
            document.querySelector('#lesson-status').textContent = '';
            renderProgress();
            renderLesson();
            playEffect(document.querySelector('#lesson-panel'), 'lesson-change');
            runCode();
            saveProgress();
        });
    });
}

function runCode() {
    codePreview.srcdoc = codeEditor.value;
    editorMessage.textContent = 'Ejecutado · ¡Sigue experimentando!';
    playEffect(codePreview, 'preview-run');
}

function setAuthMode(mode) {
    authMode = mode;
    const signingIn = mode === 'signIn';
    document.querySelector('#auth-title').textContent = signingIn ? 'Guarda tu camino.' : 'Empieza gratis.';
    authSubmit.textContent = signingIn ? 'Iniciar sesión' : 'Crear cuenta';
    authToggle.innerHTML = signingIn
        ? '¿No tienes cuenta? <strong>Crear una</strong>'
        : '¿Ya tienes cuenta? <strong>Iniciar sesión</strong>';
    authPassword.autocomplete = signingIn ? 'current-password' : 'new-password';
    setAuthMessage('');
}

function openAuthDialog(message = '') {
    if (!authDialog.open) {
        authDialog.showModal();
    }
    setAuthMessage(message, Boolean(message));
}

function showAuthState(user) {
    currentUser = user;
    const connected = user !== null;
    accountButton.classList.toggle('is-connected', connected);
    accountLabel.textContent = connected ? user.email : 'Conectar cuenta';
    accountButton.setAttribute(
        'aria-label',
        connected ? `Cerrar sesión de ${user.email}` : 'Iniciar sesión o crear una cuenta'
    );

    if (connected) {
        progressLoaded = false;
        renderProgress();
        document.querySelector('#complete-lesson').disabled = true;
    } else {
        completedLessons = [];
        completedQuizzes = [];
        progressLoaded = true;
        renderProgress();
        renderLesson();
    }
}

async function loadProgress(user) {
    const { data, error } = await supabaseClient
        .from('learning_progress')
        .select('completed_lessons, completed_quizzes, current_lesson, editor_code')
        .eq('user_id', user.id)
        .maybeSingle();

    if (error) {
        console.error('No se pudo cargar el progreso:', error);
        progressCaption.textContent = 'No se pudo cargar el avance. Revisa la conexión.';
        document.querySelector('#lesson-status').textContent = 'No se pudo cargar tu avance. Intenta recargar la página.';
        return;
    }

    completedLessons = (data?.completed_lessons || []).filter((id) => lessons.some((lesson) => lesson.id === id));
    completedQuizzes = (data?.completed_quizzes || []).filter((id) => lessons.some((lesson) => lesson.id === id));
    currentLesson = lessons.find((lesson) => lesson.id === data?.current_lesson) || lessons[0];
    codeEditor.value = data?.editor_code || currentLesson.editor;
    progressLoaded = true;
    renderProgress();
    renderLesson();
    runCode();
}

function saveProgress() {
    if (!currentUser || !progressLoaded) {
        if (!currentUser) {
            progressCaption.textContent = 'Conecta tu cuenta para guardar y retomar tu progreso';
        }
        return;
    }

    const user = currentUser;
    const snapshot = {
        user_id: user.id,
        completed_lessons: [...completedLessons],
        completed_quizzes: [...completedQuizzes],
        current_lesson: currentLesson.id,
        editor_code: codeEditor.value,
        updated_at: new Date().toISOString()
    };

    saveQueue = saveQueue.then(async () => {
        const { error } = await supabaseClient
            .from('learning_progress')
            .upsert(snapshot, { onConflict: 'user_id' });

        if (error) {
            console.error('No se pudo guardar el progreso:', error);
            if (currentUser?.id === user.id) {
                progressCaption.textContent = 'No se pudo guardar. Revisa tu conexión e inténtalo de nuevo.';
            }
            return;
        }

        if (currentUser?.id === user.id) {
            progressCaption.textContent = 'Tu avance se guarda en tu cuenta';
        }
    }).catch((error) => {
        console.error('Error inesperado al guardar el progreso:', error);
        if (currentUser?.id === user.id) {
            progressCaption.textContent = 'No se pudo guardar. Revisa tu conexión e inténtalo de nuevo.';
        }
    });
}

function scheduleProgressSave() {
    if (!currentUser || !progressLoaded) {
        return;
    }

    window.clearTimeout(saveTimer);
    progressCaption.textContent = 'Guardando tu avance...';
    saveTimer = window.setTimeout(saveProgress, 800);
}

document.querySelector('#complete-lesson').addEventListener('click', () => {
    const wasAlreadyComplete = completedLessons.includes(currentLesson.id);
    completedLessons = [...new Set([...completedLessons, currentLesson.id])];
    renderProgress();
    renderLesson();
    if (!wasAlreadyComplete) {
        playEffect(document.querySelector('#lesson-panel'), 'feedback-correct');
        playEffect(document.querySelector('.progress-strip'), 'progress-bump');
    }
    saveProgress();
});

document.querySelector('#run-code').addEventListener('click', runCode);

document.querySelector('#reset-code').addEventListener('click', () => {
    codeEditor.value = currentLesson.editor;
    runCode();
    saveProgress();
});

codeEditor.addEventListener('input', () => {
    editorMessage.textContent = '';
    scheduleProgressSave();
});

codeEditor.addEventListener('blur', () => {
    if (currentUser && progressLoaded) {
        window.clearTimeout(saveTimer);
        saveProgress();
    }
});

codeEditor.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        runCode();
    }
    if (event.key === 'Tab') {
        event.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.setRangeText('  ', start, end, 'end');
    }
});

accountButton.addEventListener('click', async () => {
    if (!supabaseClient) {
        openAuthDialog('Para activar las cuentas, configura Supabase siguiendo los pasos de README.md.');
        return;
    }

    if (!currentUser) {
        setAuthMode('signIn');
        openAuthDialog();
        return;
    }

    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error('No se pudo cerrar la sesión:', error);
        openAuthDialog('No se pudo cerrar la sesión. Inténtalo de nuevo.');
        return;
    }

    if (authDialog.open) {
        authDialog.close();
    }
});

document.querySelector('#close-auth').addEventListener('click', () => authDialog.close());

authDialog.addEventListener('click', (event) => {
    if (event.target === authDialog) {
        authDialog.close();
    }
});

authToggle.addEventListener('click', () => {
    setAuthMode(authMode === 'signIn' ? 'signUp' : 'signIn');
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!supabaseClient) {
        setAuthMessage('Configura la URL y la clave pública de Supabase primero.', true);
        return;
    }

    authSubmit.disabled = true;
    setAuthMessage(authMode === 'signIn' ? 'Iniciando sesión...' : 'Creando tu cuenta...');

    try {
        const credentials = {
            email: document.querySelector('#auth-email').value.trim(),
            password: authPassword.value
        };
        const result = authMode === 'signIn'
            ? await supabaseClient.auth.signInWithPassword(credentials)
            : await supabaseClient.auth.signUp(credentials);

        if (result.error) {
            setAuthMessage(result.error.message, true);
            return;
        }

        if (authMode === 'signUp' && !result.data.session) {
            setAuthMessage('Cuenta creada. Revisa tu correo para confirmar el registro y luego inicia sesión.');
            return;
        }

        setAuthMessage('¡Listo! Cargando tu progreso...');
        if (result.data.session) {
            showAuthState(result.data.session.user);
            await loadProgress(result.data.session.user);
        }
        authDialog.close();
    } catch (error) {
        console.error('No se pudo completar la autenticación:', error);
        setAuthMessage('Ocurrió un error de conexión. Revisa tu internet e inténtalo de nuevo.', true);
    } finally {
        authSubmit.disabled = false;
    }
});

function initializeSupabase() {
    const config = window.SUPABASE_CONFIG;

    if (!window.supabase?.createClient || !config?.url || !config?.anonKey) {
        accountButton.title = 'Completa la configuración de Supabase para guardar el progreso.';
        return;
    }

    supabaseClient = window.supabase.createClient(config.url, config.anonKey);

    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT') {
            showAuthState(null);
            return;
        }
        if (session?.user && session.user.id !== currentUser?.id) {
            showAuthState(session.user);
            setTimeout(() => loadProgress(session.user), 0);
        }
    });

    supabaseClient.auth.getSession().then(({ data, error }) => {
        if (error) {
            console.error('No se pudo comprobar la sesión:', error);
            openAuthDialog('No se pudo comprobar tu sesión. Inténtalo de nuevo.');
            return;
        }
        if (data.session?.user && data.session.user.id !== currentUser?.id) {
            showAuthState(data.session.user);
            loadProgress(data.session.user);
        }
    }).catch((error) => {
        console.error('No se pudo comprobar la sesión:', error);
        openAuthDialog('No se pudo comprobar tu sesión. Inténtalo de nuevo.');
    });
}

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.progress-strip, .daily-quiz-section, .learning-section, .lab-section').forEach((section) => {
        section.classList.add('scroll-reveal');
        revealObserver.observe(section);
    });
}

renderLessonList();
renderProgress();
renderLesson();
codeEditor.value = currentLesson.editor;
runCode();
initializeDailyGame();
initializeSupabase();
initializeMovementEffects();
initializeCodeBackdrop();
