import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const Toppings: NextPage = () => {
  const toppings: string[] = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes"
  ];

  const [pizza, setPizza] = useContext(GlobalContext);

  const addTopping = (topping: string) => {
    let newToppings: string[] = [];
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <motion.div
      className="toppings container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link href="/order" passHref>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 8px rgb(255, 255, 255)",
            boxShadow: "0 0 8px rgb(255, 255, 255)"
          }}>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
