interface QuestionAboutTheProcess {
  id: number;
  question: string;
  answer: string;
}

export const questionsAboutTheProcess: QuestionAboutTheProcess[] = [
  {
    id: 1,
    question: "Is remote or hybrid work available?",
    answer:
      "Work is fully office-based and we don't offer a hybrid or remote model. We believe successful work relies on effective communication, fast decision-making, and active collaboration within the team.",
  },
  {
    id: 2,
    question: "What qualities do we look for in candidates?",
    answer:
      "Leaders who work well in a team and have strong communication skills. We value resourceful thinking, innovation, and the ability to make effective, fast decisions in a dynamic environment.",
  },
  {
    id: 3,
    question: "What does the application process look like?",
    answer:
      "The process starts by sending a CV and any additional materials the role requires. After an initial review, shortlisted candidates go through an interview so we can assess their experience, ambitions, and fit with the team.",
  },
  {
    id: 4,
    question: "How will I know if I've moved to the next stage?",
    answer:
      "Candidates who pass the initial screening will be invited to an interview. Afterwards, we'll notify those approved within the agreed timeframes about the next steps in the hiring process.",
  },
];
