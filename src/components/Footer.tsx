import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code,
  MapPin,
  User
} from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BharathiThanikonda",
      icon: Github,
      color: "hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bharathi-thanikonda/",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
    },
    {
      name: "Email",
      url: "mailto:bharathi.thanikonda@gmail.com",
      icon: Mail,
      color: "hover:text-red-600 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    { icon: Mail, value: "bharathi.thanikonda@gmail.com", href: "mailto:bharathi.thanikonda@gmail.com" },
    { icon: MapPin, value: "Lubbock, Texas", href: "#" },
    { icon: Linkedin, value: "bharathi-thanikonda", href: "https://www.linkedin.com/in/bharathi-thanikonda/" },
    { icon: Github, value: "BharathiThanikonda", href: "https://github.com/BharathiThanikonda" }
  ];

  return (
         <footer className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 border-t border-blue-200/50 dark:border-blue-800/50 overflow-hidden">
       {/* Background effects */}
       <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-purple-100/20 dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10"></div>
       <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                   <Code className="w-6 h-6 text-white" />
                 </div>
                                 <div>
                   <h3 className="text-xl font-bold text-foreground">Bharathi Thanikonda</h3>
                   <p className="text-sm text-muted-foreground">Software Developer | Applied AI Engineer</p>
                 </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Passionate developer specializing in web development, machine learning, and cloud solutions. 
                Building innovative applications that solve real-world problems.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-card border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-medium`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
                             <h4 className="font-semibold text-foreground mb-4">
                 Quick Links
               </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

                         {/* Contact Information */}
             <div>
               <h4 className="font-semibold text-foreground mb-4">
                 Contact Info
               </h4>
                               <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-white/80 dark:bg-card/80 rounded-lg flex items-center justify-center shadow-sm border border-blue-200/50 dark:border-blue-700/50">
                        <contact.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>
             </div>
          </div>

                     {/* Bottom Section */}
           <div className="pt-8 border-t border-blue-200/50 dark:border-blue-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Bharathi Thanikonda. All rights reserved.</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
