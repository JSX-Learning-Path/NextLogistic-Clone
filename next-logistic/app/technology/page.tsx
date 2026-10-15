import HeroTechnology from "../../components/HeroTechnology";
import LogisticInnovation from "../../components/Logistic-Innovation";
import WhyWorkWithUs from "../../components/WhyWorkWithUs";
import TechnologyAndInnovation from "../../components/TechnologyAndInnovation";
import TechnicalAndCreative from "../../components/Technical&Creative";
import InnovationSpirit from "../../components/InnovationSpirit";

function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <HeroTechnology />
      <LogisticInnovation />
      <WhyWorkWithUs />
      <TechnologyAndInnovation />
      <TechnicalAndCreative />
      <InnovationSpirit />
    </div>
  );
}

export default TechnologyPage;
