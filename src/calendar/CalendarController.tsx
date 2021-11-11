import React, { createContext, ReactNode, useContext } from "react";
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";


type CalendarState = {
  days: Date[];
  month: Date;
  onMonthChange: (date: Date) => void;
};

const calendarContext = createContext<CalendarState>({} as CalendarState);
export const useCalendar = () => useContext(calendarContext);

type CalendarProps = {
  children: ReactNode | ReactNode[];
  month: Date;
  onMonthChange: (date: Date) => void;
};

export const MonthlyCalendar = ({ month, onMonthChange, children }: CalendarProps) => {
  const monthStart = startOfMonth(month);
  const days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  return (
    <calendarContext.Provider value={{ days, onMonthChange, month: monthStart, }}>
      {children}
    </calendarContext.Provider>
  );
};



export const processPadding = (days: Date[]) => {
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
