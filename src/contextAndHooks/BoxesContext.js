import { createContext, useContext } from "react";

export const BoxesContext = createContext();

// Custom hook
export const useBoxesContext = () => {
  const context = useContext(BoxesContext);
  if (!context) {
    throw new Error("No provider");
  }
  return context;
};
