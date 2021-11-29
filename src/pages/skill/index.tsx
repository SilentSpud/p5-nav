import React from "react";
import Head from "next/head";
import { Skill, Skills } from "../../data";
import { Headers, SkillRowParser } from "../../skillList";
import PrepareTable from "../../table";

export const getStaticProps = async ({}) => {
  return {
    props: { data: Skills },
  };
};
const SkillList = ({ data }: { data: Skill[] }): JSX.Element => (
  <>
    <Head>
      <title>Skills - rNav</title>
    </Head>
    <PrepareTable {...{ columns: Headers(), data, rowParser: SkillRowParser, className: "skills", sortId: "name" }} />
  </>
);
export default SkillList;
