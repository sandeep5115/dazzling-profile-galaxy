import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Award, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glassmorphism py-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            CS.
          </motion.div>
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-8"
            >
              {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </motion.div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">Chinnam Sandeep</span>
            </h1>
            <p className="text-2xl text-foreground/80 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="max-w-2xl mx-auto text-lg text-foreground/60 mb-12">
              To obtain an engaging and fulfilling role where I can apply my expertise, 
              knowledge, and experience to make a meaningful impact and advance my career 
              in a vibrant organization.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#projects"
                className="premium-card px-8 py-3 text-primary hover:text-white
                         hover:bg-primary transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="premium-card px-8 py-3 text-foreground/80 hover:text-primary
                         transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="premium-card p-6"
            >
              <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {skills.languages.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="premium-card p-6"
            >
              <h3 className="text-xl font-bold mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.expertise.map((skill) => (
                  <div
                    key={skill}
                    className="premium-card p-4 text-center hover:bg-primary/5"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Publications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="premium-card p-6">
              <h3 className="text-xl font-bold mb-4">
                "Enhancing Game Security Through NFT Integration"
              </h3>
              <p className="text-foreground/60 mb-4">
                A comprehensive study on implementing blockchain technology in gaming security.
              </p>
              <a
                href="https://ijisae.org/index.php/IJISAE/article/view/5399"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Publication
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6"
              >
                <div className="mb-4">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-foreground/60 mb-4">{cert.issuer}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Let's Connect
          </motion.h2>
          <div className="flex justify-center gap-8">
            {[
              { icon: Github, link: "https://github.com/sandeepchinnam" },
              { icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
              { icon: Mail, link: "mailto:2@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-4 hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-foreground/60">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Chinnam Sandeep. All rights reserved.</p>
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
];

const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "HTML/CSS", level: 80 },
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
