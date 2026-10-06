import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import DirectionsSubwayFilledIcon from "@mui/icons-material/DirectionsSubwayFilled";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import DirectionsRailwayFilledIcon from "@mui/icons-material/DirectionsRailwayFilled";
import SailingIcon from "@mui/icons-material/Sailing";
import CheckIcon from "@mui/icons-material/Check";

type TrainingCardProps = {
  color: string;
  icon: React.ReactNode;
  title: string;
};

function TrainingCard({ color, icon, title }: TrainingCardProps) {
  return (
    <Box
      sx={{
        minHeight: 80,
        width: "100%",
        p: 2,
        backgroundColor: color,
        color: "white",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        gap: 0.5,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& svg": {
            fontSize: 24,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 700,
          color: "white",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function ProfessionalStartAcademy() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      {/* MAIN */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          mx: "auto",
          px: 3,
          py: 2,
        }}
      >
        {/* PROFESSIONAL START */}
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#2563eb",
            }}
          >
            Professional Start
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

        {/* TOP CONTENT */}
        <Box
          sx={{
            mt: 3,

            display: "flex",
            alignItems: "flex-start",
            gap: 5,

            // Mobile
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* LEFT TEXT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                lineHeight: 1.2,
                fontWeight: 700,
                color: "#111827",
                mb: 2,
              }}
            >
              Practical{" "}
              <Box
                component="span"
                sx={{
                  color: "#2563eb",
                }}
              >
                training
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              Our lessons are designed to build not just theoretical knowledge,
              but practical skills that apply in a real working environment.
              Through interactive modules, employees sharpen their competencies.
            </Typography>
          </Box>

          {/* TRAINING CARDS */}
          <Box
            sx={{
              flex: 1,
              display: "grid",

              // Mobile
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,

              // Tablet
              "@media (min-width: 768px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
              },

              // Desktop
              "@media (min-width: 1200px)": {
                gridTemplateColumns: "repeat(6, 1fr)",
              },
            }}
          >
            <TrainingCard
              color="#32B2CE"
              icon={<LocalShippingIcon />}
              title="Road"
            />

            <TrainingCard
              color="#2F55C4"
              icon={<DirectionsBoatFilledIcon />}
              title="Combined"
            />

            <TrainingCard
              color="#2AAE5A"
              icon={<DirectionsSubwayFilledIcon />}
              title="Intermodal"
            />

            <TrainingCard
              color="#E0AE27"
              icon={<WarehouseIcon />}
              title="Container"
            />

            <TrainingCard
              color="#2A2B7C"
              icon={<DirectionsRailwayFilledIcon />}
              title="Rail"
            />

            <TrainingCard
              color="#D6318C"
              icon={<SailingIcon />}
              title="Inland waterway"
            />
          </Box>
        </Box>

        {/* INFORMATION COLUMNS */}
        <Box
          sx={{
            mt: 4,

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },

            gap: 5,
          }}
        >
          {/* COLUMN 1 */}
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                mb: 1,
              }}
            >
              Onboarding for new employees
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              Every new member of Next Logistic goes through a structured
              training programme that introduces them to the key processes,
              standards and corporate culture. This ensures the new employee
              adapts quickly and feels confident from day one as they build
              their careers.
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                mt: 2,
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/AcademyFolder/academyGirl.png"
                alt="Circle image for training"
                sx={{
                  alignSelf: "center",
                  mt: 2,
                  width: "40%",
                  borderRadius: "5%",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 1,
                  marginLeft: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Dynamic training
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 16,
                      flexShrink: 0,
                      mt: "3px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 15 },
                      color: "rgba(0,0,0,0.65)",
                      lineHeight: 1.5,
                    }}
                  >
                    Real challenges
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Logistics scenarios
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Professional analysis
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", mt: 2, alignItems: "center" }}
            >
              <Box
                component="img"
                src="/AcademyFolder/academyBoy.png"
                alt="Circle image for training"
                sx={{
                  alignSelf: "center",
                  mt: 2,
                  width: "40%",
                  borderRadius: "5%",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 1,
                  marginLeft: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Strategic development
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Process optimisation
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Innovation in logistics
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CheckIcon
                    sx={{
                      color: "#6D95FF",
                      fontSize: 18,
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "rgba(0,0,0,0.65)" }}>
                    Continuous progress
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* COLUMN 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                mb: 1,
                justifyContent: "start",
              }}
            >
              Specialised training for every department
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              Training is tailored to the needs of each team - from operations
              and sales through to management level. The aim is for every
              employee to gain the knowledge they need to perform their role at
              their best.
            </Typography>
            <Box
              component="img"
              src="/AcademyFolder/academyCircle.png"
              alt="Circle image for training"
              sx={{ alignSelf: "center", mt: 2, width: "60%" }}
            ></Box>
          </Box>

          {/* COLUMN 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                mb: 1,
                display: "flex",
                justifyContent: "start",
              }}
            >
              Access to training at any time
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              The Digital Academy offers convenience and flexibility - employees
              can take courses whenever it suits them, with access to all the
              materials and updates they need for their professional
              development.
            </Typography>
            <Box
              component="img"
              src="/AcademyFolder/coworkersCircle.png"
              alt="Circle image for training"
              sx={{ alignSelf: "center", mt: 2, width: "60%" }}
            ></Box>
            <Box
              component="span"
              sx={{
                width: 50,
                height: 50,
                border: "2px solid rgba(59, 114, 255)",
                display: "inline-block",
                borderRadius: "50%",
                alignSelf: "center",
                mt: 4,
                padding: "10px",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "rgba(59, 114, 255)",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "52%",
                }}
              >
                Team
              </Typography>
            </Box>
            <Box
              component="img"
              src="/AcademyFolder/academyChart.png"
              alt="AcademyResults"
              sx={{ alignSelf: "center", width: "60%", marginTop: 2 }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfessionalStartAcademy;
