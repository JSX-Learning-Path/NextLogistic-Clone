import React from "react";
import PieChart from "./charts/PieChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/dist/client/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BarChart } from "@mui/x-charts/BarChart";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const History = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex w-full min-w-0 flex-col md:flex-row">
        {/* LEFT */}
        <div className="min-w-0 w-full space-y-6 rounded-xl bg-[#E9EFFF] p-5 md:p-[50px]">
          <h5 className="text-sm font-semibold text-indigo-500">
            HISTORY
            <hr className="w-[30px] border-blue-600" />
          </h5>

          <h2 className="mt-5 text-2xl font-bold text-blue-600">
            <span className="text-2xl font-extrabold text-black/70">
              Logistic,
            </span>{" "}
            that drives the future
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Next Logistic was founded in 2011 with the vision of providing
            innovative and comprehensive logistics solutions. A year later, the
            company expanded its operations with Truck Ferry, a leading platform
            for ferry bookings. Today, the company is a recognized leader and
            part of the largest logistics group in the Balkans and Turkey.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            With an impressive fleet of 1,500 trucks, 3,000 trailers, 35
            locomotives, 805 wagons, and a network of 7,800 trusted
            subcontractors, the company provides services in more than 30
            countries. In 2023, it achieved a 32% growth in transport
            operations, continuing to set standards for sustainability,
            efficiency, and innovation in the logistics industry.
          </p>

          {/* Charts */}
          <div className="flex min-w-0 flex-col gap-4 md:flex-row">
            <div className="min-w-0 w-full rounded-lg bg-white p-4 shadow">
              <h4 className="text-gray-500">Annual Revenue</h4>

              <div className="w-full overflow-hidden">
                <PieChart />
              </div>
            </div>

            <div className="min-w-0 w-full rounded-lg bg-white p-4 shadow">
              <h4 className="text-gray-500">
                General Financial Results Next Logistics & Truck Ferry
              </h4>

              <div className="w-full overflow-hidden">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["2020", "2021", "2022", "2023", "2024"],
                    },
                  ]}
                  series={[
                    {
                      data: [6400, 27500, 38700, 38400, 29800],
                    },
                  ]}
                  width={300}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex flex-col md:flex md:flex-row px-10">
            <div className="bg-blue-600 flex gap-2 text-sm mt-10 py-5 rounded-xl md:pb-10">
              <CheckCircleIcon sx={{ color: "white" }} />
              <p className="text-white text-sm">
                Logistics services combining efficiency, innovation, and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, ensuring flexibility and uncompromising reliability.
              </p>
            </div>
            <div className="mt-10">
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["2020", "2021", "2022", "2023", "2024"],
                  },
                ]}
                series={[
                  {
                    data: [6400, 27500, 38700, 38400, 29800],
                  },
                ]}
                width={300}
                height={250}
              />
            </div>
          </div>
          <div className="hidden md:hidden xl:px-10 xl:mt-5 xl:flex xl:flex-wrap xl:gap-2">
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Cost Optimization
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Modern Fleet
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Ecology
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Planning
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Security
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Express Deliveries
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Monitoring
            </span>
            <span className=" border border-blue-600 text-blue-600 rounded-2xl p-1 inline-flex flex-row items-center gap-1 text-sm hover:bg-blue-100/50">
              <CheckCircleIcon className="text-blue-600" />
              Technology and innovation
            </span>
          </div>
          <div className="relative mt-10 px-10">
            <Image
              src="/mercedes-trucks.png"
              alt="Mercedes Trucks"
              width={900}
              height={300}
              className="relative rounded-lg"
            />
            <div className="absolute top-10 left-50 text-xl font-extrabold text-white flex flex-row gap-5">
              <div className="flex flex-col items-start gap-2 text-lg">
                <span>1500</span>
                <span>Trucks</span>
              </div>
              <div className="flex flex-col items-start gap-2 text-lg">
                <span>3000</span>
                <span>Trailers</span>
              </div>
              <div className="flex flex-col items-start gap-2 text-lg">
                <span>7800</span>
                <span>Subcontractors</span>
              </div>
            </div>
            <Link
              href="/roadTransport"
              className="absolute bottom-5 right-20  text-white flex flex-row gap-5"
            >
              Road Transport <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
