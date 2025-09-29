import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      title: "Phone",
      value: "+43 (0) 660 45 132 46",
      description: "Professional networking and career opportunities"
    },
    {
      title: "Email",
      value: "nikolov.inn@gmail.com",
      description: "Best for detailed discussions and project inquiries"
    },
    {
      title: "LinkedIn",
      value: "https://tinyurl.com/nikolovinn",
      description: "Professional networking and career opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaboration, have a project in mind, or just want to discuss technology? 
            I'd love to hear from you.
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