import CraftsMenShip from "@/components/Home/CraftsMenShip";
import DazzleYourself from "@/components/Home/DazzleYourself";
import FAQ from "@/components/Home/FAQ";
import FadeOutCollection from "@/components/Home/FadeOutCollection";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/Hero/HeroSection";
import JewelryMagicDiscovery from "@/components/Home/JewelryMagicDiscovery";
import LatestTrends from "@/components/Home/LatestTrends";
import NewCollection from "@/components/Home/NewCollection";
import OccasionJewelrySpotlight from "@/components/Home/OccasionJewelrySpotlight";
import QuickLinks from "@/components/Home/QuickLinks";
import ShineTheDreams from "@/components/Home/ShineTheDreams";
import SpotLight from "@/components/Home/SpotLight";
import StunningCollection from "@/components/Home/StunningCollection";
import Testimonial from "@/components/Home/Testimonial";
import Divider from "@/components/Home/Divider";

export default function Home() {
  return (
    <main className="absolute top-0 w-full">
      <HeroSection />
      <OccasionJewelrySpotlight />
      <Divider />
      <JewelryMagicDiscovery />
      <FadeOutCollection />
      <LatestTrends />
      <SpotLight />
      <ShineTheDreams />
      <CraftsMenShip />
      <NewCollection />
      <DazzleYourself />
      <StunningCollection />
      <FAQ />
      <Testimonial />
      <QuickLinks />
      <Footer />
    </main>
  );
}
