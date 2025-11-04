// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Brain, Layers, Rocket, Database, Workflow } from "lucide-react";
// import profilePhoto from "@/assets/Profile_image.png";

// const About = () => {
//   const highlights = [
//     {
//       icon: Rocket,
//       title: "Startup Experience",
//       description: "Delivered production-ready platforms in fast-paced environments"
//     },
//     {
//       icon: Workflow,
//       title: "Power Platform",
//       description: "Power Apps, Power Automate & Copilot Studio AI Agents"
//     },
//     {
//       icon: Brain,
//       title: "Generative AI",
//       description: "LLM integration, RAG workflows & conversational AI systems"
//     },
//     {
//       icon: Layers,
//       title: "Full Stack",
//       description: "MERN & Next.js with scalable backend architecture"
//     }
//   ];

//   const techStack = [
//     "React", "Next.js", "Node.js", "Express", "TypeScript", "JavaScript",
//     "MongoDB", "Supabase", "Convex", "Firebase",
//     "WebSocket", "REST APIs", "Authentication",
//     "Power Apps", "Power Automate", "Copilot Studio", "Dataverse",
//     "LLM Integration", "LangChain", "Generative AI"
//   ];

//   return (
//     <section id="about" className="py-20 bg-background-secondary">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">

//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
//               About Me
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Full Stack & Power Platform Developer building intelligent, scalable applications powered by Generative AI.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Profile + Tech Stack */}
//             <div className="space-y-8">
//               <div className="relative">
//                 <div className="w-80 h-80 mx-auto relative">
//                   <img
//                     src={profilePhoto}
//                     alt="Aryan Nayak"
//                     className="w-full h-full object-cover rounded-xl shadow-xl"
//                   />
//                   <div className="absolute -inset-1 bg-blue-400 rounded-xl opacity-30 animate-glow-pulse" />
//                 </div>
//               </div>

//                {/* Highlights Grid */}
//               <div className="grid grid-cols-2 gap-4">
//                 {highlights.map((highlight, index) => (
//                   <Card key={index} className="bg-card hover:bg-card-hover transition-all duration-300 border-border group">
//                     <CardContent className="p-6">
//                       <highlight.icon className="h-8 w-8 text-primary mb-3 group-hover:text-primary-glow transition-colors" />
//                       <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
//                       <p className="text-sm text-muted-foreground">{highlight.description}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* Text Content */}
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <p className="text-lg text-foreground leading-relaxed">
//                   I'm Aryan Nayak, a <strong>Full Stack & Power Platform Developer</strong> specializing in 
//                   <strong> MERN & Next.js</strong> ecosystems with a focus on <strong>Generative AI</strong> and 
//                   <strong> LLM-powered automation</strong>. I’ve built AI-driven platforms like 
//                   <em> NexaHire</em> (AI Recruiter Voice Agent) and <em>Amplify-AI</em> (Content Generation SaaS), 
//                   and developed <strong>Copilot Studio AI Agents</strong> and <strong>Power Automate</strong> workflows 
//                   to streamline internal operations and support automation.
//                 </p>

//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   During my internship at <strong>Idea360AI</strong>, I worked on <em>FeatureFlow</em>, a multi-tenant AI 
//                   project management platform, where I contributed to <strong>scalable backend architecture</strong>, 
//                   <strong>real-time WebSocket systems</strong>, and <strong>LLM-driven workflow automation</strong>. 
//                   I also built internal tools using <strong>Power Apps</strong> and <strong>Dataverse</strong> for data 
//                   orchestration and role-based workflows. At <strong>Unified Mentor</strong>, I engineered web platforms 
//                   with secure payments, real-time data processing, and integrated Google Maps services.
//                 </p>

//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   I focus on delivering solutions that are <strong>scalable, automated, and user-centric</strong>. 
//                   Outside development, I continually explore advancements in AI, workflow automation, and enterprise system design.
//                 </p>
//               </div>
              
//                {/* Tech Stack */}
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-foreground">Tech Stack</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {techStack.map((tech) => (
//                     <Badge
//                       key={tech}
//                       variant="secondary"
//                       className="bg-card hover:bg-card-hover border border-border-hover transition-colors"
//                     >
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
             
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Rocket, Database, Workflow } from "lucide-react";
import profilePhoto from "@/assets/Profile_image.png";

const About = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "Startup Experience",
      description: "Delivered production-ready platforms in fast-paced environments",
    },
    {
      icon: Workflow,
      title: "Power Platform",
      description: "Power Apps, Power Automate & Copilot Studio AI Agents",
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "LLM integration, RAG workflows & conversational AI systems",
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "MERN & Next.js with scalable backend architecture",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Supabase",
    "Convex",
    "Firebase",
    "WebSocket",
    "REST APIs",
    "Power Apps",
    "Power Automate",
    "Copilot Studio",
    "Dataverse",
    "LLM Integration",
    "LangChain",
    "Generative AI",
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
              Full Stack & Power Platform Developer building intelligent, scalable applications powered by Generative AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Profile + Tech Stack */}
            <div className="space-y-8">
              <div className="relative flex justify-center lg:justify-start">
                <div className="w-80 h-80 mx-auto relative">
                  <img
                    src={profilePhoto}
                    alt="Aryan Nayak"
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute -inset-1 bg-blue-400 rounded-xl opacity-30 animate-glow-pulse" />
                </div>
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

            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm Aryan Nayak, a <strong>Full Stack & Power Platform Developer</strong> specializing in
                  <strong> MERN & Next.js</strong> ecosystems with a focus on <strong>Generative AI</strong> and
                  <strong> LLM-powered automation</strong>. I’ve built AI-driven platforms like
                  <em> NexaHire</em> (AI Recruiter Voice Agent) and <em>Amplify-AI</em> (Content Generation SaaS), and developed
                  <strong> Copilot Studio AI Agents</strong> and <strong>Power Automate workflows</strong> to streamline internal operations and automation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <strong>Idea360AI</strong>, I contributed to <em>FeatureFlow</em> — a multi-tenant AI project management system —
                  working on <strong>scalable backend architecture</strong>, <strong>real-time WebSocket systems</strong>, and
                  <strong> LLM workflow automation</strong>. I also built internal tools using <strong>Power Apps</strong> and
                  <strong> Dataverse</strong> for data orchestration and user-based workflows. At <strong>Unified Mentor</strong>, I engineered platforms with
                  secure payments, real-time data sync, and Google Maps integrations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I focus on delivering solutions that are <strong>scalable, automated, and user-centric</strong>.
                  Beyond development, I explore advancements in AI automation and enterprise system workflows.
                </p>
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

