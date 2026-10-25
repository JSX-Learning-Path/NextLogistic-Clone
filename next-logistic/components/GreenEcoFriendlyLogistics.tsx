import Image from "next/image";
import Link from "next/link";

function GreenEcoFriendlyLogistics() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1500px] gap-4 px-4 py-12 md:px-12 lg:grid-cols-2">
        {/* Top left - text */}
        <div className="flex min-h-[300px] flex-col justify-between py-1 lg:pr-4">
          <div>
            <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
              Eco-friendly logistics
              <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
            </h6>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Fewer emissions.{" "}
              <span className="text-[#2962ff]">A greener future</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Reducing harmful emissions is at the core of our vision for
              sustainable logistics. Through efficient transport solutions,
              optimised routes, and eco-conscious technology, we contribute to
              a cleaner future. We invest in intermodal transport,
              energy-efficient vehicles, and intelligent management systems to
              minimise our environmental footprint.
            </p>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/intermodal-transport"
              className="inline-block rounded-xl bg-[#2962ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-slate-900"
            >
              Intermodal transport ›
            </Link>
          </div>
        </div>

        {/* Top right - train */}
        <div className="relative h-[300px] overflow-hidden rounded-xl">
          <Image
            src="/green-train.jpg"
            alt="Intermodal rail transport"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom left - ship */}
        <div className="relative h-[300px] overflow-hidden rounded-xl">
          <Image
            src="/green-ship.jpg"
            alt="Eco Mediterranea Ro-Ro ship"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom right - green card */}
        <div className="flex min-h-[300px] flex-col justify-center rounded-bl-[200px] rounded-tl-[60px] rounded-tr-[200px] bg-gradient-to-br from-[#76b774] to-[#3cb95c] px-8 py-8 md:px-12">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
            Optimised routes
            <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
          </h6>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Eco-friendly combined{" "}
            <span className="text-[#2962ff]">transport</span>
          </h2>

          <p className="mt-4 max-w-[650px] text-sm leading-6 text-slate-700 md:text-base md:leading-7">
            By optimising sea and land routes we reduce the carbon footprint -
            using more efficient vehicles, shortening distances, and minimising
            transit times.
          </p>

          <div className="mt-6 flex justify-end">
            <Link
              href="/combined-transport"
              className="inline-block rounded-xl bg-[#2962ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-slate-900"
            >
              Combined transport ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenEcoFriendlyLogistics;