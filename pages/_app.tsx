import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import ContextProvider from "../contexts/globalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Header />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
