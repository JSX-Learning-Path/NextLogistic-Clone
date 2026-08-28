"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { year: "2019", value: 17.1 },
  { year: "2020", value: 26.4 },
  { year: "2021", value: 47.1 },
  { year: "2022", value: 110.2 },
  { year: "2023", value: 97 },
];

const chartConfig = {
  value: {
    label: "Financial results",
    color: "#2864F0",
  },
};

export default function FinancialResults() {
  return (
    <div className="w-full ">
      <ChartContainer config={chartConfig} className="mt-4 h-[320px] w-full">
        <BarChart
          data={data}
          margin={{
            top: 25,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />

          <YAxis
            domain={[0, 120]}
            ticks={[0, 20, 40, 60, 80, 100, 120]}
            tickLine={false}
            axisLine={false}
          />

          <XAxis dataKey="year" tickLine={false} axisLine={false} />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="value"
            fill="var(--color-value)"
            radius={[4, 4, 0, 0]}
            barSize={36}
          >
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => `${value}M`}
              fill="#2864F0"
              fontSize={13}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
