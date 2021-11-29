import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPersona, Personas } from "../../data";
import { BasicInfo, ElementsTable, NameTags, Persona, ShadowInfo, StatsTable, SkillTable } from "../../persona";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths = async () => {
  return {
    paths: Personas.map((item) => {
      return { params: { persona: item.name } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: props }) => {
  return { props };
};

const loadRouter = ({ persona }: ParsedUrlQuery) => {
  let name = persona;
  switch (typeof name) {
    case "object":
      name = name[0];
    case "undefined":
      return undefined;
  }
  return getPersona(name);
};

const PersonaInfo = ({ persona }: { persona?: string }) => {
  const router = useRouter();
  let personaInfo = persona ? getPersona(persona) : loadRouter(router.query);
  if (!personaInfo) return null;
  const { name, shadow } = personaInfo;
  return (
    <>
      <Head>
        <title>{name} - rNav</title>
      </Head>
      <Persona persona={personaInfo}>
        <h1>
          <NameTags persona={personaInfo} />
        </h1>
        <BasicInfo />
        {shadow && <ShadowInfo />}
        <StatsTable />
        <ElementsTable />
        <SkillTable />
      </Persona>
    </>
  );
};
export default PersonaInfo;
