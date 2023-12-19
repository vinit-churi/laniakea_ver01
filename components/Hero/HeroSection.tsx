import Navbar from "../Navbar";
import HeroAnimationController from "./HeroAnimationController";

const HeroSection = () => {
  return (
    <div className="bg-slate-100 min-h-[600px] h-[calc(100vh-40px)] max-h-[760px] relative">
      <Navbar />
      <HeroAnimationController />
    </div>
  );
};

export default HeroSection;
