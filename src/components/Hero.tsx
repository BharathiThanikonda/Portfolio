import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Linkedin, Github, Mail, Code2 } from "lucide-react";
import bharathiHeadshot from "@/assets/bharathi-headshot.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResumeInNewTab = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-primary/10 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-32 w-20 h-20 bg-primary/8 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/6 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      

      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 relative">
              {/* Animated greeting with sparkles */}
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-2 animate-fade-in-up">
                Hi, I'm
              </h2>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-2">
                <span 
                  className="gradient-text relative inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default group"
                  style={{ animationDelay: '0.3s' }}
                >
                  <span className="animate-typewriter overflow-hidden whitespace-nowrap">
                    Bharathi Thanikonda
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></span>
                  
                  {/* Floating particles around the name */}
                  <span className="absolute -top-2 -left-2 w-2 h-2 bg-primary rounded-full animate-particle-1 opacity-60"></span>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full animate-particle-2 opacity-60"></span>
                  <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary rounded-full animate-particle-3 opacity-60"></span>
                  <span className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-primary rounded-full animate-particle-4 opacity-60"></span>
                  
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  
                  {/* Sparkle stars around the name */}
                  <span className="absolute -top-3 -left-3 text-primary animate-spin-slow text-lg">✨</span>
                  <span className="absolute -top-2 -right-2 text-primary animate-spin-slow text-lg" style={{ animationDelay: '0.5s' }}>✨</span>
                  <span className="absolute -bottom-2 -left-2 text-primary animate-spin-slow text-lg" style={{ animationDelay: '1s' }}>✨</span>
                  <span className="absolute -bottom-3 -right-3 text-primary animate-spin-slow text-lg" style={{ animationDelay: '1.5s' }}>✨</span>
                </span>
              </h1>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6 animate-fade-in-up relative" style={{ animationDelay: '0.4s' }}>
              <span className="relative inline-block">
                <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.6s' }}>AI Engineer</span>
                <span className="mx-3 text-primary animate-pulse">|</span>
                <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.8s' }}>Software Developer</span>
                
                {/* Floating tech icons */}
                <span className="absolute -top-2 -left-2 text-primary animate-float-slow text-sm">🤖</span>
                <span className="absolute -top-2 -right-2 text-primary animate-float-slow text-sm" style={{ animationDelay: '0.5s' }}>💻</span>
              </span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl lg:max-w-none animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Transforming ideas into intelligent solutions through cutting-edge AI and software development. 
              I specialize in building and deploying Large Language Models, crafting AI-powered chatbots that 
              understand context, and architecting scalable web applications that bridge the gap between 
              human creativity and machine intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg"
                className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-base px-8 py-3 rounded-xl"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-base px-8 py-3 rounded-xl"
                onClick={openResumeInNewTab}
              >
                📄 Resume
              </Button>
              <Button 
                size="lg"
                className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-base px-8 py-3 rounded-xl"
                onClick={() => scrollToSection('contact')}
              >
                📧 Get In Touch
              </Button>
            </div>

            {/* Social Links - Updated to match maneesh.tech style */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <a href="https://www.linkedin.com/in/bharathi-thanikonda/" target="_blank" rel="noopener noreferrer" 
                 className="group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
              </a>
              <a href="https://github.com/BharathiThanikonda" target="_blank" rel="noopener noreferrer"
                 className="group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Github className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
              </a>
              <a href="https://leetcode.com/u/Bharathi_Thanikonda/" target="_blank" rel="noopener noreferrer"
                 className="group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Code2 className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
              </a>
              <a href="mailto:bharathithanikonda173@gmail.com"
                 className="group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Professional Headshot */}
          <div className="flex-shrink-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-2 border-primary/20 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={bharathiHeadshot} 
                  alt="Bharathi Thanikonda - Professional headshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;