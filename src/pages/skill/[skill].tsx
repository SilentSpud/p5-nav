import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getSkill } from "../../data";
import { BasicInfo, Skill, SkillTags, UnlockInfo } from "../../skill";

const SkillInfo = () => {
  const router = useRouter();
  let { skill: skillName } = router.query;
  switch (typeof skillName) {
    case "string":
      break;
    case "object":
      skillName = skillName[0];
    case "undefined":
      return null;
  }
  const skill = getSkill(decodeURIComponent(skillName));
  if (!skillName || !skill) return null;

  return (
    <>
      <Head>
        <title>{skillName} - rNav</title>
      </Head>
      <Skill skill={skill}>
        <h1>
          <SkillTags skill={skill} />
        </h1>
        <BasicInfo />
        <UnlockInfo />
      </Skill>
    </>
  );
};
export default SkillInfo;
