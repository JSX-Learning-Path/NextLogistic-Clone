import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FinancialResults from "./charts/FinancialResults";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
function InterModalTransport() {
  return (
    <section className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:gap-5 px-1 md:px-30 ">
        <div className="flex  px-2 flex-col py-5 md:w-1/2 md:py-10">
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
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                35
              </li>
              <li className="text-black/80 text-sm">Locomotives</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Truck fleet</h6>
              <p className="text-black/80 text-sm flex ">
                6 x Koncar | 18 x Siemens Smarton 80 & 81
              </p>
              <p className="text-black/80 text-sm flex ">
                7 x Diesel 07, 05 & 44 | 4 x shunting 05 & 742
              </p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                35
              </li>
              <li className="text-black/80 text-sm">Locomotives</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Truck fleet</h6>
              <p className="text-black/80 text-sm flex ">
                6 x Koncar | 18 x Siemens Smarton 80 & 81
              </p>
              <p className="text-black/80 text-sm flex ">
                7 x Diesel 07, 05 & 44 | 4 x shunting 05 & 742
              </p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                35
              </li>
              <li className="text-black/80 text-sm">Locomotives</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Truck fleet</h6>
              <p className="text-black/80 text-sm flex ">
                6 x Koncar | 18 x Siemens Smarton 80 & 81
              </p>
              <p className="text-black/80 text-sm flex ">
                7 x Diesel 07, 05 & 44 | 4 x shunting 05 & 742
              </p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                35
              </li>
              <li className="text-black/80 text-sm">Locomotives</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">Truck fleet</h6>
              <p className="text-black/80 text-sm flex ">
                6 x Koncar | 18 x Siemens Smarton 80 & 81
              </p>
              <p className="text-black/80 text-sm flex ">
                7 x Diesel 07, 05 & 44 | 4 x shunting 05 & 742
              </p>
            </div>
          </article>
        </div>
        {/* Right side */}
        <div className="bg-[#EEF3FF] w-full flex md:flex-col md:w-1/2 md:flex rounded-xl md:py-10 md:px-5 gap-5">
          <div className="flex items-start gap-5">
            <div className="hidden md:flex md:w-1/2 gap-2 px-4 pb-20 pt-3 bg-blue-600 rounded-xl">
              <CheckCircleIcon sx={{ color: "white" }} />
              <div className="flex flex-col gap-2">
                <p className="text-white">
                  Our approach combines multiple transport modalities with a
                  high degree of coordination and precision that sets us apart
                  in the industry.
                </p>
                <p className="text-white ">
                  Get in touch for solutions that are not only efficient but
                  also sustainable in logistics.
                </p>
              </div>
            </div>
            <div className="relative w-full bg-white md:w-1/2 rounded-xl">
              <p className="absolute inset-1 text-center">
                Total transports completed (2021 - 2025)
              </p>
              <FinancialResults />
            </div>
          </div>
          <div className="hidden md:flex gap-3 flex-wrap ">
            <div className="flex  items-center gap-1 border border-blue-600/50 rounded-full p-1">
              <CheckIcon
                sx={{
                  color: "#2862FF",
                  fontSize: "15px",
                  border: "1px",
                  borderStyle: "solid",
                  borderRadius: "20px",
                }}
              />
              <p className="text-blue-600 text-sm">Cost Optimizations</p>
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
              <p className="text-blue-600 text-sm">Modern Fleet</p>
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
              <p className="text-blue-600 text-sm">Sustainability</p>
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
              <p className="text-blue-600 text-sm">Planning</p>
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
              <p className="text-blue-600 text-sm">Security</p>
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
              <p className="text-blue-600 text-sm">Express Delivery</p>
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
              <p className="text-blue-600 text-sm">Monitoring</p>
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
              <p className="text-blue-600 text-sm">Technology and innovation</p>
            </div>
          </div>
          <div className="w-full flex gap-6 items-stretch">
            <div className="w-full md:w-[450px]">
              <div className="bg-white flex flex-col w-full rounded-xl px-5 py-10">
                <div>
                  <p className="font-semibold text-slate-90">• 2 Terminals</p>
                  <p className="mt-1 text-slate-700/90">Zlatitrap, Bulgaria</p>
                  <p className="mt-1 text-slate-700/90">Çatalca, Turkey</p>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-slate-90">
                    • Freight rail license
                  </p>
                  <p className="mt-1 text-slate-700/90">
                    Freight transport in Bulgaria and Serbia.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-slate-90">
                    • Passenger rail license
                  </p>
                  <p className="mt-1 text-slate-700/90">
                    The first private rail company to obtain a passenger
                    transport license in Bulgaria.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-2">
              <button className="bg-blue-600 text-white rounded-2xl w-full py-3 ">
                <Link
                  href="/contacts"
                  className="bg-blue-600 text-white font-bold"
                >
                  Contact Us
                </Link>
              </button>
              <Image
                src="/inter-modal-transport-1.png"
                alt="Road Transport"
                className="rounded-xl"
                width={280}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterModalTransport;
