# Drian Dev

Sitio estático para aprender HTML, CSS y JavaScript con doce prácticas interactivas, preguntas, pistas, un editor de código y una vista previa. Incluye líneas de código animadas en el fondo, movimiento sutil que responde al cursor y una guía de desplazamiento; los efectos respetan la preferencia de movimiento reducido del dispositivo. Las cuentas y el progreso entre dispositivos se guardan en Supabase.

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

## Publicar y compartir con GitHub Pages

Este proyecto incluye un flujo de GitHub Actions en `.github/workflows/deploy-pages.yml`. Para publicarlo:

1. Sube el contenido de esta carpeta a la rama `main` de un repositorio público de GitHub.
2. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
3. En **Actions**, espera a que termine el flujo **Deploy to GitHub Pages**.
4. Comparte la URL que muestra el paso de publicación. Su formato suele ser `https://USUARIO.github.io/REPOSITORIO/`.

El enlace público no funciona hasta que el repositorio exista en GitHub y la primera publicación haya terminado.
