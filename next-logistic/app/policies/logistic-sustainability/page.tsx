import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LogisticSustainability() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgb(242, 247, 255)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Box
        sx={{
          bgcolor: "common.white",
          color: "text.secondary",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Logistic Policy
        </Typography>
      </Box>
    </Box>
  );
}
export default LogisticSustainability;
