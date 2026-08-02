"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const dataset = [
  { month: "Jan", seoul: 20 },
  { month: "Feb", seoul: 18 },
  { month: "Mar", seoul: 25 },
  { month: "Apr", seoul: 40 },
  { month: "May", seoul: 60 },
  { month: "Jun", seoul: 75 },
  { month: "Jul", seoul: 85 },
  { month: "Aug", seoul: 80 },
  { month: "Sep", seoul: 55 },
  { month: "Oct", seoul: 35 },
  { month: "Nov", seoul: 25 },
  { month: "Dec", seoul: 22 },
];

const valueFormatter = (value: number | null) =>
  `${value ?? 0} mm`;

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60,
    },
  ],
  series: [{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }],
  height: 300,
  margin: { left: 0 },
  className: "none",
};

export default function TickPlacementBars() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{ width: "100%", minWidth: 260, minHeight: 300, overflowX: "auto" }}>
      {mounted ? (
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              dataKey: "month",
              tickPlacement: "middle",
              tickLabelPlacement: "middle",
            },
          ]}
          {...chartSetting}
        />
      ) : (
        <div style={{ width: "100%", minWidth: 260, height: 300 }} />
      )}
    </div>
  );
}
