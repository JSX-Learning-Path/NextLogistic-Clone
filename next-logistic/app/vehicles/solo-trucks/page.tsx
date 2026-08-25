import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SoloTruck() {
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
          sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}
        >
          <Image
            src="/solo-truck.png"
            alt="Solo Truck"
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
            width: {
              xs: {
                display: "flex",
                flexDirection: "row",
              },
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
            <Typography sx={{ color: "gray", fontWeight: "bold" }}>
              Share
            </Typography>
            <SocialIcons />
          </Box>
          <Typography
            sx={{ fontSize: { xs: "16px", md: "14px" }, color: "#607583" }}
          >
            Published on:
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
          Solo Trucks
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Solo trucks are compact and highly maneuverable freight vehicles,
          widely used when fast, reliable, and efficient transport is needed for
          small to medium-sized shipments in terms of volume and weight. They
          are particularly suitable for express deliveries, urban logistics
          operations, urgent shipments, deliveries to locations with restricted
          access, as well as for cargo that does not require the full capacity
          of a standard articulated truck.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          This type of vehicle stands out with low operating costs, high
          maneuverability, fast loading and unloading capability, and easier
          access to restricted areas – such as city centers, industrial zones,
          or construction sites.
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginTop: "10px", fontSize: "16px" }}
        >
          Main types of solo trucks and technical characteristics:
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Light-duty solo truck (small capacity version)
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Suitable for deliveries of smaller quantities of goods, urgent orders,
          and shipments with limited weight.
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
            Payload: up to 3.5 tons
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Cargo volume: 50 m³
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Euro pallet capacity: 13 pcs
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Body dimensions (L/W/H): 5.20 / 2.40 / 2.40 m
          </Typography>
        </Box>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Advantages:
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
            Ideal for urban courier services
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            No requirement for professional driving license category C
            (depending on registration)
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Lower fees and higher mobility in city zones
          </Typography>
        </Box>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Flatbed solo truck – medium class
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Used for transporting palletized cargo, construction materials,
          equipment, and other medium-volume and medium-weight loads.
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
            Payload: 9 t and 10 t
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Volume: 45 m³ and 50 m³
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Euro pallet capacity: 17 pcs and 19 pcs
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Body dimensions:
          </Typography>
        </Box>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          7.10 / 2.45 / 2.70 m
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          7.70 / 2.45 / 2.90 m
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Advantages:
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
            Allows the transportation of bulky but not excessively heavy goods
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Highly versatile for different types of cargo
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Suitable for regional and national deliveries
          </Typography>
        </Box>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Flatbed solo truck with tail lift (hydraulic ramp)
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Designed for deliveries where no loading/unloading equipment is
          available on site. The tail lift enables easy independent unloading
          with a hand trolley or pallet jack.
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
            Payload: 2 t and 6 t
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Volume: 16 m³ and 42 m³
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Euro pallet capacity: 7 pcs and 17 pcs
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Body dimensions:
          </Typography>
        </Box>
        <Typography sx={{ color: "gray" }}>3.80 / 2.00 / 2.10 m</Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          7.10 / 2.45 / 2.70 m
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Advantages:
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
          <Typography component="li" sx={{ marginTop: "10px", color: "gray" }}>
            Independence from forklifts or ramps at the delivery point
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Ideal for stores, warehouses, and retail outlets
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Facilitates distribution in urban environments
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: "bold", marginTop: "10px", fontSize: "16px" }}
        >
          Additional information:
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Solo trucks can be equipped with various body types – box body,
          curtain-sided flatbed, refrigerated module, etc., depending on the
          type of cargo being transported. They provide high flexibility for
          combined deliveries, last-mile distribution, and logistics services
          with high delivery frequency.
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
            src="/solo-truck-2.png"
            alt="Solo Truck 2"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/solo-truck-3.png"
            alt="Solo Truck 3"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/solo-truck-4.png"
            alt="Solo Truck 4"
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
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography sx={{ marginTop: "10px", color: "gray" }}>
              Fill out the form to request transportation services.
            </Typography>
            <Typography sx={{ color: "gray" }}>
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

export default SoloTruck;
