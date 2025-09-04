import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle, X, Bot, User, Sparkles, ChevronUp } from 'lucide-react';
import { API_BASE_URL } from '@/config/api';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Bharathi's AI assistant. Ask me anything about Bharathi's skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioContext, setPortfolioContext] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Extract portfolio content when component mounts
  useEffect(() => {
    const extractPortfolioContent = () => {
      const sections = [
        'hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'
      ];
      
      let content = '';
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          content += section.textContent + ' ';
        }
      });
      
      // Also get content from specific elements
      const projectCards = document.querySelectorAll('[data-project]');
      projectCards.forEach(card => {
        content += card.textContent + ' ';
      });
      
      return content.trim();
    };

    // Wait for content to load
    setTimeout(() => {
      const content = extractPortfolioContent();
      setPortfolioContext(content);
    }, 1000);
  }, []);

  // Show notification after 3 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowNotification(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          context: portfolioContext,
          conversationHistory: messages.slice(-5).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or check my portfolio directly for information.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleChatToggle = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
    setShowNotification(false);
    setHasInteracted(true);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Toggle Button with Enhanced Visibility */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Notification Bubble */}
        {showNotification && !isOpen && (
          <div className="absolute bottom-20 right-0 mb-2 animate-bounce">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="text-sm font-medium">Ask me anything about Bharathi!</span>
              </div>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-primary"></div>
            </div>
          </div>
        )}
        
        {/* Minimized Chat Bubble */}
        {isMinimized && (
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <Card className="w-80 shadow-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                                         <div className="bg-muted rounded-2xl px-4 py-2 mb-3">
                       <p className="text-sm text-foreground">
                         Hi! I'm Bharathi's AI assistant. Ask me anything about Bharathi's skills, projects, or experience!
                       </p>
                       <p className="text-xs opacity-70 mt-1">
                         {formatTime(new Date())}
                       </p>
                     </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Click to start chatting</span>
                      <Button
                        onClick={handleChatToggle}
                        size="sm"
                        className="h-8 px-3 bg-primary hover:bg-primary/90"
                      >
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Main Chat Button (only when not minimized) */}
        {!isMinimized && (
          <Button
            onClick={handleChatToggle}
            className={`h-16 w-16 rounded-full shadow-2xl transition-all duration-500 ${
              isOpen 
                ? 'bg-destructive hover:bg-destructive/90' 
                : 'bg-primary hover:bg-primary/90 animate-pulse hover:animate-none'
            } relative overflow-hidden group`}
            size="icon"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Icon */}
            <div className="relative z-10">
              {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
            </div>
            
            {/* Pulse ring effect */}
            {!isOpen && !hasInteracted && (
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping"></div>
            )}
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-6 z-40 w-96 h-[500px] shadow-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-300">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-primary/5">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="h-5 w-5 text-primary" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                                 <h3 className="font-semibold text-foreground">Bharathi's AI Assistant</h3>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMinimize}
                  className="h-8 w-8"
                >
                  <ChevronUp className="h-4 w-4 rotate-180" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Bharathi's skills, projects, or experience..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !inputValue.trim()}
                  className="h-10 w-10"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CustomChatbot;
  