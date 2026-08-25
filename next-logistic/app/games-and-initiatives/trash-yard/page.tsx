import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";

function TrashYard() {
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
            src="/trash-yard.png"
            alt="Trash Yard"
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
              18.12.2025
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
          sx={{ fontWeight: "bold", fontSize: "23px", opacity: 0.87 }}
        >
          Together for a cleaner environment
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          At Next Logistic, we believe that a sustainable future begins with
          responsible actions today. That is why, together with Bosneshki
          Foundation, we were delighted to provide financial support to the NGO
          Bulgarian Nature for the implementation of an environmental clean-up
          initiative targeting an illegal landfill in the town of Maglizh.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          The initiative is part of the “Clean Future” project and aims not only
          to restore a damaged natural area, but also to set a clear example
          that when businesses and civil organizations join forces, real and
          sustainable results can be achieved for the benefit of society and the
          environment.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Caring for nature is a shared responsibility – every small step
          matters and leads to meaningful change. We are proud that our support
          has helped secure the necessary resources for organizing this
          important cause and for encouraging active civic engagement.
        </Typography>
      </Box>
    </Box>
  );
}
export default TrashYard;
