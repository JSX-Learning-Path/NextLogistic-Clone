import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { stats } from "../data/careerStats";

function HeroCareer() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          width: "100%",
          flex: 1,
        }}
      >
        <Box sx={{ backgroundColor: "#172440", height: "100vh" }}></Box>
        <Box
          component="img"
          src="/hero-career.png"
          alt="Hero Image"
          sx={{ width: "100%", height: "100vh" }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2 , minmax(0 , 1fr))",
            md: "repeat(4 , minmax(0 , 1fr))",
          },
          padding: "100px 0",
        }}
      >
        {stats.map((stat) => (
          <Box
            key={stat.id}
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "30px" },
                fontWeight: "bold",
                borderLeft: "1px solid #fff",
                paddingLeft: "10px",
              }}
            >
              {stat.number}
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default HeroCareer;
