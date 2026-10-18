import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FinancialResultsChart from "../components/charts/FinancialResults";

interface TransportData {
  value: string;
  type: string;
  percentage: string;
  color: string;
}

const transportData: TransportData[] = [
  {
    value: "9,635",
    type: "Import",
    percentage: "15,1%",
    color: "bg-blue-600",
  },
  {
    value: "20,796",
    type: "Export",
    percentage: "32,6%",
    color: "bg-black",
  },
  {
    value: "33,419",
    type: "Domestic",
    percentage: "52,3%",
    color: "bg-gray-400",
  },
];

function GrowAndDirections() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          width: "100%",
          boxSizing: "border-box",
          margin: "0 auto",
          padding: { xs: "24px 16px", md: "30px 20px" },
        }}
      >
        {/* Main */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "24px", lg: "40px" },
            alignItems: "stretch",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  color: "#2962FF",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Growth and key directions
              </Typography>
              <Box
                component="span"
                sx={{
                  backgroundColor: "#2962FF",
                  width: "40px",
                  height: "2px",
                }}
              ></Box>
              <Typography
                sx={{ color: "#2962FF", fontWeight: "bold", fontSize: "44px" }}
              >
                2024-2025
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "16px" }}>
                Data analysis
              </Typography>
            </Box>
            {/*Results */}
            <Box>
              {transportData.map((data) => (
                <div
                  key={data.type}
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] sm:grid-cols-[1fr_1fr_100px] items-center border-b border-gray-400 py-3 gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block w-4 h-4 rounded-full ${data.color}`}
                    />

                    <p className="text-black">{data.value}</p>
                  </div>

                  <p className="text-gray-400">{data.type}</p>

                  <p className="bg-blue-600 rounded-full px-4 py-1 text-white text-center">
                    {data.percentage}
                  </p>
                </div>
              ))}
            </Box>
            {/*  Blue Content*/}
            <Box
              sx={{
                backgroundColor: "#2962FF",
                minHeight: { xs: "200px", md: "300px" },
                borderRadius: "8px",
                padding: { xs: "20px", md: "24px" },
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.6,
                  overflowWrap: "anywhere",
                }}
              >
                The company primarily carries out full truckload (FTL) transport
                for leading industrial clients across Europe and Turkey. Our
                operations focus on regular, large-scale and secure transport
                flows, which we run daily with an emphasis on reliability,
                capacity, precision and punctuality. In-depth analysis confirms
                our strong presence across all directions - export, import and
                domestic transport - with balanced, sustainable and strategic
                coverage.
              </Typography>
            </Box>
          </Box>
          {/* Right Section*/}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box component="div" sx={{ mb: { xs: "24px", md: "30px" } }}>
              <Typography
                sx={{
                  color: "#2962FF",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.6,
                  fontWeight: "bold",
                }}
              >
                Growth and key directions
              </Typography>
              <Typography sx={{ color: "gray" }}>Financial results</Typography>
              <Box component="div" sx={{ color: "gray" }}>
                Our financial results in recent years clearly confirm the
                company's sustainable growth and long-term vision. Steady
                turnover growth, increased shipments and an expanded portfolio
                of strategic clients demonstrate stability and high flexibility.
                Our partnerships are built on reliability, professionalism and
                the ability to offer predictable, innovative solutions even in a
                dynamic business environment. Behind these positive trends
                stands a well-structured organisation with effective cost
                control and a strong commitment to excellent results.
                Transparency and trust in our relationships with clients and
                suppliers are the key to stability and to delivering more
                efficient logistics solutions.
              </Box>
            </Box>
            <Box component="div" sx={{ width: "100%", alignItems: "center", display: "flex" }}>
              <FinancialResultsChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GrowAndDirections;
