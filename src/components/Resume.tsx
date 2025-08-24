import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Download, Eye, FileText, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This will be your uploaded resume file
    link.download = 'Bharathi_Thanikonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open resume in a new tab
    window.open('/resume.pdf', '_blank');
  };

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "M.S. in Computer Science - Texas Tech University (3.9/4.0 GPA)",
        "B.Tech in Computer Science - R.V.R & J.C College of Engineering (9.61 CGPA)"
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "AI Engineer (Graduate Assistant) - Texas Tech University",
        "Senior Software Engineer - HCL Software",
        "System Development Engineer Intern - Amazon"
      ]
    },
    {
      icon: FileText,
      title: "Key Skills",
      items: [
        "AI/ML: LLMs, NLP, PyTorch, TensorFlow, OpenAI API",
        "Programming: Python, Java, JavaScript, TypeScript, C++",
        "Technologies: FastAPI, React, AWS, Docker, PostgreSQL"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-surface-variant relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Download my detailed resume or view it online to learn more about my qualifications and experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="glass rounded-2xl p-8 hover-lift border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">📄</div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">Resume Preview</h3>
                </div>
                
                <div className="space-y-6">
                  {resumeHighlights.map((section, index) => {
                    const IconComponent = section.icon;
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-foreground">{section.title}</h4>
                        </div>
                        <ul className="space-y-2 ml-8">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Download & View Options */}
            <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="glass rounded-2xl p-8 hover-lift border border-primary/10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Bharathi Thanikonda
                  </h3>
                  <p className="text-muted-foreground">
                    AI Engineer & Software Developer
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={handleDownload}
                    className="w-full gradient-bg text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 h-12 text-lg font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                  
                  <Button 
                    onClick={handleView}
                    variant="outline"
                    className="w-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 h-12 text-lg font-medium"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Resume Online
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Resume Includes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Detailed work experience and achievements</li>
                    <li>• Educational background and certifications</li>
                    <li>• Technical skills and technologies</li>
                    <li>• Project portfolio and contributions</li>
                    <li>• Contact information and references</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
