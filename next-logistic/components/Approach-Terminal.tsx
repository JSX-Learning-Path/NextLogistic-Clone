import Image from "next/image";
import Link from "next/link";

function ApproachTerminal() {
  return (
    <section className="w-full bg-[#0A1B3D] ">
      <div className="flex min-h-[650px] py-20 w-full flex-col md:flex-row">
        {/* Left */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-r from-slate-900/70 " />

          <Image
            src="/green-approach1.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              Operational approach
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[650px] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              A sustainable path to modern logistics
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-6 md:text-base">
              Intermodal transport is not just a method but a vision for the
              future - one where we unite the different transport modes (road,
              rail and sea) into a single optimised and efficient cargo journey.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-r from-slate-900/70" />

          <Image
            src="/green-terminal.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              About the terminal
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[650px] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              The first intermodal terminal in Bulgaria
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-6 md:text-base">
              With a total area of 77,342 sq.m and a 6,500 sq.m parking zone,
              the terminal meets all European safety and efficiency standards
              and features a dedicated zone for cooling and heating containers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachTerminal;
