import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { LanguageProvider, useTranslation } from './context/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Officers from './pages/Officers';
import './styles/tokens.css';
import './styles/App.css';

const AppRoutes = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout title={t.seo.home.title} description={t.seo.home.desc}>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/about" 
        element={
          <Layout title={t.seo.about.title} description={t.seo.about.desc}>
            <About />
          </Layout>
        } 
      />
      <Route 
        path="/events" 
        element={
          <Layout title={t.seo.events.title} description={t.seo.events.desc}>
            <Events />
          </Layout>
        } 
      />
      <Route 
        path="/officers" 
        element={
          <Layout title={t.seo.officers.title} description={t.seo.officers.desc}>
            <Officers />
          </Layout>
        } 
      />
    </Routes>
  );
};

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

