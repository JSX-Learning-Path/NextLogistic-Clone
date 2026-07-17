export interface FaqQuestion {
  id: number;
  question: string;
  answer: string;
}

export const questions: FaqQuestion[] = [
  {
    id: 1,
    question: "What services does your logistics company offer??",
    answer:
      "We offer services for transportation, warehousing and delivery of various types of cargo.",
  },
  {
    id: 2,
    question: "What is the scope of your services?",
    answer:
      "Our services cover both international and domestic transport of goods.",
  },
  {
    id: 3,
    question: "What is the difference between all modes of transport?",
    answer:
      "Different modes of transportation include land, air, and sea transportation, each with unique advantages.",
  },
  {
    id: 4,
    question: "What is the process of shipping cargo through your company?",
    answer:
      "The shipping process includes receiving the cargo, shipping it, and tracking it to the final destination.",
  },
  {
    id: 5,
    question: "What is your policy for ensuring cargo safety?",
    answer:
      "Our safety policy includes strict measures to ensure the safety of cargo during transportation.",
  },
];
export default questions;
