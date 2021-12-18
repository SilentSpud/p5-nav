import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getSkill, Skills, Skill as SkillType } from "../../data";
import { BasicInfo, PersonaTable, Skill, SkillTags, UnlockInfo } from "../../skill";
import { ParsedUrlQuery } from "querystring";
import { Error404, toCamel } from "..";

export const getStaticPaths = async () => ({
  paths: Skills.map(({ name }) => ({ params: { skill: name.replace(/ /g, "_") } })),
  fallback: false,
});

export const getStaticProps = async ({ params: props }) => {
  return { props };
};

const loadRouter = ({ persona }: ParsedUrlQuery) => {
  let name = persona;
  if (typeof name !== "string") return undefined;
  return name as string;
};

const SkillInfo = ({ skill }: { skill?: string }) => {
  const router = useRouter();
  let skillName = skill ?? loadRouter(router.query);
  if (!skillName) return <Error404 />;
  const skillInfo = getSkill(skillName.replaceAll("_", " ")) as SkillType;

  const { name, effect, element } = skillInfo;
  return (
    <>
      <Head>
        <title>{name} - rNav</title>
        <meta property="og:title" content={`${name} - Skill - royal Navigator`} />
        <meta property="og:description" content={effect} />
        <meta property="twitter:label1" content="Element" />
        <meta property="twitter:data1" content={toCamel(element)} />
      </Head>
      <Skill skill={skillInfo}>
        <h1>
          {name} <SkillTags />
        </h1>
        <BasicInfo />
        <UnlockInfo />
        <PersonaTable />
      </Skill>
    </>
  );
};
export default SkillInfo;
