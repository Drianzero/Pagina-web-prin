# Drian Dev

Sitio estático para aprender HTML, CSS y JavaScript con doce prácticas interactivas organizadas en tres niveles seleccionables de cuatro prácticas cada uno (principiante, intermedio y avanzado), un diagnóstico opcional que recomienda un nivel, preguntas, pistas, un editor de código, una vista previa, un reto diario de cinco preguntas con puntos y racha, un proyecto final guiado de cuatro pasos y un glosario con búsqueda y filtros por tema. Cyber, el robot guía, saluda al entrar y ofrece un chat de programación. Sin Supabase configurado, siguen disponibles sus comandos, un reto interactivo y definiciones básicas; las preguntas abiertas requieren OpenAI mediante la función segura de Supabase. Cuando se activa, las preguntas se envían a OpenAI y la función solicita que las respuestas no se almacenen (`store: false`). El chat no se guarda en esta página. No envíes contraseñas ni otros datos privados. Las respuestas son orientativas y pueden contener errores, por lo que conviene comprobar el código antes de usarlo. El nivel elegido, el reto diario y el borrador del proyecto se guardan localmente en el navegador. Incluye líneas de código animadas en el fondo, movimiento sutil que responde al cursor y una guía de desplazamiento; los efectos respetan la preferencia de movimiento reducido del dispositivo. Las cuentas y el progreso entre dispositivos se guardan en Supabase.

## Probar la página

Abre esta carpeta en VS Code y ejecuta `index.html` con una extensión de servidor local, como Live Server. La página carga Supabase y las fuentes desde internet.

## Activar cuentas y guardado en la nube

1. Crea un proyecto en [Supabase](https://supabase.com/).
2. En el proyecto, abre **SQL Editor**, pega el contenido de [`supabase-schema.sql`](./supabase-schema.sql) y ejecútalo. Puedes volver a ejecutar este script si el esquema cambia. La tabla activa seguridad por filas (RLS) para que cada usuario solo pueda leer y modificar su propio progreso.
3. En **Project Settings → API**, copia la URL del proyecto y su clave **publishable** (o la clave pública `anon`).
4. Pega esos valores en `url` y `anonKey` en [`supabase-config.js`](./supabase-config.js).
5. En la configuración de autenticación de Supabase, añade las direcciones local y publicada del sitio a **URL Configuration → Redirect URLs**. Activa la confirmación de correo si quieres verificar las direcciones al registrarse.
6. Abre o publica la página otra vez. Usa **Conectar cuenta** para crear una cuenta o iniciar sesión. Se guardan las lecciones completadas, los retos resueltos, la lección actual y el código del editor para poder continuar después. El curso tiene doce prácticas y veinticuatro actividades puntuables (una práctica y un reto por lección).

La URL del proyecto y la clave `publishable`/`anon` están diseñadas para usarse en el navegador. **Nunca** pongas una clave `secret` o `service_role` en este sitio ni en GitHub: esas claves dan acceso administrativo. No cambies ni elimines las políticas RLS del esquema.

Sin Supabase configurado, las lecciones y el editor se pueden probar, pero el progreso solo permanece temporalmente mientras la página siga abierta.

## Activar el chat de Cyber

Cyber puede explicar código y conceptos, proponer retos, navegar a las secciones del curso y recomendar un nivel. Sin Supabase conectado, responde localmente preguntas básicas sobre HTML, CSS, JavaScript, Python, Java, Git, variables, funciones, arrays, bucles y condiciones, y permite probar un reto interactivo de operadores. Para preguntas abiertas necesita una función Edge de Supabase y una clave de OpenAI guardada únicamente como secreto del servidor. El chat también permite copiar o escuchar sus respuestas, borrar la conversación y enviar con `Ctrl + Enter`. GitHub Pages publica el sitio, pero no despliega esta función.

1. Instala [Supabase CLI](https://supabase.com/docs/guides/cli) e inicia sesión con `supabase login`.
2. En una terminal, cambia a esta carpeta (`HTML.INTRO`) y enlázala a tu proyecto: `supabase link --project-ref TU_PROJECT_REF`. El identificador está en la URL de tu proyecto Supabase.
3. Ejecuta [`supabase-schema.sql`](./supabase-schema.sql) en el **SQL Editor** de Supabase, también si ya ejecutaste el esquema anteriormente. La función de Cyber depende de la tabla de límite de uso y del RPC incluidos al final del archivo.
4. En tu cuenta de OpenAI, crea una API key. No la pegues en el sitio, en `supabase-config.js`, en GitHub ni en este chat. Guárdala como secreto desde **Supabase Dashboard → Edge Functions → Secrets**. Si prefieres CLI, usa `supabase secrets set --env-file RUTA_A_UN_ARCHIVO_PRIVADO`; crea ese archivo fuera del repositorio y no lo subas a GitHub.
5. Configura los orígenes permitidos del navegador. Sustituye el ejemplo por el origen exacto que sirve tu página (solo esquema, dominio y puerto; sin ruta final). Incluye el origen local que uses para desarrollo:

   ```sh
   supabase secrets set ALLOWED_ORIGINS=https://TU-USUARIO.github.io,http://127.0.0.1:5500
   ```

   Si usas un dominio propio o un puerto local distinto, ajusta la lista. No incluyas rutas como `/REPOSITORIO/`. El servidor rechaza los demás orígenes.
6. Despliega la función desde la carpeta `HTML.INTRO`: `supabase functions deploy cyber-chat`. La opción `verify_jwt = false` es necesaria porque la web admite visitantes sin cuenta; la función valida el origen, limita la entrada y aplica un máximo de 12 solicitudes por minuto y dirección IP.
7. Completa la URL y la clave pública `anon` en [`supabase-config.js`](./supabase-config.js), publica el sitio y prueba Cyber. No uses la clave `service_role` en el cliente; la función la recibe automáticamente en el entorno seguro de Supabase.

La función usa `gpt-4.1-mini` por defecto y un máximo de 1200 tokens de respuesta. Si quieres elegir otro modelo, puedes establecer el secreto opcional `OPENAI_MODEL`. Las solicitudes a OpenAI tienen coste sujeto a tu cuenta y límites. Si Cyber responde con un error de configuración, revisa los secretos, el despliegue de la función y el origen permitido en Supabase.

## Reto diario

Cada día se seleccionan cinco preguntas de programación. Cada respuesta correcta suma diez puntos; al completar el reto se actualiza la racha de días consecutivos. Los puntos y la racha se conservan en el almacenamiento local del navegador y no se sincronizan entre dispositivos ni con la cuenta de Supabase.

## Proyecto final guiado

En **Proyecto final** construye un portafolio paso a paso: estructura HTML, estilos CSS, una interacción con JavaScript y una lista interactiva de ideas. El taller comprueba los elementos clave de cada paso, ejecuta el código en una vista previa aislada y guarda el borrador en el navegador. Los pasos, el código y el progreso no se sincronizan entre dispositivos ni con Supabase.

## Glosario interactivo

El glosario reúne veinte conceptos de HTML, CSS, JavaScript y desarrollo web. Busca por nombre, descripción o ejemplo, filtra por tema y utiliza la búsqueda sin preocuparte por tildes o mayúsculas.

## Publicar y compartir con GitHub Pages

Este proyecto incluye un flujo de GitHub Actions en `.github/workflows/deploy-pages.yml`. Para publicarlo:

1. Sube el contenido de esta carpeta a la rama `main` de un repositorio público de GitHub.
2. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
3. En **Actions**, espera a que termine el flujo **Deploy to GitHub Pages**.
4. Comparte la URL que muestra el paso de publicación. Su formato suele ser `https://USUARIO.github.io/REPOSITORIO/`.

El enlace público no funciona hasta que el repositorio exista en GitHub y la primera publicación haya terminado.
