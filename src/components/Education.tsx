import { Card } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      period: "Master's Degree",
      degree: "IT Product Design",
      institution: "VIA University College",
      location: "Horsens, Denmark",
      description: "Advanced studies focusing on user-centered design, product strategy, and the intersection of technology and business needs. Developed expertise in design thinking, user research, and product management methodologies.",
      highlights: [
        "User-centered design methodologies",
        "Product strategy and business analysis",
        "Design thinking and innovation processes"
      ]
    },
    {
      period: "Bachelor's Degree",
      degree: "Information and Communication Technology",
      institution: "VIA University College", 
      location: "Horsens, Denmark",
      description: "Comprehensive technical foundation covering software development, system design, and modern programming practices. Built strong expertise in multiple programming languages and development frameworks.",
      highlights: [
        "Software development and architecture",
        "System design and implementation",
        "Programming languages and frameworks"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Background</span>
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-2">
                  {edu.highlights.map((highlight, hlIndex) => (
                    <div key={hlIndex} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Dual Perspective Advantage
              </h3>
              <p className="text-muted-foreground">
                This unique combination of technical expertise and design thinking allows me to bridge 
                the gap between complex technical solutions and meaningful user experiences, making me 
                an effective leader who understands both the "how" and the "why" of software development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;