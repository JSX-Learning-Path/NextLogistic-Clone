import Image from "next/image";
import Link from "next/link";
import WorkIcon from "@mui/icons-material/Work";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeedIcon from "@mui/icons-material/Speed";

function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="flex min-h-[650px] w-full md:flex-row mt-10">
        {/* Left */}
        <div className="w-full  md:w-1/2 md:max-w-[850px] px-8 md:px-16 md:flex md:flex-col lg:px-20">
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
        <div className="w-full md:w-1/2"></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
