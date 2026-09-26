import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Gondoles() {
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
          maxWidth: "1320px",
          marginTop: "50px",
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src="/three-gondols.png"
            alt="Gondoles"
            fill
            sizes="(max-width: 1320px) 90vw, 1320px"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        {/* BOTTOM */}
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
          Gondoles
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          Gondola-type dump trucks are highly efficient transport vehicles
          designed for the hauling of various types of bulk materials –
          including aggregates such as sand, gravel, crushed stone, as well as
          asphalt. Thanks to their robust construction and large payload
          capacity, they are an indispensable part of any fleet engaged in
          construction, road building, and infrastructure projects.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          The specific model we use is a three-axle dump truck with a body
          capacity of 24 cubic meters. This capacity allows for the
          transportation of significant material volumes with fewer trips,
          optimizing workflow and reducing operating costs. The vehicle’s
          drivetrain and suspension are engineered to ensure stability and
          reliability even under full load.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          In addition to standard construction material transport, gondola dump
          trucks are widely used in excavation operations – for removing soil,
          earth masses, and construction waste. With their powerful drivetrain
          and excellent off-road capability, these trucks are exceptionally
          suitable for work in areas with difficult access, steep terrain, or
          mountainous conditions where other types of machinery cannot operate
          effectively.
        </Typography>
        <Typography sx={{ marginTop: "10px", color: "gray" }}>
          By combining high payload capacity, durability, and versatility,
          gondola-type dump trucks are the preferred solution for all types of
          heavy-duty operations that require speed, endurance, and safety in
          material transport.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Image
            src="/gondola-1.png"
            alt="Gondola"
            layout="responsive"
            width={200}
            height={200}
          />
          <Image
            src="/gondola-2.png"
            alt="Gondola"
            layout="responsive"
            width={200}
            height={200}
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

export default Gondoles;
