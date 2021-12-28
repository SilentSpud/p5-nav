import { getDate, getMonth } from "date-fns";
import { SpecialWeather, Weather } from ".";

export const pad = (data: string | number) => ("00" + data.toString()).slice(-2);

export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  return new Date(year, month - 1, day);
};
export const dateToString = (date: Date) => `${pad(getMonth(date) + 1)}/${pad(getDate(date))}`;

export const parseWeather = (tag: string): Weather | undefined => {
  switch (tag) {
    case "clear":
      return Weather.Clear;
    case "cloudy":
      return Weather.Cloudy;
    case "rainy":
      return Weather.Rainy;
    case "snowy":
      return Weather.Snowy;
    default:
      return;
  };
}
export const parseSpecial = (tag?: string) => {
  switch (tag as "pollen" | "rain" | "heatwave" | "flu" | "cold") {
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
  };
}
