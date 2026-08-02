import React from "react";
import Image from "next/image";

function LogisticView() {
  return (
    <section className="bg-white px-28 sm:grid-cols-1 md:grid-cols-2  ">
      <div className="space-y-6  rounded-xl w-full bg-white mx-auto p-6 sm:p-10 lg:p-12">
        <span className="text-sm text-indigo-500 font-semibold mb-3">
          Logistic view
          <hr className="border-blue-600 w-[30px]" />
        </span>
        <h2 className="text-blue-600 mt-5 font-bold text-2xl">
          <span className="text-2xl font-extrabold text-black/70">
            Leading events and <span className="text-blue-600"> </span>
          </span>
          key trends
        </h2>
        <p className="text-gray-600">
          Logistics is a dynamic industry where technologies, sustainable
          practices, and global challenges shape new standards every day. In
          this section, you will find the latest news, strategic analyses, and
          innovative solutions that lead to more efficient processes and
          competitive advantages. Stay up to date with the trends defining the
          future of transportation, automation, and environmental practices in
          the logistics sector.{" "}
        </p>
      </div>

      <section className="bg-white w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden border p-0">
            <div className="md:flex">
              <div className="w-full md:w-1/2">
                <Image
                  src="/farry-boat.png"
                  alt="port"
                  className="w-full"
                  width={500}
                  height={300}
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <span className="inline-block text-sm rounded-full border px-3 py-1 text-gray-600">
                  Category
                </span>
                <h3 className="mt-4 font-semibold text-sm text-black">
                  Eco-logistics: Opportunities and challenges for maritime
                  transport
                </h3>
                <p className="mt-3 text-sm text-black">
                  Short summary or lead paragraph about innovations and
                  sustainability in maritime logistics.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden bg-blue-600 text-white md:flex">
            <div className="p-6 md:w-1/2">
              <span className="inline-block text-sm  rounded-full border border-white/30 px-3 py-1">
                Category
              </span>
              <h3 className="mt-4 font-bold text-lg text-white">
                Logistics solutions during the COVID pandemic: Facing the
                challenge...
              </h3>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/next-truck.png"
                alt="truck"
                className="w-full h-48 md:h-56 object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="rounded-lg bg-black text-white p-6">
            <h4 className="font-semibold text-xl text-white">Latest news</h4>
            <ul className="mt-4 space-y-3 flex flex-col">
              <li className="flex items-start gap-3 ">
                <span className="inline-block rounded-full border px-3 py-1 text-sm">
                  News
                </span>
                <span className="text-sm">
                  Bosneshki Foundation and NEXT Logistic Join the “Bulgarian
                  Christmas” Campaign
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block rounded-full border px-3 py-1 text-sm">
                  News
                </span>
                <span className="text-sm">
                  The second season of the space games at NEXT Logistic begins
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden border p-0">
            <div className="md:flex">
              <div className="w-full md:w-1/2 p-6">
                <span className="inline-block text-sm rounded-full border px-3 py-1 text-gray-600">
                  Category
                </span>
                <h3 className="mt-4 font-semibold text-base text-black">
                  Innovations in everyday logistics: Optimization to the last
                  mile
                </h3>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/dump-truck.png"
                  alt="dump truck"
                  className="w-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LogisticView;
