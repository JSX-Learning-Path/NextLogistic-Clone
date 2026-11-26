interface LandTransportCard {
  id: number;
  amount: number;
  vehicles: string;
  title: string;
  description: string;
}

export const landTransportCards: LandTransportCard[] = [
  {
    id: 1,
    amount: 1450,
    vehicles: "Trucks",
    title: "Own fleet",
    description: `889 × Евро 6
261 × Евро 5
150 × LNG
150 × CNG
Environmentally efficient tractor units.`,
  },
  {
    id: 2,
    amount: 2850,
    vehicles: "Trailers",
    title: "Equipment for every load",
    description: `2441 × брезентови
130 × хладилни
184 × гондоли
60 × цистерни
35 × животновоза
We cover all major cargo types.`,
  },
  {
    id: 3,
    amount: 7800,
    vehicles: "Votted carriers",
    title: "Subcontractor network",
    description:
      "Through our partner logistics networks we have access to a fleet of more than 30,000 external vehicles.",
  },
  {
    id: 4,
    amount: 30,
    vehicles: "Contries",
    title: "Moving business forward",
    description: `We deliver scale, efficiency and reliability on every shipment, whatever the destination.`,
  },
];
