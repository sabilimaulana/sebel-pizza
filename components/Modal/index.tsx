import { motion } from "framer-motion";
import { NextComponentType } from "next";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const Modal: NextComponentType = () => {
  const { showModal, setShowModal } = useContext(GlobalContext);

  return (
    <>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"></motion.div>
      )}
    </>
  );
};

export default Modal;
