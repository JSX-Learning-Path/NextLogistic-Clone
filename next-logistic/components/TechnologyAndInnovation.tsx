import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const technologyAndInnovationIcon = [
  {
    id: 1,
    icon: <LightbulbIcon sx={{ color: "#2962FF", fontSize: "32px" }} />,
    title: "Technologies driving the future",
    description:
      "We focus on designing and deploying innovative management solutions across our entire operation.",
  },
  {
    id: 2,
    icon: <LightbulbIcon sx={{ color: "#2962FF", fontSize: "32px" }} />,
    title: "Sustainability through innovation",
    description:
      "We empower our teams to fully leverage modern digital tools to maximize operational efficiency.",
  },
  {
    id: 3,
    icon: <LightbulbIcon sx={{ color: "#2962FF", fontSize: "32px" }} />,
    title: "Digital transformation",
    description:
      "We develop internal training programs designed to continuously elevate our team's skills and expertise.",
  },
  {
    id: 4,
    icon: <LightbulbIcon sx={{ color: "#2962FF", fontSize: "32px" }} />,
    title: "Emerging technologies",
    description:
      "We actively integrate modern technological solutions and continuously nurture a culture of innovation.",
  },
];

function TechnologyAndInnovation() {
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF" }}
    >
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", padding: "70px 20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            gap: "40px",
          }}
        >
          <Box>
            {/* Left Side */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2.5,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#2962FF",
                  }}
                >
                  Technology & Innovation
                </Typography>

                <Box
                  sx={{
                    width: "32px",
                    height: "2px",
                    backgroundColor: "#2962FF",
                  }}
                />
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "30px",
                    md: "36px",
                  },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                  color: "#111827",
                  mb: 2.5,
                }}
              >
                Leading solutions for{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#2962FF",
                  }}
                >
                  efficiency and growth
                </Box>
              </Typography>

              <Typography
                component="p"
                sx={{
                  maxWidth: "850px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#475569",
                  m: 0,
                }}
              >
                We invest heavily in cutting-edge technologies and team
                development to automate workflows, optimize daily operations,
                and achieve sustainable efficiency gains.
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                mt: "40px",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },
                columnGap: "40px",
                rowGap: "32px",
              }}
            >
              {technologyAndInnovationIcon.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      pt: "2px",
                      "& svg": {
                        fontSize: "22px",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: "17px",
                        lineHeight: 1.4,
                        fontWeight: 700,
                        color: "#111827",
                        mb: "8px",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "#475569",
                        m: 0,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          {/*  Code Picture*/}
          <Box
            component="div"
            sx={{ backgroundColor: "#FCFCFC", borderRadius: "20px" }}
          >
            <Box
              component="img"
              src="/technology-pictures/technology-innovation-code.png"
              alt="Code Picture"
              sx={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TechnologyAndInnovation;
