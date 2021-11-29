import questions from "../../data/questions.json";
export const Questions: DateInfo[] = questions;
export default Questions;
export interface Question {
  question: string;
  answer: string;
}
export type DateInfo = {
  date: string;
  questions: Question[];
};
