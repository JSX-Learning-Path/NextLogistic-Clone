import { Box, Typography } from "@mui/material";
import { faqItems } from "../data/faq";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqIcons } from "../data/faqIcons";

function CareerWithVision() {
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
          margin: "0 auto",
          boxSizing: "border-box",
          px: { xs: 2, md: 20 },
          py: { xs: 2, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#2962FF",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            A Career with a Vision for the future
          </Typography>
          <Box
            component="span"
            sx={{
              width: "36px",
              height: "2px",
              flexShrink: 0,
              backgroundColor: "#2962FF",
            }}
          ></Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#111827",
            }}
          >
            Culture, values and
            <Box component="span" sx={{ color: "#2962FF", marginLeft: "10px" }}>
              opportunities to grow
            </Box>
          </Typography>
          <Typography sx={{ mt: 2, color: "gray" }}>
            We're proud of our team. Every success is the result of the
            dedication, talent, and professionalism of the people who move the
            company forward. We strive to provide stability, support, and
            opportunities to grow in an environment where everyone can develop
            and contribute to shared success.
          </Typography>
        </Box>
        {/* Questions & Blue Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.1fr 1fr",
            },
            width: "100%",
            gap: { xs: 3, lg: 5 },
            alignItems: "stretch",
            mt: 5,
            height: "100%",
          }}
        >
          {/* Questions Section */}
          <Box
            sx={{
              minWidth: 0,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {faqItems.map((faq) => (
              <Accordion
                key={faq.id}
                sx={{
                  backgroundColor: "#FFFFFF",
                  "&::before": {
                    display: "none",
                  },
                  borderBottom: "1px solid #DDE3F0",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#2962FF" }} />}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {faq.questions}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{fontSize: "14px"}}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          {/* Blue Section */}
          <Box
            sx={{
              minWidth: 0,
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#2962FF",
              borderRadius: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 2,
              p: { xs: 2, md: 3 },
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {faqIcons.map((faqIcon) => (
              <Box
                key={faqIcon.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                <faqIcon.icon sx={{ fontSize: "36px", mb: 1 }} />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "13px", md: "14px" },
                    fontWeight: "bold",
                  }}
                >
                  {faqIcon.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CareerWithVision;
