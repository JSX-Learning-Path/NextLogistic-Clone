import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { faqItems } from "../data/faq";
import { faqIcons } from "../data/faqIcons";

function CareerWithVision() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 15 },
        }}
      >
        {/* Section Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
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
              width: "38px",
              height: "2px",
              backgroundColor: "#2962FF",
            }}
          />
        </Box>

        {/* Title and Description */}
        <Box sx={{ mt: 2 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#111827",
            }}
          >
            Culture, values and{" "}
            <Box
              component="span"
              sx={{
                color: "#2962FF",
              }}
            >
              opportunities to grow
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#475569",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            We're proud of our team. Every success is the result of the
            dedication, talent, and professionalism of the people who move the
            company forward. We strive to provide stability, support, and
            opportunities to grow in an environment where everyone can develop
            and contribute to shared success.
          </Typography>
        </Box>

        {/* Questions & Benefits Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.1fr 1fr",
            },
            gap: { xs: 4, lg: 5 },
            alignItems: "center",
            mt: 5,
            width: "100%",
          }}
        >
          {/* FAQ Section */}
          <Box
            sx={{
              width: "100%",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            {faqItems.map((faq) => (
              <Accordion
                key={faq.id}
                disableGutters
                sx={{
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 0,
                  boxShadow: "none",
                  borderBottom: "1px solid #DDE3F0",

                  "&:before": {
                    display: "none",
                  },

                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#2962FF",
                        fontSize: "22px",
                      }}
                    />
                  }
                  sx={{
                    minHeight: "51px",
                    px: 0,

                    "&.Mui-expanded": {
                      minHeight: "51px",
                    },

                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                    },

                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      my: 1.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#172033",
                    }}
                  >
                    {faq.questions}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 0,
                    pt: 0,
                    pb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#475569",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Blue Benefits Section */}
          <Box
            sx={{
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
              backgroundColor: "#2962FF",
              borderRadius: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: { xs: 1, md: 2 },
              p: { xs: 2, md: 3 },
              alignItems: "center",
              justifyItems: "center",
              minHeight: { xs: "320px", md: "356px" },
            }}
          >
            {faqIcons.map((faqIcon) => (
              <Box
                key={faqIcon.id}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  padding: { xs: 1, md: 2 },
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                <faqIcon.icon
                  sx={{
                    fontSize: { xs: "26px", md: "30px" },
                    mb: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    fontWeight: 700,
                    lineHeight: 1.4,
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
