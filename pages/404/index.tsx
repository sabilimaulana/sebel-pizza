import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    boxShadow: "0 0 8px rgb(255, 255, 255)",
    transition: { yoyo: Infinity, duration: 0.3 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
};

const NotFound: NextPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="not-found">
      <h1>404 | Page Not Found</h1>
      <Link href="/" passHref>
        <motion.button variants={buttonVariants} whileHover="hover">
          Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default NotFound;
