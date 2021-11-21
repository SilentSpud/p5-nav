import questions from "../../data/questions.yml";
export const ClassroomQuestions: DateInfo[] = questions;
export interface Question {
  question: string;
  answer: string;
}
export type DateInfo = {
  date: string;
  questions: Question[];
};
