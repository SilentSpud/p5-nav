import questions from "../../data/questions.json";
export interface Question {
  question: string;
  answer: string;
}
export type DateInfo = {
  date: `${number| ''}${number}/${number| ''}${number}`;
  questions: Question[]
}

export const ClassroomQuestions: DateInfo[] = questions;
