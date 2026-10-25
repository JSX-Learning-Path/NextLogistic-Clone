import Image from "next/image";

type Route = {
  name: string;
  value: string;
  width: number; // % от максималната дължина на лентата
};

const images: { src: string; alt: string }[] = [
  { src: "/green-policy1.jpg", alt: "Eco Valencia ferry in port" },
  { src: "/green-policy2.jpg", alt: "Truck Ferry route map" },
  { src: "/green-policy3.jpg", alt: "Ship deck and sea view" },
  { src: "/green-policy4.jpg", alt: "Grimaldi hybrid Ro-Ro zero emission in port" },
];

const routes: Route[] = [
  { name: "Brindisi – Igoumenitsa", value: "−2,350", width: 100 },
  { name: "Ancona – Igoumenitsa", value: "−1,653", width: 81 },
  { name: "Ancona – Patras", value: "−1,379", width: 68 },
  { name: "Barcelona – Civitavecchia", value: "−867", width: 49 },
  { name: "Savona – Barcelona", value: "−681", width: 49 },
];

function GreenPolicy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-20 md:px-12 lg:px-0">
        <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
          Green policy
          <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
        </h6>

        <h2 className="mt-6 max-w-[700px] text-2xl font-bold leading-snug text-slate-900">
          Reduce <span className="text-[#2962ff]">carbon emissions</span> with
          combined transport. Choose the{" "}
          <span className="text-[#2962ff]">sustainable</span> solution.
        </h2>

        <div className="mt-6 grid gap-10 lg:grid-cols-[700px_1fr]">
          {/* Left - images */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative h-[200px] overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right - stats card */}
          <div className="flex flex-col rounded-2xl bg-[#1a306f] p-7 text-white">
            <div className="flex flex-col justify-between gap-6 border-b border-dashed border-white/30 pb-5 md:flex-row">
              <p className="max-w-[390px] text-sm leading-5">
                Truck Ferry offers solutions for sustainable mobility and
                environmental protection. This eco-friendly approach helps
                significantly reduce carbon emissions.
              </p>

              <div className="md:text-right">
                <p className="text-5xl font-extrabold leading-none">−69 487</p>
                <p className="mt-1 text-xs">
                  Total saved ton CO<sub>2e</sub>
                </p>
              </div>
            </div>

            {/* Routes */}
            <div className="mt-10 flex flex-1 flex-col justify-end gap-2 lg:mt-0">
              {routes.map((route) => (
                <div key={route.name} className="flex items-center">
                  <div
                    className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-slate-900"
                    style={{ width: `${route.width * 0.86}%` }}
                  >
                    {route.name}
                  </div>
                  <span className="ml-3 whitespace-nowrap text-xs font-bold">
                    {route.value} kg CO<sub>2</sub>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenPolicy;