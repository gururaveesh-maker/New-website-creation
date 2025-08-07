# Deploy to Netlify - Step by Step Guide

## 🚀 Quick Deployment to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "+" → "New repository"
   - Name: `Website-Builder`
   - Make it Public
   - Don't initialize (we have files)
   - Click "Create repository"

2. **Push Code to GitHub**
   ```bash
   git remote add origin https://github.com/gururaveesh-maker/Website-Builder.git
   git push -u origin main
   ```

3. **Deploy to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose GitHub
   - Select `Website-Builder` repository
   - Click "Deploy site"

### Option 2: Drag & Drop Deployment

1. **Zip the project**
   ```bash
   # In the project directory
   zip -r website-builder.zip . -x "*.git*"
   ```

2. **Upload to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Drag & drop the zip file
   - Site will deploy automatically

### Option 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy
   netlify deploy --prod
   ```

## ⚙️ Netlify Configuration

### Custom Domain (Optional)
1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS settings

### Environment Variables (If needed)
- Go to Site Settings → Environment variables
- Add any required variables

### Build Settings (Not needed for static site)
- Build command: (leave empty)
- Publish directory: (leave empty)

## 🔗 Your Live Site

Once deployed, your site will be available at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

## 📱 Features Available on Live Site

✅ **Responsive Design** - Works on all devices
✅ **Theme Switcher** - 4 different color themes
✅ **Template Showcase** - Multiple layout examples
✅ **Contact Form** - Functional contact form
✅ **SEO Optimized** - Meta tags and social sharing
✅ **Fast Loading** - Optimized for performance

## 🎯 Next Steps After Deployment

1. **Test the site** - Check all features work
2. **Customize content** - Update for your needs
3. **Add custom domain** - If desired
4. **Set up analytics** - Google Analytics, etc.
5. **Configure forms** - Connect contact form to backend

## 📞 Support

If you encounter issues:
- Check Netlify documentation
- Review deployment logs
- Contact Netlify support

---

**Your professional website will be live in minutes! 🚀**
