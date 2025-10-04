import { Card } from "@/components/ui/card";
import { Quote, User } from "lucide-react"; // 👈 ضيفنا أيقونة يوزر

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمود",
      location: "صفط أبو جرج",
      text: "محمد فرغلي وقف معانا وقت الأزمات، مش بس وعود ده شغل على أرض الواقع. ربنا يوفقه ويكون عند حسن ظن الجميع.",
    },
    {
      name: "فاطمة حسن",
      location: "بني مزار",
      text: "داعم للشباب ومهتم بمشاكلنا اليومية. عنده خطة واضحة للتعليم والصحة وده اللي محتاجينه.",
    },
    {
      name: "عبد الله إبراهيم",
      location: "مغاغة",
      text: "الراجل فاهم احتياجات الناس لأنه عايش بينا وبيشوف اللي بنعانيه. ده اللي المنطقة محتاجاه.",
    },
    {
      name: "سميرة علي",
      location: "العدوة",
      text: "برنامجه للمرأة والأسرة مش مجرد كلام، في مشاريع حقيقية بتساعد الستات تشتغل وتعيش كريم.",
    },
    {
      name: "محمود السيد",
      location: "بني مزار",
      text: "كنت شفته بنفسي في القرية أكتر من مرة، بيسمع للناس ومش بيوعد بالمستحيل، ده نموذج نفسنا نشوفه في البرلمان.",
    },
    {
      name: "نادية فتحي",
      location: "صفط أبو جرج",
      text: "ساعدنا في مشروع المياه والصرف، وكان متابع شخصياً لحد ما اتحل الموضوع. ده جد مش هزار.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            آراء المواطنين
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ماذا يقول المواطنون عن المرشح محمد فرغلي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 shadow-elegant hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <User className="w-6 h-6" /> {/* 👈 أيقونة اليوزر بدل الصورة */}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
