import React from "react";
import Head from "next/head";
import { Calendar, Day, LoadQuestions, Month, Navbar } from "../../calendar";

const EventCalendar = () => {
  const [month, setMonth] = React.useState("2016-04-01T06:00:00.000Z"),
    monthHandler = (date: Date) => setMonth(JSON.stringify(date).replace(/"/g, "")),
    classQs = LoadQuestions(),
    monthDate = new Date(month as string);
  return (
    <>
      <Head>
        <title>Calendar - rNav</title>
        <meta property="og:title" content="Calendar - royal Navigator" />
        <meta property="og:description" content="Persona 5 Royal event calendar" />
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
