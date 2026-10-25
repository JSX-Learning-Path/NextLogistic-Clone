import Image from "next/image";
import Link from "next/link";

type Cause = {
  title: string;
  text: string;
  href: string;
  image?: string;
  alt?: string;
};

const causes: Cause[] = [
  {
    title: "Regional Natural History Museum - Plovdiv",
    text: "Next Logistic is a donor and long-term supporter of one of the most impressive exhibits at the Regional Natural History Museum – Plovdiv - the reef aquarium ....",
    href: "/causes/natural-history-museum-plovdiv",
  },
  {
    title: "We Supported Victory One - Lucas Lepri Jiu Jitsu",
    text: "As part of one of the important causes supported by Next Logistic and the Bosneshki Foundation , we are proud to have supported the Victory One – Lucas Lepri...",
    href: "/causes/victory-one-lucas-lepri",
    image: "/causes-victory-one.jpg",
    alt: "Children with medals from the Victory One jiu jitsu event",
  },
];

function RecentInitiatives() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-12 lg:px-0">
        <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
          All causes
          <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
        </h6>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Recent initiatives we&apos;ve taken part in
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="flex min-h-[556px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {/* Image */}
              {cause.image && (
                <div className="relative h-[357px] w-full bg-[#f3f6fd]">
                  <Image
                    src={cause.image}
                    alt={cause.alt ?? cause.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-6 py-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {cause.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {cause.text}
                  </p>
                </div>

                <Link
                  href={cause.href}
                  className="mt-6 inline-block text-sm font-semibold text-[#2962ff] transition-colors hover:text-slate-900"
                >
                  Learn more ›
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentInitiatives;