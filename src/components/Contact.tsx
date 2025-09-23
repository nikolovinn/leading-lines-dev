import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "hello@developer.com",
      description: "Best for detailed discussions and project inquiries"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/developer",
      description: "Professional networking and career opportunities"
    },
    {
      title: "GitHub",
      value: "github.com/developer",
      description: "Check out my code and open source contributions"
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
                  {method.description}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-card to-card/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you need technical leadership, system architecture, or full-stack development expertise, 
              I'm here to help bring your vision to life.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;