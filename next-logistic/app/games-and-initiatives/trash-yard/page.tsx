"use client";
import { useState } from "react";
import { Box, Dialog, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SocialIcons from "@/components/socials/Socials";
const images = [
  "/trash-yard-images/trash-1.png",
  "/trash-yard-images/trash-2.png",
  "/trash-yard-images/trash-3.png",
  "/trash-yard-images/trash-4.png",
  "/trash-yard-images/trash-5.png",
  "/trash-yard-images/trash-6.png",
  "/trash-yard-images/trash-7.png",
  "/trash-yard-images/trash-8.png",
  "/trash-yard-images/trash-9.png",
  "/trash-yard-images/trash-10.png",
  "/trash-yard-images/trash-11.png",
  "/trash-yard-images/trash-12.png",
  "/trash-yard-images/trash-13.png",
  "/trash-yard-images/trash-14.png",
];
function TrashYard() {
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
            src="/trash-yard.png"
            alt="Trash Yard"
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
        <Box
          component="div"
          sx={{
            mt: 3,
            width: "100%",
            height: "500px",
            overflow: "hidden",
            objectFit: "contain",
          }}
        >
          <Image
            src="/trash-yard-images/trash-1.png"
            alt="Trash Yard 15"
            width={1200}
            height={300}
          />
        </Box>
        <Typography sx={{ fontWeight: "bold", mt: 2, opacity: 0.87 }}>
          Letter of appreciation
        </Typography>
        <Typography sx={{ mt: 2, color: "gray" }}>
          We received an official letter of appreciation from NGO Bulgarian
          Nature, in which the team behind the “Clean Future” project expressed
          their sincere gratitude for the financial support provided and
          emphasized the importance of partnerships between the business sector
          and non-governmental organizations as a driving force for positive
          change.
        </Typography>
        <Typography sx={{ mt: 2, color: "gray" }}>
          For us, this recognition is yet another confirmation that social
          responsibility, commitment, and long-term vision are integral to the
          values of Next Logistic.
        </Typography>
        <Typography sx={{ mt: 2, color: "gray" }}>
          The initiative will be livestreamed this Saturday on the Facebook page
          of NGO Bulgarian Nature. We invite everyone to join online, support
          the cause, and be part of the change towards a cleaner and healthier
          environment.
        </Typography>
        <Typography sx={{ mt: 2, color: "gray" }}>
          Together we can achieve more – for nature, for society, and for the
          future.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 2,
            mt: 5,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={image}
              onClick={() => setSelectedImage(image)}
              sx={{ cursor: "pointer" }}
            >
              <Image
                src={image}
                alt={`Trash Yard ${index + 1}`}
                width={200}
                height={200}
              />
            </Box>
          ))}
        </Box>
        <Dialog
          open={!!selectedImage}
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
                alt="Selected Trash Yard"
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
export default TrashYard;
