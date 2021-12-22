import questions from "../../data/questions.json";
export type EventList<EventProps extends EventDetails> = EventDate<EventProps>[];
export type EventDate<EventProps> = {
  date: string | Date;
  events: EventProps[];
};
export type EventDetails = {
  type: string;
};

export interface Question extends EventDetails {
  question: string;
  answer: string;
}

export const Events: {
  Questions: EventList<Question>;
} = {
  Questions: questions,
};
export default Events;
