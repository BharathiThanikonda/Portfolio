import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitBranch } from "lucide-react";

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
        
        // Fetch all repositories (GitHub allows up to 100 per page)
        const response = await fetch('https://api.github.com/users/BharathiThanikonda/repos?sort=updated&per_page=100&type=all');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched repos:', data.length, data); // Debug log
        
        // Filter out forked repositories, portfolio project, and include repos with descriptions or activity
        const filteredRepos = data
          .filter((repo: any) => {
            // Exclude portfolio project and include repos with descriptions or activity
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
        
        console.log('Filtered repos:', filteredRepos.length, filteredRepos); // Debug log
        
        if (filteredRepos.length === 0) {
          // If no repos found, show fallback projects
          setRepos([
            {
              id: 1,
              name: "AI-Powered Chatbot",
              description: "Advanced chatbot using LangChain and OpenAI API with conversation memory and context awareness",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "Python",
              stargazers_count: 15,
              forks_count: 8,
              topics: ["ai", "chatbot", "langchain", "openai"],
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-12-01T00:00:00Z"
            },
            {
              id: 2,
              name: "Full-Stack Web Application",
              description: "Modern web app built with React, FastAPI, and PostgreSQL featuring real-time updates",
              html_url: "https://github.com/BharathiThanikonda",
              homepage: null,
              language: "TypeScript",
              stargazers_count: 12,
              forks_count: 5,
              topics: ["react", "fastapi", "postgresql", "fullstack"],
              created_at: "2024-02-01T00:00:00Z",
              updated_at: "2024-11-01T00:00:00Z"
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
            name: "AI-Powered Chatbot",
            description: "Advanced chatbot using LangChain and OpenAI API with conversation memory and context awareness",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "Python",
            stargazers_count: 15,
            forks_count: 8,
            topics: ["ai", "chatbot", "langchain", "openai"],
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-12-01T00:00:00Z"
          },
          {
            id: 2,
            name: "Full-Stack Web Application",
            description: "Modern web app built with React, FastAPI, and PostgreSQL featuring real-time updates",
            html_url: "https://github.com/BharathiThanikonda",
            homepage: null,
            language: "TypeScript",
            stargazers_count: 12,
            forks_count: 5,
            topics: ["react", "fastapi", "postgresql", "fullstack"],
            created_at: "2024-02-01T00:00:00Z",
            updated_at: "2024-11-01T00:00:00Z"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Enhanced technology detection from repository data
  const extractTechnologies = (repo: GitHubRepo) => {
    const technologies = new Set<string>();
    
    // Add primary language
    if (repo.language) {
      technologies.add(repo.language);
    }
    
    // Add technologies from topics
    if (repo.topics) {
      repo.topics.forEach(topic => {
        // Map common topic names to technology names
        const techMap: { [key: string]: string } = {
          'ai': 'AI/ML',
          'machine-learning': 'Machine Learning',
          'deep-learning': 'Deep Learning',
          'nlp': 'NLP',
          'computer-vision': 'Computer Vision',
          'react': 'React',
          'nodejs': 'Node.js',
          'fastapi': 'FastAPI',
          'python': 'Python',
          'javascript': 'JavaScript',
          'typescript': 'TypeScript',
          'java': 'Java',
          'cpp': 'C++',
          'html': 'HTML',
          'css': 'CSS',
          'postgresql': 'PostgreSQL',
          'mongodb': 'MongoDB',
          'mysql': 'MySQL',
          'redis': 'Redis',
          'aws': 'AWS',
          'docker': 'Docker',
          'git': 'Git',
          'github': 'GitHub',
          'websocket': 'WebSocket',
          'socket-io': 'Socket.IO',
          'api': 'REST API',
          'fullstack': 'Full Stack',
          'frontend': 'Frontend',
          'backend': 'Backend',
          'database': 'Database',
          'cloud': 'Cloud',
          'devops': 'DevOps',
          'ci-cd': 'CI/CD',
          'microservices': 'Microservices',
          'chatbot': 'Chatbot',
          'langchain': 'LangChain',
          'openai': 'OpenAI API',
          'pytorch': 'PyTorch',
          'tensorflow': 'TensorFlow',
          'scikit-learn': 'Scikit-learn',
          'opencv': 'OpenCV',
          'pandas': 'Pandas',
          'numpy': 'NumPy',
          'matplotlib': 'Matplotlib',
          'seaborn': 'Seaborn',
          'jupyter': 'Jupyter',
          'colab': 'Google Colab'
        };
        
        if (techMap[topic.toLowerCase()]) {
          technologies.add(techMap[topic.toLowerCase()]);
        } else {
          // Add topic as-is if no mapping found
          technologies.add(topic.charAt(0).toUpperCase() + topic.slice(1));
        }
      });
    }
    
    // Extract technologies from repository name
    const nameTechs = repo.name.toLowerCase().match(/(react|node|python|java|cpp|fastapi|postgres|mongo|aws|docker|ai|ml|chatbot|langchain|openai|pytorch|tensorflow|opencv|pandas|numpy|matplotlib|seaborn|jupyter|colab)/g);
    if (nameTechs) {
      nameTechs.forEach(tech => {
        const techMap: { [key: string]: string } = {
          'react': 'React',
          'node': 'Node.js',
          'python': 'Python',
          'java': 'Java',
          'cpp': 'C++',
          'fastapi': 'FastAPI',
          'postgres': 'PostgreSQL',
          'mongo': 'MongoDB',
          'aws': 'AWS',
          'docker': 'Docker',
          'ai': 'AI/ML',
          'ml': 'Machine Learning',
          'chatbot': 'Chatbot',
          'langchain': 'LangChain',
          'openai': 'OpenAI API',
          'pytorch': 'PyTorch',
          'tensorflow': 'TensorFlow',
          'opencv': 'OpenCV',
          'pandas': 'Pandas',
          'numpy': 'NumPy',
          'matplotlib': 'Matplotlib',
          'seaborn': 'Seaborn',
          'jupyter': 'Jupyter',
          'colab': 'Google Colab'
        };
        if (techMap[tech]) {
          technologies.add(techMap[tech]);
        }
      });
    }
    
    return Array.from(technologies);
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
      'Google Colab': 'bg-yellow-400'
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
              <span className="gradient-text">Featured Projects</span>
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
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map((repo, index) => {
                  const technologies = extractTechnologies(repo);
                  
                  return (
                    <Card 
                      key={repo.id}
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
                        </div>
                        
                        {repo.language && (
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                            <span className="text-sm text-muted-foreground">{repo.language}</span>
                            <span className="text-xs text-muted-foreground">
                              • Updated {formatDate(repo.updated_at)}
                            </span>
                          </div>
                        )}
              </CardHeader>
              
                      <CardContent className="pt-0">
                        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                          {repo.description || "A well-crafted project showcasing modern development practices and innovative solutions."}
                        </CardDescription>
                        
                        {/* Technologies Used */}
                        <div className="mb-4">
                          <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Technologies Used
                          </h5>
                <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 8).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="secondary" 
                                className={`text-xs px-2 py-1 rounded-full ${getLanguageColor(tech)} text-white font-medium`}
                              >
                      {tech}
                    </Badge>
                  ))}
                            {technologies.length > 8 && (
                              <Badge 
                                variant="secondary" 
                                className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border-border"
                              >
                                +{technologies.length - 8} more
                              </Badge>
                            )}
                          </div>
                </div>

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
            </>
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