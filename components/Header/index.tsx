import { motion } from "framer-motion";
import { NextComponentType } from "next";
import Link from "next/link";
import { NextRouter, useRouter } from "next/dist/client/router";

const Header: NextComponentType = () => {
  const router: NextRouter = useRouter();

  return (
    <header>
      <Link href="/" passHref>
        <div className="logo">
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100">
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </div>
      </Link>

      <div className="title">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
          Sebel Pizza
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;
