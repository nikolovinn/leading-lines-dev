import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from "@/assets/ivan-nikolov-rec.jpeg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.about.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.about.titleHighlight}</span>
          </h2>
          <div className="mb-20">
            <Avatar className="w-64 h-64 mx-auto mb-6 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Ivan Nikolov" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.about.paragraph1}
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.about.paragraph2}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph3}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {Object.values(t.about.highlights).map((highlight, index) => (
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