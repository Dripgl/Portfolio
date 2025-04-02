import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { cn } from "../lib/utils.tsx";


const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online stores with analytics and inventory tracking.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    slug: 'ecommerce-dashboard'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with drag-and-drop functionality.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    slug: 'task-management'
  },
  {
    id: 3,
    title: 'Travel Companion',
    description: 'A mobile-first application for travel enthusiasts with trip planning features.',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop',
    slug: 'travel-companion'
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'A modern social networking application with real-time messaging and news feed.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    slug: 'social-media'
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 px-6 md:px-10">
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
              <a href="/project">View All Projects</a> 
              <ArrowRight size={16} className="ml-2" />
            </div>
            <div className="transition-all ease-out bg-red-600 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;