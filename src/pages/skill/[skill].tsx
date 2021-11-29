import React from "react";
import { useRouter } from "next/router";
import { getSkill } from "../../data";
import { BasicInfo, Skill, SkillTags, UnlockInfo } from "../../skill";

const SkillInfo = () => {
  const router = useRouter();
  let { skill } = router.query;
  switch (typeof skill) {
    case "string":
      break;
    case "object":
      skill = skill[0];
    case "undefined":
      return null;
  }
  const info = getSkill(decodeURIComponent(skill));
  if (!skill || !info) return null;

  return (
    <Skill skill={info}>
      <h1>
        <SkillTags skill={info} />
      </h1>
      <BasicInfo />
      <UnlockInfo />
    </Skill>
  );
};
export default SkillInfo;
