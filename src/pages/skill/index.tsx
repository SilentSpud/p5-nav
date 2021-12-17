import React from "react";
import Head from "next/head";
import { Skills } from "../../data";
import { Headers, SkillRowParser } from "../../skillList";
import PrepareTable from "../../table";

const SkillList = (): JSX.Element => (
  <>
    <Head>
      <title>Skills - rNav</title>
      <meta property="og:title" content="Skill List - royal Navigator" />
      <meta property="og:description" content="Table of skills" />
    </Head>
    <PrepareTable {...{ columns: Headers(), data: Skills, rowParser: SkillRowParser, className: "skills", sortId: "name" }} />
  </>
);
export default SkillList;
