import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {
  TrendingDown,
  FindInPage,
  Map,
  FactCheck,
  AccessTime,
  ElectricBolt,
} from "@mui/icons-material";
import { CardContent } from "./ui/card";

const items = [
  {
    id: 1,
    icon: TrendingDown,
    title: "Cost and time",
    description: "reduction",
  },
  {
    id: 2,
    icon: FindInPage,
    title: "Document",
    description: "digitalization",
  },
  {
    id: 3,
    icon: Map,
    title: "Route optimization",
    description: "and analysis",
  },
  {
    id: 4,
    icon: FactCheck,
    title: "Secure and transparent",
    description: "transactions",
  },
  {
    id: 5,
    icon: AccessTime,
    title: "Safe and fast",
    description: "deliveries",
  },
  {
    id: 6,
    icon: ElectricBolt,
    title: "Sustainable and green",
    description: "logistic",
  },
];

function WhyWorkWithUs() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#F5F6FF", minHeight: "100vh", width: "100%" }}
    >
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", padding: "70px 20px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#2A64FF",
              fontSize: "15px",
            }}
          >
            Why Work With Us
          </Typography>
          <Box
            component="span"
            sx={{
              width: "32px",
              height: "2px",
              backgroundColor: "#2962FF",
              margin: "0 auto",
              display: "block",
            }}
          ></Box>
          <Box component="div">
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "#000000",
                fontSize: { xs: "15px", md: "35px" },
                lineHeight: "1.5",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              We deliver
              <Box component="span" sx={{ color: "#2962FF" }}>
                {" "}
                the best technology solutions
              </Box>{" "}
            </Typography>
            <Typography
              component="p"
              sx={{
                marginTop: "10px",
                color: "gray",
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "1.6",
              }}
            >
              Trust us to build a more efficient future together.
            </Typography>
          </Box>
          {/* Graphic */}
          <Box
            component="div"
            sx={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: "20px",
            }}
          >
            {items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px 30px",
                  border: "1px solid #2962ff9b",
                  borderRadius: "8px",
                  gap: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    backgroundColor: "#e3f2fd77",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  <item.icon
                    sx={{
                      fontSize: "30px",
                      color: "#2962FF",
                      marginBottom: "10px",
                      backgroundColor: "#e3f2fd77",
                      padding: "5px",
                      borderRadius: "10%",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      color: "#2962FF",
                      fontSize: "17px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyWorkWithUs;
