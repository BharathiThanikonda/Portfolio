// Gemini AI configuration for frontend-only setup
export const GEMINI_CONFIG = {
  model: "gemini-2.5-flash",
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
};

// App configuration
export const APP_CONFIG = {
  name: "Bharathi's Portfolio",
  version: "2.0.0",
  description: "Frontend-only portfolio with AI chatbot",
};
