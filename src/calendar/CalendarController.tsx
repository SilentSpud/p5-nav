import React, { createContext, ReactNode, useContext } from "react";
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";

type CalendarState = {
  days: Date[];
  month: Date;
  events: EventItem[];
  onMonthChange: (date: Date) => void;
};
export type EventItem = {
  title: string;
  date: Date;
  theme:
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
};

const calendarContext = createContext<CalendarState>({} as CalendarState);
export const useCalendar = (): CalendarState => useContext(calendarContext);

type CalendarProps = {
  children: ReactNode | ReactNode[];
  month: Date;
  events: EventItem[];
  onMonthChange: (date: Date) => void;
};

export const Calendar = ({ month, onMonthChange, children, events }: CalendarProps) => {
  const monthStart = startOfMonth(month);
  const days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  return <calendarContext.Provider value={{ days, onMonthChange, month: monthStart, events }}>{children}</calendarContext.Provider>;
};

// extrapolate dates from strings
export const parseYear = (dayString: string): Date => {
  const month = parseInt(dayString.slice(0, 1));
  const day = parseInt(dayString.slice(2));
  const year = /[1-3]/g.test(month.toString()) ? 2017 : 2016;
  return new Date(year, month, day);
};

export const padDates = (days: Date[]) => {
  // extra at the start to line up the days
  const prePad: (Date | 0)[] = Array.from(Array(days[0].getUTCDay())).map(() => 0);
  // extra at the end to keep the calendar shape
  const overflow = prePad.concat(days).slice(35);
  let cutDays = prePad.concat(days).slice(0, 35);

  if (overflow.length > 0) {
    // Move excess entries to the beginning
    const newPrePad = overflow.concat(Array.from(Array(7)).map(() => 0)).slice(0, days[0].getUTCDay());
    cutDays = newPrePad.concat(days).slice(0, 35);
  }
  const postPad: 0[] = Array.from({ length: 35 - cutDays.length }, () => 0);
  return cutDays.concat(postPad);
};
