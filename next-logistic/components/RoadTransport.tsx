import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FinancialResults from "./charts/FinancialResults";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Typography, Divider, Card } from "@mui/material";
import { landTransportCards } from "@/data/landTransportCards";
import Image from "next/image";
import Link from "next/link";

function RoadTransport() {
  return (
    <Box className="bg-white min-h-screen">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: 5 },
          px: { xs: 1, md: 15 },
          maxWidth: "1800px",
          margin: "0 auto",
          mt: { xs: 2, md: 5 },
        }}
      >
        {/* Left */}
        <Box sx={{ backgroundColor: "#EEF3FF", borderRadius: 3, p: 3 }}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", md: "1rem" },
                fontWeight: "bold",
                mb: 1,
                color: "#265DFB",
                textTransform: "uppercase",
              }}
            >
              Land Transport
            </Typography>
            <Divider
              sx={{ borderColor: "#265DFB", borderWidth: "1px", width: "50px" }}
            />
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                color: "#265DFB",
                fontWeight: "bold",
                gap: 1,
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "0.875rem", md: "2rem" },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: { xs: "0.875rem", md: "2rem" },
                }}
              >
                Types of
              </Typography>
              transport vehicle
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Next Logistic is part of the largest transport group in the
              Balkans, providing dependable road transport solutions for large
              manufacturers and key sectors across Europe.
            </Typography>
          </Box>
          <Box sx={{ width: "100%", margin: "0 auto", mt: { xs: 2, md: 5 } }}>
            {landTransportCards.map((card) => {
              return (
                <Card
                  key={card.id}
                  sx={{
                    mb: 2,
                    p: 3,
                    width: "100%",
                    border: "1px solid #265bfb30",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    gap: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 15px rgba(38, 91, 251, 0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "120px",
                        flexShrink: 0,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: { xs: "row", sm: "column" },
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#265DFB",
                          fontSize: { xs: "1rem", md: "1.5rem" },
                        }}
                      >
                        {card.amount}
                      </Typography>
                      <Typography>{card.vehicles}</Typography>
                    </Box>
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {card.title}
                      </Typography>
                      <Typography sx={{ color: "gray" }}>
                        {card.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>
        {/* Right side */}
        <div className="bg-[#EEF3FF] w-full flex flex-col md:flex-col md:w-1/2 md:flex rounded-xl md:py-10 md:px-5 gap-5">
          <div className="flex items-start gap-5">
            <div className="hidden md:flex md:w-1/2 gap-2 px-5 pb-20 pt-10 bg-blue-600 rounded-xl">
              <CheckCircleIcon sx={{ color: "white" }} />
              <p className="text-white">
                Logistics services combining efficiency, innovation and
                sustainability. With a network of trusted partners and modern
                infrastructure, we provide solutions for key destinations and
                routes, guaranteeing flexibility and uncompromising reliability.
              </p>
            </div>
            <div className="relative w-full bg-white md:w-1/2 rounded-xl">
              <p className="absolute inset-1 text-center">
                Total transports completed (2021 - 2025)
              </p>
              <FinancialResults />
            </div>
          </div>
          <div className="hidden md:flex gap-3 flex-wrap ">
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Cost Optimizations</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Modern Fleet</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Sustainability</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Planning</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Security</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Express Delivery</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Monitoring</p>
            </div>
            <div className="flex  items-center gap-2 border border-blue-600/50 rounded-full p-1">
              <CheckCircleIcon sx={{ color: "#2862FF" }} />
              <p className="text-blue-600 text-sm">Technology and innovation</p>
            </div>
          </div>
          <div className="w-full flex gap-5 items-stretch">
            <div className="w-full md:w-1/2">
              <div className="bg-white flex flex-col items-center w-full  rounded-xl px-5 py-10">
                <p className="text-black/80">
                  96% of our transports are FTL, which guarantees speed and
                  security, while 4% are LTL, providing flexibility for smaller
                  volumes.
                </p>
                <div className="items-center">
                  <ArrowUpwardIcon
                    sx={{ color: "#2862FF", fontSize: "35px" }}
                  />
                  <span className="font-bold text-2xl">+96%</span>
                </div>
                <div className="items-center">
                  <ArrowUpwardIcon
                    sx={{ color: "#2862FF", fontSize: "35px" }}
                  />
                  <span className="font-bold text-2xl">+4%</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white rounded-2xl w-full py-3 mt-2">
                <Link
                  href="/contacts"
                  className="bg-blue-600 text-white font-bold"
                >
                  Contact Us
                </Link>
              </button>
            </div>

            <div className="hidden md:flex md:w-1/2">
              <Image
                src="/next-truck-road-transport.png"
                alt="Road Transport"
                className="rounded-xl"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default RoadTransport;

// hover:bg-blue-100/20
//          transition-all duration-400"
