import { motion } from "framer-motion";
import { NextComponentType } from "next";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw"
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
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
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
  const { pizza } = useContext(GlobalContext);
  const { setShowModal } = useContext(GlobalContext);

  // useEffect lifecycle hook, array with only setShowModal as dep
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h2>Thank you for your order :)</h2>
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
