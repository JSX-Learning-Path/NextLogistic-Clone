import React from "react";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/dist/client/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const History = () => {
  return (
    <section className="bg-white sm:grid-cols-1 md:grid-cols-2  ">
      <div className="flex">
        <div className="space-y-6 bg-indigo-100 p-[50px] rounded-xl w-full">
          <span className="text-sm text-indigo-500 font-semibold mb-3">
            HISTORY
            <hr className="border-blue-600 w-[30px]" />
          </span>
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
          <div className="flex gap-2 w-full flex-col md:flex-row">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-gray-500">Annual Revenue</h4>
              <PieChart />
            </div>
            <div className="bg-white p-4 rounded-lg shadow w-full">
              <h4 className="text-gray-500 ">
                General Financial Results Next Logistics & Truck Ferry
              </h4>
              <BarChart />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex">
            <div className="bg-blue-600 p-4 rounded-lg shadow flex gap-2 w-[700px]  ">
              <span className="">
                <CheckCircleIcon />
              </span>
              <p className="">
                Logistics services combining efficiency, innovation, and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, ensuring flexibility and uncompromising reliability.
              </p>
            </div>
            <div className="w-1/2">
              <BarChart />
            </div>
          </div>
          <div className="">
            <ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Оптимизация на разходите",
                  "Модерен автопарк",
                  "Екология",
                  "Планиране",
                  "Сигурност",
                  "Експресни доставки",
                  "Мониторинг",
                  "Технологии и иновации",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1.5 border rounded-full text-indigo-600 bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ul>
            <div className="my-6 relative">
              <Image
                src="/next-trucks.png"
                alt="Next Logistic trucks"
                width={1200}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />

              <Link
                href="/next-trucks"
                className="absolute bottom-4 right-4  text-white px-4 py-2 rounded-lg shadow "
              >
                <span className="text-white  hover:text-indigo-300 transition-all duration-300">
                  Learn More
                  <ChevronRightIcon className="inline-block mr-1 " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
