import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C#", "C", "R", "JavaScript", "TypeScript"]
    },
    {
      title: "AI Technologies", 
      icon: "🤖",
      skills: ["LangChain", "Prompt Engineering", "LLMs", "OpenAI", "Ollama", "RAG", "PyTorch", "TensorFlow"]
    },
    {
      title: "Web Development",
      icon: "🌐", 
      skills: ["FastAPI", "HTML", "CSS", "JavaScript", "Flask", "Node.js", "Express.js", "React"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Amazon RDS", "MSSQL", "MongoDB", "ChromaDB"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Jenkins", "Linux", "ETL", "AWS", "Git/GitHub", "Power BI", "Postman", "Heroku", "Docker"]
    },
    {
      title: "Specializations",
      icon: "⭐",
      skills: ["Machine Learning", "Natural Language Processing", "Chatbot Development", "System Architecture", "API Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI technologies, software development, 
            and modern cloud platforms for building scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional highlight section */}
        <div className="mt-16 text-center">
          <div className="bg-card-gradient border border-border rounded-2xl p-8 max-w-4xl mx-auto shadow-medium">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Core Expertise
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Specializing in the intersection of artificial intelligence and software engineering, 
              with deep experience in building and deploying large language models, creating intelligent 
              chatbot systems, and developing end-to-end web applications that scale.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["AI/ML Engineering", "Full-Stack Development", "System Architecture", "Cloud Computing"].map((expertise, index) => (
                <Badge key={index} className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;