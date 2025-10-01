import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      period: t.experience.headPeriod,
      role: t.experience.headRole,
      company: t.experience.headCompany,
      description: t.experience.headDescription,
      achievements: t.experience.headAchievements,
      techStack: t.experience.headTechStack
    },
    {
      period: t.experience.seniorPeriod,
      role: t.experience.seniorRole,
      company: t.experience.seniorCompany,
      description: t.experience.seniorDescription,
      achievements: t.experience.seniorAchievements,
      techStack: t.experience.seniorTechStack
    },
    {
      period: t.experience.devPeriod,
      role: t.experience.devRole,
      company: t.experience.devCompany,
      description: t.experience.devDescription,
      achievements: t.experience.devAchievements,
      techStack: t.experience.devTechStack
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.experience.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.experience.titleHighlight}</span>
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
                  <p className="text-xs text-muted-foreground font-medium mb-2">{t.experience.techStack}</p>
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