import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "KPR Institute of Engineering and Technology",
    period: "2023 – 2027",
    grade: "CGPA: 8.24",
    location: "Coimbatore, Tamil Nadu",
  },
  {
    degree: "High School",
    institution: "Vidya Vikas International School",
    period: "2019 – 2023",
    grade: "",
    location: "",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Education</h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card/40 p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-foreground/90 font-semibold mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {edu.grade && (
                  <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 flex-shrink-0">
                    <div className="text-lg font-bold text-primary">{edu.grade}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
