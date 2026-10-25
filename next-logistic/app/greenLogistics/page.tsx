import React from "react";
import GreenLogisticsHero from "@/components/GreenLogisticsHero";
import GreenLogisticsFuture from "@/components/GreenLogisticsFuture";
import GreenEcoFriendlyLogistics from "@/components/GreenEcoFriendlyLogistics";
import GreenEnergyTransport from "@/components/GreenEnergyTransport";
import GreenPolicy from "@/components/Greenpolicy";
import TransportCards from "@/components/Greentransport";
const GreenLogisticsPage = () => {
  return (
    <div>
      <GreenLogisticsHero />
      <GreenLogisticsFuture />
      <GreenEcoFriendlyLogistics />
      <GreenEnergyTransport />
      <TransportCards />
      <GreenPolicy />
    </div>
  );
};

export default GreenLogisticsPage;