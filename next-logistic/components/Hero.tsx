"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden bg-[#0F172A] lg:min-h-screen">
      <Image
        src="/new-hero-image.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        priority
        className="relative w-full h-auto"
      />
    </section>
  );
};

export default Hero;
