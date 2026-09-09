"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LanguageIcon from "@mui/icons-material/Language";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden bg-[#0F172A] lg:min-h-screen">
      <Image
        src="/new-hero-image.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-black/10" />
      <div className="absolute inset-0 bottom-0 z-10 flex h-full  top-50 md:top-40 lg:top-40">
        <div className="ml-auto w-full px-6 sm:w-3/4 sm:px-10 lg:w-1/2">
          <h1 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
            Innovative logistics solutions for a sustainable future
          </h1>

          <motion.div
            className="my-6 h-1 w-12 bg-blue-700"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          />

          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            With a focus on innovation, efficiency and sustainable development,
            we organise land, sea and rail transport in over{" "}
            <span className="font-bold text-yellow-300">35</span> countries.
          </p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-lg bg-blue-700/90 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-blue-600"
            >
              REQUEST TRANSPORT
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#121A2A] to-transparent" />
      <div className="absolute bottom-10 mx-auto flex h-full w-full flex-col justify-end text-xl text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 justify-items-center md:grid-cols-4">
            <div className="flex items-center justify-center">
              <EmojiEventsIcon
                sx={{
                  mr: 2,
                  color: "#2962FF",
                  fontSize: "35px",
                }}
              />
              <div>
                <span className="font-bold "> 15+</span>
                <p className="text-sm text-white/80">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <LanguageIcon
                sx={{
                  mr: 2,
                  color: "#2962FF",
                  fontSize: "35px",
                  // borderLeft: "1px solid white",
                  // paddingLeft: "8px",
                }}
              />
              <div>
                <span className="font-bold "> 35+</span>
                <p className="text-sm text-white/80">Countries </p>
              </div>
            </div>
            <div className="flex items-center">
              <LocalShippingIcon
                sx={{ mr: 2, color: "#2962FF", fontSize: "35px" }}
              />
              <div>
                <span className="font-bold "> 100K+</span>
                <p className="text-sm text-white/80">Operations Per Year</p>
              </div>
            </div>
            <div className="flex items-center">
              <ScheduleIcon
                sx={{ mr: 2, color: "#2962FF", fontSize: "35px" }}
              />
              <div>
                <span className="font-bold "> 24/7</span>
                <p className="text-sm text-white/80">Transport Monitoring</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
