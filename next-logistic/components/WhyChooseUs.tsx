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
        <div className="w-full md:w-1/2 md:max-w-[750px] px-8 md:px-16 lg:px-20">
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
          <div>
            <SpeedIcon
              className="text-blue-600 bg-blue-100 mt-5  rounded-full p-1"
              sx={{ fontSize: 30 }}
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2"></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
