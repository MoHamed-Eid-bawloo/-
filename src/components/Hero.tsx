import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-candidate.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="محمد فرغلي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
            محمد فرغلي
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
            مرشح مجلس النواب 2025
          </div>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 px-4">
            عن دائرة بني مزار والعدوة ومغاغة
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 leading-relaxed px-4">
            معاً من أجل مستقبل أفضل
            <br />
            <span className="text-secondary-light">لشمال المنيا</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center px-4 max-w-4xl mx-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection("join")}
              className="bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-elegant w-full sm:w-auto"
            >
              انضم للحملة
              <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("program")}
              className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-sm w-full sm:w-auto"
            >
              شاهد البرنامج الانتخابي
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 backdrop-blur-sm w-full sm:w-auto"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
