import React, { useMemo, useState } from "react";
import { Day, Month } from "./CalendarBody";
import Navbar from "./Navbar";
import "./calendar.scss";
import { MonthlyCalendar, parseYear } from "./CalendarController";
import { ClassroomQuestions } from "../data";

const gameStart = new Date("2016-04-01T06:00:00.000Z");

type EventItem = {
  title: string;
  date: Date;
};

const loadQuestions = () =>
  useMemo(() => {
    const questions: EventItem[] = [];
    for (const day in ClassroomQuestions) {
      const qs = ClassroomQuestions[day];
      const event: EventItem = {
        title: `Questions: ${qs.length}`,
        date: parseYear(day),
      };
      questions.push(event);
    }
    return questions;
  }, []);

export const Calendar = () => {
  const [month, setMonth] = useState<Date>(gameStart);
  const classQs = loadQuestions();
  return (
    <MonthlyCalendar month={month} onMonthChange={(date) => setMonth(date)} events={classQs}>
      <Navbar />
      <Month>
        <Day />
      </Month>
    </MonthlyCalendar>
  );
};
