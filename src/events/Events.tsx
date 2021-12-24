import React, { ReactNode, useContext } from "react";
import { getDate, getMonth } from "date-fns";
import { Day, DateInfo, Events as EventList } from "../data";

type children = ReactNode | ReactNode[];

type EventsProps = {
  getEvents: (date: Date) => DateInfo;
};

const EventCtx = React.createContext<EventsProps>({} as EventsProps);
export const useEvents = () => useContext(EventCtx);
const pad = (data: string | number) => ("00" + data.toString()).slice(-2);

export const Events = ({ children }: { children: children }) => {
  const eventList: Day[] = [];
  for (const eventName in EventList.Questions) {
    const event = EventList.Questions[eventName];
    const date = typeof event.date === "string" ? parseDate(event.date) : event.date;
    eventList.push({
      date,
      events: event.events,
    });
  }

  const getEvents = (date: Date): DateInfo => {
    const dateString = parseDateToString(date);
    const questions = EventList.Questions[dateString]?.questions;
    const schedule = EventList.Schedule[dateString]?.questions;
    return {
      date,
      events: [...(questions || [])],
    };
  };

  return <EventCtx.Provider value={{ getEvents }}>{children}</EventCtx.Provider>;
};
export default Events;

export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  return new Date(year, month - 1, day);
};
export const parseDateToString = (date: Date) => `${pad(getMonth(date) + 1)}/${pad(getDate(date))}`;
