import React, { createContext, ReactNode, useContext } from "react";
import { Persona as PersonaProps } from "../data";
import Head from 'next/head';

const PersonaCtx = createContext<PersonaProps>({} as PersonaProps);
export const usePersona = (): PersonaProps => useContext(PersonaCtx);

export const Persona = ({ persona, children }: { persona: PersonaProps; children: ReactNode[] }) => (
  <>
  <Head>
    <title>{persona.name} - rNav</title>
  </Head>
    <div className="persona-info">
      <PersonaCtx.Provider value={persona}>{children}</PersonaCtx.Provider>
    </div>
  </>
);
