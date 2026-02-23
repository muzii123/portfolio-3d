import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Skills Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Animated skill cards with neon borders
 */
export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { category: 'Frontend', items: ['React',, 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Tools & Frameworks', items: ['Vite', 'Git', 'VS Code'] },
    { category: 'Design & UX', items: ['Responsive Design', 'Accessibility', 'UI/UX Principles', 'Figma', 'Prototyping'] },
    { category: 'Full Stack Learning', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication'] },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and expertise I have developed through continuous learning
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group glass rounded-xl p-8 border border-primary/30 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-bold text-primary mb-6 font-mono group-hover:text-secondary transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-background/50 border border-primary/50 rounded-lg text-foreground text-sm font-mono hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8"
          >
            {[
              { name: 'React & Modern JS', level: 90 },
              { name: 'Tailwind CSS', level: 85 },
              // { name: 'Next.js', level: 80 },
              { name: 'Full Stack Development', level: 70 },
            ].map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-mono text-sm">{skill.name}</span>
                  <span className="text-primary font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-primary/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                    className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
