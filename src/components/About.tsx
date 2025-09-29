import { Card } from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import profileImage from "@/assets/ivan-nikolov-rec.jpeg";

const About = () => {
  const highlights = [
    {
      number: "13+",
      label: "Years Experience",
      description: "Building enterprise software solutions"
    },
    {
      number: "1",
      label: "Company Acquisition",
      description: "Crucial contributor to the successful sale of our company."
    },
    {
      number: "2",
      label: "SaaS Products",
      description: "From idea to market release"
    },
    {
      number: "30+",
      label: "Projects Delivered",
      description: "Mostly in the AEC industry"
    },
    {
      number: "30+",
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
          <div className="mb-20">
            <Avatar className="w-64 h-64 mx-auto mb-6 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Ivan Nikolov" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My unique perspective comes from combining a Bachelor's in Information and Communication 
                Technology from VIA University College in Horsens, Denmark, with a Master's in IT Product Design. 
                This dual foundation gives me both deep technical expertise and a profound understanding of users, 
                business context, and design thinking.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 13 years in software development, I've evolved from a passionate coder to a 
                strategic technical leader who bridges the gap between complex technical solutions and 
                real user needs. I don't just build software—I craft experiences that solve meaningful problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                This rare combination of technical mastery and user-centered design thinking is my USP. 
                I lead teams that build scalable, maintainable solutions while always keeping the end user 
                and business objectives at the heart of every decision.
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