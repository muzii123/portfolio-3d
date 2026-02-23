# 3D Portfolio Website - Muhammad Muzamil

A stunning, production-ready 3D portfolio website built with React, Vite, Three.js (React Three Fiber), Tailwind CSS, and Framer Motion. Features interactive 3D elements, smooth animations, and a responsive design that works seamlessly across all devices.

## 🎨 Design Philosophy

**Cyberpunk Neon Minimalism** - This portfolio embraces a futuristic aesthetic with:
- Deep space black background with electric cyan and magenta accents
- Neon glow effects and glassmorphism design
- Interactive 3D elements that respond to user interactions
- Smooth, sophisticated animations throughout
- Bold, monospace typography for a tech-forward feel

## ✨ Features

### Hero Section
- **3D Floating Cube**: Interactive cube that responds to mouse movement
- **Typewriter Effect**: Animated text revealing your name
- **Smooth Animations**: Entrance animations with staggered timing
- **Call-to-Action Buttons**: Prominent buttons for navigation

### About Section
- **Bio Card**: Glassmorphic design with your professional background
- **Expertise Card**: Highlights your key skills and expertise
- **Statistics**: Visual representation of your experience and achievements

### Skills Section
- **Skill Categories**: Organized by Frontend, Tools, Design, and Full Stack
- **Animated Cards**: Hover effects with smooth transitions
- **Proficiency Bars**: Visual representation of skill levels
- **Responsive Grid**: Adapts beautifully to all screen sizes

### Projects Section
- **Project Cards**: Interactive cards with hover animations
- **Project Details**: Title, description, and technology tags
- **Quick Links**: View and Code buttons for each project
- **Color-Coded**: Different neon colors for visual variety

### Contact Section
- **Contact Information**: Email and phone with direct links
- **Social Media Links**: GitHub, LinkedIn, and Twitter
- **Contact Form**: Functional form for direct messaging
- **Form Validation**: Built-in validation and success feedback

### Navigation
- **Sticky Navbar**: Glassmorphic navbar that appears on scroll
- **Smooth Scrolling**: Smooth navigation between sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Active Links**: Visual indicators for current section

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Extract the ZIP file**
   ```bash
   unzip portfolio-3d.zip
   cd portfolio-3d
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)
   - You should see your portfolio website with all sections

### Development

The project uses Vite for fast development and hot module replacement. Any changes you make to the source files will be automatically reflected in the browser.

**Key directories:**
- `client/src/pages/` - Page components
- `client/src/components/` - Reusable components
- `client/src/index.css` - Global styles and theme configuration
- `client/public/` - Static assets

## 🎯 Customization

### Update Your Information

1. **Hero Section** (`client/src/components/Hero3D.tsx`)
   - Change the name and headline
   - Update the description
   - Modify social links

2. **About Section** (`client/src/components/About.tsx`)
   - Update your bio and expertise
   - Change the statistics

3. **Skills Section** (`client/src/components/Skills.tsx`)
   - Add or remove skill categories
   - Update proficiency levels

4. **Projects Section** (`client/src/components/Projects.tsx`)
   - Add your actual projects
   - Update project descriptions and links
   - Add project images (optional)

5. **Contact Section** (`client/src/components/Contact.tsx`)
   - Update email and phone
   - Add your social media links
   - Customize contact form

### Customize Colors

Edit `client/src/index.css` to change the color scheme:
- `--primary: #00d9ff;` - Cyan accent color
- `--secondary: #ff006e;` - Magenta accent color
- `--accent: #7c3aed;` - Purple accent color
- `--background: #0a0e27;` - Dark background
- `--foreground: #e0e7ff;` - Light text color

### Add Your Logo/Branding

1. Place your logo in `client/public/`
2. Update the navbar component to use your logo
3. Update the favicon in `client/index.html`

## 📦 Building for Production

To build the project for production:

```bash
pnpm build
# or
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist/public`

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `pnpm build`
3. Push the `dist` folder to your GitHub Pages branch

### Deploy to Traditional Hosting
1. Run `pnpm build`
2. Upload the contents of `dist/public/` to your web server
3. Ensure your server is configured to serve `index.html` for all routes

## 🛠 Technology Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations

## 📝 Project Structure

```
portfolio-3d/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                  # Server placeholder
├── shared/                  # Shared types
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # This file
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

### Build Errors
- Clear `node_modules` and `pnpm-lock.yaml`, then reinstall: `pnpm install`
- Make sure you're using Node.js v16 or higher: `node --version`

### 3D Elements Not Showing
- Ensure WebGL is supported in your browser
- Check browser console for any errors
- Try a different browser

## 📧 Contact & Support

For questions or issues with this template:
- Email: muzamil@example.com
- Phone: +92 123 456 7890

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with passion using modern web technologies. Special thanks to the amazing communities behind React, Three.js, Framer Motion, and Tailwind CSS.

---

**Happy coding! 🚀** Feel free to customize this portfolio to match your personal brand and showcase your amazing work!
