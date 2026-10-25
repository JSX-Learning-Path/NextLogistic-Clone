"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "15+", label: "Years of experience" },
  { value: "30%", label: "Fewer emissions" },
  { value: "100+", label: "Green partners" },
  { value: "500K+", label: "Green deliveries" },
];

const GreenLogisticsHero = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden lg:min-h-screen">
      <Image
        src="/greenLogistic-hero.jpg"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-[center_20%] md:object-center"
      />

      {/* затъмняване */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

      {/* малка синя линия по средата */}
      <div className="absolute left-1/2 top-[150px] z-20 hidden h-[3px] w-[70px] -translate-x-1/2 bg-[#2962ff] md:block" />

      <div className="relative z-20 flex min-h-[90svh] flex-col px-4 pb-10 pt-28 md:px-12 lg:min-h-screen lg:pt-32">
        {/* Заглавие */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          Efficient solutions <br className="hidden md:block" />
          with care for nature
        </motion.h1>

        {/* Разделителна линия */}
        <div className="mt-10 h-px w-full bg-white/30 md:mt-16" />

        {/* Текст */}
        <p className="mt-10 max-w-[700px] text-base leading-8 text-white md:mt-16 md:text-lg lg:text-xl lg:leading-9">
          We adopt sustainable practices in transport to reduce our carbon
          footprint and optimise resources. Through intermodal solutions,
          energy-efficient vehicles, and eco-friendly technology, we ensure a
          cleaner, more responsible future for logistics.
        </p>

        {/* Бутон */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-[#2962ff] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#2962ff] md:text-lg"
          >
            Get in touch ›
          </Link>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="mt-auto pt-16"
        >
          <div className="grid grid-cols-2 border-r border-white/40 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center gap-1 border-l border-white/40 px-5 py-5 md:flex-row md:items-center md:gap-4 md:px-8"
              >
                <span className="text-3xl font-extrabold leading-none text-white md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wide text-white/90 md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenLogisticsHero;