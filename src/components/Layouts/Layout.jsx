import React from 'react';
import { Header, Footer } from '../index';

const Layout = ({ children, title, description }) => {
  React.useEffect(() => {
    // Título dinámico
    document.title = title ? `${title} | UMNG ACM SIGGRAPH` : 'UMNG ACM SIGGRAPH';
    
    // Descripción SEO
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        // Opcional: Crear la etiqueta si no existe
        const newMeta = document.createElement('meta');
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description]);

  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
