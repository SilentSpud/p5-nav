import React, { useState } from "react";
import { startOfMonth } from "date-fns";
import { Day, Event, Month } from "./CalendarBody";
import Navbar from "./Navbar";
import "./calendar.scss";
import { MonthlyCalendar } from "./CalendarController";

const StartDate = new Date(2016, 4, 9);

type EventItem = {
  title: string;
  date: Date;
};

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(StartDate));

  return (
    <MonthlyCalendar currentMonth={currentMonth} onCurrentMonthChange={(date) => setCurrentMonth(date)}>
      <Navbar />
      <Month events={[]}>
        <Day renderDay={(data: EventItem[]) => data.map((item: EventItem, index) => <Event key={index} title={item.title} date={item.date} />)} />
      </Month>
    </MonthlyCalendar>
  );
};
