import React, { ReactNode, useContext } from "react";
import { DateInfo } from "../data";
import { getEvents } from ".";

type children = ReactNode | ReactNode[];

type EventsProps = {
  getEvents: (date: Date) => DateInfo;
};
const EventCtx = React.createContext<EventsProps>({} as EventsProps);
export const useEvents = () => useContext(EventCtx);
export const Events = ({ children }: { children: children }) => <EventCtx.Provider value={{ getEvents }}>{children}</EventCtx.Provider>;
export default Events;
