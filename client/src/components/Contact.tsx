import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

/**
 * Contact Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Contact form with social links
 */
export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 px-4 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'mmuzamiljameelahmad@gmail.com', href: 'mailto:muzamil@example.com' },
                  { icon: Phone, label: 'Phone', value: '+92 3064209769', href: 'tel:+92306420976' },
                ].map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={idx}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 glass rounded-lg border border-primary/30 hover:border-primary/80 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-background/50 rounded-lg border border-primary/50 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                        <Icon className="text-primary group-hover:text-secondary transition-colors" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-mono font-semibold group-hover:text-primary transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-primary/20">
                <p className="text-muted-foreground text-sm mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/muzii123', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-muzamil-aa2693227/', label: 'LinkedIn' },
                    { icon: Twitter, href: 'https://x.com/SethiMuzamil', label: 'Twitter' },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        className="p-3 glass rounded-lg border border-primary/30 hover:border-primary/80 hover:bg-primary/10 transition-all duration-300 group"
                        title={social.label}
                      >
                        <Icon className="text-primary group-hover:text-secondary transition-colors" size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-mono text-primary mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-primary mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-background font-mono font-bold rounded-lg neon-border hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-primary text-sm font-mono"
                >
                  Thanks for reaching out! I will get back to you soon.
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
