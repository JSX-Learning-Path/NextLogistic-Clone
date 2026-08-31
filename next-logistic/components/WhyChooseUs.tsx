import Image from "next/image";
import Link from "next/link";
import WorkIcon from "@mui/icons-material/Work";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeedIcon from "@mui/icons-material/Speed";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";

function WhyChooseUs() {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col  min-h-[650px] w-full md:flex-row mt-10">
        {/* Left */}
        <div className="w-full md:w-1/2 md:max-w-[850px] px-8 md:px-16 md:flex md:flex-col lg:px-20 lg:mt-10">
          <h5 className="text-blue-600 font-bold uppercase">Why Choose Us</h5>
          <hr className="mt-2 w-[35px] border-blue-600" />
          <h2 className="text-xl font-bold leading-tight md:text-4xl lg:text-3xl mt-3">
            Your confidant{" "}
            <span className="text-blue-600"> partner in logistics</span>
          </h2>
          <p className="mt-3 text-sm leading-6 md:text-base">
            Our main goal is to provide the best logistics solution that not
            only optimizes costs but also ensures full control over every stage
            of the process, guaranteeing reliable delivery.
          </p>
          <div className="flex flex-row items-center gap-3 mt-5">
            <SpeedIcon
              className="text-blue-500 bg-blue-100 rounded-full p-1"
              sx={{ fontSize: 30 }}
            />

            <p>
              <span className="font-bold">Speed and flexibility:</span> In the
              dynamic world of modern business, every minute is precious, we
              understand that speed and flexibility are key to our clients'
              success.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 mt-5">
            <LocationOnIcon
              className="text-blue-500 bg-blue-100  rounded-full p-1"
              sx={{ fontSize: 30 }}
            />
            <p>
              <span className="font-bold">Accessibility:</span> Our deliveries
              cover a wide range of destinations, ensuring seamless service even
              in remote and hard-to-reach areas.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 mt-5">
            <WorkIcon
              className="text-blue-500 bg-blue-100  rounded-full p-1"
              sx={{ fontSize: 30 }}
            />
            <p>
              <span className="font-bold">Professional approach:</span> We
              guarantee high standards of service and complete security during
              transportation, every stage of the process is carried out with
              attention to detail.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 mt-5">
            <QueryStatsIcon
              className="text-blue-500 bg-blue-100  rounded-full p-1"
              sx={{ fontSize: 30 }}
            />
            <p>
              <span className="font-bold">Data-driven decisions:</span> We use
              advanced analytics and real-time data to optimize logistics
              processes, ensuring maximum efficiency and cost-effectiveness.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full mt-5 px-5 md:w-1/2 xl:w-1/2 ">
          {/* Image */}
          <div className="grid grid-cols-2 grid-rows-2 ">
            <div className="relative min-h-[350px] flex items-center">
              <Image
                src="/5-1/girl.png"
                alt="Girl"
                loading="eager"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-blue-600/30"
              />
              <div className="relative z-20 flex flex-col  gap-2 p-4">
                <TrendingUpIcon
                  aria-hidden="true"
                  className="relative z-20"
                  sx={{
                    color: "white",
                    fontSize: 44,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: 1,
                    mb: 3,
                  }}
                />
                <h3 className="relative z-20 text-white uppercase font-bold text-xl">
                  Career Development
                </h3>
                <p className="text-white text-sm leading-6 relative z-20 font-bold">
                  We create an environment where everyone has a chance to
                  develop their potential.
                </p>
                <Link href="#" className="absolute top-1/1 z-30 text-white">
                  Read more
                </Link>
              </div>
            </div>
            <div className="relative min-h-[350px] flex items-center">
              <Image
                src="/5-1/vsCode.png"
                alt="VS Code"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-blue-600/30"
              />
              <div className="relative z-20 flex flex-col gap-2 p-4">
                <RocketLaunchIcon
                  className="relative z-20"
                  sx={{
                    color: "white",
                    fontSize: 44,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: 1,
                    mb: 3,
                  }}
                />
                <h3 className="relative z-20 text-white uppercase font-bold text-xl">
                  Technologies
                </h3>
                <p className="text-white text-sm leading-6 relative z-20  font-bold">
                  We implement state-of-the-art technologies to optimize our
                  logistics services.
                </p>
                <Link href="#" className="absolute top-1/1 z-30 text-white">
                  Read more
                </Link>
              </div>
            </div>
            <div className="relative min-h-[350px] flex items-center">
              <Image
                src="/5-1/green-logistic.png"
                alt="Green Logistic"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-black/10"
              />
              <div className="relative z-20 flex flex-col gap-2 p-4">
                <DirectionsBoatFilledIcon
                  className="relative z-20"
                  sx={{
                    color: "white",
                    fontSize: 44,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: 1,
                    mb: 3,
                  }}
                />
                <h3 className="relative z-20 text-white uppercase font-bold text-xl">
                  Green Logistics
                </h3>
                <p className="text-white text-sm leading-6 relative z-20  font-bold">
                  We are committed to sustainable logistics, using
                  environmentally friendly methods.
                </p>
                <Link href="#" className="absolute top-1/1 z-30 text-white">
                  Read more
                </Link>
              </div>
            </div>
            <div className="relative min-h-[350px] flex items-center">
              <Image
                src="/5-1/education.png"
                alt="Education"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-top object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-black/10"
              />
              <div className="relative z-20 flex flex-col gap-2 p-4">
                <SchoolIcon
                  className="relative z-20"
                  sx={{
                    color: "white",
                    fontSize: 44,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: 1,
                    mb: 3,
                  }}
                />
                <h3 className="relative z-20 text-white uppercase font-bold text-xl">
                  Academy
                </h3>
                <p className="text-white text-sm leading-6 relative z-20  font-bold">
                  Academy A platform created to support the professional
                  development of the team.
                </p>
                <Link href="#" className="absolute top-1/1 z-30 text-white">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
