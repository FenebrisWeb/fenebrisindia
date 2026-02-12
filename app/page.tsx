import About from "./components/sections/About";
import HeroSlider from "./components/sections/HeroSlider";
import Industries from "./components/sections/Industries";
import LogoCarousel from "./components/sections/LogoCarousel";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <main className="w-full bg-background">
      <HeroSlider />
      <LogoCarousel />
      <About />
      <Services />
      <Industries />
    </main>
  );
}