import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base" passHref>
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;
