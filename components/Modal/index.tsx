import { motion, Variants } from "framer-motion";
import { NextComponentType } from "next";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modalVariants: Variants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    boxShadow: "0 0 8px rgb(255, 255, 255)",
    transition: { yoyo: Infinity, duration: 0.3 }
  }
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
          exit="hidden">
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link href="/" passHref>
              <motion.button variants={buttonVariants} whileHover="hover">
                Start again
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
