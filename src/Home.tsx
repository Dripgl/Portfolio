import React, { useEffect } from 'react';

import Navbar from "./components/Navbar.tsx"
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import About from "./components/About.tsx";


function Home() {
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
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;