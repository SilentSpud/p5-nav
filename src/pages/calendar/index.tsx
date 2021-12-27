import React from "react";
import { Week } from "../../calendar";
import Head from "next/head";

export const WeekCalendar = () => {
  const [week, setWeek] = React.useState("2016-04-09T06:00:00.000Z"),
    weekHandler = (date: Date) => setWeek(JSON.stringify(date).replace(/"/g, "")),
    weekDate = new Date(week as string);
  return (
    <>
      <Head>
        <title>Weekly Calendar - rNav</title>
        <meta property="og:title" content="Weekly Calendar - royal Navigator" />
        <meta property="og:description" content="Beta weekly calendar" />
      </Head>
      <Week week={weekDate} setWeek={weekHandler} />
    </>
  );
};
export default WeekCalendar;
