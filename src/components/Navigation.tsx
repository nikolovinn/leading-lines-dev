import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t.nav.name}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.experience}
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.education}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.skills}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.projects}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t.nav.contact}
            </Button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'DE' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;