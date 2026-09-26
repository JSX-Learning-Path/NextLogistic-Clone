import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Tanker() {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F7FF",
        minHeight: "100vh",
        padding: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "95%",
            md: "90%",
            lg: "40%",
          },
          marginTop: "50px",
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src="/tanker.png"
            alt="Dump Truck"
            fill
            sizes="(max-width: 1320px) 90vw, 1320px"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            minHeight: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: {
              xs: "20px",
              md: "25px 20px",
            },
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
              sx={{
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Share
            </Typography>
            <SocialIcons />
          </Box>
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                md: "14px",
              },
              color: "#607583",
            }}
          >
            Published on:{" "}
            <Box
              component="span"
              sx={{
                color: "#9AAAB5",
                ml: 1,
              }}
            >
              12.05.2025
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundColor: "white",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          width: { xs: "95%", md: "90%", lg: "40%" },
          padding: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "semibold", textTransform: "uppercase" }}
        >
          Cisterns
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Tank trailers are specialized transport vehicles designed for the
          carriage of liquid food products and specific liquids subject to ADR
          regulations (the European Agreement concerning the International
          Carriage of Dangerous Goods by Road). They ensure safe, hygienic, and
          temperature-controlled transportation, fully compliant with European
          and national standards.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Their main purpose is the transport of food-grade liquids, such as:
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginTop: "10px", fontSize: "16px" }}
        >
          Technical characteristics:
        </Typography>
        <Box
          component="ul"
          sx={{
            mt: 1,
            pl: { sx: 3, md: 2 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",

            "&": { margin: 1 },
            "& li": {
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li" sx={{ color: "gray" }}>
            Fresh milk and dairy products
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Fruit juices, nectars, and concentrates
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Wine, including sparkling wines and liqueurs
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Beer and other low-alcohol beverages
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Oil and vegetable fats
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Food-grade alcohol, classified as ADR cargo, which requires
            compliance with additional safety measures during transportation
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginTop: "10px", fontSize: "16px" }}
        >
          Technical characteristics:
        </Typography>
        <Box
          component="ul"
          sx={{
            mt: 1,
            pl: { sx: 3, md: 2 },
            pr: 1,
            listStyleType: "disc",
            listStylePosition: "outside",
            textAlign: "left",
            "&": { margin: 0 },
            "& li": {
              mt: 1,
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li" sx={{ color: "gray" }}>
            Capacity: from 31,000 to 33,000 liters, allowing for the
            transportation of large volumes of liquids with high efficiency.
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Compartmentalization: each tank is divided into 4 separate sections,
            enabling the simultaneous transport of different products without
            the risk of mixing or cross-contamination.
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Temperature control: equipped with an independent heating system
            that maintains the optimal product temperature during transport,
            especially for sensitive liquids such as milk or oils that require
            specific conditions.
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Electric pumps: each tank is fitted with a loading and unloading
            system using electric pumps, which facilitates and speeds up
            operations on-site, regardless of the availability of external
            equipment.
          </Typography>
        </Box>
        <Typography sx={{ color: "gray", marginBottom: "10px" }}>
          All tanks are certified and equipped with a valid ATP certificate,
          confirming their suitability for international and domestic
          transportation of food products under controlled temperature. They
          undergo regular sanitation and technical inspections to ensure full
          compliance with sanitary safety requirements.
        </Typography>
        <Typography sx={{ color: "gray", marginBottom: "10px" }}>
          In the case of transporting food-grade alcohol, the tanks also comply
          with ADR requirements, which include special valves, markings,
          grounding connections, and additional safety measures during both
          transport and stationary periods.
        </Typography>
        <Typography sx={{ color: "gray" }}>
          These types of tankers are indispensable in the food industry,
          distribution, and international trade, where the fast and safe
          transport of liquids with guaranteed purity and quality is of vital
          importance.
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Image
            src="/tanker-2.png"
            alt="Tanker"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/tanker-3.png"
            alt="Tanker"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/tanker-4.png"
            alt="Tanker"
            layout="responsive"
            width={700}
            height={475}
          />
        </Box>
        <Divider sx={{ marginTop: "40px" }} />
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
          <Typography
            sx={{ marginRight: "10px", color: "gray", fontWeight: "bold" }}
          >
            Share
          </Typography>
          <SocialIcons />
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: { xs: 1, md: 2 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>
              Contact Us
            </Typography>
            <Typography sx={{}}>
              Fill out the form to request transportation services.
            </Typography>
            <Typography sx={{}}>
              We will contact you as soon as possible.
            </Typography>
          </Box>
          <Grid container spacing={6} sx={{ marginTop: "20px" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth placeholder="URN" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth placeholder="Name and Surename" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth placeholder="Email" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth placeholder="Phone" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                placeholder="How can we help you?"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              marginTop: "30px",
              padding: "12px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            Make an Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Tanker;
