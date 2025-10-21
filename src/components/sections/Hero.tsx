import { Terminal, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeetCode } from "@/hooks/useLeetCode";

const Hero = () => {
  const { stats } = useLeetCode("akhiljeikar06");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary/5 to-transparent 
          transform skew-x-12 origin-top-right" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="space-y-8 reveal">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Terminal className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">$ akhil --version 2.0</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Akhil
                <span className="block text-primary">Jeikar P M</span>
              </h1>

              <div className="flex flex-wrap gap-2 text-lg font-mono">
                <span className="text-primary">[</span>
                <span className="text-foreground/90">Backend</span>
                <span className="text-muted-foreground">+</span>
                <span className="text-foreground/90">Networks</span>
                <span className="text-muted-foreground">+</span>
                <span className="text-foreground/90">Quant</span>
                <span className="text-primary">]</span>
              </div>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building scalable backend systems and exploring the depths of
                <span className="text-foreground font-semibold"> computer networking</span> and
                <span className="text-foreground font-semibold"> quantitative analysis</span>
              </p>

              <div className="text-sm text-muted-foreground">
                <span className="text-primary font-mono">@</span> KPR Institute of Engineering and Technology
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Akhil-Jeikar", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/akhil-jeikar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akhiljeikar06@gmail.com", label: "Email" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:bg-primary/10 transition-all floating-card group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats Bento Grid */}
          <div className="bento-grid reveal">
            {/* Large CGPA Card */}
            <div className="glass rounded-2xl p-8 floating-card glow"
              style={{ gridColumn: 'span 7', gridRow: 'span 3' }}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-sm font-mono text-primary mb-2">Academic Excellence</div>
                  <div className="text-7xl font-bold text-primary mb-2">8.24</div>
                  <div className="text-lg text-muted-foreground">Current CGPA</div>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '82.4%' }} />
                </div>
              </div>
            </div>

            {/* LeetCode Card */}
            <div className="glass rounded-2xl p-6 floating-card perspective-card"
              style={{ gridColumn: 'span 5', gridRow: 'span 2' }}>
              <div className="text-sm font-mono text-primary mb-2">Problem Solving</div>
              <div className="text-5xl font-bold mb-1">{stats.totalSolved || '224'}+</div>
              <div className="text-sm text-muted-foreground">LeetCode Problems</div>
              {stats.totalSolved && (
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="text-green-400">{stats.easy} Easy</span>
                  <span className="text-yellow-400">{stats.medium} Med</span>
                  <span className="text-red-400">{stats.hard} Hard</span>
                </div>
              )}
            </div>

            {/* Projects Card */}
            <div className="glass rounded-2xl p-6 floating-card gradient-shift"
              style={{ gridColumn: 'span 5', gridRow: 'span 2' }}>
              <div className="text-sm font-mono text-primary mb-2">Portfolio</div>
              <div className="text-5xl font-bold mb-1">4+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>

            {/* Tech Focus Card */}
            <div className="glass rounded-2xl p-6 floating-card"
              style={{ gridColumn: 'span 7', gridRow: 'span 2' }}>
              <div className="text-sm font-mono text-primary mb-3">Core Interests</div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Socket Programming', 'REST APIs', 'WebSockets', 'C++'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
