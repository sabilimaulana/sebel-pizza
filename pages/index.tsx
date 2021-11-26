import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: "0 0 8px rgb(255, 255, 255)",
    boxShadow: "0 0 8px rgb(255, 255, 255)"
  }
};

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className="home container">
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
