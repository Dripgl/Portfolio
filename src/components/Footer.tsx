import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/393294369945?text=Ciao%20Gabriele,%20quando%20saresti%20disponibile%20per%20una%20call%20conoscitiva?";
 

    return (
      <footer className="background px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block">
                <h2 className="text-2xl font-display font-semibold text-gradient mb-4">Gabriele Zito</h2>
              </Link>
              <p className=" mb-6 max-w-md text-description">
                Creating elegant, intuitive, and high-performance frontend solutions that solve real-world problems.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dripgl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriele-zito-987452217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
                >
                  <FaWhatsapp size={32} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className= "hover:text-accent transition-colors text-description">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className= "hover:text-accent transition-colors text-description">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" className= "hover:text-accent transition-colors text-description">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className= "hover:text-accent transition-colors text-description">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className= "hover:text-accent transition-colors text-description">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <address className="not-italic space-y-2 text-description">
                <p>Mascalucia, CT</p>
                <p>Italia</p>
                <a href="mailto:hello@jhondoe.com" className="hover:text-accent transition-colors">
                  devgabrielezito@gmail.com
                </a>
                <p>(+39) 329 436 9945</p>
              </address>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-description">
              © {currentYear} Gabriele Zito. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <p className="text-sm hover:text-accent transition-colors text-description">
                Thanks for whatching
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;