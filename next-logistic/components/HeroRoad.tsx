import { Box, Typography } from "@mui/material";

function HeroRoad() {
  return (
    <Box component="main">
      <Box
        component="section"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          minHeight: {
            xs: "420px",
            sm: "520px",
            md: "100vh",
          },
          overflow: "hidden",
          px: 2,
        }}
      >
        <Box
          component="img"
          src="/heroRoad.png"
          alt="Hero Image"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: { xs: "center 50%" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 16, md: 30 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "calc(100% - 32px)", md: "fit-content" },
            height: { xs: "auto", md: "fit-content" },
            backgroundColor: "#2961ED",
            color: "white",
            p: 3,
            borderRadius: 5,
            textAlign: "center",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            A leader in land transport
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 1, textTransform: "uppercase", fontWeight: 300 }}
          >
            Uncompromising logistics
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "15px", mt: 1 }}>
            The largest logistics group in the Balkans, with established
            transport networks across Europe and the Middle East. We arrange
            road haulage through more than 7,800 subcontractors and a fleet of
            Euro 6, LNG and CNG vehicles. We deliver secure, sustainable and
            environmentally responsible logistics solutions with full
            predictability and uncompromising accuracy. Our in-house tracking
            and administration systems run in real time for maximum transport
            efficiency.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroRoad;
