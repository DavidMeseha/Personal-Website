"client";

import "../styles/globals.scss";
import ErrorBoundary from "../components/ErrorBoundry";
import { AppProps } from "next/app";
import { Dispatch, useEffect, useState } from "react";
import { Theme } from "@/constants/themes";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Insights from "@/components/Insights";

//TODO: Change to CSS instead of SCSS
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const router = useRouter();

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
        <link
          rel="icon"
          href="/logo.svg"
        />
        <title>{`David Magdy | ${router.pathname.replace("/", "") || "Intro"}`}</title>
        <meta
          property="og:image"
          content="https://vercel.com/davidmeseha/personal-website/Capture.PNG"
        ></meta>
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
        </div>
      )}
    </>
  );
}
