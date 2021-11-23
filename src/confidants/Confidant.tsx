import React, { createContext, useContext } from "react";
import { getConfidant, Confidant as ConfidantData, StoryConfidant } from "../data";

type confidantProps = {
  children: React.ReactNode | React.ReactNode[];
  confidant: string;
};
type ConfidantType = ConfidantData | StoryConfidant;
const ConfidantContext = createContext<ConfidantType>({} as ConfidantType);
export const useConfidant = (): ConfidantType => useContext(ConfidantContext);

export const Confidant = ({ confidant: confidantName, children }: confidantProps) => {
  const confidant = getConfidant(confidantName);
  if (!confidant) return null;
  return (
    <div className="confidant">
      <ConfidantContext.Provider value={confidant}>{children}</ConfidantContext.Provider>
    </div>
  );
};
export default Confidant;
