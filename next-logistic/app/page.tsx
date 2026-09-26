import Hero from "@/components/Hero";
import History from "@/components/History";
import GridGallery from "@/components/GridGallery";
import TransportServices from "@/components/TransportServeices";
import LogisticView from "@/components/LogisticView";
import GreenLogistic from "@/components/GreenLogistic";
import InterModalTransport from "@/components/InterModalTransport";
import ProfessionalsPeople from "@/components/ProfessionalsPeople";
import SocialMedia from "@/components/SocialMedia";
import WordOfLogistic from "@/components/WordofLogistic";
import MomentOfTrust from "@/components/MomentOfTrust";
function Home() {
  return (
    <>
      <Hero />
      <History />
      <GridGallery />
      <TransportServices />
      <GreenLogistic />
      <LogisticView />
      <InterModalTransport />
      <ProfessionalsPeople />
      <MomentOfTrust />
      <SocialMedia />
      <WordOfLogistic />
    </>
  );
}
export default Home;
