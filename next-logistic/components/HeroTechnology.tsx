import Box from "@mui/material/Box";

function HeroTechnology() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: { xs: "500px", md: "1000px" },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/hero-technology.png"
        alt="Hero Technology"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
}

export default HeroTechnology;
