import questions from "../../data/questions.json";
export interface Question {
  question: string;
  answer: string;
}
export type QuestionList = {
  date: `${number| ''}${number}/${number| ''}${number}`;
  questions: Question[]
}

export const ClassroomQuestions: QuestionList = questions;
