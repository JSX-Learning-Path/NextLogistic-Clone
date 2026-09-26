import WhyChooseUs from "@/components/WhyChooseUs";
import HeroInterModal from "@/components/HeroInterModal";
import InterModalTransport from "@/components/InterModalTransport-1";
import ApproachTerminal from "@/components/Approach-Terminal";

function InterModalTransportPage() {
  return (
    <div className="min-h-screen">
      <HeroInterModal />
      <InterModalTransport />
      <ApproachTerminal />
      <WhyChooseUs />
    </div>
  );
}

export default InterModalTransportPage;
