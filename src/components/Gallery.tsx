import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import villageImg from "@/assets/village-landscape.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=600&fit=crop",
      title: "لقاء جماهيري",
      category: "الحملة",
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      title: "اجتماع مع الأهالي",
      category: "الفعاليات",
    },
    {
      src: villageImg,
      title: "صفط أبو جرج",
      category: "القرية",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      title: "زيارة ميدانية",
      category: "الميدان",
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      title: "لقاء مع الشباب",
      category: "لقاءات",
    },
    {
      src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop",
      title: "الحملة الانتخابية",
      category: "الحملة",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            معرض الصور
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            لحظات من الحملة الانتخابية والفعاليات الميدانية واللقاءات مع المواطنين
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer shadow-elegant hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                    <div className="text-sm font-semibold mb-1">{image.category}</div>
                    <div className="text-lg font-bold">{image.title}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="معاينة"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
