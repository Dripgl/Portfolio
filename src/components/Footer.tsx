import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="background px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-display font-semibold text-gradient mb-4">Gabriele Zito</h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating elegant, intuitive, and high-performance frontend solutions that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Dripgl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriele-zito-987452217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* CREA QUALCOSA CHE PERMETTA DI INVIARTI UNA MAIL IN AUTOMATICO CON INFORMAZIONI */}
              <a
                href="mailto:devgabrielezito@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              {/* AGGIUNGERE WHATSAPP WEB CON RICHIESTA AUTOMATICA DEL CLIENTE */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
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
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gabriele Zito. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;