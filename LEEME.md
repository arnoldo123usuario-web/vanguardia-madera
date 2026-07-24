# Vanguardia Madera — Guía de instalación

Este paquete contiene el sitio completo, ya preparado para que el equipo publique
columnas desde el navegador, sin tocar código. Solo falta conectar las cuentas.

Sigue los pasos en orden. Es de una sola vez; después, publicar es cuestión de minutos.

---

## Paso 1 — Crear cuenta en GitHub  (aquí "vive" el sitio)

1. Entra a https://github.com y crea una cuenta gratis.
2. Ya dentro, arriba a la derecha: botón "+" → "New repository".
3. Nombre del repositorio: **vanguardia-madera**
4. Marca la opción **Public** (debe ser público para que el sitio pueda leer las columnas).
5. Botón verde "Create repository".
6. En la página que aparece, busca el enlace "uploading an existing file".
7. Arrastra AHÍ todo el contenido de esta carpeta (index.html, LEEME.md,
   y las carpetas admin/ y columnas/). Espera a que suban.
8. Abajo, botón "Commit changes".

> IMPORTANTE: antes o después de subir, abre el archivo index.html y edita
> las dos líneas de configuración (arriba del todo en la sección <script>):
>   GH_USUARIO = "tu-usuario-de-github"
>   GH_REPO    = "vanguardia-madera"
> Puedes editarlo directo en GitHub: clic en index.html → ícono del lápiz.

---

## Paso 3 — Conectar Netlify  (publica el sitio y da el candado de seguridad)

1. Entra a https://www.netlify.com y regístrate con **"Sign up with GitHub"**.
2. En el panel: "Add new site" → "Import an existing project" → "GitHub".
3. Autoriza y elige el repositorio **vanguardia-madera**.
4. No cambies nada de la configuración de build (déjala vacía). Botón "Deploy".
5. En un minuto tendrás una dirección tipo  nombre-al-azar.netlify.app
   Esa ya es tu página en línea. (El nombre se puede cambiar en Site settings.)

---

## Paso 4 — Activar el acceso de edición para el equipo

1. En Netlify, entra a tu sitio → pestaña arriba **"Identity"** → botón "Enable Identity".
2. Baja a "Registration preferences" y elige **"Invite only"**
   (así solo entra quien tú invites; nadie más).
3. Baja a "Services" → "Git Gateway" → botón "Enable Git Gateway".
4. Ahora invita a tu equipo: pestaña "Identity" → botón "Invite users" →
   escribe los correos de tus compañeros → "Send".
5. A cada quien le llega un correo. Al aceptarlo, pone su contraseña y listo.

---

## Cómo se publica una columna (esto es lo que harán tus compañeros)

1. Entrar a  TU-SITIO.netlify.app/admin
2. Iniciar sesión con su correo y contraseña.
3. Botón "New Columna". Llenar: título, autor, fecha, liga, resumen y texto.
   (En el texto: dejar una línea en blanco entre párrafo y párrafo.)
4. Botón "Publish". En un minuto aparece sola en la página principal.

La liga de cada columna queda como:  TU-SITIO.netlify.app/#/c/la-liga-que-pusieron
Esa se puede pegar en WhatsApp o Facebook.

---

## Quitar la columna de ejemplo

Cuando ya tengan columnas reales, borren la de ejemplo:
en el panel /admin, entren a "Por qué decidimos escribir" y usen "Delete".
(O borren el archivo columnas/escribir-desde-aqui.json en GitHub.)

---

## Notas

- El sitio es gratis y no requiere servidor ni "build". Todo es estático.
- El repositorio es público (el código se ve), pero SOLO quien tú invites
  puede publicar o editar. Los lectores solo leen.
- Cambia el correo de contacto y los textos del pie en index.html
  (busca "correo@ejemplo.com").
