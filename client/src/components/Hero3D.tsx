// import { Canvas } from '@react-three/fiber';
// import { Suspense, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import FloatingCube from './FloatingCube';
// import TypewriterEffect from './TypewriterEffect';

// /**
//  * Hero3D Component
//  * Design: Cyberpunk Neon Minimalism
//  * Features: 3D floating cube with mouse tracking, typewriter effect headline
//  */
// export default function Hero3D() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent),
//                             linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)`,
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       {/* Gradient orbs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col space-y-6"
//         >
//           <div className="space-y-2">
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={isVisible ? { opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-primary text-lg font-mono"
//             >
//               &gt; Welcome to my portfolio
//             </motion.p>
//             <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
//               <TypewriterEffect text="Muhammad Muzamil" speed={50} />
//             </h1>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-3"
//           >
//             <p className="text-xl text-muted-foreground">
//               Frontend Developer & Full Stack Enthusiast
//             </p>
//             <p className="text-base text-muted-foreground leading-relaxed max-w-md">
//               Crafting stunning, interactive web experiences with React and modern technologies. Passionate about learning full-stack development and exploring cutting-edge frameworks.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex gap-4 pt-4"
//           >
//             <a
//               href="#projects"
//               className="px-8 py-3 bg-primary text-background font-mono font-bold rounded-lg neon-border hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="px-8 py-3 border border-primary text-primary font-mono font-bold rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
//             >
//               Get in Touch
//             </a>
//           </motion.div>

//           {/* Tech stack icons */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex gap-4 pt-4 flex-wrap"
//           >
//             {['React', 'Tailwind', 'Js'].map((tech, idx) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-xs font-mono border border-primary/50 rounded text-primary/80 hover:text-primary hover:border-primary transition-all"
//               >
//                 {tech}
//               </span>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Right 3D Canvas */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="relative h-96 lg:h-full min-h-96"
//         >
//           <Canvas
//             camera={{ position: [0, 0, 5], fov: 50 }}
//             className="w-full h-full"
//           >
//             <Suspense fallback={null}>
//               <ambientLight intensity={0.5} />
//               <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
//               <pointLight position={[-10, -10, 10]} intensity={0.8} color="#ff006e" />
//               <FloatingCube />
//             </Suspense>
//           </Canvas>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="text-primary text-center">
//           <div className="text-xs font-mono mb-2">SCROLL</div>
//           <div className="w-6 h-10 border border-primary rounded-full flex items-start justify-center p-2">
//             <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }




import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';

/**
 * HeroSection Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Typewriter effect, primary Resume download, and subtle background animations.
 */
export default function Hero3D() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary text-lg font-mono"
            >
              &gt; Welcome to my portfolio
            </motion.p>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              <TypewriterEffect text="Muhammad Muzamil" speed={50} />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3"
          >
            <p className="text-xl text-muted-foreground">
              Frontend Developer & Full Stack Enthusiast
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              Crafting stunning, interactive web experiences with React and modern technologies. Passionate about learning full-stack development and exploring cutting-edge frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            {/* Main Action: Resume Download */}
            <a
              href="/resume/muzamil cv.pdf"
              download="Muhammad_Muzamil_Resume.pdf"
              className="px-8 py-3 bg-primary text-background font-mono font-bold rounded-lg neon-border hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
            
            {/* Secondary Action: Contact */}
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary font-mono font-bold rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Tech stack icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-4 pt-4 flex-wrap"
          >
            {['React', 'Tailwind', 'Js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-primary/50 rounded text-primary/80 hover:text-primary hover:border-primary transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-primary text-center">
          <div className="text-xs font-mono mb-2">SCROLL</div>
          <div className="w-6 h-10 border border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}