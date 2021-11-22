import React, { createContext, ReactChildren, useContext } from "react";
import { getPersona, PersonaProps } from "../data";

const PersonaCtx = createContext<PersonaProps>({} as PersonaProps);
export const usePersona = (): PersonaProps => useContext(PersonaCtx);

export const Persona = ({ persona: name, children }: { persona: string; children: ReactChildren }) => {
  const persona = getPersona(name);
  return !persona ? null : (
    <div className="persona-info">
      <PersonaCtx.Provider value={persona}>{children}</PersonaCtx.Provider>
    </div>
  );
};
