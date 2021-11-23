import React, { useMemo } from "react";
import { Day, Month } from "./CalendarBody";
import Navbar from "./Navbar";
import { Calendar, parseYear, EventItem } from "./CalendarController";
import { ClassroomQuestions } from "../data";
import useStorage from "react-use-localstorage2";

const gameStart = "2016-04-01T06:00:00.000Z";

const LoadQuestions = () =>
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

export const EventCalendar = () => {
  const [month, setMonth] = useStorage("date", gameStart);
  const monthHandler = (date: Date) => setMonth(JSON.stringify(date).replace(/"/g, ""));
  const classQs = LoadQuestions();
  return (
    <Calendar month={new Date(month as string)} onMonthChange={monthHandler} events={classQs}>
      <Navbar />
      <Month>
        <Day />
      </Month>
    </Calendar>
  );
};
