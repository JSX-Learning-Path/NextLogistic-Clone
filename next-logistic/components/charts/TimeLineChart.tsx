interface TimelinePointProps {
  value: string;
  year: string;
}

export default function TimelinePoint({ value, year }: TimelinePointProps) {
  return (
    <svg
      width="80"
      height="130"
      viewBox="0 0 80 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Value */}
      <text
        x="40"
        y="22"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="#1E3A8A"
      >
        {value}
      </text>

      {/* Line */}
      <line x1="40" y1="36" x2="40" y2="82" stroke="#C7D2E5" strokeWidth="2" />

      {/* Outer circle */}
      <circle cx="40" cy="35" r="6" fill="#2563EB" />

      {/* Inner circle */}
      <circle cx="40" cy="35" r="2" fill="white" />

      {/* Year */}
      <text
        x="40"
        y="101"
        textAnchor="middle"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fill="#1F2937"
      >
        {year}
      </text>
    </svg>
  );
}
