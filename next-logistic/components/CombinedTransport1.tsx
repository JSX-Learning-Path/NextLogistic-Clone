import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FinancialResults from "./charts/FinancialResults";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
function CombinedTransport1() {
  return (
    <section className="bg-white mt-16 ">
      <div className="flex flex-col  md:w-full md:gap-5 px-1 md:px-20 lg:flex lg:flex-row ">
        {/* Left Column */}
        <div className="flex px-2 flex-col py-5  ">
          <h2 className="text-sm font-bold mb-4 text-blue-600 ">
            Combined transport
            <hr className="border-blue-600 w-[35px]  mt-2" />
          </h2>
          <h5 className="text-2xl text-black/80 font-bold">
            Connecting{" "}
            <span className="font-bold text-blue-600">
              road and sea transport
            </span>
          </h5>
          <p className="text-black/80 mt-5">
            Logistics services on fixed Ro-Ro and Ro-Pax sailing schedules for
            better planning and environmental efficiency.
          </p>
          <article className="flex justify-start  flex-row mt-5 border py-5 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/4  text-center flex flex-col flex-start px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                86
              </li>
              <li className="text-black/80 text-sm">Ports</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-bold text-black/80">
                Logistics connectivity
              </h6>
              <p className="text-black/80 text-sm flex ">
                With access to strategic ports, we guarantee a smooth and secure
              </p>
              <p className="text-black/80 text-sm flex ">transport process.</p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-5 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/4  text-center flex flex-col flex-start  px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                15
              </li>
              <li className="text-black/80 text-sm">Countries</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-bold text-black/80">
                International presence
              </h6>
              <p className="text-black/80 text-sm flex ">
                Our operations span leading European markets, facilitating
              </p>
              <p className="text-black/80 text-sm flex ">
                international trade.
              </p>
            </div>
          </article>
          <article className="flex justify-start items-center flex-row mt-5 border py-5 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/4  text-center flex flex-col flex-start  px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                170
              </li>
              <li className="text-black/80 text-sm">Sea routes</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-bold text-black/80">
                Global connection by sea
              </h6>
              <p className="text-black/80 text-sm flex ">
                Our ferry lines provide access to key ports across 15 countries.{" "}
                <br /> access to key regional markets.
              </p>
            </div>
          </article>
          <article className="flex justify-start items-center flex-row mt-5 border py-5 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/4  text-center flex flex-col flex-start  px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-2xl">
                2658
              </li>
              <li className="text-black/80 text-sm">Sailings per week</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-bold text-black/80">Regular sailings</h6>
              <p className="text-black/80 text-sm flex ">
                We run regular weekly sailings with scheduled, on-time
                deliveries.
              </p>
            </div>
          </article>
        </div>
        {/* Right side */}
        <div className="bg-[#EEF3FF] w-full h-full flex flex-col md:w-full md:flex md:flex-col rounded-xl py-5 md:py-5 px-3 md:px-5 gap-5 lg:w-1/2 ">
          <div className="flex flex-col md:flex-row items-stretch gap-5">
            <div className="hidden md:flex md:w-1/2 gap-2 px-4 pb-10 pt-3 bg-blue-600 rounded-xl">
              <CheckCircleIcon sx={{ color: "white" }} />
              <div className="flex flex-col gap-7">
                <p className="text-white">
                  We offer high-quality service covering key destinations and
                  major trade routes. Get in touch for efficient, sustainable
                  and high-quality logistics solutions.
                </p>
              </div>
            </div>
            <div className="relative w-full bg-white md:w-1/2 rounded-xl">
              <p className="absolute inset-1 text-center text-sm">
                Total bookings completed (2021 - 2025)
              </p>
              <FinancialResults />
            </div>
          </div>
          <div className="hidden md:hidden lg:flex lg:gap-3 lg:flex-wrap w-[600px] ">
            <div className="flex items-center gap-1 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Fixed schedules</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Regular sailings</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Green logistics policy</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Lower accident risk</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Cost optimisation</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Ferry bookings</p>
            </div>
            {/* <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
                            <CheckIcon
                                sx={{
                                    color: "#2862FF",
                                    fontSize: "15px",
                                    border: "1px",
                                    borderStyle: "solid",
                                    borderRadius: "20px",
                                }}
                            />
                            <p className="text-blue-600 text-sm">Terminals in BG & TR</p>
                        </div> */}
          </div>
          <div className="w-full md:w-full flex-col flex gap-5 lg:flex-row ">
            <div className="w-full md:w-full lg:w-[450px]">
              <div className="bg-white flex flex-col w-full rounded-xl px-5 py-20">
                <div>
                  <p className="mt-1 text-slate-700/90">
                    We offer transport services to major destinations across
                    Europe. Our network covers strategic locations of high
                    commercial value. We guarantee fast, reliable delivery
                    through optimised routes and efficient logistics.
                  </p>
                  <p className="mt-1 text-slate-700/90">
                    We operate with the environment in mind, applying
                    sustainable transport solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:full xl:w-1/2">
              <button className="bg-blue-600 text-white rounded-2xl w-full py-3 mb-5">
                <Link
                  href="/contacts"
                  className="bg-blue-600 text-white font-bold"
                >
                  Contact Us
                </Link>
              </button>
              <Image
                src="/comb.png"
                alt="Rail Transport"
                className="rounded-xl  h-[250px] md:w-full lg:w-full"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CombinedTransport1;
