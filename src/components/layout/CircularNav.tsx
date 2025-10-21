import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code2, Award, Mail } from "lucide-react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: Code2, href: "#projects", label: "Projects" },
  { icon: Award, href: "#achievements", label: "Achievements" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

const CircularNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          const angle = (index * (Math.PI * 2)) / navItems.length - Math.PI / 2;
          const radius = isExpanded ? 80 : 0;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`absolute top-0 right-0 p-3 rounded-full glass transition-all duration-500 group
                ${isActive ? 'bg-primary/20 border-primary' : 'hover:bg-primary/10'}
              `}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: isExpanded ? 1 : isActive ? 1 : 0,
              }}
              aria-label={item.label}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-foreground/80'}`} />
              {isExpanded && (
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                  text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity
                  bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border/50">
                  {item.label}
                </span>
              )}
            </a>
          );
        })}
        
        {/* Center indicator */}
        <div className="w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
      </div>
    </div>
  );
};

export default CircularNav;
