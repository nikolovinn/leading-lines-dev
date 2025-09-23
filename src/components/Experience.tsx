import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: "2020 - Present",
      role: "Senior Development Team Lead",
      company: "Tech Solutions Inc.",
      description: "Leading a team of 12 developers across multiple product lines. Architected microservices platform serving 1M+ users. Implemented DevOps practices reducing deployment time by 80%.",
      achievements: [
        "Reduced system downtime by 95%",
        "Improved team velocity by 40%",
        "Mentored 8 junior developers"
      ]
    },
    {
      period: "2017 - 2020",
      role: "Full Stack Lead Developer",
      company: "Digital Innovations Ltd.",
      description: "Led development of enterprise web applications using React, Node.js, and cloud technologies. Established coding standards and review processes for a growing engineering team.",
      achievements: [
        "Built 5 major client applications",
        "Established CI/CD pipeline",
        "Improved code quality metrics by 60%"
      ]
    },
    {
      period: "2013 - 2017",
      role: "Senior Software Developer",
      company: "StartupVenture Co.",
      description: "Core team member building scalable web applications from concept to production. Worked across the full stack with emphasis on performance optimization and user experience.",
      achievements: [
        "Optimized app performance by 70%",
        "Implemented real-time features",
        "Contributed to product strategy"
      ]
    },
    {
      period: "2011 - 2013",
      role: "Software Developer",
      company: "Development Agency",
      description: "Developed custom web solutions for various clients. Gained expertise in multiple programming languages and frameworks while working on diverse projects.",
      achievements: [
        "Delivered 15+ client projects",
        "Mastered multiple tech stacks",
        "Built client relationships"
      ]
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
                
                <div className="grid md:grid-cols-3 gap-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {achievement}
                    </div>
                  ))}
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