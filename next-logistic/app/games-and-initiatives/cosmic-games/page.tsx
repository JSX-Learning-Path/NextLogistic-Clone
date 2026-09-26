import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";

function CosmicGames() {
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
        <Box sx={{ position: "relative", width: "100%" }}>
          <Image
            src="/cosmic-games.png"
            alt="Cosmic Games"
            layout="responsive"
            width={400}
            height={205}
          />
        </Box>
        <Box
          sx={{
            minHeight: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: {
              xs: "20px",
              md: "20px 20px",
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
            sx={{
              fontSize: {
                xs: "16px",
                md: "14px",
              },
              color: "#607583",
            }}
          >
            Published on:{" "}
            <Box component="span" sx={{ color: "#9AAAB5", ml: 1 }}>
              19.12.2025
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
          sx={{ fontWeight: "bolder", fontSize: "23px", opacity: 0.87 }}
        >
          The second season of the space games at NEXT Logistic begins
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          After a successful and inspiring first season, we are excited to
          announce that the Space Games at NEXT Logistic are returning for a
          second season! The initiative that brought the team together is
          launching once again with even more energy, ideas, and cosmic
          inspiration
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "16px", opacity: 0.87, mt: 2 }}
        >
          More challenges, more team spirit
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          The Space Games were created with the mission to encourage teamwork,
          turning science and space into a source of motivation and fun. In the
          second season, participants will face new challenges, questions, and
          tasks that will test their knowledge and inspire them to think beyond
          familiar boundaries.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "16px", opacity: 0.87, mt: 2 }}
        >
          Four team one mission
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          This season, the Space Games will feature four teams, each entering
          the competition with its own identity and spirit:
        </Typography>
        <Box component="ul" sx={{ mt: 1 }}>
          <Box
            component="li"
            sx={{ display: "flex ", alignItems: "center", gap: 1, mb: 0.5 }}
          >
            <Image
              src="/icons/rocket.png"
              alt="Rocket"
              width={22}
              height={20}
            />
            <Typography sx={{ color: "gray" }}>Astronauts</Typography>
          </Box>
          <Box
            component="li"
            sx={{ display: "flex ", alignItems: "center", gap: 1, mb: 0.5 }}
          >
            <Image
              src="/icons/swords.png"
              alt="Swords"
              width={20}
              height={20}
            />
            <Typography sx={{ color: "gray" }}>Explorers</Typography>
          </Box>
          <Box
            component="li"
            sx={{ display: "flex ", alignItems: "center", gap: 1, mb: 0.5 }}
          >
            <Image src="/icons/earth.png" alt="Earth" width={20} height={20} />
            <Typography sx={{ color: "gray" }}>Earthlings</Typography>
          </Box>
          <Box
            component="li"
            sx={{ display: "flex ", alignItems: "center", gap: 1 }}
          >
            <Image src="/icons/mars.png" alt="Mars" width={20} height={20} />
            <Typography sx={{ color: "gray" }}>Martians</Typography>
          </Box>
        </Box>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Each team will contribute its energy, strategy, and collaboration,
          while the shared goal remains the same – knowledge, growth, and
          enjoyment.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "16px", opacity: 0.87, mt: 2 }}
        >
          Space as inspiration
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          For us at NEXT Logistic, space is a symbol of vision, progress, and
          the courage to dream. The second season of the Space Games continues
          this philosophy by creating an environment where learning becomes an
          experience and the pursuit of knowledge is a shared mission.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", mt: 2, opacity: 0.87, fontSize: "16px" }}
        >
          Together toward new orbits
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          The launch of the second season is another step toward building a
          culture of innovation, development, and shared values. New space
          missions, strong team spirit, and plenty of inspiration await us.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Space Games – Season Two. The teams are ready. Are you?
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          NEXT Logistic – because growth begins with curiosity.
        </Typography>
        <Divider sx={{ mt: 4 }} />
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "start", mt: 5 }}
        >
          <Typography
            sx={{
              color: "gray",
              fontWeight: "bold",
              mr: 2,
              alignContent: "center",
            }}
          >
            Share:
          </Typography>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
}
export default CosmicGames;
