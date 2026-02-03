# Khosrow Samadi - Developer Portfolio

A modern, multi-page portfolio website built with **Tailwind CSS v4** to showcase web development projects, skills, and professional background. Features a clean dark theme, responsive design, and smooth animations.

## Features

### **Core Features**

- **Multi-Page Architecture**: Five distinct pages (Home, About, Resume, Portfolio, Contact) with consistent navigation
- **Modern Tech Stack**: Built with Tailwind CSS v4 using the latest utility-first approach
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Performance Optimized**: Compiled CSS with PurgeCSS for minimal file size
- **Typewriter Animation**: JavaScript-powered typing effect on the homepage
- **Custom Animations**: CSS keyframe animations for fade-ins, hovers, and interactive elements

### **Design Highlights**

- **Dark Theme**: Professional dark color scheme with blue accents (#1387c1)
- **Interactive Elements**: Hover effects, smooth transitions, and animated components
- **Visual Hierarchy**: Clear typography and spacing for optimal readability
- **Consistent Branding**: Unified design language across all pages

## Technologies Used

### **Frontend**

- **HTML5**: Semantic markup with proper structure
- **Tailwind CSS v4**: Utility-first CSS framework with JIT compilation
- **Vanilla JavaScript**: Custom animations and interactivity
- **Custom CSS**: Additional animations and specialized styling

### **Development Tools**

- **Node.js & npm**: Package management and build process
- **Tailwind CLI**: For processing and compiling CSS
- **Git**: Version control

## Project Structure

```
portfolio/
├── dist/                          # Production Build (Deployed Files)
│   ├── index.html                 # Homepage with hero section
│   ├── about.html                 # About me and skills
│   ├── resume.html                # Professional experience
│   ├── portfolio.html             # Project showcase
│   ├── contact.html               # Contact form and info
│   ├── output.css                 # Compiled Tailwind CSS (28KB)
│   ├── script.js                  # Typewriter animation
│   └── img/                       # Images and icons
│       ├── me.jpg                 # Profile photo
│       ├── github.png             # Social icons
│       ├── linkedin.png           # Social icons
│       └── ...                    # Additional assets
│
├── src/                           # Source Files (Development)
│   └── input.css                  # Tailwind directives & custom CSS
│
├── .gitignore                     # Git exclusion rules
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation
└── LICENSE                        # MIT License
```

## Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm (v7 or higher)

### **Local Development**

1. **Clone the repository**

   ```bash
   git clone https://github.com/khosrow-hub/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the CSS**

   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css
   ```

4. **Open in browser**
   - Open `dist/index.html` directly in your browser
   - Or use a local server:
     ```bash
     npx serve dist
     ```

### **Build Process**

The portfolio uses Tailwind CSS v4 with a custom build process:

```bash
# Development (watch mode)
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch

# Production build (minified)
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --minify
```

## Pages Overview

### **1. Home (`index.html`)**

- Hero section with typewriter animation
- Introduction and call-to-action
- Social media links
- Navigation to all sections

### **2. About (`about.html`)**

- Personal introduction and background
- Skills matrix with progress indicators
- Timeline of development journey
- Personal interests and design philosophy

### **3. Resume (`resume.html`)**

- Professional experience timeline
- Education background
- Technical skills categorization
- Downloadable resume option

### **4. Portfolio (`portfolio.html`)**

- Project showcase with live demos
- Technology tags for each project
- GitHub repository links
- Project descriptions and features

### **5. Contact (`contact.html`)**

- Contact form with validation
- Direct contact information
- Social media links
- Location and availability

## Design System

### **Colors**

- **Primary**: `#1387c1` (Blue accents)
- **Background**: `#101a20` (Dark blue-black)
- **Surface**: `#142129` (Card backgrounds)
- **Text**: `#ffffff` (White) / `#d1d5db` (Gray-300)

### **Typography**

- **Primary Font**: Noto Sans (Google Fonts)
- **Font Weights**: 300 (Light), 400 (Regular), 600 (Semi-bold), 700 (Bold)
- **Line Heights**: Optimized for readability

### **Animations**

- **Fade In**: Elements fade in on page load
- **Typewriter**: Text typing/deleting effect
- **Hover Effects**: Scale, shadow, and color transitions
- **Custom Keyframes**: `up`, `codes`, `ideas`, `design` animations

## Technical Implementation

### **Tailwind Configuration**

- Uses Tailwind CSS v4 with JIT mode
- Custom color palette defined in `input.css`
- Responsive breakpoints for mobile-first design
- Custom utilities for project-specific needs

### **Performance Optimizations**

- **CSS Minification**: Production CSS is minified
- **Image Optimization**: Properly sized and formatted images
- **Lazy Loading**: Images load on demand
- **Efficient Selectors**: Tailwind-generated utility classes

### **Accessibility Features**

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast ratios

## Deployment

### **GitHub Pages**

1. Push code to `main` branch
2. Enable GitHub Pages in repository settings
3. Set source to `/dist` folder
4. Site available at: `https://khosrow-hub.github.io/portfolio/`

### **Alternative Hosting**

- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **Cloudflare Pages**: Similar to Vercel with global CDN

## 📱 Responsive Breakpoints

| Device  | Breakpoint     | Layout Adaptation                     |
| ------- | -------------- | ------------------------------------- |
| Mobile  | < 640px        | Stacked columns, larger touch targets |
| Tablet  | 640px - 1024px | Adaptive grids, adjusted spacing      |
| Desktop | > 1024px       | Full multi-column layouts             |

## Future Enhancements

### **Planned Features**

- [ ] Dark/Light mode toggle
- [ ] Blog integration for technical articles
- [ ] Project filtering by technology
- [ ] Internationalization (i18n) support
- [ ] Performance analytics dashboard
- [ ] CMS integration for easy content updates

### **Technical Improvements**

- [ ] Convert to React/Next.js for enhanced interactivity
- [ ] Implement GraphQL for data management
- [ ] Add unit and integration tests
- [ ] Set up CI/CD pipeline
- [ ] Add PWA capabilities

## Contributing

While this is a personal portfolio project, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add some improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Khosrow Samadi**

- GitHub: [@Khosrow-hub](https://github.com/Khosrow-hub)
- LinkedIn: [Khosrow Samadi](https://www.linkedin.com/in/khosrow-samadi-792017284/)
- Twitter: [@KhosrowSamadi](https://x.com/KhosrowSamadi)
- Email: Khusrawsamadi09@gmail.com

## 🙏 Acknowledgments

- Icons from [Flaticon](https://www.flaticon.com/)
- Design inspiration from modern portfolio trends
- Tailwind CSS team for the amazing framework
- Google Fonts for typography

---

**Built with care and attention to detail.** This portfolio represents my journey in web development and commitment to creating quality digital experiences.

