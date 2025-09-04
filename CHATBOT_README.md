# Portfolio Chatbot with Gemini AI

This project includes a custom chatbot for your portfolio that uses Google's Gemini AI to learn from your website content and provide intelligent responses.

## Features

- 🤖 **AI-Powered**: Uses Google Gemini AI for intelligent responses
- 📚 **Context-Aware**: Learns from your portfolio content automatically
- 💬 **Conversational**: Maintains conversation history for better context
- 🎨 **Beautiful UI**: Modern chat interface with animations
- 📱 **Responsive**: Works on all devices
- 🔒 **Secure**: API calls are proxied through your backend

## Setup Instructions

### 1. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key

### 2. Backend Setup

1. Install backend dependencies:
```bash
npm install express cors @google/generative-ai dotenv
npm install -D nodemon
```

2. Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

3. Start the backend server:
```bash
node server.js
```

### 3. Frontend Setup

1. Install frontend dependencies (if not already installed):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:8080` and automatically proxy API calls to the backend on `http://localhost:3001`.

## How It Works

### Content Extraction
The chatbot automatically extracts content from your portfolio sections:
- Hero section
- About section
- Experience section
- Projects section
- Skills section
- Certifications section
- Contact section

### AI Processing
1. User asks a question
2. Question + portfolio context + conversation history is sent to Gemini AI
3. AI generates a contextual response based on your portfolio content
4. Response is displayed in the chat interface

### Conversation Memory
The chatbot maintains conversation history (last 5 messages) to provide more contextual responses.

## Customization

### Styling
The chatbot uses your existing design system (shadcn/ui components) and will automatically match your portfolio's theme.

### Behavior
You can modify the AI instructions in `server.js` to change how the chatbot responds:
```javascript
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
`;
```

### Position
You can change the chatbot position by modifying the CSS classes in `CustomChatbot.tsx`:
```tsx
<Button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
  size="icon"
>
```

## Deployment

### Backend Deployment
Deploy the backend to platforms like:
- Vercel (Serverless Functions)
- Railway
- Heroku
- DigitalOcean

### Frontend Deployment
Deploy the frontend to platforms like:
- Vercel
- Netlify
- GitHub Pages

Remember to update the API endpoint URL in production.

## Cost

- **Gemini AI**: ~$0.50-2.00 per 1M characters (very cost-effective)
- **Hosting**: Free tier available on most platforms

## Troubleshooting

1. **API Key Error**: Make sure your Gemini API key is correctly set in the `.env` file
2. **CORS Error**: The backend includes CORS configuration, but ensure your frontend URL is allowed
3. **Content Not Loading**: The chatbot waits 1 second for content to load, increase the timeout if needed
4. **Slow Responses**: This is normal for AI APIs, consider adding a loading indicator

## Security Notes

- Never expose your API key in client-side code
- Always use environment variables for sensitive data
- Consider rate limiting for production use
- Monitor API usage to control costs
