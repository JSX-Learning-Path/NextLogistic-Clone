import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { experts } from "../data/industryExperts";

function IndustryExperts() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          width: "100%",
          boxSizing: "border-box",
          margin: "0 auto",
          padding: { xs: "24px 16px", md: "30px 20px" },
        }}
      >
        {/* Industry Experts Content */}
        <Box
          sx={{
            // outline: "1px solid red",
            display: "flex",
            flexDirection: { xs: "column", lg: "column" },
            gap: { xs: "24px", lg: "40px" },
            alignItems: "stretch",
          }}
        >
          <Box
            component="div"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "16px",
              padding: "16px",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{}}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ color: "#000000dc", fontWeight: "bold" }}
              >
                Meet the industry experts
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "gray" }}>
                Our logistics experts who, with pride and commitment, ensure the
                quality and efficiency of our services.
              </Typography>
            </Box>
            <Button
              variant="contained"
              //   component={Link}
              href="/careers"
              sx={{
                backgroundColor: "#2962FF",
                fontWeight: "bold",
                marginTop: "16px",
                padding: "10px 20px",
                borderRadius: "15px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#2962FF",
                  boxShadow: "0px 8px 24px rgba(41, 98, 255, 0.20)",
                },
              }}
            >
              Open positions
            </Button>
          </Box>
          {/* Experts Cards*/}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {experts.map((expert) => (
              <Card
                key={expert.id}
                sx={{
                  p: 2,
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                  transform: "translateY(0)",
                  transition:
                    "transform 300ms ease-in-out, box-shadow 300ms ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  style={{ width: "37%", borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {expert.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ color: "gray", fontSize: "14px" }}
                >
                  {expert.occupation}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default IndustryExperts;
