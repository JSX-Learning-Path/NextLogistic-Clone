import React from "react";
import PieChart from "./charts/PieChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/dist/client/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BarChart } from "@mui/x-charts/BarChart";

const History = () => {
  return (
    <section className=" bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="space-y-6 bg-[#E9EFFF] p-[50px] rounded-xl w-1/2">
          <h5 className="text-sm text-indigo-500 font-semibold">
            HISTORY
            <hr className="border-blue-600 w-[30px]" />
          </h5>
          <h2 className="text-blue-600 mt-5 font-bold text-2xl">
            <span className="text-2xl font-extrabold text-black/70">
              Logistic,
            </span>
            that drives the future
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed ">
            Next Logistic was founded in 2011 with the vision of providing
            innovative and comprehensive logistics solutions. A year later, the
            company expanded its operations with Truck Ferry, a leading platform
            for ferry bookings. Today, the company is a recognized leader and
            part of the largest logistics group in the Balkans and Turkey.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed ">
            With an impressive fleet of 1,500 trucks, 3,000 trailers, 35
            locomotives, 805 wagons, and a network of 7,800 trusted
            subcontractors, the company provides services in more than 30
            countries. In 2023, it achieved a 32% growth in transport
            operations, continuing to set standards for sustainability,
            efficiency, and innovation in the logistics industry.
          </p>
          <div className="flex flex-col gap-2 w-1/2 flex-col md:flex-row">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-gray-500">Annual Revenue</h4>
              <PieChart />
            </div>
            <div className="bg-white p-4 rounded-lg shadow ">
              <h4 className="text-gray-500 ">
                General Financial Results Next Logistics & Truck Ferry
              </h4>

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
        <div className="flex flex-row md:flex-col">
          <div className="flex mt-10 mx-5">
            <div className="flex gap-2 bg-blue-600 w-1/2 rounded-lg py-5">
              <CheckCircleIcon className="ml-3" />
              <p className="bg-blue-600 text-sm">
                Logistics services combining efficiency, innovation, and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, ensuring flexibility and uncompromising reliability.
              </p>
            </div>
            <div className="flex flex-col align-start">
              <p className="ml-5 text-gray-500">Total transports completados</p>
              <p className="ml-5 text-gray-500">(2020 - 2024)</p>
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
    </section>
  );
};

export default History;
