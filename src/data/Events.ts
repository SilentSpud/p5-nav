import questions from "../../data/questions.json";
import schedule from "../../data/schedule.json";

export type Schedule = {
  [date: string]: Day;
};
export type Day = {
  [category: string]: any;
  questions?: Question[];
  day?: TimeSlot;
  night?: TimeSlot;
};
export type DateInfo = {
  date: Date;
  events: any[];
};
export type Question = {
  question: string;
  answer: string;
};
export type TimeSlot = {
  time: number | FreeTime;
  weather: string[] | (Weather | SpecialWeather)[];
};

export enum FreeTime {
  None,
  Leblanc,
  Full,
}

export enum Weather {
  Clear,
  Cloudy,
  Rainy,
  Snowy,
}

export enum SpecialWeather {
  Pollen = "pollen", // Pollen Warning
  Rain = "rain", // Heavy Rain
  Heatwave = "heatwave", // Heat Wave & Tropical Night
  Flu = "flu", // Flu Season
  Cold = "cold", // Cold Wave
}

export const Events: { [name: string]: Schedule } = {
  Questions: questions,
  Schedule: schedule,
};
export default Events;
