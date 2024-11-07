import "../styles/globals.scss";
import ErrorBoundary from "../components/ErrorBoundry";
import { AppProps } from "next/app";
import { Dispatch, useEffect, useState } from "react";
import { Theme } from "@/constants/themes";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

//TODO: Change to CSS instead of SCSS
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
      return localStorage.setItem("theme", "dark");
    }
    setTheme(localStorage.getItem("theme") as Theme);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Front-End developer David Magdy personal profile and portfolio"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          key="keywords"
          name="keywords"
          content="html, frontend, css, web, development, react.js, next.js, David Magdy"
        />
        <link
          rel="icon"
          href="/logo.svg"
        />
        <title>David Magdy</title>
      </Head>
      {theme && (
        <div className={theme}>
          <NavBar
            setTheme={setTheme as Dispatch<React.SetStateAction<Theme>>}
            theme={theme}
          />
          <AnimatePresence mode="popLayout">
            <ErrorBoundary>
              <Component {...pageProps} />
              <Insights />
            </ErrorBoundary>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </>
  );
}
