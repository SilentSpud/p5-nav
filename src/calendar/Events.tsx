import React, { ReactNode, useContext } from "react";
import { getDate, getMonth, getYear } from "date-fns";
import { EventList, Question, EventDate } from "../data";

type children = ReactNode | ReactNode[];

type EventsProps = {
  events: EventList<Question>;
  getEventsByDate: (date: Date) => EventDate<Question>;
};

const EventCtx = React.createContext<EventsProps>({} as EventsProps);
export const useEvents = () => useContext(EventCtx);

const eventFilter = (event: Date, date: Date): boolean =>
  getMonth(event) == getMonth(date) && getDate(event) == getDate(date) && getYear(event) == getYear(date);

export const Events = ({ children, events }: { children: children; events: EventList<Question> }) => {
  const eventList: EventList<Question> = [];
  for (const event of events) {
    const date = typeof event.date === "string" ? parseDate(event.date) : event.date;
    eventList.push({
      date,
      events: event.events,
    });
  }

  const getEventsByDate = (date: Date): EventDate<Question> =>
    eventList.find(({ date: evtDate }) => eventFilter(evtDate as Date, date)) ?? { date, events: [] };

  return (
    <EventCtx.Provider
      value={{
        events: eventList,
        getEventsByDate,
      }}
    >
      {children}
    </EventCtx.Provider>
  );
};
export default Events;

export const parseDate = (dateString: string) => {
  const [month, day] = dateString.split("/").map((elem) => parseInt(elem));
  const year = month < 4 ? 2017 : 2016;
  const date = new Date(year, month, day);
  return date;
};
