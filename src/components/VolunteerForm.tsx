import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import emailjs from "@emailjs/browser";

const VolunteerForm = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vf70m2j", // حط هنا service id من EmailJS
        "template_2wakqne", // حط هنا template id
        form.current,
        { publicKey: "BeGelGdgHDgIuBK9H" } // حط هنا الـ public key
      )
      .then(
        () => {
          toast({
            title: "شكراً لانضمامك!",
            description: "سيتم التواصل معك قريباً من فريق الحملة",
          });
          form.current?.reset();
        },
        (error) => {
          toast({
            title: "حدث خطأ",
            description: "من فضلك حاول مرة أخرى",
            variant: "destructive",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="join" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            انضم للحملة
          </h2>
          <div className="w-24 h-1 gradient-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            كن جزءاً من التغيير وساهم في بناء مستقبل أفضل لمنطقتك
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 shadow-elegant animate-slide-up">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">سجّل الآن كمتطوع</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  املأ البيانات التالية وسنتواصل معك
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل *</Label>
                <Input
                  id="name"
                  name="user_name"
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="text-right"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    name="user_phone"
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    className="text-right"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <Label htmlFor="city">المدينة / القرية *</Label>
                <Input
                  id="city"
                  name="user_city"
                  required
                  placeholder="مثال: صفط أبو جرج، بني مزار، مغاغة..."
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">مهاراتك / مجالات المساعدة</Label>
                <Textarea
                  id="skills"
                  name="message"
                  placeholder="مثال: تنظيم الفعاليات، التصميم، التسويق الإلكتروني..."
                  className="min-h-[120px] text-right"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-white shadow-elegant text-lg"
              >
                انضم الآن للفريق
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
