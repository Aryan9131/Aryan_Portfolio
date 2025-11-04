import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  // Use a separate ref for each scrollable section
  const personalProjectsRef = useRef(null);
  const internshipProjectsRef = useRef(null);

  const scroll = (ref, scrollOffset) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  const personalProjects = [
    {
      id: 1,
      title: "NexaHire (AI Recruiter Voice Agent)",
      description:
        "AI-powered recruitment platform enabling real-time voice interviews with VAPI agents, contextual question generation using Google Gemini, and secure data storage with Supabase.",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "VAPI", "Gemini", "Supabase", "Shadcn/UI"],
      liveUrl: " https://nexahire.vercel.app/",
      githubUrl: "https://github.com/Aryan9131/nexahire",
      featured: true
    },
    {
      id: 2,
      title: "Amplify-AI (Content Generation SaaS)",
      description:
        "SaaS platform with modular tools for product images, videos, and content workflows. Integrated Stable Diffusion and WAN 2.2 I2V for AI image/video generation with Convex backend and Clerk authentication.",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Stable Diffusion", "WAN 2.2 I2V", "Convex", "Clerk", "Paypal"],
      liveUrl: "https://amplify-ai-nine.vercel.app/",
      githubUrl: "https://github.com/Aryan9131/amplify-ai",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Platform",
      description:
        "Full-stack MERN platform with profiles, posts, real-time chat, video/audio calls (WebRTC), stories, and live notifications. Authentication handled with Passport.js.",
      category: "fullstack",
      technologies: ["Node.js", "React.js", "MongoDB", "WebRTC", "WebSocket", "Passport.js"],
      liveUrl: "https://social-mern-project-frontend.onrender.com",
      githubUrl: "https://github.com/Aryan9131/SOCIAL_MERN_PROJECT",
      featured: false
    },
    {
      id: 4,
      title: "Digital Gram Panchayat",
      description:
        "E-governance platform for citizen services with secure payments, real-time updates, and media management via Cloudinary.",
      category: "fullstack",
      technologies: ["Node.js", "React.js", "Firebase", "React-Redux", "Cloudinary", "Stripe"],
      liveUrl: "https://digital-gram-panchayat-services-frontend.vercel.app/user",
      githubUrl: "https://github.com/Aryan9131/Digital_Gram_Panchayat_Services",
      featured: false
    },
    {
      id: 5,
      title: "Employee Review System",
      description:
        "Role-based employee performance review system with authentication, feedback workflows, and access control using Passport.js.",
      category: "backend",
      technologies: ["Node.js", "Express.js", "EJS", "Passport.js", "MongoDB"],
      liveUrl: "https://employee-review-system-p4tr.onrender.com/",
      githubUrl: "https://github.com/Aryan9131/Employee_Review_System",
      featured: false
    },
    {
      id: 6,
      title: "Task Management System",
      description:
        "Kanban-style project management tool with drag-and-drop boards, team collaboration, and WebSocket-powered real-time updates.",
      category: "fullstack",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket"],
      liveUrl: null,
      githubUrl: "https://github.com/Aryan9131",
      featured: false
    },
  ];

  const internshipProjects = [
    {
      id: 1,
      title: "FeatureFlow (AI Project Management Platform)",
      description:
        "Multi-tenant AI project management system with LLM integration, real-time WebSocket notifications, and role-based access control.",
      technologies: ["MERN Stack", "LLMs", "WebSockets", "Clerk", "GitHub API"],
      liveUrl: null
    },
    {
      id: 2,
      title: "IPXcel (AI Patent Scraping Tool)",
      description:
        "Patent research platform with AI-driven semantic search, structured knowledge extraction, and dashboards.",
      technologies: ["Next.js", "Node.js", "AI Models", "MongoDB"],
      liveUrl: "https://ai.ipxcel.com/"
    },
    {
      id: 3,
      title: "Studio.FeatureFlow",
      description:
        "Platform for individual users to manage AI-driven projects with templates, timelines, and user role assignments.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind", "Clerk"],
      liveUrl: "https://studio.featureflow.digital/"
    },
    {
      id: 4,
      title: "UX-Genie (AI Research & Knowledge Platform)",
      description:
        "AI-powered research tool for document creation, web scraping, and knowledge base building.",
      technologies: ["Next.js", "Node.js", "LangChain", "MongoDB"],
      liveUrl: "https://ux-genie.idea360.tech/"
    }
  ];

  const powerPlatformProjects = [
    {
      id: 1,
      title: "SharePoint AI Document Assistant",
      description:
        "AI-powered document processing workflow that extracts summaries and key insights from uploaded files in SharePoint, then auto-updates metadata using Power Automate and Azure AI. Includes a Copilot Studio agent for conversational query support.",
      technologies: ["Power Automate", "SharePoint", "Azure AI", "Copilot Studio"],
    },
    {
      id: 2,
      title: "ATS IntelliRoute (Automated Request Routing Agent)",
      description:
        "Autonomous Copilot Studio agent triggered when a Microsoft Form is submitted. It extracts form details, matches the request with the most suitable employee using an internal dataset, logs a new entry in SharePoint, and sends email notifications to the assigned employee.",
      technologies: ["Copilot Studio", "Microsoft Forms", "Power Automate", "SharePoint", "Excel / Dataverse"],
    },
    {
      id: 3,
      title: "FinanceBuddy (Multilingual Personal Finance Assistant)",
      description:
        "Conversational multilingual agent built in Copilot Studio that interacts with Dataverse records to answer user-specific finance queries, provide transaction breakdowns, and generate monthly spending summaries.",
      technologies: ["Copilot Studio", "Power Apps", "Dataverse", "Power Automate"],
    },
    {
      id: 4,
      title: "Document Query Agent (RAG-based Document Intelligence)",
      description:
        "Agent that allows users to upload documents and then ask contextual questions on the content. Uses Azure AI/AI Builder to extract content and retrieval logic to answer document-based questions accurately.",
      technologies: ["Copilot Studio", "Power Automate", "Azure AI / AI Builder"],
    },
  ];


  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects =
    filter === "all" ? personalProjects : personalProjects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my personal projects and professional contributions during internships
          </p>
        </div>

        {/* Personal Projects */}
        <h3 className="text-2xl font-semibold mb-4">Personal Projects</h3>
        <div className="relative group">
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" ref={personalProjectsRef}>
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`min-w-[340px] max-w-sm snap-center group bg-card border-border hover:border-border-hover hover:shadow-lg transition-all duration-300 overflow-hidden ${project.featured ? "ring-1 ring-primary/20" : ""
                  }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-muted-foreground/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${project.liveUrl ? "" : "flex-1"
                          } border-primary/30 text-primary hover:bg-primary/10 hover:border-primary`}
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Projects Scroll Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full pointer-events-auto text-foreground/50 hover:text-foreground hover:bg-background/80"
              onClick={() => scroll(personalProjectsRef, -340)}
            >
              <ChevronLeft size={32} />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full pointer-events-auto text-foreground/50 hover:text-foreground hover:bg-background/80"
              onClick={() => scroll(personalProjectsRef, 340)}
            >
              <ChevronRight size={32} />
            </Button>
          </div>
        </div>

        {/* Internship Projects */}
        <h3 className="text-2xl font-semibold mb-4 mt-12">Internship Projects</h3>
        <div className="relative group">
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" ref={internshipProjectsRef}>
            {internshipProjects.map((project) => (
              <Card
                key={project.id}
                className="min-w-[340px] max-w-sm snap-center group bg-card border-border hover:border-border-hover hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-muted hover:bg-muted-foreground/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                    )}
                    {/* Internship projects don't have a githubUrl in your data, so the button is omitted. */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Internship Projects Scroll Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full pointer-events-auto text-foreground/50 hover:text-foreground hover:bg-background/80"
              onClick={() => scroll(internshipProjectsRef, -340)}
            >
              <ChevronLeft size={32} />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full pointer-events-auto text-foreground/50 hover:text-foreground hover:bg-background/80"
              onClick={() => scroll(internshipProjectsRef, 340)}
            >
              <ChevronRight size={32} />
            </Button>
          </div>
        </div>

        {/* Power Platform Projects */}
        <h3 className="text-2xl font-semibold mb-4 mt-12">Power Platform Projects</h3>
        <div className="relative group">
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {powerPlatformProjects.map((project) => (
              <Card
                key={project.id}
                className="min-w-[340px] max-w-sm snap-center group bg-card border-border hover:border-border-hover hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-muted-foreground/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Case Study Button */}
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                    onClick={() => alert("This will open case study or documentation soon.")}
                  >
                    View Case Study
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Additional Projects */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-3">Additional Projects</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
            Worked on multiple <strong>Full Stack, AI, and Power Platform solutions</strong> including
            Copilot Studio agents, Power Automate workflows, and SharePoint integrations.
            Contributed to <strong>10+ additional projects</strong> involving workflow automation and scalable backend development during intenship.
          </p>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <Badge variant="secondary">Power Apps</Badge>
            <Badge variant="secondary">Copilot Studio</Badge>
            <Badge variant="secondary">Power Automate</Badge>
            <Badge variant="secondary">Dataverse</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Generative AI</Badge>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;