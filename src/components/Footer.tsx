import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexjohnson", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexjohnson", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexjohnson", label: "Twitter" },
    { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-tertiary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Aryan Nayak
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions 
                that make a difference. Always learning, always building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <nav className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <a 
                  href="mailto:alex.johnson@email.com"
                  className="block hover:text-primary transition-colors"
                >
                  alex.johnson@email.com
                </a>
                <a 
                  href="tel:+15551234567"
                  className="block hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              
              {/* Availability Status */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                <span className="text-sm text-accent font-medium">Available for projects</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Aryan Nayak. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-glow-pulse" />
              <span>and modern tech.</span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;