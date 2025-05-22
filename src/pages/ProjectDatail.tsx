import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';
import { Separator } from '../components/ui/separator.tsx';

import FiveMdf from "../asset/Mdf/FiveMdf.png";
import FourMdf from "../asset/Mdf/FourMdf.png";
import ThreeMdf from "../asset/Mdf/ThreeMdf.png";
import SecondMdf from "../asset/Mdf/SecondMdf.png";

import FirstSm from "../asset/Semete/FirstSm.png";
import SecondSm from "../asset/Semete/SecondSm.png";
import ThirdSm from "../asset/Semete/ThirdSm.png";


interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  liveLink?: string;
  repoLink?: string;
  slug: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'MDF Incentives',
    description: 'Led frontend development using React, MaterialUI, and Figma mockups. Integrated with a JHipster + Spring Boot backend to deliver a custom booking platform for high-end private events',
    fullDescription: 'A sophisticated e-commerce dashboard that provides store owners with real-time analytics, inventory management, and customer insights. Built with React and TypeScript, with a focus on performance and usability.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    image: ThreeMdf,
    gallery: [
      FiveMdf,
      FourMdf,
      SecondMdf,
    ],
    technologies: ['React', 'Figma', 'Tailwind CSS'],
    challenge: 'The client needed a modern showcase site that reflected his elegance and luxury events and allowed him to increase his social media traffic to increase events',
    solution: 'I designed and developed with the Design Team, an structured site that we felt best reflected the client identity using the maximum budget ceiling requested at the first interview',
    result: 'The new site allowed the client to increase the publicity of her work and put her fantastic work within reach of everyone. With the new site, she increased traffic on her website by 40% in the first four months compared to what she had before.',
    liveLink: 'https://www.mdfincentives.com/',
    repoLink: 'https://github.com/Dripgl/LuxuryEvents',
    slug: 'MDF Incentives'
  },
  {
    id: 2,
    title: 'Se.Me.Te Srl',
    description: 'A beautiful and intuitive task management application with drag-and-drop functionality.',
    fullDescription: 'A feature-rich task management application that helps users organize their work with intuitive drag-and-drop functionality, custom labels, priority settings, and deadline reminders.',
    tags: ['React', 'Node.js', 'Spring'],
    image: FirstSm,
    gallery: [
      FirstSm,
      SecondSm,
      ThirdSm,
    ],
    technologies: ['React', 'Node.js', 'Spring', 'Figma'],
    challenge: 'Building a task management system that feels natural and intuitive while handling real-time updates and synchronization across multiple devices. Ensuring smooth drag-and-drop functionality was particularly challenging.',
    solution: 'I implemented React Beautiful DnD for the drag-and-drop interface, used Socket.io for real-time updates, and designed a responsive UI that adapts to different screen sizes while maintaining usability.',
    result: 'The application has garnered over 5,000 active users within the first three months, with a 4.8/5 rating on the app store. Users particularly appreciate the intuitive design and real-time synchronization features.',
    liveLink: 'https://example.com/task-manager',
    repoLink: 'https://github.com/johndoe/task-manager',
    slug: 'semete'
  },
  {
    id: 3,
    title: 'Travel Companion',
    description: 'A mobile-first application for travel enthusiasts with trip planning features.',
    fullDescription: 'A comprehensive travel companion application that helps users plan trips, discover local attractions, track expenses, and share their experiences with friends and family.',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['React Native', 'GraphQL', 'Apollo Client', 'Firebase', 'Google Maps API', 'Expo'],
    challenge: 'Creating a travel app that works seamlessly offline while providing rich features like maps, itinerary planning, and photo sharing. Handling various data sources and APIs while maintaining performance was a significant challenge.',
    solution: 'I developed a mobile-first application with offline-first architecture using Firebase for data synchronization, implemented efficient caching strategies with Apollo Client, and integrated Google Maps API for location features.',
    result: 'The app has been featured in travel tech blogs and has achieved 20,000+ downloads. Users particularly value the offline capabilities and intuitive trip planning features.',
    liveLink: 'https://example.com/travel-companion',
    repoLink: 'https://github.com/johndoe/travel-companion',
    slug: 'travel-companion'
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'A modern social networking application with real-time messaging and news feed.',
    fullDescription: 'A feature-rich social media platform that brings people together through real-time messaging, personalized news feeds, multimedia sharing, and interactive community features.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633439708729-aa5e3cc95418?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'AWS S3', 'WebRTC'],
    challenge: 'Building a scalable social platform with real-time features that can handle high traffic and multimedia content. Managing user authentication, privacy controls, and content moderation presented significant technical challenges.',
    solution: 'I designed a microservices architecture for scalability, implemented real-time features with Socket.io, and used AWS S3 for efficient media storage and delivery. I also developed a custom moderation system to maintain platform integrity.',
    result: 'The platform has grown to 50,000+ active users with minimal performance issues. The real-time messaging system has been particularly successful, with users sending over 1 million messages daily.',
    liveLink: 'https://example.com/social-platform',
    repoLink: 'https://github.com/johndoe/social-platform',
    slug: 'social-media'
  }
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading
    setIsLoading(true);
    
    setTimeout(() => {
      const foundProject = projectsData.find((p) => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
        setSelectedImage(foundProject.image);
      }
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl text-accent animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      
      <main className="pt-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-6">
              <Link to="/">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl animate-slide-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {project.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 animate-slide-down" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-2 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="rounded-xl overflow-hidden aspect-video bg-secondary">
                <img 
                  src={selectedImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                {project.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg overflow-hidden aspect-video cursor-pointer border-2 transition-all duration-200 ${selectedImage === image ? 'border-accent' : 'border-transparent hover:border-muted-foreground/30'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-6 space-y-6 animate-slide-in-from-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {(project.liveLink || project.repoLink) && (
                <>
                  <Separator />
                  <div className="space-y-4">
                    {project.liveLink && (
                      <Button asChild className="w-full" size="lg">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          View Live Project
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </Button>
                    )}
                    
                    {project.repoLink && (
                      <Button asChild variant="outline" className="w-full" size="lg">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                          View Source Code
                          <Github size={16} className="ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-display font-semibold mb-4">The Challenge</h3>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-display font-semibold mb-4">The Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-display font-semibold mb-4">The Result</h3>
              <p className="text-muted-foreground">{project.result}</p>
            </div>
          </div>
          
          <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-display font-semibold mb-6">Interested in working together?</h3>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/#contact">
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default ProjectDetail;