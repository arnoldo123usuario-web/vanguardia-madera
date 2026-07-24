/* Genera columnas.json a partir de todos los .json de la carpeta columnas/.
   Netlify lo ejecuta solo en cada publicación. No hay que tocarlo. */
const fs = require("fs");
const path = require("path");

const carpeta = path.join(__dirname, "columnas");
const lista = [];

for (const nombre of fs.readdirSync(carpeta)) {
  if (!nombre.endsWith(".json")) continue;
  try {
    const data = JSON.parse(fs.readFileSync(path.join(carpeta, nombre), "utf8"));
    if (!data.slug) data.slug = nombre.replace(/\.json$/, "");
    lista.push(data);
  } catch (e) {
    console.error("No se pudo leer", nombre, "-", e.message);
  }
}

// Más reciente primero
lista.sort((a, b) => (a.fecha < b.fecha ? 1 : a.fecha > b.fecha ? -1 : 0));

fs.writeFileSync(path.join(__dirname, "columnas.json"), JSON.stringify(lista));
console.log("columnas.json generado con", lista.length, "columna(s).");
