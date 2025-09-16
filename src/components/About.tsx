import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Rocket, Database } from "lucide-react";
import profilePhoto from "@/assets/Profile_image.png";

const About = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "Startup Experience",
      description: "Built and deployed AI-powered platforms during internships"
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "Expertise in LLM integration & AI content workflows"
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "MERN & Next.js with scalable backend architecture"
    },
    {
      icon: Database,
      title: "Databases",
      description: "Proficient in MongoDB, MySQL, Supabase, Convex"
    }
  ];

  const techStack = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
    "MongoDB", "MySQL", "Supabase", "Convex", "WebSocket", "WebRTC",
    "LLM Integration", "Generative AI", "LangChain", "Stable Diffusion"
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer passionate about building scalable applications and AI-powered platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <img
                    src={profilePhoto}
                    alt="Aryan Nayak - Full Stack Developer"
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                 <div className="absolute -inset-1 bg-blue-400 rounded-xl opacity-30 animate-glow-pulse" />
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-card hover:bg-card-hover border border-border-hover transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm Aryan Nayak, a Full Stack Developer specializing in <strong>MERN & Next.js</strong> ecosystems with a focus on 
                  <strong> Generative AI</strong> and <strong>LLM integration</strong>. I’ve built AI-powered platforms like 
                  <em> NexaHire</em> (AI Recruiter Voice Agent) and <em>Amplify-AI</em> (Content Generation SaaS).
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My internship at <strong>Idea360AI</strong> allowed me to work on <em>FeatureFlow</em>, a multi-tenant AI project 
                  management platform, where I contributed to scalable backend systems, WebSocket notifications, and 
                  generative AI workflows. At <strong>Unified Mentor</strong>, I developed web platforms with secure 
                  payments, real-time databases, and Google Maps integration.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in <strong>system design, databases, and scalable architecture</strong>, I focus on 
                  delivering applications that combine performance with innovation. Beyond coding, I stay curious, explore 
                  emerging AI technologies, and contribute to impactful projects.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-card hover:bg-card-hover transition-all duration-300 border-border group">
                    <CardContent className="p-6">
                      <highlight.icon className="h-8 w-8 text-primary mb-3 group-hover:text-primary-glow transition-colors" />
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
