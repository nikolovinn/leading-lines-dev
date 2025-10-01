import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      title: t.contact.phone,
      value: "+43 (0) 660 45 132 46",
      description: ""
    },
    {
      title: t.contact.email,
      value: "nikolov.inn@gmail.com",
      description: ""
    },
    {
      title: t.contact.linkedin,
      value: "https://tinyurl.com/nikolovinn",
      description: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t.contact.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-card transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground">

                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;