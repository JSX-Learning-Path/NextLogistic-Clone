"use client";
import { useState } from "react";
import { Box, Dialog, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
import Link from "next/link";

const images = [
  "/obshtina-tsarevo/tsarevo-1.png",
  "/obshtina-tsarevo/tsarevo-2.png",
  "/obshtina-tsarevo/tsarevo-3.png",
  "/obshtina-tsarevo/tsarevo-4.png",
  "/obshtina-tsarevo/tsarevo-5.png",
  "/obshtina-tsarevo/tsarevo-6.png",
  "/obshtina-tsarevo/tsarevo-7.png",
  "/obshtina-tsarevo/tsarevo-8.png",
];
function ObshtinaTsarevo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            src="/obshtina-tsarevo.png"
            alt="Obshtina Tsarevo"
            width={700}
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
              12.11.2025
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
          Supporting the Flood-Affected People of Tsarevo Municipality
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          After the devastating floods that affected dozens of families and
          businesses in Tsarevo Municipality, the team of NEXT Logistic stood
          behind the cause to help where the need was greatest. Through the
          Bosneski Foundation, a donation was made in support of those affected
          and the local community, with the goal of assisting in the recovery
          process after the disaster.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          The Mayor of Tsarevo Municipality, Mr. Marin Kirov, expressed official
          gratitude for the provided assistance through a Letter of Appreciation
          sent on behalf of all residents of the municipality. The donation is a
          gesture of solidarity and humanity toward the people who endured the
          severe consequences of the natural disaster.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          In a time when the floods took away homes and livelihoods, the true
          strength of a community is measured by its willingness to lend a
          helping hand. For us, this is not a one-time act, but an expression of
          our belief that a responsible person stands beside others when life
          puts them to the test. In difficult times, it is not words but actions
          that show who we truly are.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          We sincerely thank all members of our team who stand behind these
          efforts — with care, compassion, and responsibility.
        </Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>
          Anyone wishing to support those affected can make a donation to the
          following account:
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", mt: 2 }}
        >
          <Typography sx={{ color: "gray" }}>Donation Account:</Typography>
          <Typography sx={{ color: "gray" }}>
            IBAN: BG63 IORT 8048 3396 4778 01
          </Typography>
          <Typography sx={{ color: "gray" }}>Bank: Investbank AD</Typography>
          <Typography sx={{ color: "gray" }}>
            Account Holder: Tsarevo Municipality
          </Typography>
        </Box>
        <Typography sx={{ color: "gray", mt: 2 }}>
          The funds will be used to repair damages and assist affected
          households and businesses.
        </Typography>
        <Typography sx={{ color: "gray" }}>
          More information can be found on the official website of the
          municipality:
        </Typography>
        <Link href="https://tsarevo.bg/aktualno/novini/obshtina-tsarevo-otkriva-daritelska-kampaniya-v-podkrepa-na-postradalite-ot-navodnenieto-">
          <Typography sx={{ color: "gray", textDecoration: "underline" }}>
            Tsarevo Municipality
          </Typography>
        </Link>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            mt: 5,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={image}
              onClick={() => setSelectedImage(image)}
              sx={{
                cursor: "pointer",
                width: "100%",
                height: 150,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={`Tsarevo ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
        <Dialog
          open={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          maxWidth="lg"
        >
          {selectedImage && (
            <Box
              sx={{
                border: "none",
                display: "flex",
                justifyContent: "center",
                p: 1,
              }}
            >
              <Image
                src={selectedImage}
                alt="Tsarevo"
                width={1200}
                height={800}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Dialog>
        <Divider sx={{ mt: 4, mb: 2 }} />
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "start", mt: 3 }}
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
export default ObshtinaTsarevo;
