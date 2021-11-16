import questions from "../../data/questions.yml";
export interface Question {
  question: string;
  answer: string;
}
export type DateInfo = {
  date: string;
  questions: Question[];
};

export const ClassroomQuestions: DateInfo[] = questions;
