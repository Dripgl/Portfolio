import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import i18n from './i18n.tsx';


import Home from './Home.tsx';
import ProjectDetail from './pages/ProjectDatail.tsx';
import NotFound from './pages/NotFound.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Education from './pages/Education.tsx';

const App = () => {


  useEffect(() => {
    // Ottenere l'URL corrente
    const hash = window.location.hash;

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.pathname]); // Esegui quando cambia il percorso

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
};

export default App;