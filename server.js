import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration for custom domain
const allowedOrigins = [
  'http://localhost:8080', // Development
  'http://localhost:3000', // Alternative dev port
  'https://bharathithanikonda.dev', // Your custom domain
  'https://www.bharathithanikonda.dev', // With www
  'https://bharathithanikondaportfolio.netlify.app', // Netlify URL as fallback
  'https://web-production-85af4f.up.railway.app' // Railway URL (optional)
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Simple rate limiting
const requestCounts = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // 10 requests per minute

const rateLimitMiddleware = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  if (!requestCounts.has(clientIP)) {
    requestCounts.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
  } else {
    const clientData = requestCounts.get(clientIP);
    if (now > clientData.resetTime) {
      clientData.count = 1;
      clientData.resetTime = now + RATE_LIMIT_WINDOW;
    } else {
      clientData.count++;
    }
    
    if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({
        error: 'Rate limit exceeded. Please try again in a few minutes.',
        retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
      });
    }
  }
  
  next();
};

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', rateLimitMiddleware, async (req, res) => {
  try {
    const { message, context, conversationHistory } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Gemini API key not configured' 
      });
    }

    // Validate API key format (basic check)
    if (!process.env.GEMINI_API_KEY.startsWith('AIza')) {
      console.error('Invalid API key format');
      return res.status(401).json({ 
        error: 'Invalid API key format' 
      });
    }

    console.log('API Key found, attempting to create model...');

    // Create the model - using the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build the conversation context
    let fullContext = `You are Bharathi's AI assistant for their portfolio website. You should be helpful, professional, and knowledgeable about Bharathi's background, skills, projects, and experience.

Portfolio Context:
${context}

Bharathi's Contact Information:
- Email: bharathi.thanikonda@gmail.com
- LinkedIn: https://www.linkedin.com/in/bharathi-thanikonda/
- GitHub: https://github.com/bharathi-thanikonda
- Portfolio Website: https://bharathithanikonda.dev/

Instructions:
- Answer questions based on the portfolio context provided above
- Be conversational and friendly but professional
- If information is not available in the context, say so politely
- Keep responses concise but informative
- Always refer to Bharathi in the third person as "she" (female)
- When asked about contact information, provide the contact details directly in the chat
- For LinkedIn and GitHub, just mention "LinkedIn" and "GitHub" without showing full URLs
- Always include the email address when sharing contact information

Current conversation history:
`;

    // Add conversation history
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg) => {
        fullContext += `${msg.role}: ${msg.content}\n`;
      });
    }

    fullContext += `\nUser: ${message}\nAssistant:`;

    // Generate response with timeout
    const result = await Promise.race([
      model.generateContent(fullContext),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 30000)
      )
    ]);
    
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific error types
    let errorMessage = 'I\'m sorry, I\'m having trouble connecting right now. Please try again later or check my portfolio directly for information.';
    let statusCode = 500;
    
    if (error.message.includes('timeout')) {
      errorMessage = 'Request timed out. Please try again.';
      statusCode = 408;
    } else if (error.message.includes('quota') || error.message.includes('rate limit')) {
      errorMessage = 'API rate limit exceeded. Please try again in a few minutes.';
      statusCode = 429;
    } else if (error.message.includes('API key') || error.message.includes('authentication') || error.message.includes('401')) {
      errorMessage = 'API authentication error. Please check your Gemini API key.';
      statusCode = 401;
    } else if (error.message.includes('model') || error.message.includes('not found') || error.message.includes('400')) {
      errorMessage = 'Model configuration error. Please contact support.';
      statusCode = 400;
    } else if (error.message.includes('quota') || error.message.includes('billing')) {
      errorMessage = 'API quota exceeded. Please check your Gemini API billing.';
      statusCode = 429;
    }
    
    res.status(statusCode).json({ 
      error: errorMessage,
      details: error.message 
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Chat API is running' });
});

app.listen(PORT, () => {
  console.log(`Chat API server running on port ${PORT}`);
});

