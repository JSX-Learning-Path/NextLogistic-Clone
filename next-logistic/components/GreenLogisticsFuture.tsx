import Image from "next/image";

type Feature = {
  title: string;
  text: string;
};

type ChartItem = {
  label: string;
  legend: string;
  value: number;
  color: string;
};

const features: Feature[] = [
  {
    title: "Reliable deliveries",
    text: "We guarantee accuracy and security with well-coordinated teams and a modern fleet.",
  },
  {
    title: "Sustainable logistics",
    text: "We combine economical routes and low-emission transport for the benefit of nature.",
  },
  {
    title: "Efficient deliveries",
    text: "Automated planning, fast response, and full traceability at every step.",
  },
  {
    title: "Responsible business",
    text: "We apply sustainable principles to our clients, teams, and the environment around us.",
  },
];

const chartData: ChartItem[] = [
  { label: "CNG", legend: "CNG", value: 20, color: "#7bc67a" },
  { label: "LNG", legend: "LNG", value: 25, color: "#5cb85c" },
  { label: "RO-RO", legend: "Combined", value: 80, color: "#2fa44a" },
  { label: "RAIL", legend: "Intermodal", value: 90, color: "#1e8e3e" },
];

const total = chartData.reduce((sum, item) => sum + item.value, 0);

// conic-gradient за кръговата диаграма
const pieGradient = (() => {
  let acc = 0;
  const stops = chartData.map((item) => {
    const start = (acc / total) * 100;
    acc += item.value;
    const end = (acc / total) * 100;
    return `${item.color} ${start}% ${end}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
})();

function GreenLogisticsFuture() {
  return (
    <section className="w-full bg-[#dce9f7]">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-4 py-20 md:px-12 lg:grid-cols-[460px_1fr] lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
            Green logistics
            <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
          </h6>

          <h2 className="mt-8 text-3xl font-bold text-slate-900 md:text-4xl">
            For a cleaner <span className="text-[#2962ff]">future</span>
          </h2>

          <p className="mt-8 text-sm leading-7 text-slate-600 md:text-base">
            Next Logistic is proud of its contribution to reducing harmful
            emissions through sustainable solutions. Our transport group uses
            innovative strategies and eco-conscious technology for a greener
            future in logistics.
          </p>

          <p className="mt-12 text-center text-base font-bold uppercase tracking-widest text-slate-900">
            Switch to
          </p>

          <div className="mt-5 overflow-hidden rounded-full">
            <Image
              src="/green-switch.png"
              alt="Switch to green logistics"
              width={460}
              height={155}
              className="h-[155px] w-full object-cover"
            />
          </div>

          <p className="mt-4 text-center text-base text-slate-900">
            greener logistics, together with us
          </p>

          <p className="mt-10 text-sm leading-7 text-slate-600 md:text-base">
            Through the innovative solutions we use, our group saves up to
            140,000 tonnes of CO2 emissions a year. We invest in Ro-Ro and
            intermodal transport, and our services prove that efficient
            logistics can be environmentally responsible.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-3">
          {/* Features */}
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-2 lg:col-start-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-t border-white/60 lg:col-span-2 lg:col-start-2" />

          {/* Bar chart */}
          <div className="flex items-end justify-center gap-4 lg:justify-start">
            {chartData.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div
                  className="flex w-[65px] items-center justify-center text-sm text-slate-900"
                  style={{
                    height: `${item.value * 3.3}px`,
                    backgroundColor: item.color,
                  }}
                >
                  {item.value}%
                </div>
                <span className="mt-3 text-xs text-slate-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Pie chart + legend */}
          <div className="flex flex-col items-center justify-end">
            <div
              className="h-[200px] w-[200px] rounded-full"
              style={{ background: pieGradient }}
            />

            <ul className="mt-8 w-full max-w-[250px] space-y-2">
              {chartData.map((item) => (
                <li
                  key={item.legend}
                  className="flex items-center justify-between text-sm font-bold"
                  style={{ color: item.color }}
                >
                  <span>{item.legend}</span>
                  <span>{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate */}
          <div className="flex items-end justify-center lg:justify-end">
            <div className="rounded-md bg-white p-1 shadow-md">
              <Image
                src="/greenTruckFerry.png"
                alt="CO2 emissions reduction certificate"
                width={248}
                height={350}
                className="h-auto w-[248px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenLogisticsFuture;