"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

interface CardProps {
  title: string;
  lines: string[];
  img: string;
}

const cards: CardProps[] = [
  {
    title: "Road transport",
    lines: [
      "International transport",
      "Transport in Bulgaria",
      "Refrigerated transport",
      "Bulk transport",
    ],
    img: "/next-building.png",
  },
  {
    title: "Combined transport",
    lines: [
      "Ferry reservations",
      "Fixed schedules",
      "Reduced risk of road accidents",
      "Green logistics policy",
    ],
    img: "/grimaldi-lines.png",
  },
  {
    title: "Intermodal transport",
    lines: [
      "Environmental sustainability",
      "Terminal in Bulgaria",
      "Terminal in Turkey",
      "Fixed schedules",
    ],
    img: "/next-container-2.png",
  },
  {
    title: "Railway transport",
    lines: [
      "Cost efficiency",
      "License in Bulgaria",
      "License in Serbia",
      "License in Turkey",
    ],
    img: "/next-train.png",
  },
  {
    title: "Road transport 2",
    lines: ["Service A", "Service B", "Service C"],
    img: "/next-containers.png",
  },
  {
    title: "Combined transport 2",
    lines: ["Service D", "Service E", "Service F"],
    img: "/next-ferry.png",
  },
];

function ServiceCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(cards.length / 4);

  function goTo(p: number) {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    containerRef.current.scrollTo({ left: w * p, behavior: "smooth" });
    setPage(p);
  }
  return (
    <section className="mt-6 ">
      <div className="relative">
        <div ref={containerRef} className="overflow-hidden">
          <div className="flex" style={{ width: `${pages * 100}%` }}>
            {Array.from({ length: pages }).map((_, p) => (
              <div
                key={p}
                style={{ width: `${100 / pages}%`, paddingRight: 12 }}
              >
                <div className="flex gap-4">
                  {cards.slice(p * 4, p * 4 + 4).map((card, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden flex-1"
                      style={{ minHeight: 340 }}
                    >
                      {card.img && (
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(min-width: 1024px) 25vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0">
                        <div className="absolute left-6 bottom-6 text-white z-10 max-w[70%]">
                          <h3 className="font-semibold text-lg">
                            {card.title}
                          </h3>
                          <ul className="mt-2 text-sm space-y-1">
                            {card.lines.slice(0, 4).map((l, i) => (
                              <li key={i}>{l}</li>
                            ))}
                          </ul>
                          <a
                            className="mt-2 inline-block bg-transparent text-white py-1 px-2 font-semibold"
                            href="#"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous"
          onClick={() => goTo(Math.max(0, page - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-300 rounded-full p-1 shadow"
        >
          &lt;&lt;
        </button>
        <button
          aria-label="Next"
          onClick={() => goTo(Math.min(pages - 1, page + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-300 rounded-full p-1 shadow"
        >
          &gt;&gt;
        </button>
        <div className="flex justify-center mt-3 gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full ${i === page ? "bg-slate-500" : "bg-slate-300"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCarousel;
