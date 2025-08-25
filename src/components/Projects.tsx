import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
}

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch repositories from GitHub API
        const response = await fetch('https://api.github.com/users/BharathiThanikonda/repos?sort=updated&per_page=100&type=all');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter out forked repositories and portfolio project
        const filteredRepos = data
          .filter((repo: any) => {
            return !repo.fork && 
                   repo.name.toLowerCase() !== 'portfolio' && 
                   repo.name.toLowerCase() !== 'bharathi_portfolio' &&
                   (repo.description || repo.stargazers_count > 0 || repo.language);
          })
          .sort((a: any, b: any) => {
            // Sort by stars first, then by last updated
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
        
        if (filteredRepos.length === 0) {
          // Fallback to sample projects if no repos found
          setRepos([
            {
              id: 1,
              name: "Weather App",
              description: "Interactive weather application with real-time data and responsive design",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "JavaScript",
              stargazers_count: 8,
              forks_count: 3,
              topics: ["html", "css", "nodejs", "javascript", "weather"],
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-12-01T00:00:00Z"
            },
            {
              id: 2,
              name: "Automated Review Assistant",
              description: "AI-powered review system using machine learning for automated content analysis",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "Python",
              stargazers_count: 12,
              forks_count: 5,
              topics: ["python", "tensorflow", "pandas", "numpy", "pytorch", "ai", "ml"],
              created_at: "2024-02-01T00:00:00Z",
              updated_at: "2024-11-01T00:00:00Z"
            },
            {
              id: 3,
              name: "MovieDux",
              description: "Modern movie discovery and management application with React",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "JavaScript",
              stargazers_count: 10,
              forks_count: 4,
              topics: ["reactjs", "javascript", "html", "css", "api", "frontend", "movies"],
              created_at: "2024-03-01T00:00:00Z",
              updated_at: "2024-10-01T00:00:00Z"
            },
            {
              id: 4,
              name: "Quantitative Trading AI",
              description: "Advanced AI-powered trading system using machine learning algorithms",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "Python",
              stargazers_count: 15,
              forks_count: 7,
              topics: ["tensorflow", "keras", "pandas", "numpy", "python", "matplotlib", "ai"],
              created_at: "2024-04-01T00:00:00Z",
              updated_at: "2024-09-01T00:00:00Z"
            },
            {
              id: 5,
              name: "Chat App",
              description: "Real-time chat application with WebSocket support and modern UI",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "JavaScript",
              stargazers_count: 11,
              forks_count: 4,
              topics: ["nodejs", "javascript", "html", "css", "websocket", "socketio"],
              created_at: "2024-05-01T00:00:00Z",
              updated_at: "2024-08-01T00:00:00Z"
            },
            {
              id: 6,
              name: "Twitter Sentiment Analysis",
              description: "AI-powered sentiment analysis tool for Twitter data using machine learning",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "Python",
              stargazers_count: 9,
              forks_count: 4,
              topics: ["python", "tensorflow", "pandas", "numpy", "matplotlib", "ai", "ml"],
              created_at: "2024-06-01T00:00:00Z",
              updated_at: "2024-07-01T00:00:00Z"
            },
            {
              id: 7,
              name: "AWS Data Pipeline",
              description: "Cloud-based data processing pipeline using AWS services for automated data workflows",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "JavaScript",
              stargazers_count: 8,
              forks_count: 3,
              topics: ["aws", "pipeline", "data", "cloud"],
              created_at: "2024-07-01T00:00:00Z",
              updated_at: "2024-06-01T00:00:00Z"
            },
            {
              id: 8,
              name: "Task Manager App",
              description: "Full-featured task management application with email notifications",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "JavaScript",
              stargazers_count: 7,
              forks_count: 3,
              topics: ["nodejs", "mongodb", "html", "css", "mailgrid"],
              created_at: "2024-08-01T00:00:00Z",
              updated_at: "2024-05-01T00:00:00Z"
            }
          ]);
        } else {
          setRepos(filteredRepos);
        }
        
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch projects');
        
        // Fallback to sample projects if API fails
        setRepos([
          {
            id: 1,
            name: "Weather App",
            description: "Interactive weather application with real-time data and responsive design",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 8,
            forks_count: 3,
            topics: ["html", "css", "nodejs", "javascript", "weather"],
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-12-01T00:00:00Z"
          },
          {
            id: 2,
            name: "Automated Review Assistant",
            description: "AI-powered review system using machine learning for automated content analysis",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "Python",
            stargazers_count: 12,
            forks_count: 5,
            topics: ["python", "tensorflow", "pandas", "numpy", "pytorch", "ai", "ml"],
            created_at: "2024-02-01T00:00:00Z",
            updated_at: "2024-11-01T00:00:00Z"
          },
          {
            id: 3,
            name: "MovieDux",
            description: "Modern movie discovery and management application with React",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 10,
            forks_count: 4,
            topics: ["reactjs", "javascript", "html", "css", "api", "frontend", "movies"],
            created_at: "2024-03-01T00:00:00Z",
            updated_at: "2024-10-01T00:00:00Z"
          },
          {
            id: 4,
            name: "Quantitative Trading AI",
            description: "Advanced AI-powered trading system using machine learning algorithms",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "Python",
            stargazers_count: 15,
            forks_count: 7,
            topics: ["tensorflow", "keras", "pandas", "numpy", "python", "matplotlib", "ai"],
            created_at: "2024-04-01T00:00:00Z",
            updated_at: "2024-09-01T00:00:00Z"
          },
          {
            id: 5,
            name: "Chat App",
            description: "Real-time chat application with WebSocket support and modern UI",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 11,
            forks_count: 4,
            topics: ["nodejs", "javascript", "html", "css", "websocket", "socketio"],
            created_at: "2024-05-01T00:00:00Z",
            updated_at: "2024-08-01T00:00:00Z"
          },
          {
            id: 6,
            name: "Twitter Sentiment Analysis",
            description: "AI-powered sentiment analysis tool for Twitter data using machine learning",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "Python",
            stargazers_count: 9,
            forks_count: 4,
            topics: ["python", "tensorflow", "pandas", "numpy", "matplotlib", "ai", "ml"],
            created_at: "2024-06-01T00:00:00Z",
            updated_at: "2024-07-01T00:00:00Z"
          },
          {
            id: 7,
            name: "AWS Data Pipeline",
            description: "Cloud-based data processing pipeline using AWS services for automated data workflows",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 8,
            forks_count: 3,
            topics: ["aws", "pipeline", "data", "cloud"],
            created_at: "2024-07-01T00:00:00Z",
            updated_at: "2024-06-01T00:00:00Z"
          },
          {
            id: 8,
            name: "Task Manager App",
            description: "Full-featured task management application with email notifications",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 7,
            forks_count: 3,
            topics: ["nodejs", "mongodb", "html", "css", "mailgrid"],
            created_at: "2024-08-01T00:00:00Z",
            updated_at: "2024-05-01T00:00:00Z"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Simple technology extraction - just show all topics directly
  const extractTechnologies = (repo: GitHubRepo) => {
    // For now, just return the language as a placeholder
    // You will provide the actual technologies manually
    return repo.language ? [repo.language] : [];
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'Java': 'bg-red-500',
      'C++': 'bg-blue-700',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'React': 'bg-cyan-500',
      'React.js': 'bg-cyan-500',
      'Node.js': 'bg-green-500',
      'FastAPI': 'bg-teal-500',
      'PostgreSQL': 'bg-indigo-500',
      'MongoDB': 'bg-green-600',
      'AWS': 'bg-orange-600',
      'Docker': 'bg-blue-500',
      'AI/ML': 'bg-purple-600',
      'Machine Learning': 'bg-pink-500',
      'Deep Learning': 'bg-red-600',
      'NLP': 'bg-green-700',
      'Computer Vision': 'bg-blue-800',
      'LangChain': 'bg-yellow-600',
      'OpenAI API': 'bg-green-800',
      'PyTorch': 'bg-red-700',
      'TensorFlow': 'bg-orange-700',
      'OpenCV': 'bg-blue-900',
      'Pandas': 'bg-blue-400',
      'NumPy': 'bg-green-500',
      'Matplotlib': 'bg-blue-300',
      'Seaborn': 'bg-purple-400',
      'Jupyter': 'bg-orange-400',
      'Google Colab': 'bg-yellow-400',
      'Keras': 'bg-red-600',
      'MCP': 'bg-purple-700',
      'MailGrid': 'bg-green-700',
      'WebSocket': 'bg-blue-600',
      'Socket.IO': 'bg-indigo-600',
      'Weather API': 'bg-sky-500',
      'Movie API': 'bg-pink-500',
      'Trading': 'bg-emerald-600',
      'Automation': 'bg-violet-600',
      'AI Agent': 'bg-rose-600',
      'Hotel Management': 'bg-amber-600',
      'Booking System': 'bg-teal-600',
      'Real-time Chat': 'bg-lime-600',
      'Task Management': 'bg-orange-600',
      'Management System': 'bg-slate-600'
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <section id="projects" className="py-20 bg-surface-variant relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text animate-heading-glow">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A showcase of my latest work and contributions to the developer community
            </p>
            {error && (
              <p className="text-red-500 mt-2 text-sm">
                Note: {error} - Showing sample projects
              </p>
            )}
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-card rounded-2xl p-6 h-64 border border-border/50">
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {repos.map((repo, index) => {
                 return (
                  <Card 
                    key={`${repo.id}-${repo.name}`}
                    className="glass rounded-2xl border-primary/20 shadow-medium hover-lift group h-full animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                                         <CardHeader className="pb-4">
                                               <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors line-clamp-2">
                              {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </CardTitle>
                          </div>
                          
                                                     {/* Project Category - Top Right Corner */}
                           {(repo.name === "MovieDux" || repo.name === "moviedux" || repo.name === "Movie-Dux" || repo.name === "MovieDux APP" || repo.name === "moviedux-app") && (
                             <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-xs font-medium ml-2">
                               Web Development
                             </Badge>
                           )}
                           {(repo.name === "Automated-Review-Assistant" || repo.name === "automated-review-assistant" || repo.name === "Automated Review Assistant") && (
                             <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-xs font-medium ml-2">
                               AI/ML
                             </Badge>
                           )}
                           {(repo.name === "AWS-Data-pipeline-creation" || repo.name === "aws-data-pipeline-creation" || repo.name === "AWS Data Pipeline Creation") && (
                             <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-200 px-3 py-1 text-xs font-medium ml-2">
                               Cloud
                             </Badge>
                           )}
                           {(repo.name === "QuantitativeTradingAI" || repo.name === "quantitative-trading-ai" || repo.name === "Quantitative Trading AI") && (
                             <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-xs font-medium ml-2">
                               AI/ML
                             </Badge>
                           )}
                           {(repo.name === "mcp-ai-agent" || repo.name === "MCP-AI-Agent" || repo.name === "MCP AI Agent") && (
                             <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-xs font-medium ml-2">
                               AI/ML
                             </Badge>
                           )}
                           {(repo.name === "Analysis-of-twittter-sentiments-using-machine-learning-algorithms" || repo.name === "analysis-of-twittter-sentiments-using-machine-learning-algorithms" || repo.name === "Analysis of Twitter Sentiments using Machine Learning Algorithms") && (
                             <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-xs font-medium ml-2">
                               AI/ML
                             </Badge>
                           )}
                           {(repo.name === "Chat App" || repo.name === "Chat-App" || repo.name === "ChatApp") && (
                             <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-xs font-medium ml-2">
                               Web Development
                             </Badge>
                           )}
                           {(repo.name === "Task-manager-app" || repo.name === "task-manager-app" || repo.name === "Task Manager App") && (
                             <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-xs font-medium ml-2">
                               Web Development
                             </Badge>
                           )}
                            {(repo.name === "Weather-App" || repo.name === "weather-app" || repo.name === "Weather App") && (
                             <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-xs font-medium ml-2">
                               Web Development
                             </Badge>
                           )}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-muted-foreground">
                            Updated {formatDate(repo.updated_at)}
                          </span>
                        </div>
                        
                        
                      </CardHeader>
                      
                     <CardContent className="pt-0">
                                              <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                          {repo.description || "A well-crafted project showcasing modern development practices and innovative solutions."}
                        </CardDescription>
                        
                        
                        
                                                                          {/* Technologies Used */}
                         {(repo.name === "MovieDux" || repo.name === "moviedux" || repo.name === "Movie-Dux" || repo.name === "MovieDux APP" || repo.name === "moviedux-app") && (
                           <div className="mb-4">
                             <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                               Technologies Used
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               <Badge variant="secondary" className="bg-cyan-600 text-white border-cyan-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                 ReactJS
                               </Badge>
                               <Badge variant="secondary" className="bg-yellow-600 text-white border-yellow-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                 JavaScript
                               </Badge>
                             </div>
                           </div>
                         )}
                         
                                                   {(repo.name === "Automated-Review-Assistant" || repo.name === "automated-review-assistant" || repo.name === "Automated Review Assistant") && (
                            <div className="mb-4">
                              <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                  Python
                                </Badge>
                                <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                  TensorFlow
                                </Badge>
                                <Badge variant="secondary" className="bg-blue-500 text-white border-blue-600 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                  Pandas
                                </Badge>
                                <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                  NumPy
                                </Badge>
                                <Badge variant="secondary" className="bg-red-600 text-white border-red-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                  PyTorch
                                </Badge>
                              </div>
                            </div>
                          )}
                          
                                                     {(repo.name === "AWS-Data-pipeline-creation" || repo.name === "aws-data-pipeline-creation" || repo.name === "AWS Data Pipeline Creation") && (
                             <div className="mb-4">
                               <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                 Technologies Used
                               </h5>
                               <div className="flex flex-wrap gap-2">
                                 <Badge variant="secondary" className="bg-sky-600 text-white border-sky-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                   Athena
                                 </Badge>
                                 <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                   S3
                                 </Badge>
                                 <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                   Python
                                 </Badge>
                               </div>
                             </div>
                           )}
                           
                                                       {(repo.name === "QuantitativeTradingAI" || repo.name === "quantitative-trading-ai" || repo.name === "Quantitative Trading AI") && (
                              <div className="mb-4">
                                <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                  Technologies Used
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    TensorFlow
                                  </Badge>
                                  <Badge variant="secondary" className="bg-red-600 text-white border-red-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    Keras
                                  </Badge>
                                  <Badge variant="secondary" className="bg-blue-500 text-white border-blue-600 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    Pandas
                                  </Badge>
                                  <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    NumPy
                                  </Badge>
                                  <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    Python
                                  </Badge>
                                  <Badge variant="secondary" className="bg-blue-300 text-white border-blue-400 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    Matplotlib
                                  </Badge>
                                </div>
                              </div>
                            )}
                            
                                                         {(repo.name === "mcp-ai-agent" || repo.name === "MCP-AI-Agent" || repo.name === "MCP AI Agent") && (
                               <div className="mb-4">
                                 <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                   Technologies Used
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                   <Badge variant="secondary" className="bg-purple-700 text-white border-purple-800 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     MCP
                                   </Badge>
                                   <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     Python
                                   </Badge>
                                   <Badge variant="secondary" className="bg-yellow-600 text-white border-yellow-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     LangChain
                                   </Badge>
                                 </div>
                               </div>
                             )}
                             
                             {(repo.name === "Analysis-of-twittter-sentiments-using-machine-learning-algorithms" || repo.name === "analysis-of-twittter-sentiments-using-machine-learning-algorithms" || repo.name === "Analysis of Twitter Sentiments using Machine Learning Algorithms") && (
                               <div className="mb-4">
                                 <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                   Technologies Used
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                   <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     Python
                                   </Badge>
                                   <Badge variant="secondary" className="bg-blue-500 text-white border-blue-600 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     Pandas
                                   </Badge>
                                   <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     NumPy
                                   </Badge>
                                   <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     TensorFlow
                                   </Badge>
                                   <Badge variant="secondary" className="bg-indigo-600 text-white border-indigo-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     TF-IDF
                                   </Badge>
                                   <Badge variant="secondary" className="bg-teal-600 text-white border-teal-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     NLTK
                                   </Badge>
                                   <Badge variant="secondary" className="bg-red-600 text-white border-red-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     PyTorch
                                   </Badge>
                                 </div>
                               </div>
                             )}
                             
                             {(repo.name === "Chat App" || repo.name === "Chat-App" || repo.name === "ChatApp") && (
                               <div className="mb-4">
                                 <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                   Technologies Used
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                   <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     Node.js
                                   </Badge>
                                   <Badge variant="secondary" className="bg-yellow-600 text-white border-yellow-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     JavaScript
                                   </Badge>
                                   <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     HTML
                                   </Badge>
                                   <Badge variant="secondary" className="bg-purple-600 text-white border-purple-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                     CSS
                                   </Badge>
                                   <Badge variant="secondary" className="bg-indigo-600 text-white border-indigo-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    Socket.IO
                                    </Badge>
                                    <Badge variant="secondary" className="bg-slate-600 text-white border-slate-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                    SQL
                                    </Badge>
                                 </div>
                               </div>
                             )}
                             {(repo.name === "Task-manager-app" || repo.name === "task-manager-app" || repo.name === "Task Manager App") && (
                                <div className="mb-4">
                                  <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                    Technologies Used
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      Node.js
                                    </Badge>
                                    <Badge variant="secondary" className="bg-green-700 text-white border-green-800 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      MongoDB
                                    </Badge>
                                    <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      HTML
                                    </Badge>
                                    <Badge variant="secondary" className="bg-purple-600 text-white border-purple-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      CSS
                                    </Badge>
                                    <Badge variant="secondary" className="bg-green-700 text-white border-green-800 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      MailGrid
                                    </Badge>
                                  </div>
                                </div>
                              )}
                              {(repo.name === "Weather-App" || repo.name === "weather-app" || repo.name === "Weather App") && (
                                <div className="mb-4">
                                  <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                    Technologies Used
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-orange-600 text-white border-orange-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      HTML
                                    </Badge>
                                    <Badge variant="secondary" className="bg-purple-600 text-white border-purple-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      CSS
                                    </Badge>
                                    <Badge variant="secondary" className="bg-green-600 text-white border-green-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      Node.js
                                    </Badge>
                                    <Badge variant="secondary" className="bg-yellow-600 text-white border-yellow-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                                      JavaScript
                                    </Badge>
                                  </div>
                                </div>
                              )}
                             
                             {/* DEBUG: Show repository name to see what's being returned */}
                          
                       
                                             

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm" 
                          variant="outline"
                          className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                          onClick={() => window.open(repo.html_url, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        
                        {repo.homepage && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                            onClick={() => window.open(repo.homepage, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* View More Button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => window.open('https://github.com/BharathiThanikonda', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 