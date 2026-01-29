import logo from "@/assets/logo_docconmigo.jpg";

export const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-3">
      <div className="flex justify-center">
        <img 
          src={logo} 
          alt="DocConmigo - Vive sano vive feliz" 
          className="h-10 sm:h-12 w-auto"
        />
      </div>
    </header>
  );
};
