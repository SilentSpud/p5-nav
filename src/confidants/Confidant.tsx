import React, { FC, createContext, useContext } from "react";
import { getConfidant, Confidant as ConfidantType } from "../data";

const ConfidantContext = createContext<ConfidantType>({} as ConfidantType);
export const useConfidant = (): ConfidantType => useContext(ConfidantContext);

export const Confidant: FC<{ confidant: string }> = ({ confidant: confidantName, children }) => {
  const confidant = getConfidant(confidantName);
  if (!confidant) return null;
  if ("story" in confidant) return null;
  return (
    <div className="confidant">
      <ConfidantContext.Provider value={confidant as ConfidantType}>{children}</ConfidantContext.Provider>
    </div>
  );
};
export default Confidant;
