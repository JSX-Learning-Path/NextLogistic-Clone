import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import TrainIcon from "@mui/icons-material/Train";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden w-full bg-[#0b3d91] ">
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-blue-600/60"></div>
      <Image
        src="/hero-trucks.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        {/* Stats like in image */}
        <div className="flex md:mb-15 flex-nowrap items-center justify-center gap-6 overflow-x-auto scrollbar-none px-6 text-sm md:gap-10 md:text-base text-white/90">
          <div className="shrink-0 flex items-center gap-2 pr-4 border-r border-white">
            <span>
              <LocalShippingIcon
                sx={{
                  fontSize: 35,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: " scale(1.12)",
                  },
                }}
                className="mx-auto mb-2"
              />
            </span>
            <div className="pl-2">
              <p className="font-bold text-white">1500</p>
              <p className="text-sm">TRUCKS</p>
            </div>
            <div className="pl-2">
              <p className="font-bold text-white">3000</p>
              <p className="text-sm">TRAILERS</p>
            </div>
          </div>

          <div className="shrink-0 flex items-center text-center border-r border-white pr-4">
            <span>
              <DirectionsBoatFilledIcon
                sx={{
                  fontSize: 35,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: "scale(1.12)",
                  },
                }}
                className="mx-auto mb-2"
              />
            </span>
            <div className="flex flex-col pl-3">
              <p className="font-bold text-white">170</p>
              <p className="text-sm">
                <span className="block">DIFFERENT</span>
                <span className="block">ROUTES</span>
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 pr-4 border-r border-white ">
            <span>
              <TrainIcon
                sx={{
                  fontSize: 35,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: " scale(1.12)",
                  },
                }}
                className="mx-auto mb-2"
              />
            </span>
            <div className="pl-2">
              <p className="font-bold text-white">35</p>
              <p className="text-sm">LOCOMOTIVES</p>
            </div>
            <div className="pl-2">
              <p className="font-bold text-white">805</p>
              <p className="text-sm">WAGONS</p>
            </div>
          </div>
          <div className="hidden shrink-0 md:flex items-center text-center border-r border-white pr-4">
            <span>
              <DirectionsBoatFilledIcon
                sx={{
                  fontSize: 35,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: " scale(1.12)",
                  },
                }}
                className="mx-auto mb-2"
              />
            </span>
            <div className="pl-3">
              <p className="font-bold text-white">170</p>
              <p className="text-sm">
                <span className="block">DIFFERENT</span>
                <span className="block">ROUTES</span>
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 md:flex items-center gap-2 pr-4  ">
            <span>
              <TrainIcon
                sx={{
                  fontSize: 35,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: " scale(1.12)",
                  },
                }}
                className="mx-auto mb-2"
              />
            </span>
            <div className="pl-2">
              <p className=" font-bold text-white">35</p>
              <p className="text-sm">LOCOMOTIVES</p>
            </div>
            <div className="pl-2">
              <p className="font-bold text-white">805</p>
              <p className="text-sm">WAGONS</p>
            </div>
          </div>
        </div>
        {/* Logo container */}
        <div className="group mb-6 transition-all duration-300">
          <div className="relative inline-block">
            <img
              src="/logo.png"
              alt="Nextlogistic Logo"
              className="hero-image w-250 h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
