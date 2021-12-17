import React from "react";
import Head from "next/head";
import { Personas } from "../../data";
import { personaHeaders, PersonaRowParser } from "../../personaList";
import PrepareTable from "../../table";

export const PersonaTable = () => (
  <>
    <Head>
      <title>Personas - rNav</title>
      <meta property="og:title" content="Persona List - royal Navigator" />
      <meta property="og:description" content="Table of basic persona stats" />
    </Head>
    <PrepareTable {...{ columns: personaHeaders, data: Personas, rowParser: PersonaRowParser, sortId: "lvl", className: "personas" }} />
  </>
);
export default PersonaTable;
