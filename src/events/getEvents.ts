import { dateToString, parseAfternoon, parseFreeTime } from ".";
import calendarData from "../../data/calendar.json";
import type { DayResponse, Schedule, DayPrimitive, Crossword, Hangout, Quiz } from ".";

const getCalendar = () => {
  const calendar: Schedule = {};
  Object.entries<DayPrimitive>(calendarData).forEach(([key, value]) => {
    calendar[key] = {
      afternoon: parseAfternoon(value.afternoon),
      evening: parseFreeTime<Crossword | Quiz | Hangout>(value.evening),
      night: parseFreeTime<Crossword | Hangout>(value.night),
    };
  });
  return calendar;
};
const calendar = getCalendar();

export const getEvents = (date: Date): DayResponse => ({ date, ...calendar[dateToString(date)] });
