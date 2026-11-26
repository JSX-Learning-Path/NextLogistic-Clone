import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { stats } from "../data/careerStats";

function HeroCareer() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gridTemplateRows: {
          xs: "320px auto auto",
          md: "1fr",
        },
        gridTemplateAreas: {
          xs: '"image" "content" "stats"',
          md: '"content image"',
        },
        minHeight: {
          xs: "auto",
          md: "calc(100svh - 60px)",
        },
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src="/hero-career.png"
        alt="Career opportunities"
        sx={{
          gridArea: "image",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          minHeight: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          gridArea: "content",
          backgroundColor: "#172440",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: "28px", md: "8.3%" },
          pt: { xs: "28px", md: 0 },
          pb: { xs: "16px", md: "100px" },
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: "#fff",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Discover your opportunities with us
        </Typography>

        {/* Blue Line */}
        <Box
          sx={{
            width: "54px",
            height: "3px",
            backgroundColor: "#2962FF",
            mt: 2,
            mb: 4,
          }}
        />

        {/* Description */}
        <Typography
          sx={{
            color: "#E2E8F0",
            fontSize: { xs: "14px", md: "17px" },
            lineHeight: 1.65,
            maxWidth: "540px",
            mb: 4,
          }}
        >
          Join the team driving innovation and sustainability in logistics. Be
          part of the change through efficient, eco-friendly transport
          solutions.
        </Typography>

        {/* Button */}
        <Button
          component="a"
          href="/contact"
          variant="contained"
          sx={{
            backgroundColor: "#2962FF",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "13px",
            px: 2.5,
            py: 1.2,
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#1748D1",
            },
          }}
        >
          Get in touch ›
        </Button>
      </Box>

      {/* Statistics */}
      <Box
        sx={{
          gridArea: "stats",
          position: { xs: "relative", md: "absolute" },
          bottom: { md: "7%" },
          left: 0,
          width: "100%",
          boxSizing: "border-box",
          px: { xs: "16px", md: "9.5%" },
          pb: { xs: "4px", md: 0 },
          backgroundColor: { xs: "#172440", md: "transparent" },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4 ,1fr)",
          },
          gridTemplateRows: { xs: "repeat(2, 68px)", md: "auto" },
          zIndex: 3,
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={stat.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "4px", md: "16px" },
              minWidth: 0,

              borderLeft: {
                xs:
                  index % 2 === 1 ? "1px solid rgba(255,255,255,0.65)" : "none",
                md: index > 0 ? "1px solid rgba(255,255,255,0.65)" : "none",
              },

              borderTop: {
                xs: index >= 2 ? "1px solid rgba(255,255,255,0.65)" : "none",
                md: "none",
              },

              minHeight: { md: "93px" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "20px", md: "30px" },
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {stat.number}
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "9px", md: "12px" },
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HeroCareer;
