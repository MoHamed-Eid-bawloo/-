import { GraduationCap, HeartPulse, Building2, Users, Sprout, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import educationImg from "@/assets/education.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import infrastructureImg from "@/assets/infrastructure.jpg";
import youthImg from "@/assets/youth-sports.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import womenImg from "@/assets/women-empowerment.jpg";

const Program = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "التعليم",
      image: educationImg,
      points: [
        "تحديث وصيانة المدارس القائمة وتوفير بيئة تعليمية مناسبة",
        "دعم المعلمين من خلال برامج التدريب المستمر وتحسين الرواتب",
        "إدخال التكنولوجيا الحديثة في الفصول الدراسية",
        "توفير منح دراسية للطلاب المتفوقين",
        "إنشاء مراكز للتقوية مجانية لمساعدة الطلاب",
      ],
    },
    {
      icon: HeartPulse,
      title: "الصحة",
      image: healthcareImg,
      points: [
        "تطوير المستشفيات والمراكز الصحية بأحدث المعدات",
        "توفير الأدوية الأساسية بشكل مستمر ومجاني للمحتاجين",
        "تعزيز خدمات الإسعاف والطوارئ على مدار الساعة",
        "تنظيم قوافل طبية دورية للقرى النائية",
        "دعم برامج الرعاية الصحية للأمهات والأطفال",
      ],
    },
    {
      icon: Building2,
      title: "البنية التحتية",
      image: infrastructureImg,
      points: [
        "إصلاح وتطوير شبكة الطرق الداخلية والرئيسية",
        "توسيع شبكات المياه النظيفة لكافة المناطق",
        "تحسين نظام الصرف الصحي والتخلص من المشاكل المزمنة",
        "تطوير البنية التحتية للاتصالات والإنترنت",
        "تحسين الإنارة العامة لزيادة الأمان",
      ],
    },
    {
      icon: Users,
      title: "الشباب والرياضة",
      image: youthImg,
      points: [
        "إنشاء مراكز شبابية ورياضية حديثة",
        "دعم المبادرات الشبابية والمشاريع الصغيرة",
        "توفير برامج تدريب وتأهيل مهني للشباب",
        "تنظيم بطولات رياضية محلية وإقليمية",
        "إنشاء حاضنات أعمال لدعم رواد الأعمال الشباب",
      ],
    },
    {
      icon: Sprout,
      title: "الزراعة والاقتصاد",
      image: agricultureImg,
      points: [
        "دعم الفلاحين بتوفير الأسمدة والبذور بأسعار مخفضة",
        "تطوير شبكات الري وتحديث أساليب الزراعة",
        "إنشاء أسواق محلية لتسويق المنتجات الزراعية",
        "تشجيع المشروعات الصغيرة والمتوسطة",
        "توفير قروض ميسرة للمشاريع الاقتصادية",
      ],
    },
    {
      icon: UserCheck,
      title: "تمكين المرأة",
      image: womenImg,
      points: [
        "دعم المرأة العاملة من خلال برامج تدريبية متخصصة",
        "توفير فرص عمل متساوية للمرأة في كافة المجالات",
        "إنشاء حضانات لأطفال الأمهات العاملات",
        "تشجيع المشاريع النسائية الصغيرة",
        "برامج توعية حول حقوق المرأة ودورها في المجتمع",
      ],
    },
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            البرنامج الانتخابي
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            برنامج شامل يركز على التنمية المستدامة وتحسين جودة الحياة لكافة المواطنين
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-elegant hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 gradient-hero opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <program.icon className="w-16 h-16 mb-3" />
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {program.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
