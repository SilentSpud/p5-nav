import React from "react";
import Head from "next/head";
import useStorage from "react-use-localstorage2";
import { Calendar, Day, LoadQuestions, Month, Navbar } from "../../calendar";

const EventCalendar = () => {
  const [month, setMonth] = useStorage("date", "2016-04-01T06:00:00.000Z"),
    monthHandler = (date: Date) => setMonth(JSON.stringify(date).replace(/"/g, "")),
    classQs = LoadQuestions(),
    monthDate = new Date(month as string);
  return (
    <>
      <Head>
        <title>Calendar - rNav</title>
      </Head>
      <Calendar month={monthDate} onMonthChange={monthHandler} events={classQs}>
        <Navbar />
        <Month>
          <Day />
        </Month>
      </Calendar>
    </>
  );
};
export default EventCalendar;
