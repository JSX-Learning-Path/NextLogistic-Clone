import Image from "next/image";

const HeroRoad = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b3d91] min-h-[90svh]  lg:min-h-screen">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/10 to-black/10"></div>
      <Image
        src="/road-transport-trucks.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 text-center text-white pb-2 mx-3 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:w-1/2 xl:mx-auto">
        <div className="bg-blue-600 rounded-xl w-full opacity-90 px-5 ">
          <h2 className="uppercase text-3xl font-bold mb-2 md:text-3xl md:mb-3 lg:text-5xl lg:mb-2">
            {" "}
            Leader in road transport
          </h2>
          <h4 className="text-xl font-semibold uppercase">
            Uncompromising Logistics
          </h4>

          <p className="pt-5 text-white text-sm font-semibold md:text-sm ">
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
