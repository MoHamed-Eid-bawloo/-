import { Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">محمد فرغلي</h3>
            <p className="text-white/80 leading-relaxed">
              مرشح مجلس النواب 2025 عن دائرة بني مزار والعدوة ومغاغة. معاً من أجل مستقبل أفضل
              لقرية صفط أبو جرج والمحافظة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {["الرئيسية", "من نحن", "البرنامج", "الأخبار", "المعرض", "انضم إلينا", "تواصل معنا"].map(
                (link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(["hero", "about", "program", "news", "gallery", "join", "contact"][index])}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:01157241423" className="text-white/80 hover:text-white transition-colors">
                  01157241423
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-white/80">info@mohamedfarghaly.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5" />
                <a href="https://www.facebook.com/mohamed.frghaly.1" className="text-white/80 hover:text-white transition-colors">
                  تابعنا على فيسبوك
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-white/80">
            © 2025 فريق حملة محمد فرغلي - جميع الحقوق محفوظة
          </p>
<p className=" text-white/80">
  <a
    href="https://www.facebook.com/mohamed.eidalsaid?locale=ar_AR" 
    target="_blank"
    rel="noopener noreferrer"  >
    إعداد المهندس: محمد عيد السيد
  </a>
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
