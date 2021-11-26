import { AnimatePresence, motion } from "framer-motion";
import { NextComponentType } from "next";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const Order: NextComponentType = () => {
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [pizza] = useContext(GlobalContext);

  setTimeout(() => {
    setShowTitle(false);
  }, 3000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ opacity: 0 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div variants={childVariants} key={topping}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
