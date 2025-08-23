import { Button } from "@/components/ui/button";
import bharathiHeadshot from "@/assets/bharathi-headshot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-2">Hi, I'm</h2>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-2">
                <span className="text-primary">Bharathi Thanikonda</span>
              </h1>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
              AI Engineer | Software Developer
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl lg:max-w-none">
              Passionate professional with expertise in AI and software development, 
              experienced in building and hosting LLMs, AI-powered chatbots, and web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8"
                onClick={() => scrollToSection('projects')}
              >
                🚀 View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted text-base px-8"
                onClick={() => scrollToSection('contact')}
              >
                📧 Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/bharathi-thanikonda/" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/BharathiThanikonda" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="mailto:bharathithanikonda173@gmail.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
          
          {/* Professional Headshot */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-medium border border-border">
                <img 
                  src={bharathiHeadshot} 
                  alt="Bharathi Thanikonda - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;