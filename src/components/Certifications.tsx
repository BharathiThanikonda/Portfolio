import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string; // Optional
  credentialId?: string; // Optional
  url: string;
  category: string;
  description: string;
}

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  // You can manually add your certifications here or import from LinkedIn
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      issueDate: "2022",
      url: "https://www.credly.com/badges/cb7c1cda-8f6f-4c17-a976-eeb27007d978/linked_in_profile",
      category: "Cloud Computing",
      description: "Comprehensive understanding of AWS cloud concepts, services, security, architecture, pricing, and support. Covers fundamental AWS knowledge for cloud practitioners."
    },
    {
      id: 2,
      name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      issueDate: "2022",
      url: "https://www.credly.com/badges/82600a95-f165-4d7b-95d9-763420dae3b5/linked_in_profile",
      category: "Cloud Development",
      description: "Advanced skills in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Expertise in cloud architecture best practices and design patterns."
    },
    {
      id: 3,
      name: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      issueDate: "2025",
      url: "https://www.credly.com/go/fzd1mykx",
      category: "Data Analytics",
      description: "Proficiency in data analysis tools and techniques including SQL, R, Tableau, and Google Sheets. Skills in data cleaning, visualization, and storytelling for business insights."
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cloud Computing': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Cloud Development': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Data Engineering': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Data Analytics': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'DevOps': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Machine Learning': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Web Development': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  return (
    <section id="certifications" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Licenses & Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Professional certifications and licenses that validate my expertise and skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="glass rounded-2xl border-primary/20 shadow-medium hover-lift group h-full animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {cert.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="text-3xl">🏆</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mb-3">
                    <Badge 
                      className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(cert.category)}`}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {cert.description}
                  </CardDescription>
                  
                  {/* Credential Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>Issued: {cert.issueDate}</span>
                      {cert.expiryDate && (
                        <>
                          <span>•</span>
                          <span>Expires: {cert.expiryDate}</span>
                        </>
                      )}
                    </div>
                    {cert.credentialId && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    onClick={() => window.open(cert.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add More Button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/bharathi-thanikonda/', '_blank')}
            >
              <Award className="w-5 h-5 mr-2" />
              View Full Profile on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
