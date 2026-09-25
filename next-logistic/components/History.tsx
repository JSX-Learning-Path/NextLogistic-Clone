import React from "react";
import PieChart from "./charts/PieChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/dist/client/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BarChart } from "@mui/x-charts/BarChart";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimelinePoint from "./charts/TimeLineChart";

const History = () => {
  return (
    <section className="w-full overflow-hidden bg-[#DCE9F7]">
      <div className="mx-auto flex w-full flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full space-y-6 rounded-xl p-10 md:p-[50px] md:w-1/2">
          <h5 className="text-sm font-semibold text-blue-600">
            HISTORY
            <hr className="w-[30px] border-blue-600" />
          </h5>

          <h2 className="mt-5 text-2xl font-bold text-blue-600">
            <span className="text-2xl font-extrabold text-black">
              Logistic,
            </span>{" "}
            driving the future
          </h2>

          <Box component="div" sx={{ mb: 4 }}>
            <Typography sx={{ fontSize: "0.90rem", color: "text.secondary" }}>
              <span className="font-bold text-sm text-blue-600">
                NEXT LOGISTICS
              </span>{" "}
              was founded in 2011 as part of the largest transport group in the
              Balkans. The company follows a consistent development strategy
              based on controlling key elements of the supply chain and
              integrating diverse transport modes into a unified operational
              structure.
            </Typography>
            <Typography sx={{ fontSize: "0.90rem", color: "text.secondary" }}>
              In 2012, as part of the group's expansion,{" "}
              <span className="font-bold text-sm text-blue-600">
                TRUCK FERRY
              </span>{" "}
              was launched, providing direct access to major maritime routes and
              seamlessly combining road and sea transport. This intermodal
              approach significantly reduces carbon emissions, noise pollution,
              and road safety risks while enabling precise scheduling through
              fixed timetables.
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", color: "#306AFF", fontWeight: "bold" }}
            >
              In recent years, our focus has turned toward digitalization and
              technological innovation,
            </Typography>
            <Typography
              sx={{ mt: 2, fontSize: "0.90rem", color: "text.secondary" }}
            >
              including the deployment of proprietary management software and
              real-time tracking systems. This guarantees maximum operational
              efficiency, full traceability, and complete control over every
              step of the logistics process.
            </Typography>
          </Box>

          {/* Chart */}
          <Box
            component="div"
            sx={{
              backgroundColor: "#ffffff",
              height: "350px",
              placeItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.87rem",
                color: "#306AFF",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Total Shipments Completed
            </Typography>
            <Typography sx={{}}>(2021 – 2025)</Typography>
            <Box
              component="div"
              sx={{
                marginTop: "80px",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 0,
                px: 1,
                boxSizing: "border-box",
              }}
            >
              <TimelinePoint value="27.5K" year="2021" />
              <TimelinePoint value="38.7K" year="2022" />
              <TimelinePoint value="38.4K" year="2023" />
              <TimelinePoint value="329.8K" year="2024" />
              <TimelinePoint value="34.1K" year="2025" />
            </Box>
          </Box>
        </div>
        {/* RIGHT */}
        <div className="md:w-1/2">
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
