import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "program", label: "البرنامج" },
    { id: "news", label: "الأخبار" },
    { id: "gallery", label: "المعرض" },
    { id: "join", label: "انضم إلينا" },
    { id: "contact", label: "تواصل معنا" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
<div className="flex items-center gap-3">
  <div
    className={`text-2xl font-bold bg-clip-text text-transparent transition-colors duration-300 ${
      isScrolled
        ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"
        : "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300"
    }`}
  >
    محمد فرغلي
  </div>
  <div
    className={`hidden md:block text-sm transition-colors duration-300 ${
      isScrolled ? "text-gray-700" : "text-gray-200"
    }`}
  >
    مرشح مجلس النواب 2025
  </div>
</div>



          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right py-3 px-4 hover:bg-muted rounded-lg transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
