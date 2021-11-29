import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getSkill, Skills } from "../../data";
import { BasicInfo, Skill, SkillTags, UnlockInfo } from "../../skill";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths = async () => {
  return {
    paths: Skills.map((item) => {
      return { params: { skill: item.name } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: props }) => {
  return { props };
};

const loadRouter = ({ skill }: ParsedUrlQuery) => {
  let name = skill;
  switch (typeof name) {
    case "object":
      name = name[0];
    case "undefined":
      return undefined;
  }
  return getSkill(name);
};

const SkillInfo = ({ skill }: { skill?: string }) => {
  const router = useRouter();
  let skillInfo = skill ? getSkill(skill) : loadRouter(router.query);
  if (!skillInfo) return null;
  const { name } = skillInfo;

  return (
    <>
      <Head>
        <title>{name} - rNav</title>
      </Head>
      <Skill skill={skillInfo}>
        <h1>
          <SkillTags skill={skillInfo} />
        </h1>
        <BasicInfo />
        <UnlockInfo />
      </Skill>
    </>
  );
};
export default SkillInfo;
