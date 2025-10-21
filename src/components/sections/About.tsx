import { Code2, Database, Network, Terminal, Boxes, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = {
  languages: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  networking: ["Socket Programming", "WebSockets", "TCP/IP", "Wireshark", "Cisco Packet Tracer", "NS2/NS3"],
  backend: ["Flask", "REST APIs", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  quantitative: ["Data Analysis", "Algorithm Design", "Problem Solving", "PowerBI"],
  tools: ["Git/GitHub", "Docker", "AWS (EC2, S3)", "Linux"],
};

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Bio */}
        <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
          <p className="text-base text-foreground/90 leading-relaxed">
            I'm a Computer Science Engineering student at{" "}
            <span className="text-primary font-semibold">KPR Institute of Engineering and Technology</span>,
            specializing in <span className="font-semibold">networking</span>, <span className="font-semibold">backend systems</span>, and <span className="font-semibold">quantitative problem-solving</span>. 
            I build robust backend solutions and network applications, with hands-on experience in socket programming, 
            real-time communication systems, and distributed architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Languages */}
          <div className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.languages.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Networking */}
          <div className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Networking</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.networking.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.backend.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quantitative */}
          <div className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Quantitative</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.quantitative.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Boxes className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Tools & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.tools.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
