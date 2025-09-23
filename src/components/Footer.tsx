const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Developer Portfolio. Crafted with passion and precision.
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;