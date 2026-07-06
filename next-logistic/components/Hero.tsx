import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden w-full bg-[#0b3d91]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      <Image
        src="/hero-trucks.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover opacity-100"
      />
      {/* Add your content here */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        {/* Stats like in image */}
        <div className="md:mt-10 flex flex-wrap items-center justify-center gap-10 text-sm md:text-base text-white/80">
          <div className="flex items-center gap-2 pr-4 border-r border-white/80">
            <LocalShippingIcon
              sx={{ fontSize: 35 }}
              className="mx-auto mb-2 hover:scale-110 transition-transform duration-800"
            />
            <div className="pl-2">
              <p className="text-sm font-bold text-white">1500</p>
              <p className="text-sm">TRUCKS</p>
            </div>
            <div className="pl-2">
              <p className="text-sm font-bold text-white">3000</p>
              <p className="text-sm">TRAILERS</p>
            </div>
          </div>

          <div className="flex items-center text-center border-r border-white/80 pr-4">
            <span>
              <DirectionsBoatFilledIcon
                sx={{ fontSize: 35 }}
                className="mx-auto mb-2 hover:scale-110 transition-transform duration-800"
              />
            </span>
            <div className="pl-2">
              <p className="text-sm font-bold text-white">170</p>
              <p className="text-sm">DIFFERENT ROUTES</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white">35</p>
            <p>LOCOMOTIVES</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white">805</p>
            <p>WAGONS</p>
          </div>
        </div>
        {/* Logo container */}
        <div className="group mb-6 transition-all duration-300">
          <div className="relative inline-block">
            <img
              src="/logo.png"
              alt="Nextlogistic Logo"
              className="w-270 h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
