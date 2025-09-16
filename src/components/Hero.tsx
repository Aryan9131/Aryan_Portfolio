import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowDown, Github, Linkedin, Mail, FileText, Globe, Code } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building scalable solutions with modern technologies";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background-secondary/90" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-primary/30 rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/20 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-32 left-20 w-8 h-8 border border-accent/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-40 w-3 h-3 bg-accent/30 rotate-45 animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Aryan Nayak
          </h1>

          <h2 className="text-2xl md:text-4xl font-medium text-foreground mb-8">
            Full Stack Developer
          </h2>

          {/* Typing Animation */}
          <div className="text-lg md:text-xl text-muted-foreground mb-12 h-8">
            <span className="font-mono">
              {typedText}
              <span className="border-r-2 border-primary animate-pulse ml-1" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {/* GitHub */}
            <a href="https://github.com/Aryan9131" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Button>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/aryan-nayak-558188335/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>

            {/* Email */}
            <a href="mailto:aryannayak9131@gmail.com">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </Button>
            </a>

            {/* Naukri */}
            <a href="https://www.naukri.com/code360/profile/d8faa988-d0d5-4d1c-a2a7-20f1385db692" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Globe className="h-6 w-6" />
              </Button>
            </a>

            {/* GeeksforGeeks */}
            <a href="https://www.geeksforgeeks.org/user/aryannayak9131/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                <Code className="h-6 w-6" />
              </Button>
            </a>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('about')}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;