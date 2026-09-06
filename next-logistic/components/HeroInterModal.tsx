import Image from "next/image";

function HeroInterModal() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b3d91] min-h-[70svh] lg:min-h-[80vh]">
      {/* Background image */}
      <Image
        src="/inter-modal-transport-train.png"
        alt="PIMK Rail intermodal freight train"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Subtle overlay for image richness (kept light so photo colors stay vivid) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Card */}
      <div className="absolute inset-x-4 bottom-6 z-20 mx-auto sm:bottom-10 sm:w-[660px] lg:w-[900px]">
        <div className="rounded-2xl bg-blue-600/90 px-6 py-6 text-center text-white shadow-xl backdrop-blur-sm sm:px-8 sm:py-8">
          <h2 className="text-xl font-extrabold uppercase tracking-wide sm:text-2xl lg:text-3xl">
            The intermodal future
          </h2>
          <h3 className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">
            Next-generation logistics
          </h3>

          <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-sm">
            Intermodal transport efficiently combines road, sea and rail into
            integrated logistics solutions with optimised timelines and costs.
            It uses established Ro-Ro and Ro-Pax connections through key ports
            in Italy, Greece and Turkey. Within this network, the company is
            helping build the first intermodal transport corridor between
            Bulgaria and Turkey, providing daily departures between Zlatitrap
            and Çatalca.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroInterModal;
