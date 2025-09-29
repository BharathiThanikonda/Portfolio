# Bharathi's Portfolio - Frontend Only

A modern, responsive portfolio website with AI-powered chatbot integration using Google's Gemini API. This is now a completely frontend-only application that can be deployed on any static hosting platform.

## 🌐 Live Demo

**Visit my portfolio:** [https://bharathithanikonda.dev/](https://bharathithanikonda.dev/)

## � Features

- **Frontend-Only Architecture**: No backend server required
- **AI Chatbot**: Powered by Google Gemini API (direct client integration)
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Fast Performance**: Optimized build with Vite
- **Easy Deployment**: Deploy anywhere (Vercel, Netlify, GitHub Pages, etc.)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **AI Integration**: Google Generative AI (Gemini) - Direct API calls
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind

## 📋 Prerequisites

- Node.js 18+
- npm or bun
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## ⚡ Quick Start

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd Portfolio
   npm install
   ```

2. **Setup environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Gemini API key:

   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:8080`

## 🔑 Getting Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the key and add it to your `.env` file
4. **Important**: Never commit your API key to version control

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and preview (for deployment)

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── CustomChatbot.tsx  # AI chatbot (frontend-only)
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About section
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Skills.tsx      # Skills and technologies
│   │   └── ...
│   ├── config/             # App configuration
│   ├── contexts/           # React contexts (Theme)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── pages/              # Page components
├── public/                 # Static assets
├── .env                    # Environment variables (create from .env.example)
└── package.json
```

## 🤖 Chatbot Features

- **Frontend-Only**: Direct Gemini API integration, no backend required
- **Context-Aware**: Knows about Bharathi's skills, projects, and experience
- **Interactive UI**: Modern chat interface with animations
- **Smart Responses**: Powered by Google Gemini AI
- **Contact Integration**: Can provide contact information with clickable links
- **Error Handling**: Graceful error messages for API issues
- **Client-Side Management**: All processing happens in the browser

## � Customization

### Update Portfolio Content

- Edit components in `src/components/`
- Update personal information in the components
- Replace images in `public/` and `src/assets/`

### Modify AI Assistant

- Edit the context in `CustomChatbot.tsx`
- Customize the AI's personality and knowledge
- Update contact information and links in the chatbot context

### Theme Customization

- Modify `tailwind.config.ts` for colors and styling
- Edit CSS custom properties in `src/index.css`
- Update component styles as needed

## 🚀 Deployment Options

### Vercel (Recommended)

```bash
npx vercel
```

### Netlify

1. Build: `npm run build`
2. Deploy: Upload `dist` folder or connect GitHub repo

### GitHub Pages

1. Build: `npm run build`
2. Deploy: Push `dist` folder to `gh-pages` branch

### Environment Variables for Deployment

Make sure to add `VITE_GEMINI_API_KEY` in your deployment platform's environment variables.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized layouts for all screen sizes
- Touch-friendly chatbot interface

## � Security

- **API Key Protection**: Uses environment variables (client-side limitation noted)
- **Error Handling**: No sensitive information exposed in error messages
- **HTTPS Required**: Use HTTPS in production for secure API calls
- **Rate Limiting**: Built-in request throttling in chatbot

## 🐛 Troubleshooting

### Chatbot Not Working

1. Check if `VITE_GEMINI_API_KEY` is set correctly in `.env`
2. Ensure the API key is valid and has Gemini API access
3. Check browser console for errors
4. Verify internet connection for API calls

### Build Errors

1. Clear cache: `rm -rf node_modules dist && npm install`
2. Check TypeScript errors: Look for compilation issues
3. Update dependencies: `npm update`

### Deployment Issues

1. Ensure `VITE_GEMINI_API_KEY` is set in deployment platform
2. Check build output in `dist/` folder
3. Verify static hosting configuration

## 🚀 Performance Improvements

- **Bundle Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components loaded as needed
- **Optimized Assets**: Images and icons optimized
- **Modern Build**: Uses latest React 18 features

## 📧 Contact

- **Email**: bharathi.thanikonda@gmail.com
- **LinkedIn**: [bharathi-thanikonda](https://www.linkedin.com/in/bharathi-thanikonda/)
- **GitHub**: [BharathiThanikonda](https://github.com/BharathiThanikonda)

---

Built with ❤️ using React, TypeScript, and Google Gemini AI

---
