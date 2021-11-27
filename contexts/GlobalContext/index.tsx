import React, { createContext, ReactNode, useState } from "react";
import { Pizza, SetPizza, SetShowModal } from "../../types";

interface ContextValue {
  pizza: Pizza;
  setPizza: SetPizza;
  showModal: boolean;
  setShowModal: SetShowModal;
}

export const GlobalContext = createContext<ContextValue>({
  pizza: {
    base: "",
    toppings: []
  },
  setPizza: () => {},
  showModal: false,
  setShowModal: () => {}
}); // you can set a default value inside createContext if you want

interface ContextProviderProps {
  children: ReactNode;
  value: ContextValue;
}

export default function ContextProvider({
  children,
  value
}: ContextProviderProps) {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
