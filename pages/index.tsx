import { motion } from "framer-motion";
import type { NextPage } from "next";
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
  visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
};

const Home: NextPage = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base" passHref>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          animate="visible">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
