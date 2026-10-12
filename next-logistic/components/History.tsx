import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/dist/client/link";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimelinePoint from "./charts/TimeLineChart";

const features = [
  "Efficiency",
  "Modern Fleet",
  "Sustainability",
  "Precision Planning",
  "Cargo Security",
  "Express Delivery",
  "Real-time Tracking",
  "Tech Innovations",
];

function History() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#DCE9F7",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          maxWidth: "1500px",
          margin: "50px auto",
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "24px", sm: "20px", lg: "50px" },
        }}
      >
        {/* Left */}
        <Box
          component="div"
          sx={{
            width: { xs: "100%", sm: "50%" },
            maxWidth: "700px",
            minWidth: 0,
            flex: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#2864ff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              History
            </Typography>

            <Box
              sx={{
                width: "32px",
                height: "2px",
                backgroundColor: "#2864ff",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "25px",
              fontWeight: 700,
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Logistic, <span className="text-blue-600">driving the future</span>
          </Typography>
          <Typography sx={{ color: "gray" }}>
            <span className="text-blue-600 uppercase font-bold mr-1">
              Next Logistic
            </span>
            was founded in 2011 as part of the largest transport group in the
            Balkans. The company follows a consistent development strategy based
            on controlling key elements of the supply chain and integrating
            diverse transport modes into a unified operational structure.
          </Typography>
          <Box sx={{ mt: "10px" }}>
            <Typography sx={{ color: "gray" }}>
              In 2012, as part of the group's expansion,{" "}
              <span className="text-blue-600 uppercase font-bold mr-1">
                TRUCK FERRY
              </span>
              was launched, providing direct access to major maritime routes and
              seamlessly combining road and sea transport. This intermodal
              approach significantly reduces carbon emissions, noise pollution,
              and road safety risks while enabling precise scheduling through
              fixed timetables.
            </Typography>
            <Typography sx={{ color: "#2962FF", fontWeight: 700 }}>
              In recent years, our focus has turned toward digitalization and
              technological innovation,
            </Typography>
            <Typography sx={{ color: "gray", marginTop: "10px" }}>
              including the deployment of proprietary management software and
              real-time tracking systems. This guarantees maximum operational
              efficiency, full traceability, and complete control over every
              step of the logistics process.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              backgroundColor: "#ffffff",
              placeItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              marginTop: "20px",
              width: "100%",
              boxSizing: "border-box",
              minWidth: 0,
              height: { xs: "300px", md: "350px" },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.87rem",
                color: "#306AFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Total Shipments Completed
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "15px" }}>
              (2021 – 2025)
            </Typography>
            <Box
              component="div"
              sx={{
                marginTop: "80px",
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 0,
                px: 1,
                boxSizing: "border-box",
              }}
            >
              <TimelinePoint value="27.5K" year="2021" />
              <TimelinePoint value="38.7K" year="2022" />
              <TimelinePoint value="38.4K" year="2023" />
              <TimelinePoint value="329.8K" year="2024" />
              <TimelinePoint value="34.1K" year="2025" />
            </Box>
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "50%" },
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Annual Revenue */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "repeat(2, minmax(0, 1fr))",
              },
              gap: "20px",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                height: "200px",
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "24px",
              }}
            >
              <Typography
                sx={{
                  color: "#2864ff",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                ANNUAL REVENUE
              </Typography>

              <Box
                sx={{
                  width: "126px",
                  height: "126px",
                  border: "1.5px solid #2864ff",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "18px",
                  backgroundColor: "#E6F0FF",
                }}
              >
                <Typography
                  sx={{
                    color: "#2864ff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  106 036 274
                </Typography>

                <Typography
                  sx={{
                    color: "#53627a",
                    fontSize: "13px",
                    fontWeight: 600,
                    mt: "6px",
                  }}
                >
                  2025 yr
                </Typography>
              </Box>
            </Box>
            {/* Total Financial Performance */}
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                height: "200px",
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "24px",
              }}
            >
              <Typography
                sx={{
                  color: "#2864ff",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                TOTAL FINANCIAL PERFORMANCE
              </Typography>

              <Typography
                sx={{
                  color: "#53627a",
                  fontSize: "14px",
                  mt: 0.5,
                }}
              >
                Next Logistics & Truck Ferry
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "300px",
                  minWidth: 0,
                  height: "105px",
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2864ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    79.6M
                  </Typography>

                  <Box
                    sx={{
                      width: "20px",
                      height: "32px",
                      backgroundColor: "#2864ff",
                      borderRadius: "3px 3px 0 0",
                      mt: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: 0.5,
                      color: "black",
                    }}
                  >
                    2021
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2864ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    156.9M
                  </Typography>

                  <Box
                    sx={{
                      width: "20px",
                      height: "63px",
                      backgroundColor: "#2864ff",
                      borderRadius: "3px 3px 0 0",
                      mt: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: 0.5,
                      color: "black",
                    }}
                  >
                    2022
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2864ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    133.6M
                  </Typography>

                  <Box
                    sx={{
                      width: "20px",
                      height: "54px",
                      backgroundColor: "#2864ff",
                      borderRadius: "3px 3px 0 0",
                      mt: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: 0.5,
                      color: "black",
                    }}
                  >
                    2023
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2864ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    95.8M
                  </Typography>

                  <Box
                    sx={{
                      width: "20px",
                      height: "38px",
                      backgroundColor: "#2864ff",
                      borderRadius: "3px 3px 0 0",
                      mt: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: 0.5,
                      color: "black",
                    }}
                  >
                    2024
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2864ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    106.1M
                  </Typography>

                  <Box
                    sx={{
                      width: "20px",
                      height: "42px",
                      backgroundColor: "#2864ff",
                      borderRadius: "3px 3px 0 0",
                      mt: 0.5,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: 0.5,
                      color: "black",
                    }}
                  >
                    2025
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Effective & Tech Innovation */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "grid",
              },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: "12px",
              marginTop: "24px",
              width: "100%",
            }}
          >
            {features.map((feature) => (
              <Box
                key={feature}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#366EFF",
                  backgroundColor: "#FFFFFF",
                  padding: "14px 16px",
                  borderRadius: "50px",
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "rgba(41, 98, 255, 0.2)",
                    borderColor: "#1962FF",
                    transition: "background-color 0.3s, border-color 0.3s",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#E8EFFF",
                    fontSize: "11px",
                  }}
                >
                  ✓
                </Box>

                {feature}
              </Box>
            ))}
          </Box>
          {/* Picture */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              marginTop: "24px",
              height: { xs: "260px", md: "400px" },
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/next-trucks.png"
              alt="Fleet of trucks"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Dark gradient overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75), transparent 45%)",
              }}
            />

            {/* Statistics */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: "16px", md: "28px" },
                bottom: { xs: "16px", md: "24px" },
                display: "flex",
                alignItems: "center",
                gap: { xs: "16px", md: "24px" },
                color: "#FFFFFF",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  100%
                </Typography>

                <Typography
                  sx={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  ACCURACY
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "1px",
                  height: "40px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
              />

              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  24/7
                </Typography>

                <Typography
                  sx={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  SUPPORT
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default History;
