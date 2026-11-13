import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import Home from './pages/Home';

function NotFound() {
  const { lang } = useLang();
  return <main className="bakery bakery-not-found">
    <p className="eyebrow">Algarve Bread Co. · 404</p>
    <h1>{lang === 'pt' ? 'Esta página não existe.' : 'This page is missing.'}</h1>
    <a className="bakery-button" href="/">{lang === 'pt' ? 'Voltar ao início' : 'Back to the bakery'} <span aria-hidden="true">↗</span></a>
  </main>;
}

// Public brochure site: no account or Base44 API is needed to browse the bakery.
export default function App() {
  return <LanguageProvider><BrowserRouter><Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes></BrowserRouter></LanguageProvider>;
}
