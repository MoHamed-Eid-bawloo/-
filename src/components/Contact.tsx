import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_vf70m2j",   // استبدل بـ Service ID من EmailJS
        "template_5p3eyir",  // استبدل بـ Template ID من EmailJS
        formRef.current,
        "BeGelGdgHDgIuBK9H"    // استبدل بـ Public Key من EmailJS
      )
      .then(
        () => {
          toast({
            title: "تم إرسال رسالتك بنجاح ✅",
            description: "سنتواصل معك في أقرب وقت ممكن",
          });
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          toast({
            title: "حصل خطأ ❌",
            description: "من فضلك حاول مرة تانية",
          });
          console.error(error);
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف / واتساب",
      content: "01157241423",
      link: "tel:01157241423",
    },
    {
      icon: MapPin,
      title: "المقر الرئيسي",
      content: "قرية صفط أبو جرج - بني مزار - المنيا",
      link: "#",
    },
    {
      icon: Facebook,
      title: "فيسبوك",
      content: "تابعنا على فيسبوك",
      link: "https://www.facebook.com/mohamed.frghaly.1",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن دائماً في خدمتك.. تواصل معنا لأي استفسار أو اقتراح
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={info.link} className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1">{info.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-elegant animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="h-48 sm:h-56 md:h-64 bg-muted relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55025.87735116384!2d30.8!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiAzMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 shadow-elegant animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">أرسل رسالة</h3>
                <p className="text-sm md:text-base text-muted-foreground">سنرد عليك في أقرب وقت</p>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name">الاسم *</Label>
                <Input id="contact-name" name="name" required placeholder="أدخل اسمك" className="text-right" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">الهاتف *</Label>
                  <Input id="contact-phone" name="phone" type="tel" required placeholder="01XXXXXXXXX" className="text-right" />
                </div>

              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">الرسالة *</Label>
                <Textarea id="contact-message" name="message" required placeholder="اكتب رسالتك هنا..." className="min-h-[150px] text-right" />
              </div>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gradient-primary text-white shadow-elegant text-lg"
              >
                {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
