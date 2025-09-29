import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, Send, User as UserIcon } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Bharathi's AI assistant. Ask me anything!",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ai, setAi] = useState<GoogleGenerativeAI | null>(null);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey) {
      setAi(new GoogleGenerativeAI(apiKey));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!ai) {
      setError(
        "Gemini API key is missing or invalid. Please set VITE_GEMINI_API_KEY."
      );
      return;
    }
    setError("");
    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };
    // Include the new user message immediately for history
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Static summary of skills for context
      const portfolioContext = `Programming Languages: Python (Expert), Java (Advanced), JavaScript (Advanced), TypeScript (Advanced), C++ (Intermediate)
AI & Machine Learning: PyTorch (Advanced), TensorFlow (Advanced), LangChain (Advanced), OpenAI (Advanced), Ollama (Intermediate)
Web Development: HTML (Advanced), CSS (Advanced), React (Advanced), FastAPI (Advanced), Node.js (Advanced), Express.js (Advanced), Flask (Intermediate)
Database Technologies: PostgreSQL (Advanced), MongoDB (Advanced), MySQL (Intermediate), SQLite (Intermediate), MSSQL (Intermediate), ChromaDB (Intermediate)
Cloud & DevOps: AWS (Advanced), Docker (Intermediate), Git (Expert), GitHub (Expert), CI/CD (Intermediate)
Data Analysis: Pandas (Advanced), NumPy (Advanced), Matplotlib (Advanced), Seaborn (Intermediate), Power BI (Intermediate), QuickSight (Intermediate)`;
      // Static summary of professional experience for context
      const experienceContext = `AI Engineer (Graduate Assistant) at Texas Tech University (May 2025 - Present): Developed AI-powered applications using FastAPI, integrated with LangChain, pgvector, and Hugging Face models to build domain-specific chatbots; Senior Software Engineer at HCL Software (Aug 2023 - July 2024): Developed and implemented Python scripts to integrate BigFix with ServiceNow, enhancing bidirectional data flow and automating workflows. Loaded and validated data from BigFix into MSSQL for advanced querying and analysis, enabling comprehensive vulnerability insights. Created ETL pipelines to ingest data from Tenable.io, Tenable.sc, and Qualys to generate remediation fixlets. Performed end-to-end testing using PyTest and unittest for functional, integration, and regression testing; System Development Engineer Intern at Amazon (Jan 2023 - June 2023): Automated S3 report uploads using Perl and analyzed CloudWatch and Lambda logs with JavaScript to generate insights. Designed SQL queries for Amazon RDS and Redshift to power AWS QuickSight dashboards. Migrated services using Java for improved security and scalability; Data Science Intern at Knowledge Solutions India (June 2021 - July 2021): Implemented a logistic regression model for heart disease prediction with data cleaning, normalization, and feature selection, achieving 95% accuracy.`;
      // Static summary of resume highlights for context
      const resumeContext = `Education:
- M.S in Computer Science, Texas Tech University

Certifications:
- AWS Academy Graduate - AWS Academy Cloud Foundations (2022)
- AWS Academy Graduate - AWS Academy Cloud Architecting (2022)
- Google Data Analytics Professional Certificate (2025)

Professional Summary:
Skilled AI Engineer and Software Developer with expertise in building AI-powered applications, full-stack web development, and data analysis.`;
      // Static summary of featured projects for context
      const projectContext = `Weather App: Interactive weather application with real-time data; Automated Review Assistant: AI-powered content analysis system; MovieDux: Movie discovery app built with React; Quantitative Trading AI: Trading system using machine learning; Chat App: Real-time chat application with WebSocket support.`;
      const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
        },
      });
      // Use last 5 messages for context, including the newly added user message
      const history = updatedMessages
        .slice(-5)
        .map((m) => `${m.sender === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");
      const prompt = `You are Bharathi's AI assistant for her portfolio website. You have comprehensive knowledge about her entire portfolio, including her resume, skills, professional experience, and projects. Use the following contexts where appropriate to answer questions accurately.

Skills Context:
${portfolioContext}

Experience Context:
${experienceContext}

Resume Context:
${resumeContext}

Projects Context:
${projectContext}

Bharathi's Contact Information:
- Email: bharathithanikonda173@gmail.com
- LinkedIn: https://www.linkedin.com/in/bharathi-thanikonda/
- GitHub: https://github.com/BharathiThanikonda
- Portfolio Website: https://bharathithanikonda.dev/

Instructions:
- Answer questions based on the portfolio context provided above.
- Thoroughly search through her portfolio, GitHub, LinkedIn, and projects to provide all relevant details.
- Be conversational, friendly, and professional.
- If information is not available, say so politely.
- Keep responses concise but informative.
- Always refer to Bharathi in the third person as "she".
- When asked for contact details, provide the email address, the LinkedIn URL, and the GitHub URL.
- If the user asks anything not related to Bharathi's portfolio, respond: "I'm sorry, I can only answer questions about Bharathi's portfolio."
- When the user asks about a specific professional experience, provide a clear and concise summary including the role title, company, location, period, description of responsibilities, and key technologies used, formatted in a readable way.
- When asked about Bharathi's professional experience in general, list each role she held (with title, company, location), the time period for each, and a concise description of her responsibilities and key technologies used, matching exactly the sections from the portfolio.
- Additionally, if the user asks about a particular role by name, provide a detailed breakdown of that specific experience with all relevant details.

Current conversation history:
${history}
User: ${input}
Assistant:`;
      const result = await model.generateContent(prompt);
      const response = await result.response.text();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: response,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (err: unknown) {
      // Try to provide a specific, actionable error message
      type ErrShape = Partial<{
        status: number;
        code: string;
        message: string;
        response: { status?: number; data?: { error?: { status?: string } } };
        toString: () => string;
      }>;
      const e = err as ErrShape;
      let friendly = "Sorry, there was an error. Please try again.";
      const rawMsg: string | undefined = e?.message ?? e?.toString?.();
      const status: number | undefined = e?.status ?? e?.response?.status;
      const code: string | undefined =
        e?.code ?? e?.response?.data?.error?.status;

      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        friendly =
          "Gemini API key is missing. Set VITE_GEMINI_API_KEY in your .env and restart the server.";
      } else if (
        status === 401 ||
        /api key|invalid key|unauthorized/i.test(rawMsg || "")
      ) {
        friendly =
          "Your Gemini API key seems invalid or unauthorized. Rotate the key in Google AI Studio and update .env.";
      } else if (
        status === 403 ||
        /permission|access denied|quota|billing/i.test(rawMsg || "")
      ) {
        friendly =
          "Access denied or quota/billing issue with Gemini API. Check AI Studio permissions, quotas, and key settings.";
      } else if (
        status === 429 ||
        /rate limit|quota exceeded/i.test(rawMsg || "")
      ) {
        friendly =
          "You have hit a rate limit. Please wait a bit and try again.";
      } else if (status === 400 && /safety|blocked/i.test(rawMsg || "")) {
        friendly =
          "The content was blocked by safety filters. Try rephrasing your question.";
      }

      console.error("Gemini API error:", { status, code, rawMsg, err });
      setError(friendly);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `🔧 ${friendly}`,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full shadow-xl"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-6 z-40 w-96 max-w-full h-[500px] bg-white dark:bg-gray-900 border rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Bharathi's AI Assistant</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-end gap-2 max-w-[80%] ${
                    msg.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {msg.sender === "user" ? (
                      <UserIcon className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary" />
                    )}
                  </span>
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-xs text-gray-400 mb-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-gray-400">
                <Bot className="h-4 w-4 animate-bounce" /> Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <div className="text-red-500 text-xs px-4 pb-1">{error}</div>
          )}

          <div className="p-4 border-t flex gap-2 bg-background">
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                // debug: ensure value updates
                // console.debug('chat input:', e.target.value);
              }}
              onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
              placeholder="Ask about Bharathi..."
              className="flex-1 text-gray-900 bg-white placeholder-gray-500 dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              autoFocus
            />
            <Button onClick={sendMessage} disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomChatbot;
