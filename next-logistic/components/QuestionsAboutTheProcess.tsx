import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questionsAboutTheProcess } from "../data/questionsAboutTheProcess";
import Image from "next/image";

import deskLaptops from "../public/career/deskLaptops.png";
import officeHall from "../public/career/officeHall.png";
import nextOffice from "../public/career/nextOffice.png";
import nextColors from "../public/career/nextColors.png";
import togetherHall from "../public/career/togetherHall.png";
import nextDesk from "../public/career/nextDesk.png";

function QuestionsAboutTheProcess() {
  const images = [
    {
      id: 1,
      src: deskLaptops,
      alt: "Desk with laptops",
      span: 1,
    },
    {
      id: 2,
      src: nextOffice,
      alt: "Next office",
      span: 1,
    },
    {
      id: 3,
      src: officeHall,
      alt: "Office hall",
      span: 2,
    },
    {
      id: 4,
      src: nextColors,
      alt: "Next colors",
      span: 1,
    },
    {
      id: 5,
      src: togetherHall,
      alt: "Together hall",
      span: 1,
    },
    {
      id: 6,
      src: nextDesk,
      alt: "Next desk",
      span: 1,
    },
  ];

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
          mx: "auto",
          mt: { xs: 5, md: "10rem" },
          boxSizing: "border-box",
          px: { xs: 2, md: "2rem" },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: 700,
            fontSize: { xs: "16px", md: "30px" },
          }}
        >
          Questions and answers
          <Box component="span" sx={{ color: "#2962FF", ml: 1 }}>
            about the application process
          </Box>
        </Typography>

        {/* Questions */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: 2,
            alignItems: "start",
          }}
        >
          {questionsAboutTheProcess.map(({ id, question, answer }) => (
            <Accordion
              key={id}
              disableGutters
              sx={{
                border: "1px solid #E2E8F0",
                borderRadius: "16px !important",
                boxShadow: "none",
                overflow: "hidden",
                m: 0,
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#2962FF" }} />}
                sx={{
                  minHeight: "52px",
                  px: 2,
                  "&.Mui-expanded": {
                    minHeight: "52px",
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
                    color: "#172440",
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 2,
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
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Office Gallery */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gridAutoRows: {
              xs: "220px",
              sm: "220px",
              lg: "230px",
            },
            gap: 2,
            mt: 5,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <Box
              key={image.id}
              sx={{
                position: "relative",
                gridColumn: {
                  xs: "span 1",
                  sm: image.span === 2 ? "span 2" : "span 1",
                  lg: `span ${image.span}`,
                },
                minWidth: 0,
                minHeight: 0,
                overflow: "hidden",
                borderRadius: "14px",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default QuestionsAboutTheProcess;
