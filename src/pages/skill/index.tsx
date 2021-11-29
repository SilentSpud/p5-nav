import React from "react";
import Head from "next/head";
import { Skills } from "../../data";
import { Headers, SkillRowParser } from "../../skillList";
import PrepareTable from "../../table";

const SkillList = (): JSX.Element => (
  <>
    <Head>
      <title>Skills - rNav</title>
    </Head>
    <PrepareTable {...{ columns: Headers(), data: Skills, rowParser: SkillRowParser, className: "skills", sortId: "name" }} />
  </>
);
export default SkillList;
