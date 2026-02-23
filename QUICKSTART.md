# Quick Start Guide - 3D Portfolio Website

Welcome! Follow these simple steps to get your portfolio running on your local machine.

## 🚀 Super Quick Start (3 steps)

### Step 1: Install Dependencies
```bash
cd portfolio-3d
pnpm install
```

If you don't have `pnpm` installed, use `npm install` instead.

### Step 2: Start Development Server
```bash
pnpm dev
```

### Step 3: Open in Browser
Your portfolio will be available at: **http://localhost:3000**

The page will automatically reload when you make changes.

## 📝 Customizing Your Portfolio

### Update Your Name & Info
1. Open `client/src/components/Hero3D.tsx`
2. Find the text "Muhammad Muzamil" and replace with your name
3. Update the description and other information

### Update Contact Information
1. Open `client/src/components/Contact.tsx`
2. Replace email, phone, and social media links with yours

### Update Projects
1. Open `client/src/components/Projects.tsx`
2. Modify the `projects` array with your actual projects
3. Update project titles, descriptions, and links

### Change Colors
1. Open `client/src/index.css`
2. Look for the color definitions (starting with `--primary`, `--secondary`, etc.)
3. Change the hex color codes to your preferred colors

## 🎨 Design Theme

This portfolio uses a **Cyberpunk Neon Minimalism** theme with:
- Deep space black background (#0a0e27)
- Electric cyan accents (#00d9ff)
- Magenta highlights (#ff006e)
- Purple accents (#7c3aed)

Feel free to customize these colors in `client/src/index.css`!

## 📦 Building for Production

When you're ready to deploy:

```bash
pnpm build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deploy Your Portfolio

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist/public`

### Option 3: Traditional Hosting
1. Run `pnpm build`
2. Upload the `dist/public/` folder to your web server

## 🆘 Troubleshooting

**Port 3000 is already in use?**
- Vite will automatically use the next available port
- Check the terminal for the correct URL

**Dependencies not installing?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**3D cube not showing?**
- Make sure your browser supports WebGL
- Check browser console for errors (F12)

## 📚 File Structure

```
portfolio-3d/
├── client/src/
│   ├── components/
│   │   ├── Hero3D.tsx          ← Hero section with 3D cube
│   │   ├── About.tsx            ← About section
│   │   ├── Skills.tsx           ← Skills section
│   │   ├── Projects.tsx         ← Projects section
│   │   ├── Contact.tsx          ← Contact form
│   │   ├── Navbar.tsx           ← Navigation
│   │   └── Footer.tsx           ← Footer
│   ├── pages/
│   │   └── Home.tsx             ← Main page
│   ├── index.css                ← Global styles & colors
│   └── App.tsx                  ← App configuration
├── package.json                 ← Dependencies
├── README.md                    ← Full documentation
└── QUICKSTART.md                ← This file
```

## 💡 Tips

- **Hot Reload**: Changes are automatically reflected in the browser
- **Mobile Responsive**: Test on mobile devices to ensure everything looks good
- **3D Performance**: The 3D cube works best on modern browsers with WebGL support
- **Animations**: Scroll down to see smooth scroll animations

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js](https://threejs.org)
- [Framer Motion](https://www.framer.com/motion)

## 🎉 You're All Set!

Your portfolio is ready to customize. Have fun building something amazing!

For detailed information, check out the full `README.md` file.
