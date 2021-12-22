import React, { ReactNode, useContext } from "react";
import { EventList, Question, EventDate } from "../data";

type children = ReactNode | ReactNode[];

type EventsProps = {
  events: EventList<Question>;
  getEventsByDate: (date: Date) => EventDate<Question> | undefined;
};

const EventCtx = React.createContext<EventsProps>({} as EventsProps);
export const useEvents = () => useContext(EventCtx);

export const Events = ({ children, events }: { children: children; events: EventList<Question> }) => {
  const eventList: EventList<Question> = [];
  for (const event of events) {
    const date = typeof event.date === "string" ? parseDate(event.date) : event.date;
    eventList.push({
      date,
      events: event.events,
    });
  }

  const getEventsByDate = (date: Date): EventDate<Question> => {
    const event = eventList.find(({ date: evtDate }) => evtDate == date);
    return event ?? { date, events: [] };
  };

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
