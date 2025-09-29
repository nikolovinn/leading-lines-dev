import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: "2019 - 2025",
      role: "Head of Software Engineering",
      company: "Die Werkbank IT GmbH",
      description:
          "- Drove the end-to-end development of innovative AEC software products (BIM&More, v.create), from ideation and prototyping through to market release and client adoption.\n" +
          "- Served as the bridge between business stakeholders and development teams, ensuring complex requirements were translated into actionable backlogs and prototypes.\n" +
          "- Designed and implemented system architecture for scalable, integration-heavy solutions.\n" +
          "- Led cross-functional teams of developers (Laravel, Vue.js, .NET, C++) and designers, overseeing architecture decisions, sprint planning, and budgets while fostering a culture of agile iteration.\n" +
          "- Hired, coordinated, and managed external contractors, ensuring alignment with internal standards.\n" +
          "- Regularly facilitated client workshops, demos, and feedback sessions with major construction industry players to ensure stakeholder alignment and adoption.\n" +
          "- Played a key role in the company’s acquisition, aligning product vision, technical strategy, and innovation pipeline with business growth objectives.\n",
      achievements: [
        "2 SaaS Products Launched",
        "4x Scaled Team",
        "Successfull Sell of the Company",
      ],
      techStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++, AWS, Kubernetes, Docker, CI/CD"
    },
    {
      period: "2015 - 2019",
      role: "Senior Software Engineer",
      company: "Next IT Services",
      description: "- Gathered requirements, designed systems, and developed custom solutions for international clients (Knauf, Saint-Gobain, Sto).\n" +
          "- Delivered Knauf International Plugin (Systemfinder): a tool for configuring construction systems and importing them into Revit/Archicad.\n" +
          "- Developed the Sto BIM Cockpit, an internal tool for automating PDF and BIM outputs for the sales team, significantly reducing preparation time..\n" +
          "- Mentored junior developers and contributed to technical leadership within the team.\n",
      achievements: [
        "Tech Stack Modernization",
        "Custom PHP to Laravel Migration",
        "Blade to Vue.js Migration",
        "Monolith to Microservices Migration",
      ],
      techStack: "Laravel, PHP, Vue.js, JavaScript, Babylon.js, Revit API, C#, Unity, Archicad SDK, C++"
    },
    {
      period: "2012 - 2015",
      role: "Software Developer",
      company: "Mediatecture Ltd.",
      description: "- Designed and developed custom software solutions tailored to client needs.\n" +
          "- Built the ISOVER Constructions Multi Comfort Designer tool to support sustainable building design.\n" +
          "- Created and maintained building materials databases to streamline data-driven workflows.\n" +
          "- Developed and deployed websites using CMS platforms such as Joomla and WordPress.",
      achievements: [
        "Created ISOVER Multi Comfort Designer tool",
        "Built and maintained building materials databases for Saint-Gobain",
        "Developed websites using CMS platforms"
      ],
      techStack: "PHP, HTML, CSS, WordPress, Joomla,  Adobe Flash, Adobe AIR"
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
                
                <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
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