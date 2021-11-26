import { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Base: NextPage = () => {
  const [pizza, setPizza] = useContext(GlobalContext);

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="next">
          <Link href="/toppings" passHref>
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Base;
