import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathithanikonda173@gmail.com",
      href: "mailto:bharathithanikonda173@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(806) 317-3718",
      href: "tel:+18063173718",
      primary: false
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
    <section id="contact" className="py-20 bg-surface-variant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or innovative AI and software development projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const content = (
                    <Card className={`bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 ${contact.href ? 'hover:border-primary cursor-pointer group' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${contact.primary ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
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

            {/* Social Links & CTA */}
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Professional Links
              </h3>
              
              {/* Social Media Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card key={index} className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary cursor-pointer group">
                      <CardContent className="p-6">
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4"
                        >
                          <div className="p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {social.label}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              View my professional profile
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="bg-card-gradient border border-border rounded-2xl p-8 shadow-medium text-center">
                <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Ready to Collaborate?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're looking for an AI engineer, software developer, 
                  or someone passionate about innovative technology solutions, 
                  I'd love to hear from you.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium"
                  onClick={() => window.open('mailto:bharathithanikonda173@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
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