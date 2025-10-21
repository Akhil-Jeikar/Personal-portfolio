import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "akhiljeikar06@gmail.com",
    href: "mailto:akhiljeikar06@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90928 14508",
    href: "tel:+919092814508",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akhil-jeikar",
    href: "https://linkedin.com/in/akhil-jeikar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Akhil-Jeikar",
    href: "https://github.com/Akhil-Jeikar",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 floating-card glow">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-sm font-mono text-primary mb-4 block">// Get In Touch</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Build <span className="text-primary">Together</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Open to opportunities in backend development, networking, and quantitative analysis
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:bg-card/60 
                      border border-border/30 transition-all magnetic"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                          {contact.label}
                        </h3>
                        <p className="text-foreground/90 break-all text-lg">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-border/30">
              <p className="text-lg mb-6 text-muted-foreground">
                Let's discuss backend architecture, networking solutions, or quantitative projects
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg
                  glow floating-card"
                onClick={() => window.location.href = "mailto:akhiljeikar06@gmail.com"}
              >
                <Send className="w-5 h-5 mr-3" />
                Send Me an Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
