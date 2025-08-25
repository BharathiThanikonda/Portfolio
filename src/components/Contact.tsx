import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathithanikonda173@gmail.com",
      href: "mailto:bharathithanikonda173@gmail.com",
      primary: true
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Texas, United States",
      href: null,
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bharathi-thanikonda/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/BharathiThanikonda",
      color: "hover:text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text animate-heading-glow">Contact</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Let's discuss opportunities, collaborations, or innovative projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Top Row - Get in Touch and Connect side by side */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Side - Get in Touch */}
              <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center md:text-left">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    const content = (
                      <Card className={`glass rounded-2xl border-primary/20 shadow-medium hover-lift ${contact.href ? 'hover:border-primary cursor-pointer group' : ''}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-xl ${contact.primary ? 'gradient-bg text-white' : 'bg-primary/10 text-primary'}`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {contact.label}
                              </h4>
                              <p className={`text-muted-foreground ${contact.href ? 'group-hover:text-primary transition-colors' : ''}`}>
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );

                    return contact.href ? (
                      <a key={index} href={contact.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Connect */}
              <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center md:text-left">
                  Connect
                </h3>
                
                {/* Social Media Links */}
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Card key={index} className="glass rounded-2xl border-primary/20 shadow-medium hover-lift cursor-pointer group">
                        <CardContent className="p-6">
                          <a 
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4"
                          >
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {social.label}
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                Professional profile
                              </p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Row - Ready to Collaborate centered */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="glass rounded-2xl p-10 shadow-medium text-center hover-lift max-w-3xl w-full">
                <h4 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Ready to Collaborate?
                </h4>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss AI projects, software development opportunities, or innovative technology solutions.
                </p>
                <Button 
                  size="lg"
                  className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 text-white shadow-medium px-10 py-4 rounded-xl text-lg"
                  onClick={() => window.open('mailto:bharathithanikonda173@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;