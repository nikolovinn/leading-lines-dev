import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.leadership.title,
      skills: t.skills.leadership.skills
    },
    {
      title: t.skills.backend.title,
      skills: t.skills.backend.skills
    },
    {
      title: t.skills.frontend.title,
      skills: t.skills.frontend.skills
    },
    {
      title: t.skills.devops.title,
      skills: t.skills.devops.skills
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.skills.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.skills.titleHighlight}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-card transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-2">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
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

export default Skills;