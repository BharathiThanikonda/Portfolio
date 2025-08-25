import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ollamaImage from "@/assets/ollama.png";
import langchainImage from "@/assets/langchain.png";
import openaiImage from "@/assets/OpenAI.png";
import flaskImage from "@/assets/flask.png";
import powerbiImage from "@/assets/PowerBI.png";
import quicksightImage from "@/assets/QuickSight.png";
import seabornImage from "@/assets/seaborn.png";
import chromadbImage from "@/assets/ChromaDB.png";
import awsImage from "@/assets/aws.png";
import expressjsImage from "@/assets/ExpressJS.png";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = {
    "Programming Languages": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", expertise: "Expert" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", expertise: "Advanced" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", expertise: "Advanced" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", expertise: "Advanced" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", expertise: "Intermediate" }
    ],
    "AI & Machine Learning": [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", expertise: "Advanced" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", expertise: "Advanced" },
      { name: "LangChain", icon: langchainImage, expertise: "Advanced" },
      { name: "OpenAI", icon: openaiImage, expertise: "Advanced" },
      { name: "Ollama", icon: ollamaImage, expertise: "Intermediate" }
    ],
    "Web Development": [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", expertise: "Advanced" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", expertise: "Advanced" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", expertise: "Advanced" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", expertise: "Advanced" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", expertise: "Advanced" },
      { name: "Express.js", icon: expressjsImage, expertise: "Advanced" },
      { name: "Flask", icon: flaskImage, expertise: "Intermediate" }
    ],
    "Database Technologies": [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", expertise: "Advanced" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", expertise: "Advanced" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", expertise: "Intermediate" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", expertise: "Intermediate" },
      { name: "MSSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg", expertise: "Intermediate" },
      { name: "ChromaDB", icon: chromadbImage, expertise: "Intermediate" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: awsImage, expertise: "Advanced" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", expertise: "Intermediate" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", expertise: "Expert" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", expertise: "Expert" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", expertise: "Intermediate" }
    ],
    "Data Analysis": [
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", expertise: "Advanced" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", expertise: "Advanced" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", expertise: "Advanced" },
      { name: "Seaborn", icon: seabornImage, expertise: "Intermediate" },
      { name: "Power BI", icon: powerbiImage, expertise: "Intermediate" },
      { name: "QuickSight", icon: quicksightImage, expertise: "Intermediate" }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text animate-heading-glow">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}>
                {/* Category Title */}
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
                  {category}
                </h3>
                
                {/* Skills Grid - Square Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-3xl mx-auto">
                  {categorySkills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="bg-card text-card-foreground rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-primary/20 animate-fade-in-up group relative border border-border/50 aspect-square flex flex-col justify-between"
                      style={{ animationDelay: `${0.4 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {/* Expertise Badge - Shows on Hover */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {skill.expertise}
                      </div>
                      
                      {/* Icon and Name Section */}
                      <div className="text-center flex-1 flex flex-col justify-center">
                        <div className="flex justify-center mb-2">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to colored text representation
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          {/* Fallback for failed images */}
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hidden">
                            <span className="text-base font-bold text-primary">{skill.name.charAt(0)}</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-card-foreground text-xs mb-2 leading-tight">{skill.name}</h4>
                      </div>
                      
                      {/* Progress Bar at Bottom */}
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: skill.expertise === "Expert" ? "95%" : 
                                   skill.expertise === "Advanced" ? "85%" : 
                                   skill.expertise === "Intermediate" ? "75%" : "65%"
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;