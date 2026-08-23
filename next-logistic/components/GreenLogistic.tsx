import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function GreenLogistic() {
  return (
    <section className="bg-white">
      <div className="mt-5 ">
        <div className="relative overflow-hidden">
          <Image
            src="/green-logistic.png"
            alt="Description"
            width={1750}
            height={900}
            className="object-cover md:object-contain md:h-full w-full"
          />

          <div className="absolute inset-0 flex flex-col justify-center w-full md:w-1/2  px-4 md:px-10">
            <h2 className="text-sm md:text-base uppercase text-white font-extrabold">
              Green Logistic
            </h2>

            <hr className="border-white w-[50px]" />

            <h2 className="text-xl md:text-xl pt-5 uppercase text-white font-bold">
              Sustainability milestones with sustainable growth for the period
              2019-2023
            </h2>

            <p className="text-base md:text-sm pt-5 text-white">
              Next Logistic follows a green policy, placing ecology at the heart
              of its solutions. In 2023, the company saved over 140,000 tons of
              CO₂ emissions through rail, intermodal, combined, and river
              transport solutions, reaffirming its commitment to sustainable
              development.
            </p>

            <button className="bg-blue-600 inline-flex rounded-2xl justify-center items-center gap-1 mt-3 w-fit px-4">
              <Link
                href="/green-logistic"
                className="py-3 text-white text-extrabold"
              >
                Read More
              </Link>

              <ChevronRightIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenLogistic;
