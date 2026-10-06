import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DigitalAcademyHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "500px",
          md: "950px",
        },

        backgroundImage: "url('/academy-girls-talking.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          opacity: 0.9,
          position: "absolute",
          left: "50%",
          bottom: {
            xs: "20px",
            md: "30px",
          },
          transform: "translateX(-50%)",
          width: {
            xs: "90%",
            md: "70%",
          },
          backgroundColor: "#2860E8",
          color: "white",
          borderRadius: 2,
          px: {
            xs: 2,
            md: 4,
          },
          py: {
            xs: 2,
            md: 2,
          },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              md: "30px",
            },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          DIGITAL ACADEMY
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: {
              xs: "11px",
              md: "13px",
            },
            fontWeight: 700,
          }}
        >
          INTERNAL TRAINING SYSTEM
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "12px",
              md: "14px",
            },
            lineHeight: 1.5,
            textAlign: "left",
            display: {
              xs: "none",
              md: "none",
              lg: "flex",
            },
          }}
        >
          A platform built to support the team's professional development. It
          brings together structured courses, practical materials and useful
          resources that let people build on their skills and apply best
          practice in their day-to-day work. The training covers key topics such
          as international regulations, current changes in legislation, and the
          latest trends in domestic and international logistics.
        </Typography>
      </Box>
    </Box>
  );
}

export default DigitalAcademyHero;
