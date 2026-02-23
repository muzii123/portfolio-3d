import { motion } from 'framer-motion';

/**
 * Footer Component
 * Design: Cyberpunk Neon Minimalism
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-bold font-mono text-primary neon-glow">MM</h3>
            <p className="text-muted-foreground text-sm">
              Frontend Developer & Full Stack Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-foreground font-mono font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-foreground font-mono font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:muzamil@example.com" className="hover:text-primary transition-colors">
                  mmuzamiljameelahmad@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923064209769" className="hover:text-primary transition-colors">
                  +92 3064209769
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground text-sm font-mono"
          >
            &copy; {currentYear} Muhammad Muzamil. All rights reserved. | Built with React & Tailwind CSS
          
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
