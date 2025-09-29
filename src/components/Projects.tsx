import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "BIM&More – Sustainable BIM Data Platform",
      description: "Digital product suite for the AEC industry, with BIM-Cockpit as its core platform. It acts as a central hub for BIM data management, integrating geometry, attributes, classifications, and project-specific delivery directly into CAD/BIM workflows (Revit, Archicad)\n\n" +
          "I was part of defined the product vision and architecture, and led cross-functional teams. I have also managed numerous PoCs and pilot projects with customers like KLB, Sto and Autobahn GmbH. I could represented the product in investor presentations during the successful acquisition of the company.",
      technologies: ["Laravel", "Vue.js", "PostgresSQL", "Archicad SDK", "Revit API", "Kubernetes", "Docker","CI/CD"],
      impact: "- Adoption by leading manufacturers and infrastructure projects.\n" +
          "- Automated BIM workflows → faster planning, fewer errors, and compliance with industry standards.",
      type: "Software Architecture, Product Management"
    },
    {
      title: "v.create",
      description: "Enterprise-level SaaS platform for the rapid configuration of large office spaces. Designed as a serious game with Unity, v.create streamlines space planning by combining immersive 3D visualisation with intelligent automation.\n\n" +
          "As Head of Engineering of Die Werkbank IT, I was involved from the earliest stage — from shaping the idea, prototyping, and concept development to leading implementation and supporting market deployment. I oversaw the technical architecture, integration with BIM systems, and the design of the SaaS infrastructure.",
      technologies: ["Laravel", "Vue.js", "Revit API", "Unity", "AWS", "Kubernetes", "Docker","CI/CD"],
      impact: "- Reduces the time and cost of configuring complex office environments.\n" +
          "- Adapt workplaces faster, with fewer resources, and with measurable sustainability benefits",
      type: "Software Architecture, Product Management"
    },
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
                
                <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Key Impact:</p>
                  <p className="text-sm text-primary font-medium whitespace-break-spaces">
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