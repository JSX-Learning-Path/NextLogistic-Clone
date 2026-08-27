"use client";
import { useState } from "react";
import { Box, Dialog, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";

function ObshtinaTsarevo() {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F7FF",
        minHeight: "100vh",
        padding: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "95%",
            md: "90%",
            lg: "40%",
          },
          marginTop: "50px",
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      ></Box>
    </Box>
  );
}
export default ObshtinaTsarevo;
