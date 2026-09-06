import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FinancialResults from "./charts/FinancialResults";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Image from "next/image";
import Link from "next/link";
function RoadTransport() {
  return (
    <section className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:gap-5 px-1 md:px-10 ">
        <div className="flex px-2 flex-col py-5 md:w-1/2 md:py-10">
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
        <div className="bg-[#EEF3FF] w-full flex md:flex-col md:w-1/2 md:flex rounded-xl md:py-10 md:px-5 gap-5">
          <div className="flex items-start gap-5">
            <div className="hidden md:flex md:w-1/2 gap-2 px-5 pb-20 pt-10 bg-blue-600 rounded-xl">
              <CheckCircleIcon sx={{ color: "white" }} />
              <p className="text-white">
                Logistics services combining efficiency, innovation and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, guaranteeing flexibility and uncompromising reliability.
              </p>
            </div>
            <div className="relative w-full bg-white md:w-1/2 rounded-xl">
              <p className="absolute inset-1 text-center">
                Total transports completed (2021 - 2025)
              </p>
              <FinancialResults />
            </div>
          </div>
          <div className="hidden md:flex gap-3 flex-wrap ">
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Cost Optimizations</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Modern Fleet</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Sustainability</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Planning</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Security</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Express Delivery</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Monitoring</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Technology and innovation</p>
            </div>
          </div>
          <div className="w-full flex gap-5 items-stretch">
            <div className="w-full md:w-1/2">
              <div className="bg-white flex flex-col items-center w-full  rounded-xl px-5 py-10">
                <p className="text-black/80">
                  96% of our transports are FTL, which guarantees speed and
                  security, while 4% are LTL, providing flexibility for smaller
                  volumes.
                </p>
                <div className="items-center">
                  <ArrowUpwardIcon
                    sx={{ color: "#2862FF", fontSize: "35px" }}
                  />
                  <span className="font-bold text-2xl">+96%</span>
                </div>
                <div className="items-center">
                  <ArrowUpwardIcon
                    sx={{ color: "#2862FF", fontSize: "35px" }}
                  />
                  <span className="font-bold text-2xl">+4%</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white rounded-2xl w-full py-3 mt-2">
                <Link
                  href="/contacts"
                  className="bg-blue-600 text-white font-bold"
                >
                  Contact Us
                </Link>
              </button>
            </div>

            <div className="hidden md:flex md:w-1/2">
              <Image
                src="/next-truck-road-transport.png"
                alt="Road Transport"
                className="rounded-xl"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadTransport;
