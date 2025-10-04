import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "ما الذي يميز برنامج محمد فرغلي الانتخابي؟",
      answer:
        "برنامجنا الانتخابي يتميز بكونه واقعياً وقابلاً للتنفيذ، وليس مجرد وعود وشعارات. نحن نركز على الحلول العملية المبنية على خبرة أكثر من 12 عاماً في العمل الميداني والخدمي. البرنامج يغطي ستة محاور رئيسية: التعليم، الصحة، البنية التحتية، الشباب والرياضة، الزراعة والاقتصاد، وتمكين المرأة.",
    },
    {
      question: "كيف يمكنني المشاركة في الحملة الانتخابية؟",
      answer:
        "يمكنك المشاركة بعدة طرق: التسجيل كمتطوع من خلال نموذج 'انضم للحملة' على موقعنا، المشاركة في الفعاليات والندوات، نشر أخبار الحملة على وسائل التواصل الاجتماعي، أو التواصل المباشر مع مقر الحملة. كل مساهمة، مهما كانت صغيرة، تساعدنا في إيصال رسالتنا للمواطنين.",
    },
    {
      question: "أين يقع المقر الرئيسي للحملة؟",
      answer:
        "المقر الرئيسي للحملة يقع في قرية صفط أبو جرج، مع وجود مكاتب فرعية في بني مزار ومغاغة والعدوة. يمكنك زيارتنا في أي وقت خلال ساعات العمل، أو التواصل معنا عبر الهاتف على الرقم 01157241423 أو واتساب.",
    },
    {
      question: "ما هي أولويات محمد فرغلي في حال الفوز بمقعد البرلمان؟",
      answer:
        "الأولوية الأولى ستكون تحسين البنية التحتية خاصة الطرق والمياه والصرف الصحي، تليها تطوير التعليم والصحة. سنعمل أيضاً على دعم المشاريع الصغيرة والمتوسطة لخلق فرص عمل للشباب، ودعم الزراعة والفلاحين. كل هذا سيتم بالتنسيق مع الأهالي واحتياجاتهم الفعلية.",
    },
    {
      question: "كيف ستتم متابعة تنفيذ الوعود الانتخابية؟",
      answer:
        "نؤمن بالشفافية والمساءلة. سننشر تقارير دورية عن إنجازاتنا وتقدم المشاريع على الموقع الإلكتروني ووسائل التواصل الاجتماعي. كما سنعقد لقاءات دورية مع المواطنين للاستماع لملاحظاتهم ومتابعة تنفيذ البرنامج الانتخابي. مكتبنا سيكون دائماً مفتوحاً للجميع.",
    },
    {
      question: "ما هي رؤية محمد فرغلي للشباب والمرأة؟",
      answer:
        "الشباب هم عماد المستقبل، ونخطط لإنشاء مراكز تدريب وتأهيل مهني، ودعم المشاريع الريادية وحاضنات الأعمال. أما بالنسبة للمرأة، فنؤمن بأهمية تمكينها اقتصادياً واجتماعياً من خلال برامج التدريب، توفير فرص عمل متساوية، ودعم المشاريع النسائية الصغيرة.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            الأسئلة المتكررة
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة شيوعاً حول المرشح والبرنامج الانتخابي
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-elegant hover:shadow-glow transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-right text-lg font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
