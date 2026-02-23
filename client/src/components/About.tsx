import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * About Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Glassmorphic cards with scroll animations and profile image
 */
export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know me better and understand my journey in web development
            </p>
          </motion.div>

          {/* Content Grid with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image - Left Side */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Glowing background effect */}
                <div className="absolute inset-0  bg-linear-to-t from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-pulse" />
                
                {/* Neon border frame */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary neon-border" />
                
                {/* Image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary"
                >
                  <img
                    src="/images/My-Image.jpeg"
                    alt="Muhammad Muzamil"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
                </motion.div>

                {/* Corner accent elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-secondary" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-secondary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
              </div>
            </motion.div>

            {/* Bio and Expertise Cards - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bio Card */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-xl p-8 border border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4 font-mono">Who I Am</h3>
                <p className="text-foreground/80 leading-relaxed space-y-4">
                  <span className="block">
                    I'm Muhammad Muzamil, a passionate frontend developer currently diving deep into full-stack web development. With a strong focus on creating beautiful, responsive, and accessible user interfaces, I'm committed to building digital experiences that users love.
                  </span>
                  <span className="block">
                    My journey in web development is driven by curiosity and a desire to master modern technologies. I believe in continuous learning and staying updated with the latest trends in the industry.
                  </span>
                </p>
              </motion.div>

              {/* Expertise Card */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-xl p-8 border border-secondary/30 hover:border-secondary/60 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-secondary mb-4 font-mono">My Expertise</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span><strong>Frontend Mastery:</strong> React, Tailwind CSS, and modern JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">▸</span>
                    <span><strong>UX Focus:</strong> Strong passion for responsive and accessible design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span><strong>API Integration:</strong> Experience with REST APIs and 3rd-party services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span><strong>Full Stack Aspirations:</strong> Learning backend technologies and databases</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {[
              { label: 'Projects Completed', value: '5+' },
              { label: 'Years Learning', value: '2+' },
              { label: 'Technologies', value: '5+' },
              { label: 'Clients Happy', value: '5+' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-lg p-6 border border-primary/20 text-center hover:border-primary/50 transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
