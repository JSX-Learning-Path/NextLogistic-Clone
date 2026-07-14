import Image from "next/image";

const HeroRoad = () => {
  return (
    <section className="relative h-screen overflow-hidden w-full bg-[#0b3d91] ">
      <div className=" h-screen absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      <Image
        src="/road-transport-trucks.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover opacity-100"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 ">
        <div className=" bg-blue-500 rounded w-1/2 ">
          <h2 className="uppercase"> Leader in land transport</h2>
          <h4>Uncompromising Logistics</h4>

          <p className="pt-10">
            The largest logistics group in the Balkans with established
            transport networks across Europe and the Middle East. We organize
            road transport with over 7,800 subcontractors and a fleet of Euro 6,
            LNG, and CNG vehicles. We provide secure, sustainable, and
            environmentally friendly logistics solutions with full
            predictability and uncompromising accuracy. Our in-house tracking
            and real-time management systems ensure maximum transport
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroRoad;
