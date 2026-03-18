# Inshaf Rajaaei - Portfolio Website

A professional, modern portfolio website built with React, Vite, and Tailwind CSS. Featuring a dark premium design with dynamic content management through JSON files.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd inshaf-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

---

## 📁 Project Structure

```
inshaf-portfolio/
├── src/
│   ├── components/          # React components
│   ├── data/
│   │   ├── projects.json     # 🔑 Edit projects here
│   │   ├── skills.json       # 🔑 Edit skills here
│   │   └── services.json     # 🔑 Edit services here
│   ├── styles/
│   │   └── globals.css       # Global styles & animations
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

---

## ✏️ How to Update Content

### 1. Add/Edit Projects

Edit `src/data/projects.json`:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project Title",
      "problem": "Problem it solves",
      "role": "Your role in the project",
      "tech": ["React", "Node.js"],
      "github": "https://github.com/...",
      "demo": "https://...",
      "featured": true,
      "image": "https://image-url.com/image.jpg"
    }
  ]
}
```

**Featured projects (featured: true)** appear in the Featured Projects section and on the home page.

### 2. Update Skills

Edit `src/data/skills.json` to organize technical skills by category:

```json
{
  "skills": {
    "frontend": {
      "category": "Frontend Development",
      "skills": ["React.js", "JavaScript", "Tailwind CSS"]
    }
  }
}
```

### 3. Modify Services

Edit `src/data/services.json` to update what services you offer:

```json
{
  "services": [
    {
      "id": 1,
      "title": "Full-Stack Development",
      "description": "...",
      "icon": "Code",
      "features": ["Feature 1", "Feature 2"]
    }
  ]
}
```

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  'accent': '#d97706',        // Current: Orange
  'accent-light': '#f59e0b',
  // Change to your preferred color
}
```

### Update About Section

Edit `src/components/About.jsx` to change your bio and personal details.

### Modify Hero Section

Edit `src/components/Hero.jsx` to update:
- Your tagline
- Profile image
- Value proposition

---

## 🚀 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Open [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click Deploy
6. Your site is live! 🎉

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your domain (inshafrajaaei.com)
4. Follow domain provider instructions to point DNS to Vercel

---

## 📊 SEO Setup (Important!)

### 1. Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your unique description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta property="og:title" content="Your Title" />
```

### 2. Verify in Search Engines

- **Google:** [Google Search Console](https://search.google.com/search-console)
- **Bing:** [Bing Webmaster Tools](https://www.bing.com/webmasters)

Submit `sitemap.xml` to both for faster indexing.

### 3. Fast Indexing

- Use [IndexNow](https://www.indexnow.org/) to notify search engines of changes
- Update `sitemap.xml` after adding/removing pages

---

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Dark premium design with golden accent  
✅ Fast loading & optimized performance  
✅ SEO-friendly with meta tags & structured data  
✅ Smooth animations & transitions  
✅ JSON-driven content (easy to update)  
✅ Contact links & social integration  
✅ Zero dependencies conflicts  

---

## 🔧 Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm run lint
```

---

## 📝 Content Best Practices

1. **Projects**
   - Include 2-3 featured projects initially
   - Show real problems solved (not generic)
   - Include tech stack for credibility
   - Link to GitHub/demo when available

2. **Skills**
   - Organize by category (Frontend, Backend, etc.)
   - List only technologies you've used
   - Remove skills you haven't used in 6+ months

3. **Services**
   - Keep it to 3-4 main services
   - Be specific about what you deliver
   - Include concrete features/benefits

---

## 🚨 Important Notes

### Images
- Placeholder images from Unsplash are used
- Replace with your own project screenshots for better conversion
- Recommended sizes: 800x500px for projects, 500x600px for hero

### Domain
- Sites ranks better with a personal domain (inshafrajaaei.com)
- Free domains are okay to start
- Upgrade to custom domain when serious about SEO

### Performance
- Check Lighthouse score: [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ score on all metrics
- Current build is optimized for speed

---

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Changes not reflecting
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Rebuild: `npm run build`

---

## 📈 Version 2.0 Ideas

- [ ] Contact form with backend (Firebase/Nodemailer)
- [ ] Blog section with Markdown support
- [ ] Analytics (Google Analytics 4)
- [ ] Dark/Light mode toggle
- [ ] Project filtering & search
- [ ] Newsletter signup
- [ ] Client testimonials section

---

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Email: inshafrmnaazir@gmail.com
- Visit: [LinkedIn](https://linkedin.com/in/inshafrmnaazir/)

---

## 📄 License

This project is open source and available under the MIT License.

---

**Remember:** Your portfolio is a living document. Update it regularly with new projects and skills to stay current and rank higher in search results! 🚀
