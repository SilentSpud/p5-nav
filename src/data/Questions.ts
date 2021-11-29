import questions from "../../data/questions.json";
export const ClassroomQuestions: DateInfo[] = questions;
export interface Question {
  question: string;
  answer: string;
}
export type DateInfo = {
  date: string;
  questions: Question[];
};
