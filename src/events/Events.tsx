import React, { ReactNode, useContext } from "react";
import { DayResponse } from ".";
import { getEvents } from ".";

// Events context
type EventsProps = { getEvents: (date: Date) => DayResponse };
const EventCtx = React.createContext<EventsProps>({} as EventsProps);
export const useEvents = () => useContext(EventCtx);
export const Events = ({ children }: { children: ReactNode }) => <EventCtx.Provider value={{ getEvents }}>{children}</EventCtx.Provider>;
export default Events;
