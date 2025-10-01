import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground mb-4 md:mb-0">
            {t.footer.copyright}
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/nikolovinn/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.linkedinLabel}
            </a>
            <a 
              href="mailto:nkolov.inn@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.emailLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;