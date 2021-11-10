import React, { createContext, ReactNode, useContext } from "react";
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";

export const processPadding = (days: Date[]) => {
  const prePad: (Date | 0)[] = Array.from(Array(days[0].getUTCDay())).map(() => 0); // extra cells at the start to align the calendar
  const postPad: 0[] = Array.from({ length: 35 - prePad.concat(days).length }, () => 0); // extra cells at the end to keep the calendar square
  const overflow = prePad.concat(days).slice(35);
  let cutDays = prePad.concat(days).slice(0, 35);

  if (overflow.length > 0) {
    // Move excess entries to the beginning
    const newPrePad = overflow.concat(Array.from(Array(7)).map(() => 0)).slice(0, days[0].getUTCDay());
    cutDays = newPrePad.concat(days).slice(0, 35);
  }
  return cutDays.concat(postPad);
};

type CalendarState = {
  days: Date[];
  currentMonth: Date;
  locale?: Locale;
  onCurrentMonthChange: (date: Date) => any;
};

const MonthlyCalendarContext = createContext<CalendarState>({} as CalendarState);
export const useMonthlyCalendar = () => useContext(MonthlyCalendarContext);

type Props = {
  locale?: Locale;
  children: ReactNode;
  currentMonth: Date;
  onCurrentMonthChange: (date: Date) => any;
};

export const MonthlyCalendar = ({ locale, currentMonth, onCurrentMonthChange, children }: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const days = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(monthStart),
  });

  return (
    <MonthlyCalendarContext.Provider
      value={{
        days,
        locale,
        onCurrentMonthChange,
        currentMonth: monthStart,
      }}
    >
      {children}
    </MonthlyCalendarContext.Provider>
  );
};
