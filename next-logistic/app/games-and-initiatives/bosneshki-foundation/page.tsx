import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Divider from "@mui/material/Divider";

function BosneshkiFoundationPage() {
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
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
          <Image
            src="/bosneshki-foundation.png"
            alt="Bosneshki Foundation"
            fill
            sizes="(max-width:1320px) 90vw , 1320px"
            style={{ objectFit: "cover" }}
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
              06.01.2026
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
          Bosneshki Foundation and NEXT Logistic Join the “Bulgarian Christmas”
          Campaign
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Christmas is a time of hope, compassion, and kindness—a time when we
          believe even more strongly that miracles happen when we are together.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          We are proud to share that Bosneshki Foundation and NEXT Logistic have
          joined the national charitable campaign “Bulgarian Christmas,”
          dedicated to supporting chronically and seriously ill children in
          Bulgaria.
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2 }}>
          Support That Gives a Chance
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          “Bulgarian Christmas” is a cause that for many years has united
          individuals, institutions, and businesses around one common mission—to
          give a chance for a better life and treatment to children who are most
          in need of support.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Our participation is an expression of our deep belief that every child
          deserves care, attention, and hope for the future.
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2 }}>
          Goodness Has Meaning When It Is Shared
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          For us at NEXT Logistic and Bosneshki Foundation, this is not just a
          gesture, but a responsibility and a sign of solidarity with the most
          vulnerable. We believe that when we join forces, we can achieve real
          change and bring hope where it is needed most.
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2 }}>
          A Call to All with Open Hearts
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          We call on all individuals and organizations to join the “Bulgarian
          Christmas” campaign.
        </Typography>
        <Typography sx={{ color: "gray", mt: 1 }}>
          Every gesture matters. Every donation—regardless of its size—can help
          provide treatment, care, and a better future for children in need.
        </Typography>
        <Typography sx={{ color: "gray", mt: 1 }}>
          Let us not be compassionate only during the holidays. <br />
          Let us be compassionate every day.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Bosneshki Foundation and NEXT Logistic – together in support of
          children and hope.
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

export default BosneshkiFoundationPage;
