import React, { createContext, ReactNode, useContext } from "react";
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";


type CalendarState = {
  days: Date[];
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
};

const MonthlyCalendarContext = createContext<CalendarState>({} as CalendarState);
export const useMonthlyCalendar = () => useContext(MonthlyCalendarContext);

type Props = {
  children: ReactNode | ReactNode[];
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
};

export const MonthlyCalendar = ({ currentMonth, onMonthChange, children }: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  return (
    <MonthlyCalendarContext.Provider value={{ days, onMonthChange, currentMonth: monthStart, }}>
      {children}
    </MonthlyCalendarContext.Provider>
  );
};



export const processPadding = (days: Date[]) => {
  // extra at the start to line up the days
  const prePad: (Date | 0)[] = Array.from(Array(days[0].getUTCDay())).map(() => 0);
  // extra at the end to keep the calendar shape
  const postPad: 0[] = Array.from({ length: prePad.concat(days).length % 7 }, () => 0);
  const overflow = prePad.concat(days).slice(35);
  let cutDays = prePad.concat(days).slice(0, 35);

  if (overflow.length > 0) {
    // Move excess entries to the beginning
    const newPrePad = overflow.concat(Array.from(Array(7)).map(() => 0)).slice(0, days[0].getUTCDay());
    cutDays = newPrePad.concat(days).slice(0, 35);
  }
  return cutDays.concat(postPad);
};
