import { Button } from "@/components/ui/button";
import bharathiHeadshot from "@/assets/bharathi-headshot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              BHARATHI
              <br />
              <span className="text-white/90">THANIKONDA</span>
            </h1>
            
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <p className="text-lg font-medium">AI Engineer | Software Developer</p>
            </div>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl">
              Passionate professional with expertise in AI and software development, 
              experienced in building and hosting LLMs, AI-powered chatbots, and web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-strong text-base px-8 py-6"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Professional Headshot */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-4 border-white/20">
                <img 
                  src={bharathiHeadshot} 
                  alt="Bharathi Thanikonda - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;