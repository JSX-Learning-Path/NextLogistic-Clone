import HeroCareer from "../../components/HeroCareer";
import OpportunitiesWithOutLimits from "../../components/OpportunitiesWithOutLimits";
import OpenPositions from "../../components/OpenPositions";
import QuestionsAboutTheProcess from "../../components/QuestionsAboutTheProcess";
import CareerWithVision from "../../components/CareerWithVision";
import SocialMedia from "../../components/SocialMedia";

function CareersPage() {
  return (
    <div className="pt-[60px]">
      <HeroCareer />
      <OpportunitiesWithOutLimits />
      <OpenPositions />
      <QuestionsAboutTheProcess />
      <CareerWithVision />
      <SocialMedia />
    </div>
  );
}
export default CareersPage;
