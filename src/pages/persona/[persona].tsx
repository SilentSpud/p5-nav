import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPersona, Personas, Persona as PersonaType } from "../../data";
import { BasicInfo, ElementsTable, NameTags, Persona, ShadowInfo, StatsTable, SkillTable } from "../../persona";
import { ParsedUrlQuery } from "querystring";
import { Error404 } from "..";

export const getStaticPaths = async () => {
  return {
    paths: Personas.map(({ name }) => ({ params: { persona: name.replace(/ /g, "_") } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: props }) => {
  return { props };
};

const loadRouter = ({ persona }: ParsedUrlQuery) => {
  let name = persona;
  if (typeof name !== "string") return undefined;
  return name as string;
};

const PersonaInfo = ({ persona }: { persona?: string }) => {
  const router = useRouter();
  const personaName = persona ?? loadRouter(router.query);
  if (!personaName) return <Error404 />;
  const personaInfo = getPersona(personaName.replace(/_/g, " ")) as PersonaType;

  const { name, shadow, level } = personaInfo;
  return (
    <>
      <Head>
        <title>{name} - rNav</title>
        <meta property="og:title" content={`${name} - Persona - royal Navigator`} />
        <meta property="twitter:label1" content="Level" />
        <meta property="twitter:data1" content={level.toString()} />
        <meta property="twitter:label2" content="Shadow" />
        <meta property="twitter:data2" content={shadow} />
      </Head>
      <Persona persona={personaInfo}>
        <h1>
          {name} <NameTags />
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
