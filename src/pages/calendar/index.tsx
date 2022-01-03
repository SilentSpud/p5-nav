import React from "react";
import { Week } from "../../calendar";
import Head from "next/head";
import { useCookies } from "react-cookie";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  const week = cookies.week ?? "2016-04-09T06:00:00.000Z";
  return { props: { date: week } };
};

export const WeekCalendar = ({ date }: { date?: string }) => {
  const [cookies, setCookie] = useCookies(["week"]);
  const week = cookies.week ?? date ?? "2016-04-09T06:00:00.000Z";
  const weekHandler = (date: Date) => setCookie("week", JSON.stringify(date).replace(/"/g, ""));

  return (
    <>
      <Head>
        <title>Weekly Calendar - rNav</title>
        <meta property="og:title" content="Weekly Calendar - royal Navigator" />
        <meta property="og:description" content="Beta weekly calendar" />
      </Head>
      <Week week={new Date(week)} setWeek={weekHandler} />
    </>
  );
};
export default WeekCalendar;
