
import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Publications from '@/components/sections/Publications';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      <Navigation />
      <Hero />
      <Profile />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Publications />
      <Certifications certifications={certifications} />
      <Contact />

      <footer className="py-8 text-center text-foreground/60">
        <div className="container mx-auto px-4">
          
        </div>
      </footer>
    </div>
  );
};

const projects = [
  {
    title: "InsuranceBuddy",
    description: "A web application enabling customers to create and manage their insurance policies effortlessly.",
    tech: ["Django", "Python", "PostgreSQL"],
    link: "https://github.com/sandeepchinnam/insurance_management",
  },
  {
    title: "LOGIS",
    description: "A system for managing goods, tracking orders, and facilitating order placements across locations.",
    tech: ["Java", "Spring Boot", "React"],
    link: "https://github.com/sandeepchinnam/SDP3-LOGIS",
  },
  {
    title: "Grievance",
    description: "A system for organizations to address employee and customer grievances efficiently.",
    tech: ["Enterprise Programming", "Java"],
    link: "https://github.com/sandeepchinnam/Grievance",
  },
  {
    title: "Gym Rental System",
    description: "A platform providing rental services for gym equipment to individuals.",
    tech: ["MEAN Stack"],
    link: "https://github.com/sandeepchinnam/",
  },
  {
    title: "Blog Management",
    description: "A platform providing bolg services for the users.",
    tech: ["DJANGO"],
    link: "https://github.com/sandeepchinnam/django_blog_management",
  },
  {
    title: "SIMPLE TOOLS",
    description: "A platform providing QR CODE GENERATION AND URL SHORTENER ETC.",
    tech: ["PYTHON"],
    link: "https://github.com/sandeepchinnam/TOOLS",
  },
  {
    title: "Cookies Chef",
    description: "A front-end platform for users to discover and explore cooking recipes.",
    tech: ["REACT.JS"],
    link: "https://github.com/sandeepchinnam/COOKIES_CHEF",
  },
];

const skills = {
  languages: [
    { name: "HTML/CSS", level: 80 },
    { name: "Python", level: 70 },
    { name: "Django", level: 70 },
    
  ],
  expertise: [
    "Web Development",
    "UI/UX Design",
    "Game Development",
    "Figma",
    "Adobe Tools",
    "Unity Engine",
  ],
};

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://drive.google.com/file/d/1NqjuswJ3ruw3Fz-KkqMT3Gw9mNiqBcEL/view?usp=sharing",
  },
  {
    title: "Unity Certified User: Programmer",
    issuer: "Unity Technologies",
    link: "https://drive.google.com/file/d/1Od6VShEMmM7wcwDFhdHzsWJkak7akmaz/view?usp=sharing",
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    link: "https://drive.google.com/file/d/1ts0uxjr9G0ziumTuuZnJO7quN_TnS3He/view?usp=sharing",
  },
];

export default Index;
