import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import type { GetServerSideProps } from "next";
import { Week } from "../../../calendar";
import { dateToString } from "../../../events";

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  const week = cookies.week ?? "2016-04-09T06:00:00.000Z";
  return { props: { date: week } };
};

export const WeekCalendar = ({ date: inDate }: { date?: string }) => {
  const [cookies, setCookie] = useCookies(["week"]);
  const week = inDate ?? cookies.week ?? "2016-04-09T06:00:00.000Z";
  const [date, setDate] = useState<Date>(new Date(week));
  const weekHandler = (date: Date) => {
    setDate(date);
    setCookie("week", JSON.stringify(date).replace(/"/g, ""));
  };

  const router = useRouter();
  let { month, day } = router.query;
  if (month && typeof month !== "string") month = month[0];
  if (day && typeof day !== "string") day = day[0];
  const activeDate = !month ? undefined : new Date(parseInt(month) < 4 ? 2017 : 2016, parseInt(month) - 1, parseInt(day ?? "1"));
  const dateStr = activeDate ? dateToString(activeDate, true) + " - " : undefined;

  return (
    <>
      <Head>
        <title>{dateStr ? dateStr : "Weekly"} Calendar - rNav</title>
        <meta property="og:title" content={`${dateStr ? dateStr + " - " : ""}Event Calendar - royal Navigator`} />
        <meta property="og:description" content="Beta weekly calendar" />
      </Head>
      <Week week={date} setWeek={weekHandler} selected={activeDate} />
    </>
  );
};
export default WeekCalendar;
