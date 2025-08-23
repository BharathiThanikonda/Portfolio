import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Code Review Assistant",
      description: "An AI-powered tool using a T5 dual-encoder Transformer for joint encoding of Java methods and reviewer comments. Streamlines the code review process by providing intelligent suggestions and automated feedback.",
      technologies: ["Python", "T5 Transformer", "PyTorch", "Java", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/BharathiThanikonda",
      features: [
        "Advanced T5 dual-encoder architecture",
        "Joint encoding of code and comments",
        "Intelligent review suggestions",
        "Java method analysis"
      ]
    },
    {
      title: "Analysis of Twitter Sentiments",
      description: "A comprehensive sentiment analysis pipeline leveraging advanced NLP techniques and machine learning models including SVM, Logistic Regression, and Random Forest for accurate emotion detection.",
      technologies: ["Python", "NLP", "SVM", "Logistic Regression", "Random Forest", "Twitter API", "Scikit-learn"],
      githubUrl: "https://github.com/BharathiThanikonda",
      features: [
        "Multi-model ensemble approach",
        "Real-time sentiment analysis",
        "Twitter API integration",
        "Advanced text preprocessing"
      ]
    },
    {
      title: "Real-Time Chat Application",
      description: "A scalable real-time chat application built with modern web technologies, featuring instant messaging, user authentication, and seamless real-time communication using WebSocket technology.",
      technologies: ["Node.js", "Express.js", "Socket.IO", "JavaScript", "HTML", "CSS", "WebSocket"],
      githubUrl: "https://github.com/BharathiThanikonda",
      features: [
        "Real-time messaging",
        "User authentication",
        "Socket.IO integration",
        "Responsive design"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Featured work showcasing expertise in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="group"
            onClick={() => window.open('https://github.com/BharathiThanikonda', '_blank')}
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;