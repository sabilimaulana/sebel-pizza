import { Dispatch, SetStateAction } from "react";

export interface Pizza {
  base: string;
  toppings: string[];
}
export type SetPizza = Dispatch<SetStateAction<Pizza>>;

export type SetShowModal = Dispatch<SetStateAction<boolean>>;
