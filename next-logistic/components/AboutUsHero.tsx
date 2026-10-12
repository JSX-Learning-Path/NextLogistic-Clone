"use client";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "next/link";

function AboutUsHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: "770px",
          md: "950px",
        },

        backgroundImage: "url('/AbousUsHeroPicture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: 350,
            md: 150,
          },
          right: {
            xs: "auto",
            md: 150,
          },
          left: {
            xs: 0,
            md: "auto",
          },
          width: {
            xs: "100%",
            md: "auto",
          },
          px: {
            xs: 3,
            md: 0,
          },
          animation: "slideUp 1s ease-out forwards",
          "@keyframes slideUp": {
            from: {
              transform: "translateY(80px)",
              opacity: 0,
            },
            to: {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              lineHeight: "1.6",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Next Logistic unites every mode of transport into one network across
            more than 35 countries. We invest in digitalisation and
            sustainability to deliver predictably, efficiently and responsibly.
          </Typography>

          <Box
            sx={{
              mt: 3,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-5 py-3 rounded uppercase text-sm font-bold"
            >
              Contact us →
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUsHero;
