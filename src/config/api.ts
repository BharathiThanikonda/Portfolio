// Create a config file for API URLs
const API_CONFIG = {
  development: 'http://localhost:3001',
  production: 'https://web-production-85af4f.up.railway.app' // Replace with your actual Railway URL
};

const API_BASE_URL = import.meta.env.PROD ? API_CONFIG.production : API_CONFIG.development;

export { API_BASE_URL };
