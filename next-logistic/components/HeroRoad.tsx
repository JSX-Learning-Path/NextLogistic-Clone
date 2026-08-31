import Image from "next/image";

const HeroRoad = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden bg-[#0b3d91] lg:min-h-screen">

      {/* Hero image */}
      <Image
        src="/road-transport-trucks.png"
        alt="Hero Image"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 text-center text-white xl:top-1/2 xl:bottom-auto xl:-translate-y-1/2 xl:mx-auto xl:w-1/2">
        <div className="w-full rounded-xl bg-blue-600 px-6 py-8 opacity-90 md:px-10 md:py-10">

          <h2 className="mb-2 text-3xl font-bold uppercase md:text-3xl lg:mb-2 lg:text-5xl">
            Leader in road transport
          </h2>

          <h4 className="text-xl font-semibold uppercase">
            Uncompromising Logistics
          </h4>

          <p className="pt-5 text-sm font-semibold text-white">
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