import questions from "../../data/questions.json";
export interface Question {
  question: string;
  answer: string;
}
type DateString = `${number| ''}${number}/${number| ''}${number}`;
export type DateInfo = {
  date: DateString;
  questions: Question[]
}

export const ClassroomQuestions: DateInfo[] = questions;
