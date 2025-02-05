
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  languages: Skill[];
  expertise: string[];
}

interface SkillsProps {
  skills: SkillsData;
}

const Skills = ({ skills }: SkillsProps) => (
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
);

export default Skills;
