export interface Answer {
  text: string
  gloomy: Reaction | ReactionLevel | number;
  irritable: Reaction | ReactionLevel | number;
  timid: Reaction | ReactionLevel | number;
  upbeat: Reaction | ReactionLevel | number;
};
export interface Reaction {
  unconfirmed: boolean;
  rate: ReactionLevel | number;
}
export enum ReactionLevel {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3
}
export interface NegotiationList {
  [question: string]: Answer[]
}