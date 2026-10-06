import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const academyPictures = [
  {
    id: 1,
    src: "/professional-academy-pictures/professional-next-image.png",
    alt: "Professional learning at Next Logistic",
  },
  {
    id: 3,
    src: "/professional-academy-pictures/professional-coworkers.png",
    alt: "Colleagues learning together",
  },
  {
    id: 2,
    src: "/professional-academy-pictures/professional-next-superman.png",
    alt: "Academy training session",
  },
  {
    id: 4,
    src: "/professional-academy-pictures/professional-trucks.png",
    alt: "Next Logistic trucks",
  },
];

function FromKnowledgeToAction() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#E7CC64",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          mx: "auto",
          maxWidth: "1600px",
          px: 3,
          py: 2,
        }}
      >
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#2563eb",
            }}
          >
            From Knowledge to Action
          </Typography>

          <Box
            sx={{
              width: "32px",
              height: "2px",
              backgroundColor: "#2563eb",
              mt: 1,
            }}
          />
        </Box>
        <Box sx={{ maxWidth: "850px" }}>
          <Typography
            sx={{ fontSize: "25px", mt: 2, color: "black", fontWeight: 700 }}
          >
            Lessons from out leaders ,{" "}
            <span className="text-blue-600"> success for the team</span>
          </Typography>
          <Typography
            sx={{
              mt: 2,
              color: "black",
              fontSize: {
                sx: "15px",
                md: "16px",
              },
            }}
          >
            Big changes start with small steps, and every step forward is
            knowledge that makes you better. In the Digital Academy, our
            leaders&apos; experience becomes practical lessons that accelerate
            growth and build confidence in everyday work. Real cases, smart
            solutions and knowledge that inspires - because success is a shared
            path, and we walk it together.
          </Typography>
          {/*  Pictures */}
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                mt: 2,
                ml: "13px",
                display: {
                  xs: "none",
                  md: "grid",
                  gridTemplateColumns: "repeat(2, 260px)",
                  gridTemplateRows: "repeat(2, 1fr)",
                },
                gap: 3,
              }}
            >
              {academyPictures.map((picture) => (
                <Box
                  key={picture.id}
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "260px",
                    borderTopRightRadius: "18px",
                    borderTopLeftRadius: "18px",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={picture.src}
                    alt={picture.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 260px"
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FromKnowledgeToAction;
