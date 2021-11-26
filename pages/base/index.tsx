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
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="next">
          <Link href="/toppings" passHref>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgb(255, 255, 255)",
                boxShadow: "0 0 8px rgb(255, 255, 255)"
              }}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
