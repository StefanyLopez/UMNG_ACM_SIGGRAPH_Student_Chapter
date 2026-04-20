# UMNG ACM SIGGRAPH Student Chapter 🚀

Sitio web oficial del capítulo estudiantil de ACM SIGGRAPH en la Universidad Militar Nueva Granada (UMNG), sede Cajicá-Bogotá.

## Arquitectura del Proyecto

El proyecto está construido sobre un stack moderno de **React 18** y **Vite**, priorizando la velocidad de desarrollo y la modularidad.

### Estructura de Carpetas

```text
src/
├── components/     # Componentes de UI reutilizables (Botones, Cards, etc.)
│   ├── Layouts/    # Plantilla base (Header + Footer + Metadatos)
│   └── index.js    # Punto de exportación central (Barrel Pattern)
├── pages/          # Vistas principales de la aplicación (Home, About, etc.)
├── styles/         # Tokens de diseño y hojas de estilo CSS
└── App.jsx         # Orquestador de rutas y lógica global
```

### Patrones Clave

- **Barrel Pattern (Patrón de Barril):** Utilizamos archivos `index.js` en carpetas estratégicas (como `/components`) para centralizar las exportaciones. Esto permite realizar importaciones limpias y legibles:  
  `import { Header, Footer, Layout } from './components';`
- **Sistema de Layout & SEO:** Implementamos un componente `Layout` envolvente que garantiza la consistencia visual del sitio y permite inyectar metadatos (títulos y descripciones SEO) de forma dinámica para cada página.

- **Tokens de Diseño:** Centralización de colores, tipografías y espaciados en `tokens.css` mediante CSS Custom Properties, facilitando el mantenimiento y la evolución del sistema visual.

## Internacionalización

Implementamos una solución ligera de internacionalización basada exclusivamente en **React Context API**, sin dependencias externas.

### ¿Cómo funciona?

1. **`src/locales/translations.js`**: Contiene el diccionario de cadenas de texto para cada idioma (`es` y `en`).
2. **`LanguageContext`**: Un proveedor global (`src/context/LanguageContext.jsx`) que gestiona el estado del idioma, persiste la elección en `localStorage` y detecta el idioma del navegador.
3. **`useTranslation`**: Un hook personalizado para acceder a las traducciones desde cualquier componente.

### ¿Cómo añadir nuevas traducciones?

1. Abre `src/locales/translations.js`.
2. Añade tus nuevas claves tanto en el objeto `es` como en el `en`. Mantén la misma estructura en ambos.

   ```javascript
   // src/locales/translations.js
   const translations = {
     es: {
       mi_nueva_seccion: {
         titulo: "Hola Mundo",
       },
     },
     en: {
       mi_nueva_seccion: {
         titulo: "Hello World",
       },
     },
   };
   ```

3. Usa el hook `useTranslation` en tu componente o página:

   ```jsx
   import { useTranslation } from "../context/LanguageContext";

   export default function MiComponente() {
     const { t } = useTranslation();
     return <h1>{t.mi_nueva_seccion.titulo}</h1>;
   }
   ```

### ¿Cómo añadir una nueva página?

Si creas una página nueva, recuerda envolverla en el componente `Layout` dentro de `App.jsx` y pasarle el título y descripción traducidos:

```jsx
// src/App.jsx
<Route
  path="/nueva-pagina"
  element={
    <Layout title={t.seo.nueva.title} description={t.seo.nueva.desc}>
      <NuevaPagina />
    </Layout>
  }
/>
```

## Desarrollo y Despliegue

### Entorno Local

Para iniciar el proyecto en modo desarrollo:

```bash
npm install
npm run dev
```

### Despliegue (Production)

El sitio está configurado para desplegarse automáticamente en GitHub Pages. Una vez que hayas probado y validado tus cambios localmente, basta con ejecutar el siguiente comando:

```bash
npm run deploy
```

Este comando realizará automáticamente el build del proyecto y subirá la versión optimizada a la rama de despliegue.

---

© 2026 UMNG ACM SIGGRAPH Student Chapter · Cajicá - Bogotá, Colombia
