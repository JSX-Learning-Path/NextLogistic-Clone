"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { PieChart } from "@mui/x-charts";
import { PieItemIdentifier } from "@mui/x-charts/models";

// Small inline sample data to avoid missing external helper file (./webUsageStats)
const platforms = [
  { id: "Web", value: 55 },
  { id: "Mobile", value: 45 },
];

const mobileAndDesktopOS = [
  { id: "Android", value: 35 },
  { id: "iOS", value: 65 },
];

export default function PieClick() {
  const [itemData, setItemData] = React.useState<PieItemIdentifier>();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {mounted ? (
          <PieChart
            series={series}
            width={300}
            height={300}
            hideLegend
            onItemClick={(event, d) => setItemData(d)}
          />
        ) : (
          // placeholder to match chart size during SSR
          <Box sx={{ width: 300, height: 300 }} />
        )}
      </Box>

      <Stack
        direction="column"
        sx={{ width: { xs: "100%", md: "40%" } }}
      ></Stack>
    </Stack>
  );
}

const series = [
  {
    innerRadius: 0,
    outerRadius: 80,
    id: "platform-series",
    data: platforms,
  },
  {
    innerRadius: 100,
    outerRadius: 120,
    id: "OS-series",
    data: mobileAndDesktopOS,
  },
];
