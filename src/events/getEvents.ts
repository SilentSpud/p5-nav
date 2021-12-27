import { DayResponse, Events, FreeTime, dateToString, parseWeather, Schedule } from ".";
import calendarData from "../../data/calendar.json";

export const getEvents = (date: Date): DayResponse => {
  const dateString = dateToString(date);
  const day: DayResponse = { date };

  const calInfo = (calendarData as Schedule)[dateString];

  return day;
};
