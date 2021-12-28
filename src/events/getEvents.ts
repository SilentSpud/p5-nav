import { FreeTime, dateToString, parseWeather, parseSpecial, parseEvents } from ".";
import calendarData from "../../data/calendar.json";
import type { DayResponse, Schedule, DayPrimitive, TimeSlotPrimitive, Night, Evening, Noon } from ".";

const parseAfternoon = (time?: TimeSlotPrimitive): Noon | undefined => (time?.events && time.events.length > 0 ? { events: time.events } : undefined);
const parseEvening = (time?: TimeSlotPrimitive): Evening | undefined =>
  !time
    ? undefined
    : {
        time: time.time as FreeTime,
        events: time.events ? parseEvents(time.events) : undefined,
        weather: parseWeather(time.weather ? (time.weather.shift() as string) : ""),
        special: time.weather && time.weather.length > 0 ? parseSpecial(time.weather) : undefined,
      };
const parseNight = (time?: TimeSlotPrimitive): Night | undefined =>
  !time
    ? undefined
    : {
        time: time.time as FreeTime,
        events: time.events ? parseEvents(time.events) : undefined,
        weather: parseWeather(time.weather ? (time.weather.shift() as string) : ""),
        special: time.weather && time.weather.length > 0 ? parseSpecial(time.weather) : undefined,
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
