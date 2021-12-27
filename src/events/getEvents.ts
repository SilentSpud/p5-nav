import { FreeTime, dateToString, parseWeather } from ".";
import calendarData from "../../data/calendar.json";
import type { DayResponse, Day, Schedule, Question, TimeSlot, DayPrimitive, TimeSlotPrimitive, Crossword, Hangout, Quiz } from ".";

const parseAfternoon = (time?: TimeSlotPrimitive): TimeSlot<Question> | undefined => {
  if (!time?.events || time.events.length == 0) return;
  const slot: TimeSlot<Question> = { events: time.events };
  return slot;
};
const parseEvening = (time?: TimeSlotPrimitive): TimeSlot<Crossword | Quiz | Hangout> | undefined => {
  return;
};
const parseNight = (time?: TimeSlotPrimitive): TimeSlot<Crossword | Hangout> | undefined => {
  return;
};

const getCalendar = () => {
  const calendar: Schedule = {};
  Object.entries<DayPrimitive>(calendarData).forEach(([key, value]) => {
    calendar[key] = {
      afternoon: parseAfternoon(value.afternoon),
      evening: parseEvening(value.evening),
      night: parseNight(value.night),
    };
  });
  return calendar;
};
const calendar = getCalendar();

export const getEvents = (date: Date): DayResponse => ({ date, ...calendar[dateToString(date)] });
