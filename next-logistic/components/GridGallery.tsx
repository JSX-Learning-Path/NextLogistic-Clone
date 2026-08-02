import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function GridGallery() {
  return (
    <section className="bg-white">
      <div className="space-y-6  rounded-xl w-full  mx-auto p-6 sm:p-10 lg:p-12">
        <span className="text-sm text-indigo-500 font-semibold mb-3">
          Leadership in logistics
          <hr className="border-blue-600 w-[30px]" />
        </span>
        <h2 className="text-blue-600 mt-5 font-bold text-2xl">
          <span className="text-2xl font-extrabold text-black/70">
            Principles and innovations that{" "}
            <span className="text-blue-600"> </span>
          </span>
          build a sustainable future
        </h2>
      </div>
      <Box component="section" sx={{ maxWidth: 1600, mx: "auto", px: 2 }}>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { sx: "1fr", md: "2fr 1fr 2fr" },
            gridTemplateRows: { md: "auto auto" },
            gridTemplateAreas: {
              xs: `"large" "small" "blue" , "mid1" , "mid2"`,
              md: `"large small blue" "large mid1 mid2"`,
            },
          }}
        >
          <Box
            sx={{
              gridArea: "large",
              borderRadius: 2,
              overflow: "hidden",
              width: "100%",
              height: { xs: 300, md: 680 },
              boxShadow: 0,
            }}
          >
            <Box
              component="img"
              src="/girls-talking.png"
              alt="girls-talking"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center left",
              }}
            />
          </Box>
          <Box
            component="img"
            src="/team-laughing.png"
            alt="team-laughing"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              gridArea: "blue",
              borderRadius: 2,
              bgcolor: "primary.main",
              color: "white",
              minHeight: { xs: 120, md: 200 },
              width: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Our principles and values shape everything we do. They guide us in
              delivering sustainable, efficient, and innovative solutions that
              set new standards in the industry.
            </Typography>
            <Box
              component="a"
              href="/policies/company-principles"
              sx={{
                mt: 2,
                display: "inline-block",
                textTransform: "uppercase",
                color: "#f2f2f2",
                px: 1.5,
                py: 0.5,
                borderRadius: 0.5,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Company principles&nbsp;›
            </Box>
          </Box>

          <Box
            sx={{
              gridArea: "mid1",
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              minHeight: { xs: 200, md: 340 },
            }}
          >
            <Box
              component="img"
              src="/learning-view.png"
              alt="Logistics operations"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                minWidth: { xs: "100%", md: 340 },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                p: 2,

                color: "white",
              }}
            >
              <Typography sx={{ fontSize: 14, mb: 1 }}>
                By implementing modern technologies, we create efficient and
                sustainable processes that ensure transparency and reliability
                for our partners.
              </Typography>
              <Box
                component="a"
                href="/policies/technological-innovations"
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: 14,
                }}
              >
                Technological innovations&nbsp;›
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              gridArea: "mid2",
              borderRadius: 2,
              overflow: "hidden",
              width: "70%",
              height: { sx: 160, md: 340 },
            }}
          >
            <Box
              component="img"
              src="/two-coworkers.png"
              alt="Two coworkers"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
export default GridGallery;
