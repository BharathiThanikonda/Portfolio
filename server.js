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
  'https://bharathithanikonda.dev', // Replace with your actual domain
  'https://www.bharathithanikonda.dev',
  'https://bharathithanikondaportfolio.netlify.app' // Netlify URL as fallback
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

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { message, context, conversationHistory } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'Gemini API key not configured' 
      });
    }

    // Create the model - using the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build the conversation context
    let fullContext = `You are Bharathi's AI assistant for their portfolio website. You should be helpful, professional, and knowledgeable about Bharathi's background, skills, projects, and experience.

Portfolio Context:
${context}

Instructions:
- Answer questions based on the portfolio context provided above
- Be conversational and friendly but professional
- If information is not available in the context, say so politely
- Keep responses concise but informative
- Always refer to Bharathi in the third person (he/she/they)
- If asked about contact information, direct them to the contact section of the portfolio

Current conversation history:
`;

    // Add conversation history
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg) => {
        fullContext += `${msg.role}: ${msg.content}\n`;
      });
    }

    fullContext += `\nUser: ${message}\nAssistant:`;

    // Generate response
    const result = await model.generateContent(fullContext);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
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

