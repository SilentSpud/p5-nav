export type Schedule = {
  [date: string]: Day;
};
type TimeSlot<EventTypes> = {
  time?: FreeTime;
  weather?: Weather;
  special?: SpecialWeather[];
  events?: EventTypes[];
};
export type Day = {
  afternoon?: TimeSlot<Question>;
  evening?: TimeSlot<Crossword | Quiz | Hangout>;
  night?: TimeSlot<Crossword | Hangout>;
};
export interface DayResponse extends Day {
  date: Date;
  evening: TimeSlot<Crossword | Quiz | Hangout>;
  night: TimeSlot<Crossword | Hangout>;
}
export type DayInfo = {
  time: number;
  weather: string[];
};

// Primitives for JSON parsing
export type DayPrimitive = {
  afternoon?: TimeSlotPrimitive;
  evening?: TimeSlotPrimitive;
  night?: TimeSlotPrimitive;
};
export type TimeSlotPrimitive = {
  time?: number;
  weather?: string[];
  events?: any[];
};

// Event Types
export type BaseEvent = {
  type: string;
};
export interface Question extends BaseEvent {
  type: "question";
  question: string;
  answer: string;
}
export interface Crossword extends BaseEvent {
  type: "crossword";
  number: number;
  word: {
    word: string;
    hint: string;
  };
}
export interface Quiz extends BaseEvent {
  type: "quiz";
  answer: 0 | 1;
  text: string;
}
export interface Hangout extends BaseEvent {
  type: "hangout";
  location: string;
  end?: string;
  flag?: TwinsFlags;
  cards: string[];
}

// Enums
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
export enum TwinsFlags {
  Locked, // Location must be unlocked first
  DayOnly, // Only available during day time slots (Afternoon, Evening)
  NoRain, // Not available on rainy days
}
