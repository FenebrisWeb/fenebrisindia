import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";
import HeroSlider from "./components/sections/HeroSlider";
import Industries from "./components/sections/Industries";
import LogoCarousel from "./components/sections/LogoCarousel";
import PartnerSlider from "./components/sections/PartnerSlider";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="w-full bg-background">
      <HeroSlider />
      <LogoCarousel />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <FAQ />
      <PartnerSlider />
    </main>
  );
}