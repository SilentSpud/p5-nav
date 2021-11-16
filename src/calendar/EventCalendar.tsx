import React, { useMemo, useState } from "react";
import { Day, Month } from "./CalendarBody";
import Navbar from "./Navbar";
import { Calendar, parseYear, EventItem } from "./CalendarController";
import { ClassroomQuestions } from "../data";

const gameStart = "2016-04-01T06:00:00.000Z";

// TODO: fix this
export const useDate = (): [value: string, setValue: React.Dispatch<React.SetStateAction<string>> ] => {
  const [value, setValue] = React.useState(gameStart);

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem("month");

    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, []);

  React.useEffect(() => {
    if (value != gameStart) window.localStorage.setItem("month", value.toString());
  }, [value]);

  return [value, setValue];
}

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
  const [localMonth, setLocalMonth] = useDate();
  const [month, setMonth] = useState<Date>(new Date(localMonth));
  const monthHandler = (date: Date) => {
    setLocalMonth(date.toString());
    setMonth(date);
  }
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
