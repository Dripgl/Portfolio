import React, { useEffect, useRef, useState } from 'react';
import { cn } from "../lib/utils.tsx";
import { MessageCircle, GraduationCap } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router-dom';
import ProfiloSito from "../asset/ProfiloSito.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '-100px 0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "relative transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden">
              <img
                src={ProfiloSito}
                alt="John Doe"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-6 shadow-lg max-w-[280px] hidden lg:block">
              <p className="text-sm font-medium">
                "I believe there is no greater satisfaction than being able to turn a client's dream into reality."
              </p>
            </div>
          </div>

          <div
            className={cn(
              "space-y-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent">
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Creating exceptional <span className="text-gradient">digital experiences</span>
            </h2>

            <p className="text-lg text-muted-foreground text-description">
              I'm a passionate frontend developer with 2+ years of experience crafting innovative web solutions. I specialize in building responsive, user-centric applications that solve real-world problems.
            </p>
            {/* CREA PAGINA ESTERNA CONTENENTE TUTTI I TUOI ATTESTATI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Education</h3>
                <Link
                  to="/education"
                  className="inline-flex items-center text-sm hover:text-accent/80 font-medium mt-1"
                >
                  View all certificates <GraduationCap className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground text-description">Catania, Italia</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Experience</h3>
                <p className="text-muted-foreground text-description">2+ Years Professional Experience</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Languages</h3>
                <p className="text-muted-foreground text-description">Italian (Native), English (Fluent)</p>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="px-10 py-2 font-sans font-semibold text-white transition duration-600 ease-in-out skew-x-30 bg-black border-b-4 border-white-800 rounded-full shadow-lg shadow-black-600/50 hover:skew-x-6">
                <a href="#contact">
                  Contact Me
                  <MessageCircle size={20} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;