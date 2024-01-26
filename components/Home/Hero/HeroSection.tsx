import HeroAnimationController from "./HeroAnimationController";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-40px)] max-h-[760px] min-h-[600px] bg-slate-100">
      <HeroAnimationController />
    </div>
  );
};

export default HeroSection;
