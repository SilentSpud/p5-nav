import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import type { GetServerSideProps } from "next";
import { Week } from "../../../calendar";

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  const week = cookies.week ?? "2016-04-09T06:00:00.000Z";
  return { props: { date: week } };
};

export const WeekCalendar = ({ date }: { date?: string }) => {
  const [cookies, setCookie] = useCookies(["week"]);
  const week = date ?? cookies.week ?? "2016-04-09T06:00:00.000Z";
  const weekHandler = (date: Date) => setCookie("week", JSON.stringify(date).replace(/"/g, ""));

  const router = useRouter();
  let { month, day } = router.query;
  if (month && typeof month !== "string") month = month[0];
  if (day && typeof day !== "string") day = day[0];
  const activeDate = !month ? undefined : new Date(parseInt(month) < 4 ? 2017 : 2016, parseInt(month) - 1, parseInt(day ?? "1"));

  return (
    <>
      <Head>
        <title>Weekly Calendar - rNav</title>
        <meta property="og:title" content="Weekly Calendar - royal Navigator" />
        <meta property="og:description" content="Beta weekly calendar" />
      </Head>
      <Week week={new Date(week)} setWeek={weekHandler} selected={activeDate} />
    </>
  );
};
export default WeekCalendar;
