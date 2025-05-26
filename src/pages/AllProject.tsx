import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';
import { cn } from "../lib/utils.tsx";

import Coming from "../asset/Coming.png";
import Fanta from "../asset/Fanta/Fanta.png";
import SecondMdf from "../asset/Mdf/SecondMdf.png";
import FirstSm from "../asset/Semete/FirstSm.png";
import MacsTwo from "../asset/Macs/MacsTwo.png";


const projects = [
  {
    id: 1,
    title: 'MDF Incentives',
    description: 'A simple, elegant and impactful showcase site',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: SecondMdf,
    slug: 'MDF Incentives'
  },
  {
    id: 2,
    title: 'Se.Me.Te',
    description: 'Professional, simple yet innovative corporate website',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    image: FirstSm,
    slug: 'semete'
  },
  {
    id: 3,
    title: 'ElysianCup',
    description: 'A customized app for private soccer tournaments',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    image: Fanta,
    slug: 'FantaHero'
  },
  {
    id: 4,
    title: 'Museum Site',
    description: 'restyling of a museum website following the client requests',
    tags: ['React', 'Prime.React', 'Bootstrap'],
    image: MacsTwo,
    slug: 'macs'
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'A modern social networking application with real-time messaging and news feed.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: Coming,
    slug: 'social-media'
  },
  {
    id: 6,
    title: 'Social Media Platform',
    description: 'A modern social networking application with real-time messaging and news feed.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: Coming,
    slug: 'social-media'
  }
];

const AllProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
          if (projectId && !visibleProjects.includes(projectId)) {
            setVisibleProjects(prev => [...prev, projectId]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.project-item').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section id="work" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured Projects</h2>
          <p className="text-lg max-w-2xl mx-auto text-description">
            A selection of my recent work showcasing my skills and expertise in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item"
              data-project-id={project.id}
            >
              <div
                className={cn(
                  "project-card h-[400px] group",
                  visibleProjects.includes(project.id) ? "animate-scale-in" : "opacity-0"
                )}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animationDelay: `${(project.id - 1) * 0.2}s`
                }}
              >
                <div className="project-overlay">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                    <p className="line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-accent group mt-4">
                      <Link to={`/project/${project.slug}`}>
                        View Project
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-10 border-2 border-black relative group overflow-clip transition-all hover:scale-up-center">
            <div className="bg-sample w-full h-full flex flex-row justify-center items-center">
              <a href="/contact">Send a Message</a>
              <Send size={20} className="ml-2" />
            </div>
            <div className="transition-all ease-out bg-red-600 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;