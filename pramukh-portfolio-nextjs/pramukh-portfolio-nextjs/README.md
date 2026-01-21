# Pramukh Chandra Molugu - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing Data Analytics and BI Development expertise.

## 🚀 Quick Deploy to Vercel (5 Minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use GitHub/Google/Email

2. **Upload Your Project**
   - Download this entire folder to your computer
   - In Vercel dashboard, click "Add New..." → "Project"
   - Click "Browse" and select this folder
   - Click "Deploy"

3. **Get Your URL**
   - Your site will be live at: `your-project-name.vercel.app`
   - Example: `pramukh-portfolio.vercel.app`

### Option 2: Deploy via GitHub (Recommended for Updates)

1. **Create GitHub Account**
   - Go to [github.com](https://github.com) and sign up

2. **Create New Repository**
   - Click "New Repository"
   - Name it: `pramukh-portfolio`
   - Make it Public
   - Click "Create Repository"

3. **Upload Files**
   - On your repository page, click "uploading an existing file"
   - Drag all files from this folder
   - Click "Commit changes"

4. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub
   - Click "Add New..." → "Project"
   - Import your `pramukh-portfolio` repository
   - Click "Deploy"

5. **Your Site is Live!**
   - URL: `pramukh-portfolio.vercel.app`
   - Any changes you push to GitHub will auto-deploy

## 🌐 Custom Domain Setup (Optional)

### Buy a Domain (~$10-15/year)

1. **Purchase from:**
   - [Namecheap.com](https://namecheap.com) - Recommended
   - [GoDaddy.com](https://godaddy.com)
   - [Google Domains](https://domains.google)

2. **Popular options:**
   - `pramukhm.com`
   - `pramukhmolugu.com`
   - `pramukhm.dev`

### Connect Domain to Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow the DNS setup instructions
5. Wait 24-48 hours for propagation

## 💻 Local Development (Optional)

If you want to test locally before deploying:

```bash
# Install Node.js from nodejs.org first

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in browser
```

## 📁 Project Structure

```
pramukh-portfolio-nextjs/
├── pages/
│   ├── _app.js          # App wrapper
│   └── index.js         # Main portfolio page
├── styles/
│   └── globals.css      # Global styles + Tailwind
├── public/              # Static files (images, etc.)
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind config
└── README.md           # This file
```

## 🎨 Customization

### Change Colors

Edit `pages/index.js` and search for:
- `#3b82f6` (blue-500) - Main blue color
- `#2563eb` (blue-600) - Darker blue
- `#0a0e1a` - Dark background
- `#1a1f35` - Lighter dark sections

### Add Your Photo

1. Add your photo to `public/` folder (name it `profile.jpg`)
2. In `pages/index.js`, add this to the hero section:
```jsx
<img src="/profile.jpg" alt="Pramukh" className="rounded-full w-32 h-32 mb-4" />
```

### Add More Projects

Copy a project card in the Projects section and update the details.

### Add Resume Download

1. Add your resume PDF to `public/resume.pdf`
2. Add this button to your Contact section:
```jsx
<a href="/resume.pdf" download className="btn-primary">
  Download Resume
</a>
```

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Animated floating tech icons
- ✅ Hover effects and transitions
- ✅ Professional dark theme
- ✅ SEO optimized
- ✅ Fast loading (Next.js)

## 🆘 Troubleshooting

**Site not loading?**
- Check Vercel deployment logs
- Make sure all files are uploaded
- Verify `package.json` is present

**Styling looks wrong?**
- Clear browser cache (Ctrl+Shift+R)
- Check that `globals.css` is imported in `_app.js`

**Need help?**
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 📧 Contact

**Pramukh Chandra Molugu**
- Email: pramukhmolugu@gmail.com
- LinkedIn: [linkedin.com/in/pramukhm](https://linkedin.com/in/pramukhm)
- Location: Downingtown, PA

## 📄 License

© 2025 Pramukh Chandra Molugu. All rights reserved.

---

**Your portfolio will be live at:** `https://your-project-name.vercel.app`

Good luck! 🚀
