import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function GridGallery() {
  return (
    <section className="bg-white">
      <div className="w-full mx-auto p-6 sm:p-10 lg:p-12 pb-6">
        <span className="inline-block text-sm text-indigo-500 font-semibold tracking-wide uppercase">
          Leadership in logistics
        </span>

        <hr className="border-blue-600 border-t-2 w-[30px] mt-2 mb-4" />

        <h2 className="font-extrabold text-2xl sm:text-3xl text-black/80">
          Principles and innovations that{" "}
          <span className="text-blue-600">build a sustainable future</span>
        </h2>
      </div>

      <Box component="section" sx={{ maxWidth: 1600, mx: "auto", px: 2 }}>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 3fr",
            },
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              width: "100%",
              height: { xs: 300, md: 680 },
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
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateRows: {
                xs: "auto auto",
                md: "340px 340px",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 2fr",
                },
              }}
            >
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
                  borderRadius: 2,
                  bgcolor: "#2862FF",
                  color: "white",
                  width: "100%",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  Our principles and values shape everything we do. They guide
                  us in delivering sustainable, efficient, and innovative
                  solutions that set new standards in the industry.
                </Typography>

                <Box
                  component="a"
                  href="/policies/company-principles"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#f2f2f2",
                    fontSize: 15,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Company principles&nbsp;›
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "4fr 3fr",
                },
              }}
            >
              <Box
                sx={{
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
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: 14, mb: 1 }}>
                    By implementing modern technologies, we create efficient and
                    sustainable processes that ensure transparency and
                    reliability for our partners.
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
                  borderRadius: 2,
                  overflow: "hidden",
                  width: "100%",
                  height: { xs: 160, md: 340 },
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
                    objectPosition: "70% 10%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default GridGallery;
