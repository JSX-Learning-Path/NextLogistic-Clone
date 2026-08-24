import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Dumpers() {
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
            src="/dump-truck.png"
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
          variant="h4"
          sx={{ fontWeight: "semibold", textTransform: "uppercase" }}
        >
          Dumpers
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Dump trucks are among the most important and widely used transport
          vehicles in the construction, road-building, and mining industries.
          Thanks to their design and ability for fast loading and unloading,
          they provide efficient movement of various types of bulk materials and
          help optimize on-site workflow.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          This type of equipment is specifically designed for transporting bulk
          cargo such as sand, gravel, crushed stone, soil, aggregates, and
          asphalt, while ensuring high productivity and reliability when
          operating under heavy-duty conditions.
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginTop: "10px", fontSize: "16px" }}
        >
          Main Features:
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
              mb: 1,
              lineHeight: 1.2,
              fontSize: { xs: "1rem", md: "1rem" },
              display: "list-item",
            },
          }}
        >
          <Typography component="li" sx={{ color: "gray" }}>
            Configuration: 4-axle dump truck, ensuring greater payload capacity
            and improved stability when driving, especially on uneven and steep
            terrain.
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Body capacity: 18 cubic meters, allowing the transport of large
            quantities of material with a minimal number of trips.
          </Typography>
          <Typography component="li" sx={{ color: "gray" }}>
            Application: used not only for hauling standard construction
            materials but also for excavation and removal of soil masses, as
            well as for transporting different aggregates required in road
            infrastructure projects and other large-scale developments.
          </Typography>
        </Box>
        <Typography sx={{ color: "gray", lineHeight: 1.3 }}>
          Thanks to powerful engines, high off-road capability, and robust
          suspension systems, this type of dump truck is suitable for operation
          in hard-to-reach and mountainous areas where other vehicles would face
          difficulties. They perform excellently on rough terrain, mud, snow, or
          steep inclines, maintaining stability and safety during both driving
          and loading.
        </Typography>
        <Typography sx={{ color: "gray", lineHeight: 1.3, marginTop: "20px" }}>
          Dump trucks are equipped with a hydraulic tipping system, allowing
          fast and precise unloading of materials exactly where needed. This
          contributes to increased efficiency and reduced handling time at the
          job site.
        </Typography>
        <Typography sx={{ color: "gray", lineHeight: 1.3, marginTop: "20px" }}>
          Depending on the requirements, dump trucks can be used in combination
          with other machinery – excavators, wheel loaders, mobile crushers,
          etc., making them a versatile asset in modern construction and
          logistics operations.
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
            src="/dump-truck-2.png"
            alt="Dump Truck"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/dump-truck-3.png"
            alt="Dump Truck"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            src="/dump-truck-4.png"
            alt="Dump Truck"
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
            <Typography variant="h5" sx={{}}>
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

export default Dumpers;
