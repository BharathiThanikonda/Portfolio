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
    <section id="about" className="py-20 bg-surface-variant">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions that bridge AI and full-stack development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Who Am I */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">👤</div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">Who Am I</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm <strong className="text-foreground">Bharathi Thanikonda</strong>, an AI Engineer with expertise in building and hosting LLMs,
                  AI-powered chatbots, and scalable web applications. Currently pursuing my Master's in Computer Science
                  at Texas Tech University.
                </p>
                <p>
                  My experience spans working with cutting-edge AI technologies, developing production-grade applications,
                  and implementing end-to-end solutions that solve real-world problems through innovative technology.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">💼</div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full -ml-8"></div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.current && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium ml-2">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{exp.role}</h4>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="text-2xl">🎓</div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-soft">
                  <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  {edu.current && (
                    <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium mt-2">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;