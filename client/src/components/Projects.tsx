import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Interactive project cards with hover effects
 */
export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: 'ECommerce Platform',
      description: 'A full-featured e-commerce website with product catalog, shopping cart, and checkout functionality. Built with React and integrated with payment gateways.',
      tags: ['React', 'Tailwind CSS', 'REST API', 'Payment Integration'],
      color: 'primary',
    },
    {
      title: 'Property Listing Website',
      description: 'Modern property listing platform with advanced search filters, property details, and contact forms. Features responsive design and smooth animations.',
      tags: ['React.js', 'Tailwind CSS', 'Database', 'Maps Integration'],
      color: 'secondary',
    },
    {
      title: 'Meal Recipe App',
      description: 'Interactive meal recipe application with search functionality, detailed recipes, and ingredient lists. Integrated with external recipe APIs.',
      tags: ['React', 'API Integration', 'Responsive Design'],
      color: 'accent',
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio featuring Three.js integration, mouse-tracking animations, and smooth scroll effects. Showcases modern web technologies.',
      tags: ['React', 'React.js', 'Framer Motion', 'Tailwind CSS'],
      color: 'primary',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Productivity tool with task creation, categorization, and progress tracking. Features real-time updates and beautiful data visualizations.',
      tags: ['React', 'State Management', 'Charts', 'Local Storage'],
      color: 'secondary',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather metrics. Clean and intuitive UI.',
      tags: ['React', 'Weather API', 'Geolocation', 'Charts'],
      color: 'accent',
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'secondary':
        return 'border-secondary/30 hover:border-secondary/80 hover:shadow-secondary/20';
      case 'accent':
        return 'border-accent/30 hover:border-accent/80 hover:shadow-accent/20';
      default:
        return 'border-primary/30 hover:border-primary/80 hover:shadow-primary/20';
    }
  };

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my recent work and the technologies I have used to build amazing digital experiences
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group glass rounded-xl p-6 border transition-all duration-300 hover:shadow-lg ${getColorClass(project.color)}`}
              >
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-mono bg-background/50 border border-primary/30 rounded text-primary/80 hover:text-primary hover:border-primary transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {/* <div className="flex gap-3 pt-4 border-t border-primary/20">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-mono"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-mono"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
