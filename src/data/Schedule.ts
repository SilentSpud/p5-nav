import schedule from "../../data/schedule.json";
export const Schedule: { [date: string]: Day; } = schedule;

export type Day = {
  day: TimeSlot;
  night: TimeSlot;
}
export type TimeSlot = {
  time: number | FreeTime;
  weather: string[] | (Weather | SpecialWeather)[];
}

export enum FreeTime {
  None,
  Leblanc,
  Full,
}

export enum Weather {
  Clear,
  Cloudy,
  Rainy,
  Snowy
}

export enum SpecialWeather {
  Pollen = "pollen",      // Pollen Warning
  Rain = "rain",          // Heavy Rain
  Heatwave = "heatwave",  // Heat Wave & Tropical Night
  Flu = "flu",            // Flu Season
  Cold = "cold",          // Cold Wave
}
