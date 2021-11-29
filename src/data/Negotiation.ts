import negotiation from "../../data/negotiation.json";
export const Negotiations: NegotiationList = negotiation;
export default Negotiations;

export interface NegotiationList {
  [question: string]: NegotiationAnswer[];
}
export interface NegotiationAnswer {
  text: string;
  gloomy: NegotiationReaction | NegotiationReactions;
  irritable: NegotiationReaction | NegotiationReactions;
  timid: NegotiationReaction | NegotiationReactions;
  upbeat: NegotiationReaction | NegotiationReactions;
}
export interface NegotiationReaction {
  unconfirmed?: boolean;
  rate: NegotiationReactions;
}
export enum NegotiationReactions {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3,
}
