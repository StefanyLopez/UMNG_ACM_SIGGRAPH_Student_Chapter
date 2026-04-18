import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Officers from './pages/Officers';
import './styles/tokens.css';
import './styles/App.css';

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout title="Inicio" description="Explora el mundo de los gráficos por computador, animación y VR/AR en la UMNG.">
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Layout title="Nosotros" description="Conoce nuestra misión, visión y el impacto de ACM SIGGRAPH en nuestra comunidad académica.">
              <About />
            </Layout>
          } 
        />
        <Route 
          path="/events" 
          element={
            <Layout title="Eventos" description="Participa en nuestros talleres, conferencias y exhibiciones de arte digital.">
              <Events />
            </Layout>
          } 
        />
        <Route 
          path="/officers" 
          element={
            <Layout title="Equipo" description="Conoce a los líderes detrás de la gestión del capítulo estudiantil.">
              <Officers />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
