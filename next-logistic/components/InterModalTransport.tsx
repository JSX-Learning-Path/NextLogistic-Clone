// "use client";

type Stat = { value: string; label: string, description: string };
type ChartPoint = { year: string, value: number, display: string };
type TransportSection = { title: string, subTitle: string, chart: ChartPoint[], stats: Stat[], chips: string[], image: { src: string; alt: string; } };
const SECTION: TransportSection[] = [
    {
        title: "Intermodal Transport",
        subTitle: "Annual turnover 2020-2024",
        chart: [
            { year: "2020", value: 28.7, display: "28.7M" },
            { year: "2021", value: 34.5, display: "34.5M" },
            { year: "2022", value: 59.7, display: "59.7M" },
            { year: "2023", value: 55.4, display: "55.4M" },
            { year: "2024", value: 49.2, display: "49.2M" }
        ],
        stats: [
            { value: "35", label: "Locomotives", description: "Rail Efficiency" },
            { value: "805", label: "Wagons", description: "Flexibility for every transport" },
            { value: "3", label: "Licenses", description: "Global Scope" },
            { value: "2", label: "Terminals", description: "Strategically positioned" }
        ],
        chips: [
            "Cost optimization",
            "Large capacity",
            "Eco-friendliness",
            "Security",
            "Terminals in BG and TR",
            "Railway license for freight transport",
            "Express deliveries",
        ],
        image: { src: "/train.png", alt: "Intermodal freight train" },
    }, {
        title: "Combined transport",
        subTitle: "Total Reservations 2020 - 2024",
        chart: [
            { year: "2020", value: 43.9, display: "43.9K" },
            { year: "2021", value: 48.7, display: "48.7K" },
            { year: "2022", value: 49.4, display: "49.4K" },
            { year: "2023", value: 46.5, display: "46.5K" },
            { year: "2024", value: 43.0, display: "43K" },
        ],
        stats: [
            { value: "86", label: "Ports", description: "Logistic connectivity" },
            { value: "170", label: "Route", description: "Global connection" },
            { value: "15", label: "Countries", description: "International presence" },
            { value: "2658", label: "Departures", description: "Regular departures" },
        ],
        chips: [
            "Fixed schedules",
            "Policy of green logistics",
            "Regular sailings",
            "Lower risk of accidents",
            "Cost optimization",
            "Ferry reservations",
        ],
        image: { src: "/ship.png", alt: "RoRo ferry at sea" },
    },
];

const CheckIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
        />
    </svg>
);


const MiniBarChart = ({ data }: { data: ChartPoint[] }) => {
    const max = Math.max(...data.map((d) => d.value));
    return (
        <div className="flex flex-end gap-6">
            {data.map((point) => (
                <div key={point.year} className="flex flex-1 flex-col items-center">
                    <div className="flex h-[150px] w-full flex-col justify-end items-center">
                        <span className="mb-2 text-sm font-semibold text-blue-600">{point.display}</span>
                        <div className="w-8 rounded-sm bg-blue-600" style={{ height: `${(point.value / max) * 100}%` }}>
                        </div>
                        <span className="mt-2 text-xs text-gray-500">{point.year}</span>
                    </div>
                </div>
            ))}
        </div>
    )
};

const TransportCard = ({ section }: { section: TransportSection }) => {
    return (
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                        <p className="mb-6 text-sm text-gray-500">{section.subTitle}</p>
                        <MiniBarChart data={section.chart} />
                    </div>
                    <div className="grid grid-cols-2 md:border-1 md:border-gray-200 md:pl-6">
                        {section.stats.map((stat, i) => (
                            <div key={stat.label} className={[
                                "px-4 py-5",
                                i % 2 === 0 ? "border-r border-gray-200" : "",
                                i < 2 ? "border-b border-gray-200" : "",
                            ].join(" ")}
                            >
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-bold text-blue-600">{stat.value}</span>
                                    <span className="text-sm font-semibold text-gray-900">{stat.label}</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-200 pt-5">
                    {section.chips.map((chip) => (
                        <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-100 transition ease-in-out duration-200">
                            <CheckIcon />
                            {chip}</span>
                    ))}
                </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-sm"><img src={section.image.src} alt={section.image.alt} className="h-full min-h-[280px] w-full object-cover" /></div>
        </div>
    );
}

function InterModalTransport() {
    return (
        <section className="space-y-6 bg-[#F7F8FF] p-6 md:p-10 lg:p-16">
            {SECTION.map((section) => (
                <TransportCard key={section.title} section={section} />
            ))}
        </section>
    )
}

export default InterModalTransport