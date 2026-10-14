import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LogisticInnovation() {
  return (
    <Box
      component="section"
      sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF", width: "100%" }}
    >
      {/*Main */}
      <Box
        component="div"
        sx={{
          maxWidth: "1500px",
          margin: "50px auto",
          justifyContent: "space-between",
          display: "flex",
          gap: "40px",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          alignItems: { xs: "flex-start", md: "flex-start", lg: "center" },
        }}
      >
        {/* left Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { xs: "100%", md: "50%" },
            flexShrink: 0,
            padding: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#2962FF",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Logistic Innovation
            </Typography>

            <Box
              component="span"
              sx={{
                width: "32px",
                height: "2px",
                backgroundColor: "#2962FF",
                flexShrink: 0,
              }}
            />
          </Box>
          <Box>
            <Box
              component="h2"
              sx={{
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#111827",
                margin: 0,
              }}
            >
              Technologies that drive the future{" "}
              <Box component="span" sx={{ color: "#2962FF" }}>
                and transform the way we work
              </Box>
            </Box>
          </Box>
          {/* Code Picture*/}
          <Box
            sx={{
              backgroundColor: "#0F182B",
              borderRadius: "18px",
              width: "100%",
              height: { xs: "auto", md: "500px" },
              padding: { xs: "20px", md: "36px 24px" },
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/technology-pictures/technology-code.png"
              alt="Technology-Code"
              sx={{
                display: "block",
                width: "100%",
                height: { xs: "auto", md: "100%" },
                aspectRatio: { xs: "3 / 4", md: "auto" },
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
        {/*Right  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { xs: "100%", md: "50%" },
            flexShrink: 0,
            maxWidth: "100%",
            marginTop: "10px",
            padding: { xs: "10px", md: "20px" },
            margin: { xs: "10px 0", md: "20px 0" },
          }}
        >
          <Typography sx={{ color: "#757575", marginTop: "20px" }}>
            We build groundbreaking systems, integrate artificial intelligence,
            and transform logistics management. With our technologies, we ensure
            efficiency, transparency, and innovation to maintain our leadership
            in logistics.
          </Typography>
          <Box
            component="div"
            sx={{
              marginTop: "20px",
              display: "flex",
              gap: "15px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              component="img"
              src="/technology-pictures/technology-worker.png"
              alt="Technology-Worker"
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            ></Box>
            <Box
              component="img"
              src="/technology-pictures/technology-logistic.png"
              alt="Technology-Logistic"
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              backgroundColor: "#E8F1FB",
              borderRadius: "24px",
              minHeight: { xs: "auto", md: "240px" },
              padding: { xs: "20px", md: "24px" },
              boxSizing: "border-box",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#111827", fontWeight: 700 }}>
                Real-time tracking
              </Typography>

              <Typography sx={{ color: "#475569", lineHeight: 1.6 }}>
                We utilize an advanced tracking system that provides highly
                accurate, real-time updates on your cargo movements.
              </Typography>
            </Box>

            <Box
              component="img"
              src="/technology-pictures/technology-trucks.png"
              alt="Fleet-of-trucks"
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "180px", md: "194px" },
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
                flexShrink: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LogisticInnovation;
