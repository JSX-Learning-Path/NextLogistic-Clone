import Image from "next/image";

type Feature = {
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    title: "Euro 6 and Alternative Fuels for Lower Emissions",
    text: "We operate modern transport vehicles that significantly reduce carbon footprint and improve air quality.",
  },
  {
    title: "Smart Navigation Systems for Efficient Routes",
    text: "By leveraging advanced GPS technologies and real-time traffic analysis, we minimize empty runs and optimize fuel consumption.",
  },
  {
    title: "Investments in Modern Technologies",
    text: "We integrate innovative technologies that streamline logistics processes and lead to more sustainable transport solutions.",
  },
];

function GreenEnergyTransport() {
  return (
    <section className="w-full bg-[#dce9f7]">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-12 md:px-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col">
          {/* Navy box */}
          <div className="bg-[#1a306f] px-8 py-14 text-white md:px-16">
            <h2 className="max-w-[560px] text-2xl font-bold leading-snug md:text-3xl">
              Energy Efficient Road Transport: Greener Shipping, Cleaner Future
            </h2>

            <p className="mt-5 max-w-[580px] text-sm leading-6 md:text-base">
              We invest in modern and energy-efficient fleet vehicles that
              reduce fuel consumption and carbon emissions. By utilizing
              low-energy trucks, hybrid, and LNG (liquefied natural gas)
              technologies, we optimize deliveries while protecting the
              environment.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-1 flex-col justify-center gap-10 px-8 py-12 md:px-16">
            {features.map((feature) => (
              <div key={feature.title} className="max-w-[560px]">
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex h-[500px] flex-col overflow-hidden rounded-2xl md:h-[720px]">
          <div className="relative flex-[41]">
            <Image
              src="/green-road-transport.jpg"
              alt="Next Logistic energy efficient road transport"
              fill
              className="object-cover"
            />
          </div>
 
          <div className="relative flex-[59]">
            <Image
              src="/green-road-transport1.jpg"
              alt="Next Logistic green logistics"
              fill
              className="object-cover"
            />
          </div>
          </div>
      </div>
    </section>
  );
}

export default GreenEnergyTransport;