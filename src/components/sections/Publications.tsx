import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Publications = () => (
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
        <div className="premium-card p-6 mb-6">
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

        <div className="premium-card p-6">
          <h3 className="text-xl font-bold mb-4">
            "A Review of Blockchain Technology in Different Sectors: Challenges and Solutions"
          </h3>
          <p className="text-foreground/60 mb-4">
            An extensive analysis of blockchain technology applications and their implementation challenges across various industries.
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/10125283?denied="
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
);

export default Publications;
