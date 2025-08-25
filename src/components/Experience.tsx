import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const experiences = [
    {
      role: "AI Engineer (Graduate Assistant)",
      company: "Texas Tech University",
      location: "Lubbock, Texas",
      period: "May 2025 - Present",
      current: true,
      description: "Developed AI-powered applications using FastAPI, integrated with LangChain, pgvector, and Hugging Face models to build domain-specific chatbots for students and faculty to query TTU policies using natural language. Integrated RAG-based AI agents with OpenAI and Sentence Transformers to enable multi-step reasoning and real-time semantic search, secured with SAML-based authentication for protected access to compliance and query systems. Engineered data pipelines using BeautifulSoup and Scrapy to ingest and preprocess unstructured documents, generated vector embeddings with OpenAI and Sentence Transformers, deployed on NVIDIA GPU infrastructure for low-latency inference.",
      technologies: ["Python", "FastAPI", "LangChain", "Hugging Face", "OpenAI", "RAG", "BeautifulSoup", "Scrapy", "NVIDIA GPU", "SAML"]
    },
    {
      role: "Senior Software Engineer",
      company: "HCL Software",
      location: "Bangalore, India",
      period: "Aug 2023 - July 2024",
      current: false,
      description: "Developed and implemented Python scripts to integrate BigFix with ServiceNow, enhancing bidirectional data flow and automating workflows. Loaded and validated data from BigFix into MSSQL to perform advanced querying and analysis, enabling comprehensive insights into vulnerabilities. Created an ETL to extract data from Tenable.io, Tenable.sc, and Qualys, integrating this data into BigFix to identify vulnerabilities and generate fixlets for their remediation. Performed end-to-end testing, including functional, integration, and regression testing, by developing and running automated test suites in Python using PyTest and unittest.",
      technologies: ["Python", "BigFix", "ServiceNow", "MSSQL", "ETL", "Tenable", "Qualys", "PyTest", "Power BI", "NT Authentication"]
    },
    {
      role: "System Development Engineer Intern",
      company: "Amazon",
      location: "Chennai, India",
      period: "Jan 2023 - June 2023",
      current: false,
      description: "Automated the process of uploading reports to the S3 using Perl, reducing monitoring efforts from approximately 16 hours to near zero. Analyzed logs from AWS CloudWatch and Lambda using JavaScript to generate actionable insights and created detailed graphs to visualize results. Designed and executed complex SQL queries to extract data from Amazon RDS, Redshift utilizing the information to build timeliness dashboard in AWS Quick Sight. Migrated a critical service from one environment to another, modifying the entire codebase using Java for better security and scalability.",
      technologies: ["Perl", "AWS S3", "CloudWatch", "Lambda", "JavaScript", "SQL", "Amazon RDS", "Redshift", "QuickSight", "Java", "EC2", "VPC"]
    },
    {
      role: "Data Science Intern",
      company: "Knowledge Solutions India",
      location: "Virtual",
      period: "June 2021 - July 2021",
      current: false,
      description: "Implemented Logistic Regression model for heart disease prediction which includes data cleaning by handling missing values, normalizing numerical features and applying feature selection techniques. The model achieved an impressive 95% accuracy.",
      technologies: ["Python", "Logistic Regression", "Data Cleaning", "Feature Selection", "Machine Learning"]
    }
  ];

  // Individual experience card component with its own animation
  const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
    const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
    
    return (
      <div 
        ref={cardRef}
        className={`relative transition-all duration-1000 ${
          cardVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          transitionDelay: `${0.1 + index * 0.1}s`,
        }}
      >
        {/* Timeline Dot - Desktop */}
        <div className={`absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2 hidden lg:block transition-all duration-700 ${
          cardVisible ? 'scale-100 opacity-100 animate-glow' : 'scale-0 opacity-0'
        }`} style={{ transitionDelay: `${0.2 + index * 0.1}s` }}></div>
        
        {/* Timeline Dot - Mobile */}
        <div className={`absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg lg:hidden transition-all duration-700 ${
          cardVisible ? 'scale-100 opacity-100 animate-glow' : 'scale-0 opacity-0'
        }`} style={{ transitionDelay: `${0.2 + index * 0.1}s` }}></div>
        
        {/* Content Container - Alternating sides on desktop, left-aligned on mobile */}
        <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} px-6 lg:px-0`}>
          {/* Left Side Content (Desktop) */}
          {index % 2 === 0 && (
            <div className="hidden lg:block"></div>
          )}
          
          {/* Right Side Content (Desktop) */}
          {index % 2 === 1 && (
            <div className="hidden lg:block"></div>
          )}
          
          {/* Experience Card */}
          <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} transition-all duration-700 ${
            cardVisible 
              ? 'opacity-100 translate-x-0' 
              : `opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`
          }`} style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
            <div className="glass rounded-2xl p-8 hover-lift border border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-heading text-2xl font-bold text-foreground transition-all duration-300 hover:text-primary">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="gradient-bg text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                      Current
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3 transition-all duration-300 hover:scale-105">
                  {exp.company}
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed transition-all duration-300 hover:text-foreground">
                  {exp.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-foreground mb-3">Technologies & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ 
                        animationDelay: `${0.4 + index * 0.1 + techIndex * 0.05}s`,
                        animation: cardVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text animate-heading-glow">Professional Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              My journey through the world of technology, from internships to leading AI research
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform -translate-x-1/2 hidden lg:block transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`} style={{ transformOrigin: 'center top' }}></div>
            
            {/* Mobile Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 lg:hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`} style={{ transformOrigin: 'center top' }}></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
