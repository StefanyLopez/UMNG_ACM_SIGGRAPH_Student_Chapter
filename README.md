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
