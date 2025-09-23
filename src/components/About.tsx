import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      number: "13+",
      label: "Years Experience",
      description: "Building enterprise software solutions"
    },
    {
      number: "50+",
      label: "Projects Delivered",
      description: "From startups to Fortune 500 companies"
    },
    {
      number: "20+",
      label: "Developers Mentored",
      description: "Growing the next generation of talent"
    },
    {
      number: "5+",
      label: "Teams Led",
      description: "Cross-functional agile development teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 13 years in software development, I've evolved from a passionate coder to a 
                strategic technical leader. My journey spans full-stack development, system architecture, 
                and team leadership across diverse industries.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in building scalable, maintainable solutions while fostering collaborative 
                environments where developers thrive. My approach combines technical excellence with 
                strong leadership principles.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding or mentoring teams, I'm exploring emerging technologies and 
                contributing to the developer community through open source projects and technical writing.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-card transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {highlight.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;