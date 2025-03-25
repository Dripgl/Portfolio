import React, { useEffect, useRef, useState } from 'react';
import { cn } from "../lib/utils.tsx";
import { Progress } from "../components/ui/progress.tsx";

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML/CSS', proficiency: 95 },
      { name: 'JavaScript/TypeScript', proficiency: 80 },
      { name: 'React', proficiency: 90 },
      { name: 'Angular', proficiency: 85 },
      { name: 'Tailwind CSS', proficiency: 88 },
    ],
  },
  {
    category: 'UI/UX Design',
    skills: [
      { name: 'Figma', proficiency: 70 },
      { name: 'Material', proficiency: 80 },
      { name: 'Responsive Design', proficiency: 90 },
      { name: 'User Research', proficiency: 85 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub/GitLab', proficiency: 90 },
      { name: 'Jhipster', proficiency: 70 },
      { name: 'Swagger', proficiency: 70 },
      { name: 'Docker', proficiency: 70 },
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          // Initialize all skills to 0
          const initialSkills: Record<string, number> = {};
          skillsData.forEach(category => {
            category.skills.forEach(skill => {
              initialSkills[skill.name] = 0;
            });
          });
          setSkillProgress(initialSkills);
          
          // Animate progress bars
          const animateSkills = async () => {
            for (const category of skillsData) {
              for (const skill of category.skills) {
                await new Promise<void>(resolve => {
                  setTimeout(() => {
                    setSkillProgress(prev => ({
                      ...prev,
                      [skill.name]: skill.proficiency,
                    }));
                    resolve();
                  }, 100);
                });
              }
            }
          };
          
          animateSkills();
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
      id="skills" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've honed my skills across various frontend technologies and design tools to create seamless user experiences.
          </p>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-display font-semibold mb-6 text-gradient">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{skill.name}</p>
                      <span className="text-sm text-muted-foreground">{skillProgress[skill.name] || 0}%</span>
                    </div>
                    <Progress 
                      value={skillProgress[skill.name] || 0} 
                      max={100}
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;