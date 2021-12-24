import { getDate, getMonth } from "date-fns";
import { DateInfo, Events, FreeTime, SpecialWeather, Weather } from "../data";

export const pad = (data: string | number) => ("00" + data.toString()).slice(-2);

export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  return new Date(year, month - 1, day);
};
export const dateToString = (date: Date) => `${pad(getMonth(date) + 1)}/${pad(getDate(date))}`;

type tagList = "clear" | "cloudy" | "rainy" | "snowy" | "pollen" | "rain" | "heatwave" | "flu" | "cold";
const parseWeather = (tags: string[]) =>
  tags.map((tag) => {
    switch (tag as tagList) {
      case "clear":
        return Weather.Clear;
      case "cloudy":
        return Weather.Cloudy;
      case "rainy":
        return Weather.Rainy;
      case "snowy":
        return Weather.Snowy;
      case "pollen":
        return SpecialWeather.Pollen;
      case "rain":
        return SpecialWeather.Rain;
      case "heatwave":
        return SpecialWeather.Heatwave;
      case "flu":
        return SpecialWeather.Flu;
      case "cold":
        return SpecialWeather.Cold;
    }
  });

export const getEvents = (date: Date): DateInfo => {
  const dateString = dateToString(date);
  const day: DateInfo = { date };

  const questions = Events.Questions[dateString]?.questions ?? [];
  if (questions.length > 0) day.afternoon = { events: questions };

  const schedule = Events.Schedule[dateString];
  if (schedule?.day) {
    day.evening = {
      time: schedule.day.time as FreeTime,
      weather: parseWeather(schedule.day.weather),
    };
  }
  if (schedule?.night) {
    day.night = {
      time: schedule.night.time as FreeTime,
      weather: parseWeather(schedule.night.weather),
    };
  }

  return day;
};
