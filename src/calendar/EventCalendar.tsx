import { useMemo } from "react";
import { parseYear, EventItem } from "./CalendarController";
import { Events } from "../data";
export const LoadQuestions = () =>
  useMemo(() => {
    const questions: EventItem[] = [];
    for (const day of Events.Questions) {
      const event: EventItem = {
        title: "Classroom Questions",
        date: parseYear(day.date),
        type: "class",
        questions: day.events,
      };
      questions.push(event);
    }
    return questions;
  }, []);
