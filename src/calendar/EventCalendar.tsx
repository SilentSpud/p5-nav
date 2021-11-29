import { useMemo } from "react";
import { parseYear, EventItem } from "./CalendarController";
import { ClassroomQuestions } from "../data";

export const LoadQuestions = () =>
  useMemo(() => {
    const questions: EventItem[] = [];
    for (const day of ClassroomQuestions) {
      const event: EventItem = {
        title: "Classroom Questions",
        date: parseYear(day.date),
        type: "class",
        questions: day.questions,
      };
      questions.push(event);
    }
    return questions;
  }, []);
