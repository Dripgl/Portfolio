import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from './Home.tsx';
import ProjectDetail from './pages/ProjectDatail.tsx';
import NotFound from './pages/NotFound.tsx';

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

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>

      </div>
    </Router>

  );
};

export default App;