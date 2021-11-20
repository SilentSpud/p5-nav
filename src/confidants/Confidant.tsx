import React, { createContext, useContext } from "react";
import { getConfidant, Confidant as ConfidantType } from "../data";


type confidantProps = {
  children: React.ReactNode | React.ReactNode[];
  confidant: string;
};

const ConfidantContext = createContext<ConfidantType>({} as ConfidantType);
export const useConfidant = (): ConfidantType => useContext(ConfidantContext);


export const Confidant = ({ confidant: confidantName, children }: confidantProps ) => {
  const confidant = getConfidant(confidantName);
  if (!confidant) return null;
  return <ConfidantContext.Provider value={confidant}>{children}</ConfidantContext.Provider>;
};
export default Confidant;
