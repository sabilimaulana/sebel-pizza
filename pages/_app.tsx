import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import ContextProvider from "../contexts/globalContext";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ContextProvider>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ContextProvider>
  );
}

export default MyApp;
