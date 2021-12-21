import React from "react";
import { LoadQuestions } from "../../../calendar";
import { Week } from "../../../calendarWeekly";
import Head from "next/head";

export const WeekCalendar = () => {
  const [week, setWeek] = React.useState("2016-04-01T06:00:00.000Z"),
    weekHandler = (date: Date) => setWeek(JSON.stringify(date).replace(/"/g, "")),
    classQs = LoadQuestions(),
    weekDate = new Date(week as string);
  return (
    <>
      <Head>
        <title>Weekly Calendar - rNav</title>
        <meta property="og:title" content="Weekly Calendar - royal Navigator" />
        <meta property="og:description" content="Beta weekly calendar" />
      </Head>
      <Week week={weekDate} setWeek={weekHandler} events={classQs} />
    </>
  );
};
export default WeekCalendar;
