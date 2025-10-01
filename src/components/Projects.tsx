import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t.projects.bimMore.title,
      description: t.projects.bimMore.description,
      technologies: t.projects.bimMore.technologies,
      impact: t.projects.bimMore.impact,
      type: t.projects.bimMore.type
    },
    {
      title: t.projects.vCreate.title,
      description: t.projects.vCreate.description,
      technologies: t.projects.vCreate.technologies,
      impact: t.projects.vCreate.impact,
      type: t.projects.vCreate.type
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.projects.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.projects.titleHighlight}</span>
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
                  <p className="text-sm font-medium text-foreground mb-2">{t.projects.keyImpact}</p>
                  <p className="text-sm text-primary font-medium whitespace-break-spaces">
                    {project.impact}
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">{t.projects.technologies}</p>
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;