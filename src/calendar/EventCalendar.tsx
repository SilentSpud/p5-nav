import React, { useMemo, useState } from "react";
import { Day, Month } from "./CalendarBody";
import Navbar from "./Navbar";
import { Calendar, parseYear, EventItem } from "./CalendarController";
import { ClassroomQuestions } from "../data";

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
  const [month, setMonth] = useState<Date>(new Date(gameStart));
  const monthHandler = (date: Date) => {
    setMonth(date);
  };
  const classQs = LoadQuestions();
  return (
    <Calendar month={month} onMonthChange={monthHandler} events={classQs}>
      <Navbar />
      <Month>
        <Day />
      </Month>
    </Calendar>
  );
};
