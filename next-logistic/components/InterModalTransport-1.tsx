import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FinancialResults from "./charts/FinancialResults";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
function InterModalTransport() {
  return (
    <section className="bg-white min-h-screen">
      <div className="flex flex-col  md:w-full md:gap-5 px-1 md:px-20 lg:flex lg:flex-row ">
        <div className="flex px-2 flex-col py-5 md:w-full md:py-10">
          <h2 className="text-sm font-bold mb-4 text-blue-600 ">
            Intermodal transport
            <hr className="border-blue-600 w-[35px]  mt-2" />
          </h2>
          <h5 className="text-2xl text-black/80 font-bold">
            A network{" "}
            <span className="font-bold text-blue-600">of possibilities</span>
          </h5>
          <p className="text-black/80 mt-5">
            Our transport group operates its own fleet of locomotives and
            wagons, with active
            <br /> operations through licensed terminals in key locations.
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
                805
              </li>
              <li className="text-black/80 text-sm">WAGONS</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">
                Flexibility for every cargo type
              </h6>
              <p className="text-black/80 text-sm flex ">
                261 x EA | 74 x SMMPS | 143 x tank wagons
              </p>
              <p className="text-black/80 text-sm flex ">
                47 x intermodal | 46 x car-carrier wagons
              </p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                3
              </li>
              <li className="text-black/80 text-sm">International licenses</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">
                Global reach and operational security
              </h6>
              <p className="text-black/80 text-sm flex ">
                Freight transport licenses in Bulgaria, Serbia and Turkey
                provide access to key <br />
                markets.
              </p>
            </div>
          </article>
          <article className="flex justify-start flex-row mt-5 border py-7 rounded-xl border-[#EEF3FF] hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] transition duration-400">
            <ul className="md:w-1/5  text-center flex flex-col flex-start py-2 px-2">
              <li className="text-blue-600 font-extrabold text-xl md:text-4xl">
                2
              </li>
              <li className="text-black/80 text-sm">Intermodal terminals</li>
            </ul>
            <div className="w-full text-xl border-black/20 pl-5">
              <h6 className="font-extrabold text-black/80">
                Strategically positioned
              </h6>
              <p className="text-black/80 text-sm flex ">
                Located in Bulgaria and Turkey, the terminals optimise transport
                time.
              </p>
            </div>
          </article>
        </div>
        {/* Right side */}
        <div className="bg-[#EEF3FF] w-full flex flex-col md:w-full md:flex md:flex-col rounded-xl py-5 md:py-10 px-3 md:px-5 gap-5 lg:w-1/2 ">
          <div className="flex flex-col md:flex-row items-stretch gap-5">
            <div className="hidden md:flex md:w-1/2 gap-2 px-4 pb-10 pt-3 bg-blue-600 rounded-xl">
              <CheckCircleIcon sx={{ color: "white" }} />
              <div className="flex flex-col gap-7">
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
          <div className="hidden md:hidden  lg:flex lg:gap-3 lg:flex-wrap ">
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
              <p className="text-blue-600 text-sm">Freight rail license</p>
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
              <p className="text-blue-600 text-sm">Terminals in BG & TR</p>
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
              <p className="text-blue-600 text-sm">Large capacity</p>
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
              <p className="text-blue-600 text-sm">Express delivery</p>
            </div>
          </div>
          <div className="w-full md:w-full flex-col flex gap-5 lg:flex-row ">
            <div className="w-full md:w-full lg:w-[550px]">
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

            <div className="w-full">
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
                className="rounded-xl w-full md:w-full lg:w-full"
                width={400}
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
