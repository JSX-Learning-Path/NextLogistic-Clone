import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BarChart } from "@mui/x-charts/BarChart";
function RoadTransport() {
  return (
    <section className="bg-white h-screen">
      <div className="flex flex-col md:flex-row md:gap-5 px-1 md:px-10 ">
        <div className="flex flex-col py-5 md:w-1/2 md:py-10">
          <h2 className="text-sm font-bold mb-4 text-blue-600 ">
            Road Transport Services
            <hr className="border-blue-600 w-[35px]  mt-2" />
          </h2>
          <h5 className="text-2xl text-black/80 font-bold">
            Types of{" "}
            <span className="font-bold text-blue-600">transport vehicles</span>
          </h5>
          <p className="text-black/80 mt-5">
            Next Logistic is part of the largest transport group in the Balkans,
            providing reliable road transport solutions in support of major
            industries and key sectors across Europe.
          </p>
          <article
            className="flex justify-center flex-row mt-5 border py-2 rounded-xl border-black/20 hover:bg-blue-100/20
         transition-all duration-400"
          >
            <ul className="md:w-1/5 flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                1450
              </li>
              <li className="text-black/80 text-sm">Trucks</li>
            </ul>
            <div className="w-full border-l border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Truck fleet</h6>
              <p className="text-black/80 text-sm">
                889 x Euro 6 | 261 x Euro 5 | 150 x LNG | 150 x CNG
                environmentally
              </p>
              <p className="text-black/80">friendly and efficient tractors</p>
            </div>
          </article>
          <article
            className="flex justify-center flex-row mt-5 border py-2 rounded-xl border-black/20 hover:bg-blue-100/20
         transition-all duration-400"
          >
            <ul className="w-1/5 flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                2850
              </li>
              <li className="text-black/80 text-sm">Trailers</li>
            </ul>
            <div className="w-full border-l border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">
                Variety for all types of cargo
              </h6>
              <p className="text-black/80 text-sm">
                2441 x Curtain-sided | 130 x Refrigerated | 184 x Tipper 60 x
                Tankers | 35 x Livestock Trucks
              </p>
              <p className="text-black/80 text-sm">
                60 x Tankers | 35 x Livestock Trucks
              </p>
            </div>
          </article>
          <article
            className="flex justify-center flex-row mt-5 border py-2 rounded-xl border-black/20 hover:bg-blue-100/20
         transition-all duration-400"
          >
            <ul className="w-1/5 flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                7800
              </li>
              <li className="text-black/80 text-sm">Trusted Carrier</li>
            </ul>
            <div className="w-full border-l border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Partner network</h6>
              <p className="text-black/80 text-sm">
                Our partner logistics networks give us access to a fleet of more
                than
              </p>
              <p className="text-black/80 text-sm">30,000 external vehicles.</p>
            </div>
          </article>
          <article
            className="flex justify-center flex-row mt-5 border py-2 rounded-xl border-black/20 hover:bg-blue-100/20
         transition-all duration-400"
          >
            <ul className="w-1/5 flex flex-col flex-start py-2 px-2 ">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                30
              </li>
              <li className="text-black/80 text-xs ">Countries</li>
            </ul>
            <div className="w-full border-l border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Partner network</h6>
              <p className="text-black/80 text-sm">
                Our partner logistics networks give us access to a fleet of more
                than
              </p>
              <p className="text-black/80 text-sm">30,000 external vehicles.</p>
            </div>
          </article>
        </div>
        {/* Right side */}
        <div className="bg-[#E9EFFF] rounded-bl-xl">
          <div className="flex flex-row gap-5 md:flex-wrap">
            <div className="bg-blue-600 flex flex-1 gap-2 px-5 py-10 mt-10  mx-auto rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl ">
              <CheckCircleIcon sx={{ color: "white", fontWeight: "bold" }} />
              <p className="text-white text-sm max-w-md">
                Logistics services that combine efficiency, innovation, and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, ensuring flexibility and uncompromising reliability.
              </p>
            </div>
            <div className=" bg-white rounded-xl px-5 py-10 mt-10">
              <div className="mt-10">
                <h5 className="font-extrabold flex flex-col text-gray-700">
                  Total transport completed
                  <span>(2020 - 2024)</span>
                </h5>

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
        </div>
      </div>
    </section>
  );
}
export default RoadTransport;
