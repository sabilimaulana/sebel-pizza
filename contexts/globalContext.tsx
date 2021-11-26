import React, { createContext, ReactNode, useState } from "react";
import { Pizza, SetPizza } from "../types";

export const GlobalContext = createContext<[Pizza, SetPizza]>([
  {
    base: "",
    toppings: []
  },
  () => {}
]); // you can set a default value inside createContext if you want

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [pizza, setPizza] = useState<Pizza>({
    base: "",
    toppings: []
  });
  return (
    <GlobalContext.Provider value={[pizza, setPizza]}>
      {children}
    </GlobalContext.Provider>
  );
}
