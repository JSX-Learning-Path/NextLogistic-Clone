import Image from "next/image";
import Link from "next/link";

type Card = {
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
};

const cards: Card[] = [
  {
    label: "Combined transport",
    title: "More Sustainable and Efficient Solutions",
    text: "Combined transport is a key part of our green logistics, reducing carbon emissions and optimizing resources. Combining sea and road transport allows larger cargo to be transported with less energy, making deliveries not only more cost-effective but also more eco-friendly.",
    image: "/green-combined.jpg",
    alt: "Ro-Ro ship in port next to containers",
    href: "/combined-transport",
  },
  {
    label: "Intermodal transport",
    title: "Lower Emissions, Greater Efficiency",
    text: "Intermodal transport is at the core of our green logistics, combining rail, road, and sea transport to minimize carbon emissions. By utilizing energy-efficient trains and optimized routes, we reduce our environmental footprint.",
    image: "/green-intermodal.jpg",
    alt: "Freight train in autumn forest",
    href: "/intermodal-transport",
  },
];

function TransportCards() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-20 md:px-12 lg:grid-cols-2 lg:px-0">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg"
          >
            {/* Image */}
            <div className="relative h-[250px] overflow-hidden md:h-[320px]">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-8 py-9">
              <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
                {card.label}
              </h6>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {card.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.text}
              </p>

              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#2962ff] transition-colors hover:text-slate-900"
              >
                Read more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransportCards;