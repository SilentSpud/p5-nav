import React, { createContext, ReactNode, useContext } from "react";
import { Persona as PersonaProps } from "../data";

const PersonaCtx = createContext<PersonaProps>({} as PersonaProps);
export const usePersona = (): PersonaProps => useContext(PersonaCtx);

export const Persona = ({ persona, children }: { persona: PersonaProps; children: ReactNode[] }) => (
  <div className="persona-info">
    <PersonaCtx.Provider value={persona}>{children}</PersonaCtx.Provider>
  </div>
);
