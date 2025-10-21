import { Trophy, Code, Award, BookOpen } from "lucide-react";
import { useLeetCode } from "@/hooks/useLeetCode";

const certifications = [
  {
    title: "Professional Cybersecurity Certification",
    issuer: "Google",
    icon: Award,
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    icon: BookOpen,
  },
];

const Achievements = () => {
  const { stats, loading } = useLeetCode("akhiljeikar06");

  return (
    <section id="achievements" className="relative">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Achievements</h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="space-y-6">
          {/* LeetCode Stats */}
          <div className="bg-card/40 p-6 rounded-xl border border-border/30">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">LeetCode Stats</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">
                  {loading ? "..." : stats.totalSolved}
                </div>
                <div className="text-xs text-muted-foreground">Total</div>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {loading ? "..." : stats.easy}
                </div>
                <div className="text-xs text-muted-foreground">Easy</div>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  {loading ? "..." : stats.medium}
                </div>
                <div className="text-xs text-muted-foreground">Medium</div>
              </div>
              <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-red-400 mb-1">
                  {loading ? "..." : stats.hard}
                </div>
                <div className="text-xs text-muted-foreground">Hard</div>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/akhiljeikar06/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-semibold"
            >
              View Profile →
            </a>
          </div>

          {/* Certifications */}
          <div className="bg-card/40 p-6 rounded-xl border border-border/30">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-background/50 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <Icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-card/40 p-6 rounded-xl border border-border/30">
            <h4 className="font-bold text-lg mb-3 text-primary">Leadership</h4>
            <div className="bg-background/50 p-3 rounded-lg border border-border/50">
              <p className="text-foreground/90 text-sm font-semibold mb-1">
                Software Development Club
              </p>
              <p className="text-xs text-muted-foreground">
                Planning Committee Member • Nov 2023 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
