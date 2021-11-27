import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import ContextProvider from "../contexts/GlobalContext";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import { useState } from "react";
import { Pizza } from "../types";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [pizza, setPizza] = useState<Pizza>({
    base: "",
    toppings: []
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <ContextProvider value={{ pizza, setPizza, showModal, setShowModal }}>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}>
        <Modal />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ContextProvider>
  );
}

export default MyApp;
