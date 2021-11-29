import React from "react";
import Head from "next/head";
import { Personas } from "../../data";
import { personaHeaders, PersonaRowParser } from "../../personaList";
import PrepareTable from "../../table";

export const PersonaTable = () => (
  <>
    <Head>
      <title>Personas - rNav</title>
    </Head>
    <PrepareTable {...{ columns: personaHeaders, data: Personas, rowParser: PersonaRowParser, className: "personas" }} />
  </>
);
export default PersonaTable;
