import React, { ReactNode, useContext, useState } from "react";
import { startOfWeek } from "date-fns";

type Children = ReactNode | ReactNode[];

type WeekCtxProps = {
  week: Date;
  setWeek: (date: Date) => void;
  selected?: Date;
  setSelected: (date: Date) => void;
  events: any[];
};

const WeekCtx = React.createContext<WeekCtxProps>({} as WeekCtxProps);
export const useWeek = () => useContext(WeekCtx);

type WeekProps = {
  children: Children;
  week: Date;
  setWeek: (date: Date) => void;
  events: any[];
};

export const WeekController = ({ children, week, setWeek, events }: WeekProps) => {
  let [selected, setSelected] = useState<Date>();
  console.log(startOfWeek(week));
  const weekData = {
    week: startOfWeek(week),
    setWeek,
    selected,
    setSelected,
    events,
  };
  return <WeekCtx.Provider value={weekData}>{children}</WeekCtx.Provider>;
};
export default WeekController;
