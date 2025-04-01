import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button.tsx';

const roles = [
  'Innovative Frontend Expert',
  'UX-Focused Coder',
  'Intuitive Interface Creator',
  'Creative Technologist',
  'Modern Web Architect'
];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <Parallax>
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8 md:space-y-10">
          <div className="animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-6">
              Available for freelance work
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight animate-slide-down title" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Hi, I'm <span className="text-gradient">Gabriele Zito</span>
          </h1>

          <div className="h-12 sm:h-16 overflow-hidden animate-slide-down opacity-2" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-display font-medium transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
            >
              {roles[currentRoleIndex]}
            </h2>
          </div>

          <p className="text-lg md:text-xl max-w-2xl animate-slide-down text-description" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            I create exceptional digital experiences that are both visually stunning and intuitive to use. Specialized in crafting modern frontend solutions with meticulous attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-down " style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Button asChild size="lg" className="px-6 py-2 font-sans font-semibold text-white transition duration-600 ease-in-out skew-x-30 bg-black border-b-4 border-white-800 rounded-full shadow-lg shadow-black-600/50 hover:skew-x-6">
              <a href="#projects">
                View my work
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-2 border-black relative group overflow-clip transition-all hover:scale-up-center">
              <div className="bg-sample w-full h-full flex flex-col justify-center">
                <a>Contact me</a>
              </div>
              <div className="transition-all ease-out bg-red-600 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28"></div>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
    // </Parallax>

  );
};

export default Hero;