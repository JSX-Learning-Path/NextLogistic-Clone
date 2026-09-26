"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Box from "@mui/material/Box";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LanguageIcon from "@mui/icons-material/Language";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Stats = {
  value: string;
  label: string;
  icon: ReactNode;
};
const stats: Stats[] = [
  {
    value: "15+",
    label: "YEARS OF EXPERIENCE",
    icon: <EmojiEventsIcon />,
  },
  {
    value: "35+",
    label: "COUNTRIES",
    icon: <LanguageIcon />,
  },
  {
    value: "100K+",
    label: "OPERATIONS PER YEAR",
    icon: <LocalShippingIcon />,
  },
  {
    value: "24/7",
    label: "TRANSPORT MONITORING",
    icon: <ScheduleIcon />,
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden lg:min-h-screen">
      <Image
        src="/new-hero-image.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-[center_20%] md:object-[center_center]"
      />

      <Box
        component="div"
        className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-black/10 z-20"
      />
      <Box
        component="div"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "190px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: "100%", md: "80%", lg: "70%", xl: "50%" },
            paddingRight: { xs: "16px", md: "60px" },
            paddingLeft: { xs: "16px", md: 0 },
            alignSelf: "flex-end",
          }}
        >
          <div>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-4xl">
              Innovative logistics solutions for a sustainable future
            </h1>

            <motion.div
              className="my-6 h-1 w-12 bg-blue-700"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            />

            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              With a focus on innovation, efficiency and sustainable
              development, we organise land, sea and rail transport in over{" "}
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
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "20px",
          }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: "rgba(255,255,255,0.35)",
                  }}
                />
              }
              sx={{
                width: "100vw",
                // ml: "calc(50% - 50vw)",
                minHeight: 90,
                color: "white",
                alignItems: { xs: "center", md: "stretch" },
                px: { xs: 2, md: 8 },
                py: 2,
              }}
            >
              {stats.map((stat) => (
                <Stack
                  key={stat.label}
                  direction="row"
                  sx={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "start",
                    ml: { xs: 0, md: 2 },
                    width: { xs: 260, md: "auto" },
                  }}
                  spacing={2}
                >
                  <Box sx={{ color: "#087cff" }}>{stat.icon}</Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 20, md: 22 },
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11,
                        mt: 0.5,
                        color: "rgba(255,255,255,0.8)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
