import Image from "next/image";
// import Link from "next/link";

function RailApproach() {
  return (
    <section className="w-full bg-[#0A1B3D] ">
      <div className="flex min-h-[650px] py-20 w-full flex-col md:flex-row">
        {/* Left */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-r from-slate-900/70 " />

          <Image
            src="/rail-freight.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              A NEW LEVEL OF CONNECTIVITY
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[450px] text-xl font-extrabold leading-tight md:text-xl lg:text-4xl">
              Rail Freight
              <br /> Transport Between Bulgaria and Serbia
            </h2>

            <p className="mt-5 max-w-[470px] text-sm leading-6 md:text-base">
              Licensed rail transport between Bulgaria and Serbia with a focus
              on reliable service, optimized routes, and enhanced regional
              logistics connectivity.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50 bg-gradient-to-r from-slate-900/70" />

          <Image
            src="/rail-licensed.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              THREE INTERNATIONAL LICENSES
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[450px] text-xl font-extrabold leading-tight md:text-xl lg:text-4xl">
              Licensed Services
              <br /> in Bulgaria, <br /> Serbia, and Turkey
            </h2>

            <p className="mt-5 max-w-[450px] text-sm leading-6 md:text-base">
              We hold three international licenses for rail freight operations
              across Bulgaria, Serbia, and Turkey, enabling direct access to key
              markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RailApproach;
