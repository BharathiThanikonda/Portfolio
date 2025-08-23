const About = () => {
  const experiences = [
    {
      role: "AI Engineer (Graduate Assistant)",
      company: "Texas Tech University",
      period: "May 2025 - Present",
      current: true
    },
    {
      role: "Senior Software Engineer",
      company: "HCL Software",
      period: "Aug 2023 - July 2024",
      current: false
    },
    {
      role: "System Development Engineer Intern",
      company: "Amazon",
      period: "Jan 2023 - June 2023",
      current: false
    }
  ];

  const education = [
    {
      degree: "M.S. in Computer Science",
      institution: "Texas Tech University",
      current: true
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "R.V.R & J.C College of Engineering",
      current: false
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm passionate about leveraging artificial intelligence and software development 
              to create innovative solutions that make a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground mb-1">
                            {exp.role}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Timeline connector */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 bottom-0 w-px h-6 bg-border transform translate-y-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        {edu.current && (
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 bottom-0 w-px h-6 bg-border transform translate-y-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;