# TioProject — Project Physics Pre 2026

Sitio web oficial del grupo de ayuda preuniversitaria **TioProject** (enfoque UNI, UNMSM, UNFV, UNAC).

## Estructura del Proyecto
- `index.html`: Estructura principal de la plataforma (Portada, Micro-Retos, Árbol de Habilidades, Bóveda PDF, Club Caza-Errores y Ciclos).
- `css/styles.css`: Estilos personalizados en armonía monocromática técnica con el logo oficial.
- `js/app.js`: Lógica interactiva (Mermaid.js, KaTeX, filtros de separatas, retos y progreso en `localStorage`).
- `data/materiales.json`: Catálogo de separatas y formularios (reemplazable automáticamente por tu URL de Google Apps Script).
- `data/dudas.json`: Muro de dudas resueltas de la comunidad.
- `assets/logotioproject.jpg`: Logo oficial integrado.

## Cómo subirlo a GitHub Pages
1. Crea un repositorio público en GitHub (por ejemplo `tioproject`).
2. Sube todos los archivos de esta carpeta respetando la estructura (`index.html` en la raíz).
3. Ve a **Settings > Pages**, selecciona la rama `main` y carpeta `/ (root)`, y guarda.
4. En menos de 1 minuto tendrás tu web activa en `https://tu-usuario.github.io/tioproject/`.

## Cómo agregar tu enlace de TikTok o conectar Google Drive
Abre el archivo `js/app.js` y edita el bloque `CONFIG` en las primeras líneas:
```javascript
const CONFIG = {
  whatsappNumber: "51912138703",
  facebookUrl: "https://www.facebook.com/projectphysicspre/?locale=es_LA",
  tiktokUrl: "https://www.tiktok.com/@tu_usuario",
  googleAppsScriptUrl: "TU_URL_DE_GOOGLE_APPS_SCRIPT"
};
```
