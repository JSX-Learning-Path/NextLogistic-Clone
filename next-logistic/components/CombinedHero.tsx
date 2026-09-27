"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Stats = {
  value: string;
  label: string;
};
const stats: Stats[] = [
  {
    value: "86",
    label: "PORTS",
  },
  {
    value: "15",
    label: "COUNTRIES",
  },
  {
    value: "170",
    label: "DIFFERENT ROUTES",
  },
  {
    value: "2658",
    label: "Weekly sailings",
  },
];

const CombinedHero = () => {
  return (
    <section className="relative w-full min-h-[90svh] overflow-hidden lg:min-h-screen">
      <Image
        src="/combinedHero.png"
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
          paddingTop: "290px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: "100%", md: "80%", lg: "70%", xl: "50%" },
            paddingRight: { xs: "16px", md: "60px" },
            paddingLeft: { xs: "16px", md: 10 },
            gap: 2,
            alignSelf: "flex-start",
          }}
        >
          <div>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Eco-friendly solutions for sustainable mobility
            </h1>

            <p className="max-w-xl text-base text-white/80 sm:text-lg mt-5">
              Back in 2012 we laid the foundations of combined road-sea
              transport through our company Truck Ferry. As the official
              representative of leading ferry operators for Bulgaria, we develop
              Ro-Ro and Ro-Pax solutions that integrate the overland haulage of
              trucks with efficient maritime connections.
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
                CONTACT US
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 20, md: 40 },
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 15,
                        marginLeft: 1,
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

export default CombinedHero;
