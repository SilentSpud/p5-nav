import { FreeTime, dateToString, parseWeather } from ".";
import calendarData from "../../data/calendar.json";
import type { DayResponse, Schedule, DayPrimitive, TimeSlotPrimitive, Night, Evening, Noon } from ".";

const parseAfternoon = (time?: TimeSlotPrimitive): Noon | undefined => (time?.events && time?.events?.length > 0) ? { events: time.events } : undefined;
const parseEvening = (time?: TimeSlotPrimitive): Evening | undefined => {
  if (!time) return;
  const weather = (time.weather as string[]).shift() as string;
  const slot: Evening = {
    time: time.time as FreeTime,
    weather: parseWeather(weather),
  }
  return slot;
};
const parseNight = (time?: TimeSlotPrimitive): Night | undefined => {
  if (!time) return;
  const slot: Night = {};
  return slot;
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
