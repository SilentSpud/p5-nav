import React, { FC, useContext, useState } from "react";
import { startOfWeek } from "date-fns";

type WeekCtxProps = {
  week: Date;
  setWeek: (date: Date) => void;
  selected?: Date;
  setSelected: (date: Date) => void;
};

const WeekCtx = React.createContext<WeekCtxProps>({} as WeekCtxProps);
export const useWeek = () => useContext(WeekCtx);

type WeekProps = {
  week: Date;
  setWeek: (date: Date) => void;
  selected?: Date;
};

export const WeekController: FC<WeekProps> = ({ children, week, setWeek, selected: selectedInput }) => {
  let [selected, setSelected] = useState<Date>(selectedInput ?? ({} as Date));

  const weekData = {
    week: startOfWeek(week),
    setWeek,
    selected,
    setSelected,
  };
  return <WeekCtx.Provider value={weekData}>{children}</WeekCtx.Provider>;
};
export default WeekController;
