import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: "2019 - 2025",
      role: "Head of Software Engineering",
      company: "Die Werkbank IT GmbH",
      description: "Drove end-to-end development of innovative AEC software products (BIM&More, v.create) from ideation to market release. Bridged business stakeholders and development teams, designing scalable architecture for integration-heavy solutions.",
      achievements: [
        "Led cross-functional teams (Laravel, Vue.js, .NET, C++)",
        "Facilitated client workshops with major construction players",
        "Key role in company acquisition and growth strategy"
      ],
      techStack: "Laravel, Vue.js, Babylon.js, C#, Unity, AWS, Docker, CI/CD"
    },
    {
      period: "2015 - 2019",
      role: "Senior Software Engineer",
      company: "Next IT Services",
      description: "Gathered requirements, designed systems, and developed custom solutions for international clients including Knauf, Saint-Gobain, and Sto. Delivered specialized BIM tools and automation solutions.",
      achievements: [
        "Built Knauf International Plugin (Systemfinder)",
        "Developed Sto BIM Cockpit automation tool",
        "Mentored junior developers and provided technical leadership"
      ],
      techStack: "C#, .NET, C++, Revit/Archicad APIs, SQL Server, REST"
    },
    {
      period: "2012 - 2015",
      role: "Software Developer",
      company: "Mediatecture Ltd.",
      description: "Designed and developed custom software solutions tailored to client needs. Built sustainable building design tools and maintained building materials databases for data-driven workflows.",
      achievements: [
        "Created ISOVER Multi Comfort Designer tool",
        "Built and maintained building materials databases",
        "Developed websites using CMS platforms"
      ],
      techStack: "PHP, HTML, CSS, Adobe Flash, Adobe AIR"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-2 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium mb-2">Tech Stack:</p>
                  <p className="text-sm text-foreground/70">{exp.techStack}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;