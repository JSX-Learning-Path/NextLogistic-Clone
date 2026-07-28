import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CodeOfEthics() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgb(242, 247, 255)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          bgcolor: "common.white",
          color: "text.secondary",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          textAlign: "center",

          borderRadius: 1,
        }}
      >
        <Typography variant="h6" component="h1" sx={{ fontWeight: 500 }}>
          Code of Ethics
        </Typography>

        <Typography variant="h6">of</Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "text-secondary ", fontSize: "medium" }}
        >
          Next Logistics Ltd.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Plovdiv, 36 Rogoshko Shose Street
        </Typography>

        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}
          >
            Version 1.2
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            Last updated: 11.11.2025
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Scope and Objectives:
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            This Code of Ethics defines the core principles, values, and rules
            of conduct that all employees, managers, partners, and suppliers of
            “Next Logistics” Ltd. are expected to follow. Its purpose is to
            ensure integrity, respect, legality, and sustainability in all
            aspects of our operations.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CodeOfEthics;
