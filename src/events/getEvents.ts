import { FreeTime, dateToString, parseWeather, parseSpecial, parseEvents } from ".";
import calendarData from "../../data/calendar.json";
import type { DayResponse, Schedule, DayPrimitive, TimeSlotPrimitive, Crossword, Hangout, Question, Quiz, TimeSlot } from ".";

const parseAfternoon = (time?: TimeSlotPrimitive): TimeSlot<Question> | undefined =>
  time?.events && time.events.length > 0 ? { events: time.events } : undefined;
const parseFreeTime = <EventTypes>(time?: TimeSlotPrimitive): TimeSlot<EventTypes> | undefined => {
  if (!time) return;
  return {
    time: time.time as FreeTime,
    events: time.events ? parseEvents(time.events) : undefined,
    weather: parseWeather(time.weather ? (time.weather.shift() as string) : ""),
    special: time.weather && time.weather.length > 0 ? parseSpecial(time.weather) : undefined,
  };
};

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
