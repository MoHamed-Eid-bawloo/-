import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "15 يناير 2025",
      location: "بني مزار",
      title: "لقاء مع شباب بني مزار لمناقشة فرص التدريب والتوظيف",
      description:
        "عقد المرشح محمد فرغلي لقاءً موسعاً مع شباب مدينة بني مزار لمناقشة التحديات التي تواجههم في سوق العمل وفرص التدريب المتاحة. تم خلال اللقاء الاستماع إلى مقترحات الشباب وتقديم رؤية واضحة لدعم المشاريع الصغيرة.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    },
    {
      date: "10 يناير 2025",
      location: "صفط أبو جرج",
      title: "زيارة ميدانية لمشروع الصرف الصحي",
      description:
        "قام المرشح بجولة تفقدية لمتابعة سير العمل في مشروع الصرف الصحي بقرية صفط أبو جرج، والذي يهدف إلى حل المشاكل المزمنة التي يعاني منها الأهالي. تم خلال الزيارة الاجتماع مع المسؤولين والتأكيد على ضرورة إنجاز المشروع في المواعيد المحددة.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    },
    {
      date: "5 يناير 2025",
      location: "مغاغة",
      title: "اجتماع مع الجمعيات الأهلية لدعم الأسر المحتاجة",
      description:
        "في إطار التواصل المستمر مع مؤسسات المجتمع المدني، التقى محمد فرغلي بممثلي عدد من الجمعيات الأهلية بمدينة مغاغة لبحث سبل تعزيز الدعم للأسر الأكثر احتياجاً. تم الاتفاق على تنظيم قوافل خدمية متنوعة خلال الفترة القادمة.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            الأخبار والفعاليات
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            آخر أخبار الحملة والفعاليات الميدانية واللقاءات مع المواطنين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-elegant hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
