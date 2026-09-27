import Image from "next/image";

function AwardDistinctions() {
  return (
    <section className="w-full ">
      <div className="flex min-h-[650px] py-20 w-full flex-col md:flex-row">
        {/* Left */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          {/* Overlay */}
          <Image
            src="/boss-award.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              Award
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[450px] text-xl font-extrabold leading-tight md:text-xl lg:text-4xl">
              Winner of the Grimaldi Excellence Awards
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
          <Image
            src="/award-distinct.png"
            alt="Monitoring Green Logistic"
            width={1000}
            height={205}
            className="h-[750px] w-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white md:px-16 lg:px-20">
            <h6 className="text-sm font-bold uppercase">
              Distinctions
              <hr className="mt-2 w-[35px] border-white" />
            </h6>

            <h2 className="mt-3 max-w-[450px] text-xl font-extrabold leading-tight md:text-xl lg:text-4xl">
              1st place in the Gepard ranking
            </h2>

            <p className="mt-5 max-w-[450px] text-sm leading-6 md:text-base">
              In 2015, Truck Ferry Ltd. was awarded 1st place in the “Gepard”
              ranking of the most dynamic small and medium-sized companies in
              Bulgaria by Capital magazine. The company serves 90% of Bulgarian
              hauliers travelling to Italy and Spain, establishing itself as a
              leader offering quality and security to its clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardDistinctions;
