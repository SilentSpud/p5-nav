import { getDate, getMonth } from "date-fns";
import { DateInfo, Events, FreeTime } from "../data";

export const pad = (data: string | number) => ("00" + data.toString()).slice(-2);


export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  return new Date(year, month - 1, day);
};
export const dateToString = (date: Date) => `${pad(getMonth(date) + 1)}/${pad(getDate(date))}`;

export const getEvents = (date: Date): DateInfo => {
  const dateString = dateToString(date);
  const day: DateInfo = { date };

  const questions = Events.Questions[dateString]?.questions ?? [];
  if (questions.length > 0) day.afternoon = { events: questions }

  const schedule = Events.Schedule[dateString];
  if (schedule?.day) day.evening = {
    time: schedule.day.time as FreeTime,
    weather: []
  }
  if (schedule?.night) day.night = {
    time: schedule.night.time as FreeTime,
    weather: []
  }

  return day;
}
