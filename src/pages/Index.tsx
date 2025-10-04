import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import VolunteerForm from "@/components/VolunteerForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Program />
      <News />
      <Gallery />
      <Testimonials />
      <VolunteerForm />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
