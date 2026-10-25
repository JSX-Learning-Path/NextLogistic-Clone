import Image from "next/image";

const BLUE = "#dde9fc";

const stripes = {
  backgroundImage: `repeating-linear-gradient(135deg, ${BLUE} 0 4px, transparent 4px 11px)`,
};

const dots = {
  backgroundImage: `radial-gradient(${BLUE} 3px, transparent 3.5px)`,
  backgroundSize: "19px 19px",
};

function Plus({ className }: { className: string }) {
  return (
    <div className={`absolute h-[52px] w-[52px] ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-[10px] -translate-x-1/2 bg-[#dde9fc]" />
      <div className="absolute left-0 top-1/2 h-[10px] w-full -translate-y-1/2 bg-[#dde9fc]" />
    </div>
  );
}

function Decorations() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {/* Top */}
      <div className="absolute left-[27%] top-0 h-[108px] w-[110px]" style={stripes} />
      <div className="absolute left-[16.8%] top-0 h-[24px] w-[128px] border-4 border-t-0 border-[#dde9fc]" />
      <div className="absolute right-0 top-0 h-[207px] w-[235px] bg-[#dde9fc]" />
      <Plus className="left-[69.5%] top-[62px]" />

      {/* Outlined square + filled inner (behind collage) */}
      <div className="absolute left-[42.6%] top-[90px] h-[205px] w-[207px] border-4 border-[#dde9fc]" />
      <div className="absolute left-[44.4%] top-[124px] h-[138px] w-[138px] bg-[#dde9fc]" />

      {/* Left side */}
      <Plus className="left-[20.3%] top-[280px]" />
      <div className="absolute left-[8%] top-[375px] h-[108px] w-[80px]" style={stripes} />
      <div className="absolute left-[16.5%] top-[525px] h-[86px] w-[86px] bg-[#dde9fc]" />
      <Plus className="left-[5.3%] top-[662px]" />
      <div className="absolute left-[10.8%] bottom-0 h-[10px] w-[225px] bg-[#dde9fc]" />

      {/* Center bottom */}
      <div className="absolute left-[29.8%] top-[506px] h-[190px] w-[215px] bg-[#dde9fc]" />
      <div className="absolute left-[29.8%] top-[593px] h-[90px] w-[10px]" style={stripes} />
      <div className="absolute left-[29.8%] top-[620px] h-[100px] w-[120px]" style={stripes} />
      <div className="absolute left-[69.7%] top-[665px] h-[70px] w-[128px] border-4 border-b-0 border-[#dde9fc]" />
      <div className="absolute left-[70.8%] top-[686px] h-[48px] w-[84px] bg-[#dde9fc]" />

      {/* Right bottom */}
      <div className="absolute left-[80.6%] top-[478px] h-[246px] w-[246px] border-[10px] border-[#dde9fc]" />
      <div className="absolute left-[62.4%] top-[535px] h-[80px] w-[86px]" style={dots} />
      <div className="absolute left-[78.9%] top-[535px] h-[80px] w-[80px]" style={stripes} />
      <div className="absolute left-[86.8%] top-[266px] h-[126px] w-[105px]" style={dots} />
    </div>
  );
}

function OurCauses() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Decorations />

      <div className="relative z-10 mx-auto grid min-h-[730px] max-w-[1500px] items-center gap-10 px-4 py-20 md:px-12 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div className="max-w-[720px]">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2962ff]">
            Our causes
            <hr className="mt-2 w-[35px] border-t-2 border-[#2962ff]" />
          </h6>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Good things begin{" "}
            <span className="text-[#2962ff]">when you lend a hand</span>
          </h2>

          <p className="mt-5 text-sm leading-[26px] text-slate-600 md:text-base">
            Being successful doesn&apos;t only mean building a business. It
            means building a community that creates value for others. It means
            seeing beyond your own needs and believing that every action guided
            by kindness leaves a mark.
          </p>

          <p className="mt-4 text-sm leading-[26px] text-slate-600 md:text-base">
            We believe business isn&apos;t only numbers, logistics and
            strategy. Real value is measured by what we leave behind, by the
            help we give, and by the good we share. Success means something
            when you can offer hope, lend a hand in a difficult moment, make
            someone&apos;s life better. Every act of kindness, however small it
            may seem, can be the beginning of something great. We believe that
            gestures of compassion build the world we want to live in, because
            they are what lead to real change.
          </p>

          <p className="mt-4 text-sm leading-[26px] text-slate-600 md:text-base">
            Lending a hand is a choice.
          </p>
        </div>

        {/* Right - collage */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/our-causes-collage.png"
            alt="Photos from our charity initiatives"
            width={700}
            height={530}
            className="h-auto w-full max-w-[700px] lg:mr-[7%]"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCauses;