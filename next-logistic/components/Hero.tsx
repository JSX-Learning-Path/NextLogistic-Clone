import Image from "next/image";
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
        width={1920}
        height={1080}
        priority
        // sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white w-full">
        {/* Stats like in image */}
        <div className="flex md:mb-15 flex-wrap items-center justify-center gap-6  scrollbar-none px-6 text-sm md:gap-10 md:text-base text-white/90">
          <div className="flex items-center gap-2 pr-4 border-r border-white">
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

          <div className=" flex items-center text-center border-r border-white pr-4">
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
          <div className="flex items-center gap-2 pr-4 border-r border-white ">
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
          <div className="hidden  md:flex items-center text-center border-r border-white pr-4">
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
          <div className="hidden  md:flex items-center gap-2 pr-4  ">
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
        <div className="group mb-6 flex flex-col xl:flex-row xl:justify-end items-center gap-6 transition-all duration-700">
          <div className="md:relative md:inline-block">
            <Image
              src="/logo.png"
              alt="Nextlogistic Logo"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain  transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="hidden xl:relative md:hidden xl:block">
            <Image
              src="/aside-next-logo.png"
              alt="Aside Next Logo"
              width={320}
              height={250}
              className="h-auto"
            />

            <div className="absolute bottom-8 inset-0 flex items-center justify-center">
              <Image
                src="/cosmonavt.png"
                alt="Cosmonavt"
                width={170}
                height={200}
                className=" transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
