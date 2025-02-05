
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => (
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
);

export default Contact;
