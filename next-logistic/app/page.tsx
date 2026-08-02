import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import History from "@/components/History";
import GridGallery from "@/components/GridGallery";
import TransportServices from "@/components/TransportServeices";
export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <GridGallery />
      <TransportServices />
      <Footer />
    </>
  );
}
