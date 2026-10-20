import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { opportunitiesData } from "../data/opportunitiesData";

function OpportunitiesWithOutLimits() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#DCE9F7",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          width: "100%",
          boxSizing: "border-box",
          mx: "auto",
          px: { xs: 2, sm: 3, md: "20px" },
          pt: { xs: "80px", md: "140px" },
          pb: 6,
        }}
      >
        {/* Heading */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                width: "36px",
                height: "2px",
                flexShrink: 0,
                backgroundColor: "#2962FF",
              }}
            />

            <Typography
              component="p"
              sx={{
                color: "#2962FF",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Opportunities Without Limits
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#111827",
            }}
          >
            Your path to success{" "}
            <Box component="span" sx={{ color: "#2962FF" }}>
              starts here
            </Box>
          </Typography>
        </Box>

        {/* Cards */}

        {/* Cards and image */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
            alignItems: "stretch",
          }}
        >
          {/* First two cards */}
          {opportunitiesData.slice(0, 2).map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                elevation={0}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "24px",
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  minWidth: 0,
                  boxShadow: "0 4px 15px rgba(41, 98, 255, 0.04)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      backgroundColor: "#EEF3FF",
                      color: "#2962FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>

                  <Typography
                    sx={{ fontSize: 12, fontWeight: 700, color: "#475569" }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#2962FF",
                    lineHeight: 1.5,
                  }}
                >
                  {item.heading}
                </Typography>

                <Typography
                  sx={{ fontSize: 14, lineHeight: 1.6, color: "#475569" }}
                >
                  {item.description}
                </Typography>
              </Card>
            );
          })}

          <Box
            component="img"
            src="/searchingForNewTalent.png"
            alt="Our team"
            sx={{
              gridColumn: { xs: "span 1", sm: "span 2", lg: "span 2" },
              gridRow: "auto",
              width: "100%",
              height: { xs: 220, sm: 240, lg: 222 },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "24px",
              display: "block",
              minWidth: 0,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          {opportunitiesData.slice(2).map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                elevation={0}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "24px",
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  minWidth: 0,
                  boxShadow: "0 4px 15px rgba(41, 98, 255, 0.04)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      backgroundColor: "#EEF3FF",
                      color: "#2962FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>

                  <Typography
                    sx={{ fontSize: 12, fontWeight: 700, color: "#475569" }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#2962FF",
                    lineHeight: 1.5,
                  }}
                >
                  {item.heading}
                </Typography>

                <Typography
                  component="p"
                  sx={{ fontSize: 14, lineHeight: 1.6, color: "#475569" }}
                >
                  {item.description}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default OpportunitiesWithOutLimits;
