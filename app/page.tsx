import HeroSlider from "./components/sections/HeroSlider";
import LogoCarousel from "./components/sections/LogoCarousel";

export default function Home() {
  return (
    <main className="w-full bg-background">
      <HeroSlider />
      <LogoCarousel />
    </main>
  );
}