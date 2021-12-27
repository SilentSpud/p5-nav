import { getDate, getMonth } from "date-fns";
import { SpecialWeather, Weather } from ".";

export const pad = (data: string | number) => ("00" + data.toString()).slice(-2);

export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  return new Date(year, month - 1, day);
};
export const dateToString = (date: Date) => `${pad(getMonth(date) + 1)}/${pad(getDate(date))}`;

type tagList = "clear" | "cloudy" | "rainy" | "snowy" | "pollen" | "rain" | "heatwave" | "flu" | "cold";
export const parseWeather = (tags: string[]) =>
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
