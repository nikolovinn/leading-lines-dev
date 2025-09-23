import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      description: "Led development of a real-time analytics platform processing 10M+ events daily. Built with React, Node.js, and Kubernetes for scalability.",
      technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes", "Redis"],
      impact: "Increased client insights delivery by 300%",
      type: "Team Leadership"
    },
    {
      title: "Microservices Architecture Migration",
      description: "Architected and led migration from monolithic application to microservices, improving system reliability and team autonomy.",
      technologies: ["Docker", "AWS", "API Gateway", "Monitoring", "CI/CD"],
      impact: "Reduced deployment time from hours to minutes",
      type: "Architecture"
    },
    {
      title: "Developer Productivity Tools",
      description: "Created suite of internal tools and CLI utilities that streamlined development workflow across multiple teams.",
      technologies: ["Node.js", "CLI", "Automation", "Git", "DevOps"],
      impact: "Saved 20+ hours per developer monthly",
      type: "Innovation"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Built and led team developing real-time collaborative workspace with WebSocket integration and conflict resolution.",
      technologies: ["React", "WebSocket", "Node.js", "MongoDB", "Docker"],
      impact: "Enabled remote collaboration for 500+ users",
      type: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-card transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Key Impact:</p>
                  <p className="text-sm text-primary font-medium">
                    {project.impact}
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;