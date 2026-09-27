import WhyChooseUs from "@/components/WhyChooseUs";
import HeroRail from "@/components/HeroRail"
import RailTransport1 from "@/components/RailTransport-1";
import RailApproach from "@/components/RailApproach";

function RailTransport() {
  return (
    <div className="min-h-screen">
      <HeroRail />
      <RailTransport1 />
      <RailApproach />
      <WhyChooseUs />
    </div>
  );
}

export default RailTransport;
