import Image from "next/image";
import Link from "next/link";
import React from "react";

function WordOfLogistic() {
    const news = [
        {
            image: "/bosneshki-foundation.png",
            title: "Bosneshki Foundation and NEXT Logistic Join the “Bulgarian Christmas” Campaign",
            link: "/games-and-initiatives/bosneshki-foundation"
        },
        {
            image: "/cosmic-games.png",
            title: "The second season of the space games at NEXT Logistic begins",
            link: "/games-and-initiatives/cosmic-games"
        },
        {
            image: "/trash-yard.png",
            title: "Together for a cleaner environment",
            link: "/games-and-initiatives/trash-yard"
        },
        {
            image: "/obshtina-tsarevo.png",
            title: "Supporting the Flood-Affected People of Tsarevo Municipality",
            link: "/games-and-initiatives/obshtina-tsarevo"
        },
    ];

    const vehicles = [
        {
            image: "/three-gondols.png",
            title: "GONDOLES",
            link: "/vehicles/gondoles",
        },
        {
            image: "/dump-truck.png",
            title: "DUMPERS",
            link: "/vehicles/dumpers",
        },
        {
            image: "/tanker.png",
            title: "CISTERNS",
            link: "/vehicles/tanker",
        },
        {
            image: "/next-truck.png",
            title: "SOLO TRUCKS",
            link: "/vehicles/solo-trucks",
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

                            <div className="mt-3  w-9 bg-[#2864ff]" />
                        </div>

                        <h2 className="max-w-225 text-[27px] font-bold leading-tight text-[#2864ff] md:text-[28px] lg:text-[29px]">
                            <span className="text-[#18233b]">
                                News, innovations and challenges,{" "}
                            </span>
                            that change the industry
                        </h2>
                    </div>

                    <button
                        type="button"
                        className="flex h-11.25 w-fit shrink-0 items-center gap-3 rounded-[9px] bg-[#2864ff] px-7 text-sm font-medium text-white transition hover:bg-[#1852e5]"
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
                            <div className="h-51.25 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={205}
                                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="flex min-h-19 items-center justify-center bg-[#f7f8fa] px-4 py-3">
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
                            <div className="h-51.25 w-full overflow-hidden">
                                <Link
                                    href={item.link}
                                    key={index}
                                    className="">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        height={205}
                                        width={400}
                                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                    />
                                </Link>
                            </div>


                            <div className="flex h-12.75 items-center justify-center bg-[#f7f8fa]">
                                <p className="text-[15px] font-bold text-[#111827]">
                                    {item.title}
                                </p>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default WordOfLogistic;
