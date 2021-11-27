import React, { createContext, ReactNode, useState } from "react";
import { Pizza, SetPizza, SetShowModal } from "../types";

export const GlobalContext = createContext<{
  pizza: Pizza;
  setPizza: SetPizza;
  showModal: boolean;
  setShowModal: SetShowModal;
}>({
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
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [pizza, setPizza] = useState<Pizza>({
    base: "",
    toppings: []
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ pizza, setPizza, showModal, setShowModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
