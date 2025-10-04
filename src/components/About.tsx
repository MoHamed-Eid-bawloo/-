import { CheckCircle, Heart, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const timeline = [
    { year: "2010", title: "بداية العمل الميداني", description: "انطلاق العمل في خدمة المجتمع المحلي" },
    { year: "2015", title: "تأسيس المبادرات", description: "إطلاق مبادرات تنموية في التعليم والصحة" },
    { year: "2020", title: "توسيع النطاق", description: "تطوير المشاريع لتشمل كافة القرى" },
    { year: "2025", title: "الترشح للبرلمان", description: "تحويل الخبرة إلى سياسات فعّالة" },
  ];

  const values = [
    { icon: Heart, title: "الإخلاص", description: "العمل بصدق من أجل خدمة المجتمع" },
    { icon: Target, title: "الرؤية الواضحة", description: "خطط عملية قابلة للتنفيذ" },
    { icon: Users, title: "الشراكة", description: "العمل مع الجميع لتحقيق الأهداف" },
    { icon: CheckCircle, title: "الإنجاز", description: "تحويل الوعود إلى واقع ملموس" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            من هو محمد فرغلي؟
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مرشح مجلس النواب الذي يؤمن بقوة التغيير الحقيقي من خلال العمل الجاد والتخطيط السليم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">القصة والنشأة</h3>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                ولد ونشأ في قرية صفط أبو جرج، حيث تعلم منذ الصغر معنى التكافل الاجتماعي والعمل الجماعي.
                عاش تحديات المجتمع المحلي وفهم احتياجاته عن قرب.
              </p>
              <p>
                منذ أكثر من 12 عاماً، بدأ رحلة العمل الميداني والخدمي، مؤمناً بأن التغيير الحقيقي
                يبدأ من القاعدة ومن خلال العمل المباشر مع المواطنين.
              </p>
              <p className="font-semibold text-primary">
                "الشعارات وحدها لا تكفي، نحن بحاجة إلى حلول عملية قابلة للتنفيذ وليس مجرد وعود"
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">الرؤية والهدف</h3>
            <div className="space-y-4 md:space-y-6">
              <Card className="p-6 shadow-elegant">
                <h4 className="text-xl font-bold mb-3 text-secondary">الخبرة</h4>
                <p className="text-muted-foreground">
                  أكثر من 12 سنة في العمل الميداني والخدمي، مع تجربة ثرية في إدارة المشاريع التنموية
                  والعمل مع مختلف شرائح المجتمع.
                </p>
              </Card>
              <Card className="p-6 shadow-elegant">
                <h4 className="text-xl font-bold mb-3 text-secondary">المنهج</h4>
                <p className="text-muted-foreground">
                  الاعتماد على الحلول العملية القابلة للتنفيذ بدلاً من الشعارات، مع إشراك المواطنين
                  في صناعة القرار وتحديد الأولويات.
                </p>
              </Card>
              <Card className="p-6 shadow-elegant">
                <h4 className="text-xl font-bold mb-3 text-secondary">الطموح</h4>
                <p className="text-muted-foreground">
                  خلق فرص حقيقية للشباب، تحسين التعليم والصحة والبنية التحتية، وبناء مستقبل أفضل
                  للأجيال القادمة.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-primary">مسيرة الإنجازات</h3>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-1 gradient-hero" />
            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <Card className="p-4 md:p-6 shadow-elegant hover:shadow-glow transition-shadow">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{item.year}</div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-6 h-6 rounded-full gradient-hero shadow-glow flex-shrink-0" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-primary">القيم والمبادئ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 text-center shadow-elegant hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full gradient-hero mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2">{value.title}</h4>
                <p className="text-xs md:text-base text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
