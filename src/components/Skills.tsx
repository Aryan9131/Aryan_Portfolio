import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Globe, Code2, Database, Cloud, Brain, Settings } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Globe,
      title: "Frontend Development",
      skills: [
        { name: "React.js / Next.js", level: 92, color: "primary" },
        { name: "TypeScript", level: 90, color: "primary" },
        { name: "JavaScript (ES6+)", level: 88, color: "primary" },
        { name: "Tailwind CSS / Shadcn/UI", level: 90, color: "primary" },
        { name: "Redux / Zustand", level: 85, color: "primary" }
      ]
    },
    backend: {
      icon: Code2,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "accent" },
        { name: "Express.js", level: 88, color: "accent" },
        { name: "REST APIs", level: 92, color: "accent" },
        { name: "WebSockets", level: 85, color: "accent" },
        { name: "Authentication (Clerk, Passport.js)", level: 87, color: "accent" }
      ]
    },
    database: {
      icon: Database,
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", level: 88, color: "primary" },
        { name: "MySQL", level: 85, color: "primary" },
        { name: "Supabase", level: 83, color: "primary" },
        { name: "Convex", level: 82, color: "primary" },
        { name: "Firebase / Firestore", level: 80, color: "primary" }
      ]
    },
    ai: {
      icon: Brain,
      title: "AI / Generative AI",
      skills: [
        { name: "LLM Integration", level: 87, color: "accent" },
        { name: "LangChain", level: 82, color: "accent" },
        { name: "Stable Diffusion", level: 85, color: "accent" },
        { name: "WAN 2.2 I2V", level: 80, color: "accent" },
        { name: "AI Agents", level: 83, color: "accent" },
        { name: "RAG Workflows", level: 81, color: "accent" }
      ]
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", level: 85, color: "primary" },
        { name: "Nginx", level: 82, color: "primary" },
        { name: "CI/CD (GitHub Actions)", level: 84, color: "primary" },
        { name: "Hostinger / Vercel Deployment", level: 87, color: "primary" }
      ]
    },
    tools: {
      icon: Settings,
      title: "Tools & Workflow",
      skills: [
        { name: "Git / GitHub", level: 92, color: "accent" },
        { name: "VS Code", level: 95, color: "accent" },
        { name: "Postman", level: 90, color: "accent" },
        // { name: "Jira / Notion", level: 85, color: "accent" },
        // { name: "Figma (UI Collaboration)", level: 80, color: "accent" }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on expertise in full-stack development and AI-powered platforms
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const CategoryIcon = skillCategories[category].icon;
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <CategoryIcon className="h-4 w-4" />
                  {skillCategories[category].title}
                </Button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8 animate-fade-in">
            <Card className="bg-card border-border hover:border-border-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {(() => {
                    const CategoryIcon = skillCategories[activeCategory].icon;
                    return <CategoryIcon className="h-6 w-6 text-primary" />;
                  })()}
                  {skillCategories[activeCategory].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[activeCategory].skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`${
                            skill.color === 'primary' 
                              ? 'bg-primary/10 text-primary border-primary/20' 
                              : 'bg-accent/10 text-accent border-accent/20'
                          }`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2" />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out ${
                            skill.color === 'primary' 
                              ? 'bg-gradient-primary' 
                              : 'bg-gradient-secondary'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-muted-foreground">Internships Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">AI</div>
                <div className="text-muted-foreground">Generative AI & LLM Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
