import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPersona } from "../../data";
import { BasicInfo, ElementsTable, NameTags, Persona, ShadowInfo, StatsTable, SkillTable } from "../../persona";
const PersonaInfo = () => {
  const router = useRouter();
  let { persona: name } = router.query;
  switch (typeof name) {
    case "object":
      name = name[0];
    case "undefined":
      return null;
  }
  const persona = getPersona(name);
  if (!name || !persona) return null;
  return (
    <>
      <Head>
        <title>{persona.name} - rNav</title>
      </Head>
      <Persona persona={persona}>
        <h1>
          <NameTags persona={persona} />
        </h1>
        <BasicInfo />
        {persona.shadow && <ShadowInfo />}
        <StatsTable />
        <ElementsTable />
        <SkillTable />
      </Persona>
    </>
  );
};
export default PersonaInfo;
