import Image from "next/image";

function HeroInterModal() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b3d91]  min-h-[70svh] lg:min-h-[100vh]">
      {/* Background image */}
      <Image
        src="/railHero.png"
        alt="PIMK Rail intermodal freight train"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Card */}
      <div className="absolute inset-x-4 bottom-6 z-20 mx-auto sm:bottom-10 sm:w-[660px] lg:w-[900px]">
        <div className="rounded-2xl bg-blue-600/80 px-6 py-6 text-center text-white shadow-xl backdrop-blur-sm sm:px-8 sm:py-8">
          <h2 className="text-xl font-extrabold uppercase tracking-wide sm:text-2xl lg:text-3xl">
            RAILWAY NETWORK
          </h2>
          <h3 className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">
            FREIGHT TRANSPORTATION
          </h3>

          <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-sm">
            Our operational capacity includes modern locomotives, a wide
            specialized fleet of freight wagons, and valid transport licenses
            across Bulgaria, Serbia, and Turkey. The rolling stock is tailored
            to specific cargo requirements, ensuring flexibility, efficiency,
            and high adaptability. Terminals in Zlatitrap and Chataldja provide
            an integrated, strategic infrastructure for receiving, processing,
            and coordinating diverse cargo types.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroInterModal;
