import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/ivan-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      <div className="relative z-10 container mx-auto px-6 text-center pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Ivan Nikolov" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground mb-2 block text-2xl md:text-3xl font-normal">Hi, I'm</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ivan Nikolov
            </span>
            <br />
            <span className="text-foreground">Software Developer & Leader</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            13 years of experience building scalable solutions and leading high-performing development teams
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto">
            Transforming ideas into robust software architectures while mentoring the next generation of developers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;