export interface Answer {
  text: string
  gloomy: Reactions | number;
  irritable: Reactions | number;
  timid: Reactions | number;
  upbeat: Reactions | number;
};
export enum Reactions {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3
}
export interface NegotiationList {
  [question: string]: Answer[]
}