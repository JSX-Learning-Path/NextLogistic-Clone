import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

interface TransportCards {
  id: number;
  number: number;
  title: string;
  description: string;
  category: string;
}

const cards: TransportCards[] = [
  {
    id: 1,
    number: 1450,
    title: "Our own Fleet",
    description:
      "889 x Euro 6  261 x Euro 5  150 x LNG  150 x CNG eco-efficient tractors",
    category: "Truck",
  },
  {
    id: 2,
    number: 2850,
    title: "Versatility for any cargo",
    description: "Capable of handling a wide range of cargo types efficiently.",
    category: "Trailers",
  },
  {
    id: 3,
    number: 197,
    title: "Sea routes",
    description: "Our ferry lines provide access to key ports in 15 countries.",
    category: "Sea routes",
  },
  {
    id: 4,
    number: 7800,
    title: "Subcontractor network",
    description:
      "Through our partner logistics networks we have access to a fleet of over 30,000 external vehicles.",
    category: "Trusted carriers",
  },
  {
    id: 5,
    number: 34,
    title: "Efficiency on rails",
    description: `5 x Koncar
  18 x Siemens Smarton 80 & 81 7 x Diesel 07, 05 & 44
  4 x shunting 05 & 742`,
    category: "Locomotive",
  },
  {
    id: 6,
    number: 805,
    title: "Flexibility for every type of transport",
    description:
      "261 x EA  74 x SMMPS  143 x tankers   47 x intermodal  46 x car-carrier wagons",
    category: "Rail wagons",
  },
  {
    id: 7,
    number: 2,
    title: "Strategically positioned",
    description:
      "Located in Bulgaria and Turkey, the terminals optimise transit times.",
    category: "Intermodal Terminals",
  },
  {
    id: 8,
    number: 3,
    title: "Global reach and operational security",
    description:
      "Freight transport licences in Bulgaria, Serbia and Turkey provide access to key markets.",
    category: "International licences",
  },
];

function ScaleAndCapability() {
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
      {/* Main */}
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", padding: "30px 20px" }}>
        {/*Top */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textTransform: "uppercase",
                  color: "#2962FF",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Scale and capability in transport
              </Typography>
              <Box
                component="span"
                sx={{
                  backgroundColor: "#2962FF",
                  width: "50px",
                  height: "2px",
                }}
              ></Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                fontSize: "30px",
                lineHeight: "1.5",
                fontWeight: "bold",
              }}
            >
              Types of transport vehicles
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#808080",
              fontSize: "16px",
              lineHeight: "1.5",
              marginTop: "20px",
            }}
          >
            Modern logistics demands large-scale solutions that deliver fast,
            secure and efficient transport. By strategically combining road,
            rail, sea and river transport, we guarantee flexibility and
            reliability for any type of cargo. Our diverse fleet and broad
            partner network allow us to optimise every logistics process,
            providing access to key trade routes across Europe and beyond.
          </Typography>
        </Box>
        {/*Cards Section */}
        <Box component="div" sx={{ marginTop: "40px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
              gridTemplateRows: { lg: "repeat(2,1fr)" },
              gap: { xs: "15px", md: "20px 48px" },
              width: "100%",
            }}
          >
            {cards.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  padding: "30px",
                  border: "1px solid #E0E7FF",
                  borderRadius: "15px",
                  boxShadow: "0 5px 20px rgba(36, 83, 233, 0.06)",
                  "&:hover": {
                    boxShadow: "0 10px 50px rgba(36, 83, 233, 0.1)",
                    transition: "all 0.5s ease-in-out",
                  },
                }}
              >
                <Box sx={{ minWidth: "100px", textAlign: "center" }}>
                  <Typography
                    sx={{
                      color: "#2453E9",
                      fontSize: "26px",
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </Typography>

                  <Typography sx={{ color: "#475569" }}>
                    {item.category}
                  </Typography>
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 700, color: "#111827" }}>
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: "5px",
                      color: "#475569",
                      fontSize: "14px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ScaleAndCapability;
