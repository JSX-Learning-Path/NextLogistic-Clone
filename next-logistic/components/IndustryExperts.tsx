import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { image } from "framer-motion/client";
// import { image } from "framer-motion/m";

interface IndustryExpertsProps {
  id: number;
  image: string;
  name: string;
  occupation: string;
}

const experts: IndustryExpertsProps[] = [
  {
    id: 1,
    image: "/idustry-experts/mr.Bosneshki.png",
    name: "Vasil Bosneshki",
    occupation: "CEO",
  },
  {
    id: 2,
    image: "/idustry-experts/ganka.png",
    name: "Ganka Moncheva",
    occupation: "Chief Accountant",
  },
  {
    id: 3,
    image: "/idustry-experts/nasie.png",
    name: "Nasie Hashimova",
    occupation: "Manager",
  },
  {
    id: 4,
    image: "/idustry-experts/rumen.png",
    name: "Rumen Minkov",
    occupation: "Manager",
  },
  {
    id: 5,
    image: "/idustry-experts/eduard.png",
    name: "Eduard Bashev",
    occupation: "Deputy Manager",
  },
  {
    id: 6,
    image: "/idustry-experts/galina.png",
    name: "Galina Laleva",
    occupation: "Deputy Manager",
  },
  {
    id: 7,
    image: "/idustry-experts/nikoleta.png",
    name: "Nikoleta Tsvetkova",
    occupation: "Team Leader",
  },
  {
    id: 8,
    image: "/idustry-experts/iveta.png",
    name: "Iveta Panchovska",
    occupation: "Seniort Accountant",
  },
  {
    id: 9,
    image: "/idustry-experts/simeon.png",
    name: "Simeon Borisov",
    occupation: "Deputy Manager",
  },
  {
    id: 10,
    image: "/idustry-experts/salzina.png",
    name: "Salzina Markova",
    occupation: "Coordinator",
  },
  {
    id: 11,
    image: "/idustry-experts/mariya.png",
    name: "Mariya Georgieva",
    occupation: "Finance Controller",
  },
  {
    id: 12,
    image: "/idustry-experts/monika.png",
    name: "Monika Ivanova",
    occupation: "Finance Controller",
  },
  {
    id: 13,
    image: "/idustry-experts/ivan.png",
    name: "Ivan Bochkova",
    occupation: "Senior Coordinator",
  },
  {
    id: 14,
    image: "/idustry-experts/belon.png",
    name: "Belon Manukyan",
    occupation: "Engineering Manager",
  },
  {
    id: 15,
    image: "/idustry-experts/katerina.png",
    name: "Katerina Panova",
    occupation: "Team Leader",
  },
  {
    id: 16,
    image: "/idustry-experts/siyka.png",
    name: "Siyka Bukova",
    occupation: "Finance Controller",
  },
  {
    id: 17,
    image: "/idustry-experts/zhaklin.png",
    name: "Zhaklin Toneva",
    occupation: "Legal Advisor",
  },
  {
    id: 18,
    image: "/idustry-experts/cvetelina.png",
    name: "Tsvetelina Ivanova",
    occupation: "Finance Controller",
  },
  {
    id: 19,
    image: "/idustry-experts/dimitrina.png",
    name: "Dimitrina Kaloyanova",
    occupation: "Team Leader",
  },
  {
    id: 20,
    image: "/idustry-experts/emil.png",
    name: "Emil Tafrov",
    occupation: "Coordinator",
  },
  {
    id: 21,
    image: "/idustry-experts/ozan.png",
    name: "Ozan Mutalibov",
    occupation: "Team Leader",
  },
  {
    id: 22,
    image: "/idustry-experts/stanka.png",
    name: "Stanka Staikova",
    occupation: "Payroll Specialist",
  },
  {
    id: 23,
    image: "/idustry-experts/sashka.png",
    name: "Sashka Tsvetkova",
    occupation: "Office Cleaner",
  },
  {
    id: 24,
    image: "/idustry-experts/sema.png",
    name: "Sema Myumyun",
    occupation: "Graphic Designer",
  },
  {
    id: 25,
    image: "/idustry-experts/ralitsa.png",
    name: "Ralitsa Ruseva",
    occupation: "Coordinator",
  },
  {
    id: 26,
    image: "/idustry-experts/valentina.png",
    name: "Valentina Mayorova",
    occupation: "Accountant",
  },
  {
    id: 27,
    image: "/idustry-experts/vladislav.png",
    name: "Vladislav Kostov",
    occupation: "Coordinator",
  },
  {
    id: 28,
    image: "/idustry-experts/neli.png",
    name: "Neli Georgieva",
    occupation: "Office Cleaner",
  },
  {
    id: 29,
    image: "/idustry-experts/stela.png",
    name: "Stela Toshkova",
    occupation: "Assistant",
  },
  {
    id: 30,
    image: "/idustry-experts/radosveta.png",
    name: "Radosveta Valkova",
    occupation: "Coordinator",
  },
];

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
            outline: "1px solid red",
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
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#2962FF",
                  boxShadow: "0px 8px 24px rgba(41, 98, 255, 0.20)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Open positions
            </Button>
          </Box>
          <Box>dasdsa</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default IndustryExperts;
