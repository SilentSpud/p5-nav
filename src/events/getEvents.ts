import { DayResponse, Day, Events, FreeTime, dateToString, parseWeather, Schedule } from ".";
import calendarData from "../../data/calendar.json";
const calendar: Schedule = {};

for (const dateString in calendarData) {
  const inDate = calendarData[dateString];
  const day = {} as Day;
}

export const getEvents = (date: Date): DayResponse => {
  const dateString = dateToString(date);
  const day: DayResponse = { date };

  const calInfo = {} as DayResponse;
  if (calInfo.afternoon) day.afternoon = calInfo.afternoon;
  if (calInfo.evening) day.evening = calInfo.evening;
  if (calInfo.night) day.night = calInfo.night;

  return { date };
};
