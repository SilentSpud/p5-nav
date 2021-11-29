import React from "react";
import Head from "next/head";
import { Persona, Personas } from "../../data";
import { personaHeaders, PersonaRowParser } from "../../personaList";
import PrepareTable from "../../table";

export const getStaticProps = async ({}) => {
  return {
    props: { data: Personas },
  };
};

export const PersonaTable = ({ data }: { data: Persona[] }) => (
  <>
    <Head>
      <title>Personas - rNav</title>
    </Head>
    <PrepareTable {...{ columns: personaHeaders, data, rowParser: PersonaRowParser, className: "personas" }} />
  </>
);
export default PersonaTable;
