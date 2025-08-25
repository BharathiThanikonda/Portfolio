# Bharathi Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing skills in AI Engineering and Software Development.


## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Animations**: Custom CSS animations and scroll effects
- **Icons**: Lucide React icons
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Project showcase with filters
│   ├── Skills.tsx      # Skills and technologies
│   ├── Certifications.tsx # Certifications
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── contexts/           # React contexts (Theme)
├── hooks/              # Custom React hooks
├── pages/              # Page components
└── assets/             # Images and static files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Themes
- Edit `src/index.css` for color variables and theme customization
- Modify `tailwind.config.ts` for additional Tailwind configurations

### Content Updates
- Update component files to modify text content
- Replace images in `src/assets/` folder
- Modify project data in `Projects.tsx`

### Styling
- Use Tailwind CSS classes for styling
- Custom CSS animations in `src/index.css`
- Component-specific styles in individual component files

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments











---


