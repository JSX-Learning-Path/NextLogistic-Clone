import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const iconsforInnovationSpirit = [
  {
    id: 1,
    icon: <LightbulbOutlinedIcon sx={{ color: "#2453E9" }} />,
    backgroundColor: "#EDF4FF",
  },
  {
    id: 2,
    icon: <LayersOutlinedIcon sx={{ color: "#2453E9" }} />,
    backgroundColor: "#EDF4FF",
  },
  {
    id: 3,
    icon: <InterestsOutlinedIcon sx={{ color: "#2453E9" }} />,
    backgroundColor: "#EDF4FF",
  },
  {
    id: 4,
    icon: <HubOutlinedIcon sx={{ color: "#2453E9" }} />,
    backgroundColor: "#EDF4FF",
  },
  {
    id: 5,
    icon: <GridViewOutlinedIcon sx={{ color: "#2453E9" }} />,
    backgroundColor: "#EDF4FF",
    color: "#2453E9",
  },
];

function InnovationSpirit() {
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF" }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          boxSizing: "border-box",
          width: "100%",
          margin: "0 auto",
          padding: { xs: "30px 16px", md: "50px 20px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          gap: { xs: "24px", md: "30px" },
          alignItems: "stretch",
        }}
      >
        {/*Left*/}
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: "1 1 0",
            minWidth: 0,
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#EDF1FF",
              padding: "20px",
              borderRadius: "15px",
              width: "100%",
              boxSizing: "border-box",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              gap: "10px",
            }}
          >
            {iconsforInnovationSpirit.map((item) => (
              <Box
                key={item.id}
                sx={{
                  backgroundColor: item.backgroundColor,
                  color: item.color || "#FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  margin: "5px",
                }}
              >
                {item.icon}
              </Box>
            ))}
          </Box>
          {/* Blue section */}
          <Box
            component="div"
            sx={{
              backgroundColor: "#2453E9",
              padding: { xs: "24px", md: "40px" },
              borderRadius: "15px",
              width: "100%",
              boxSizing: "border-box",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box component="div">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  Innovation Spirit
                </Typography>
                <Box
                  component="span"
                  sx={{
                    width: "30px",
                    backgroundColor: "#FFFFFF",
                    height: "2px",
                  }}
                ></Box>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  mt: "10px",
                  fontWeight: "bold",
                  fontSize: { xs: "22px", md: "26px" },
                  lineHeight: 1.4,
                }}
              >
                The heart of innovation - our technology team
              </Typography>
              <Typography sx={{ marginTop: "10px" }}>
                Thanks to their experience, creativity, and drive for
                excellence, we build innovative solutions that automate
                processes, optimize logistics, and ensure efficiency.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Right section */}
        <Box component="div" sx={{ flex: "1 1 0", minWidth: 0, width: "100%" }}>
          <Box
            component="img"
            src="/belon&coworker.png"
            alt="Two Coworkers Laughing"
            sx={{ width: "100%", height: "auto", borderRadius: "15px" }}
          ></Box>
          <Box
            sx={{
              mt: "20px",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, minmax(0, 1fr))",
                sm: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: "8px", sm: "20px" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src="/women&magazine.png"
              alt="Woman Reading Magazine"
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block",
              }}
            />

            <Box
              component="img"
              src="/coffee&innovation.png"
              alt="Coffee and Innovation"
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block",
              }}
            />

            <Box
              component="img"
              src="/thesenior&belon.png"
              alt="The Senior and Belon"
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InnovationSpirit;
