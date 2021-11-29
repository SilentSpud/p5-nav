import React from "react";
import { Skills } from "../../data";
import { Headers, SkillRowParser } from "../../skillList";
import PrepareTable from "../../table";

const SkillList = (): JSX.Element => (
  <PrepareTable {...{ columns: Headers(), data: Skills, rowParser: SkillRowParser, className: "skills", sortId: "name" }} />
);
export default SkillList;
