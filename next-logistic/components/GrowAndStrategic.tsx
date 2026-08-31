import FinancialResultsChart from "../components/charts/FinancialResults";

const transportData = [
  {
    value: "11,060",
    type: "Import",
    percentage: "13,1%",
    color: "bg-blue-600",
  },
  {
    value: "25,564",
    type: "Export",
    percentage: "30,3%",
    color: "bg-black",
  },
  {
    value: "47,803",
    type: "Internal",
    percentage: "56,6%",
    color: "bg-gray-400",
  },
];

function GrowAndStrategic() {
  return (
    <section className="bg-white min-h-screen">
      <div className="w-full px-5 py-10 md:px-10 flex flex-col md:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full md:w-[40%]">
          <h1 className="text-sm text-blue-600 font-bold">
            Growth and Strategic Directions
            <hr className="border-t-2 border-blue-600 w-[35px] mt-2" />
          </h1>

          <div className="mt-5">
            <p className="text-3xl font-bold opacity-90">
              Results and achievements
            </p>

            <p className="text-blue-600 text-5xl font-bold">2023-2024</p>

            <p className="text-lg font-medium text-gray-500">
              Information analysis
            </p>
          </div>

          <div className="mt-5">
            {transportData.map((data) => (
              <div
                key={data.type}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_100px] items-center border-b border-gray-400 py-3 gap-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block w-4 h-4 rounded-full ${data.color}`}
                  />

                  <p>{data.value}</p>
                </div>

                <p className="text-gray-400">{data.type}</p>

                <p className="bg-blue-600 rounded-full px-4 py-1 text-white text-center">
                  {data.percentage}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-xl mt-10 p-6">
            <p className="text-white">
              The company primarily provides full truckload (FTL) transport for
              leading industrial clients in Europe and Turkey. Our operations
              focus on regular, large-scale, and secure transport flows, carried
              out daily with an emphasis on reliability, capacity, precision,
              and timeliness. Data from in-depth analysis confirms our strong
              presence across all directions — export, import, and domestic
              transport — with a balanced, sustainable, and strategic scope of
              activity.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 md:text-sm">
            The financial results in recent years clearly confirm the company’s
            sustainable growth and our long-term vision. The consistent increase
            in turnover, the growing number of transports, and the expanded
            portfolio of strategic clients demonstrate stability and high
            flexibility. Our partnerships are built on reliability,
            professionalism, and the ability to deliver predictable and
            innovative solutions even in a dynamic business environment. Behind
            these positive trends stands a well-structured organization with
            effective cost control and a strong commitment to achieving
            excellent results. Transparency and trust in our relationships with
            clients and suppliers are the key to stability and the adoption of
            more efficient logistics solutions.
          </p>
          <div className="mt-10">
            <p className="text-sm text-blue-600 font-bold">
              GROWTH AND STRATEGIC DIRECTIONS
            </p>
            <p className="text-sm text-gray-500">Financial results</p>
          </div>
          {/*Chart */}
          <div>
            <FinancialResultsChart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowAndStrategic;
