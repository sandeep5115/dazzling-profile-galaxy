
import { motion } from 'framer-motion';

const Hero = () => (
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
);

export default Hero;
