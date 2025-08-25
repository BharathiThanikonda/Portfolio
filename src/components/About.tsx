import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const education = [
    {
      degree: "M.S. in Computer Science",
      institution: "Texas Tech University",
      current: true,
      gpa: "3.9/4.0",
      focus: "Artificial Intelligence & Machine Learning"
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "R.V.R & J.C College of Engineering",
      current: false,
      gpa: "9.61 CGPA",
      focus: "Software Engineering & Web Development"
    }
  ];

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "HTML/CSS"] 
    },
    { 
      category: "AI & Machine Learning", 
      items: [
        "PyTorch", 
        "TensorFlow", 
        "LangChain", 
        "RAG", 
        "OpenAI", 
        "Scikit-learn", 
        "Ollama", 
        "Deep Learning", 
        "Natural Language Processing (NLP)", 
        "Large Language Models (LLMs)"
      ] 
    },
    { 
      category: "Web Development", 
      items: [
        "React", 
        "FastAPI", 
        "Node.js", 
        "Express.js", 
        "Flask",
        "Socket.IO", 
        "WebSocket"
      ] 
    },
    { 
      category: "Database Technologies", 
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "MSSQL", "ChromaDB"] 
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS", "Docker", "Git", "GitHub", "CI/CD"] 
    },
    { 
      category: "Data Analysis", 
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "Power BI", "QuickSight", "Data Visualization"] 
    },
    { 
      category: "Software Engineering", 
      items: ["System Design", "Object-Oriented Programming", "Design Patterns", "Agile", "Code Review", "Testing", "Git/GitHub", "Performance Optimization", "REST APIs"] 
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface-variant relative overflow-hidden">
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
              <span className="gradient-text animate-heading-glow">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Crafting the future where artificial intelligence meets human ingenuity, one innovative solution at a time
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
              {/* Who I Am */}
              <div className="glass rounded-2xl p-8 hover-lift mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">👤</div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">Who I Am</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm <strong className="text-foreground">Bharathi Thanikonda</strong>, a passionate AI engineer and software developer 
                    who believes in the transformative power of technology. My journey began with a fascination 
                    for how machines can understand and interact with humans, leading me to specialize in 
                    Large Language Models and AI-powered applications. I thrive on solving complex problems 
                    and turning innovative ideas into reality, whether it's developing intelligent chatbots 
                    with LangChain and OpenAI, building scalable web applications using React, FastAPI, and 
                    Node.js, or implementing machine learning pipelines with PyTorch, TensorFlow, and 
                    scikit-learn for data analysis and predictive modeling.
                  </p>
                  
                  <p>
                    Currently pursuing my Master's in Computer Science at Texas Tech University, I'm deeply 
                    involved in research that pushes the boundaries of what's possible with AI. My experience 
                    spans from building enterprise-level software at HCL to contributing to Amazon's 
                    infrastructure, giving me a unique perspective on both the theoretical and practical 
                    aspects of technology. I'm constantly learning and evolving with the technology landscape, 
                    combining my expertise in cloud platforms like AWS, database technologies including 
                    PostgreSQL and MongoDB, DevOps practices with Docker and Git, and data visualization 
                    tools like Power BI and QuickSight to create innovative solutions that make a real impact.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">🎓</div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-primary font-medium mb-2">{edu.focus}</p>
                      <p className="text-muted-foreground text-sm mb-3">GPA: {edu.gpa}</p>
                      {edu.current && (
                        <span className="inline-block gradient-bg text-white px-3 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
              {/* Core Skills */}
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">⚡</div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Core Expertise</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;