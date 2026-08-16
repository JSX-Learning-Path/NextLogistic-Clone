

import React from "react";

function WordOfLogistic() {
    const news = [
        {
            image: "/cosmic-games.png",
            title:
                "Bosneshki Foundation and NEXT Logistic Join the “Bulgarian Christmas” Campaign",
        },
        {
            image: "/cosmic-games.png",
            title: "The second season of the space games at NEXT Logistic begins",
        },
        {
            image: "/trash-yard.png",
            title: "Together for a cleaner environment",
        },
        {
            image: "/news-4.png",
            title: "Supporting the Flood-Affected People of Tsarevo Municipality",
        },
    ];

    const vehicles = [
        {
            image: "/gondoles.png",
            title: "GONDOLES",
        },
        {
            image: "/dump-truck.png",
            title: "DUMPERS",
        },
        {
            image: "/cisterns.png",
            title: "CISTERNS",
        },
        {
            image: "/next-truck.png",
            title: "SOLO TRUCKS",
        },
    ];

    return (
        <section className="w-full bg-[#f8f9fc] py-12 md:py-16">
            <div className="mx-auto max-w-[1540px] px-5 md:px-8">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#2864ff]">
                                Current in the world of logistics
                            </p>

                            <div className="mt-3 h-[2px] w-[36px] bg-[#2864ff]" />
                        </div>

                        <h2 className="max-w-[900px] text-[27px] font-bold leading-tight text-[#2864ff] md:text-[28px] lg:text-[29px]">
                            <span className="text-[#18233b]">
                                News, innovations and challenges,{" "}
                            </span>
                            that change the industry
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="flex h-[45px] w-fit shrink-0 items-center gap-3 rounded-[9px] bg-[#2864ff] px-7 text-sm font-medium text-white transition hover:bg-[#1852e5]"
                    >
                        See all
                        <span className="text-lg leading-none">›</span>
                    </button>
                </div>

                {/* News cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {news.map((item, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-[10px] border border-[#d1d1d1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                        >
                            <div className="h-[205px] w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="flex min-h-[76px] items-center justify-center bg-[#f7f8fa] px-4 py-3">
                                <p className="text-center text-[15px] font-bold leading-6 text-[#111827]">
                                    {item.title}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Vehicle cards */}
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {vehicles.map((item, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-[10px] border border-[#d1d1d1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                        >
                            <div className="h-[205px] w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="flex h-[51px] items-center justify-center bg-[#f7f8fa]">
                                <p className="text-[15px] font-bold text-[#111827]">
                                    {item.title}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WordOfLogistic;