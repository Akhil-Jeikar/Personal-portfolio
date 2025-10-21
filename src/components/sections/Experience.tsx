import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "BSETec",
    role: "Frontend Developer Intern",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Developed responsive web interfaces using React.js with integration to RESTful backend services",
      "Implemented form validations, state management, and reusable component architecture",
      "Collaborated with backend team to ensure seamless API integration and data flow",
    ],
  },
  {
    company: "Indsys Holdings Limited",
    role: "Backend Developer Intern",
    period: "Jan 2025 – Feb 2025",
    description: [
      "Architected and deployed scalable backend modules using Python Flask framework",
      "Designed RESTful API endpoints for inter-service communication and third-party integrations",
      "Optimized database queries and implemented caching strategies for improved performance",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Experience items */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary">{exp.company}</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono">{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
