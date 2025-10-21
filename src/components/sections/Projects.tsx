import { Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "WebSocket Chat Application",
    description: "Real-time chat application supporting both direct and group messaging with multi-user connections and both unicast and broadcast messaging capabilities.",
    tags: ["Python", "WebSockets", "Asyncio"],
    github: "https://github.com/Akhil-Jeikar",
  },
  {
    title: "FTP Tool",
    description: "File transfer tool enabling users on the same network to send and receive files efficiently with encryption to ensure data confidentiality during transfers.",
    tags: ["Python", "Socket Programming", "Encryption"],
    github: "https://github.com/Akhil-Jeikar/FTP",
  },
  {
    title: "HTTP Based API Server",
    description: "Python socket-based HTTP server supporting REST API endpoints and file transfer, designed for rapid backend development with modular architecture.",
    tags: ["Python", "Socket Programming", "REST API"],
    github: "https://github.com/Akhil-Jeikar/Custom-REST-API-Server",
  },
  {
    title: "Lexer",
    description: "Lexical analyzer in C++ capable of tokenizing source code into keywords, identifiers, operators, and literals with graceful syntax error handling for compiler workflows.",
    tags: ["C++", "STL", "Compiler Design"],
    github: "https://github.com/Akhil-Jeikar/Lexer",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-primary mb-4 block">// Featured Work</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Projects That <span className="text-primary">Matter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting backend infrastructure and network solutions that solve real problems
            </p>
          </div>

          {/* Projects Masonry Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass rounded-2xl floating-card glow group
                  ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 hover:bg-primary/10 rounded-xl transition-all magnetic"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-6 h-6 text-primary" />
                    </a>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/90 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 font-mono px-3 py-1
                          hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg
                floating-card glow"
              onClick={() => window.open("https://github.com/Akhil-Jeikar", "_blank")}
            >
              <Github className="w-6 h-6 mr-3" />
              Explore More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
