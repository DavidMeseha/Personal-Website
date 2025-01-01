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
import { useRouter } from "next/router";

//TODO: Change to CSS instead of SCSS
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [highlight, setHighlight] = useState<{
    x: string | number;
    y: string | number;
  }>({ x: "50", y: "50" });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setHighlight({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
      return localStorage.setItem("theme", "dark");
    }
    setTheme(localStorage.getItem("theme") as Theme);

    return () => window.removeEventListener("mousemove", mouseMove);
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
          {router.pathname === "/" ? (
            <div
              className="radial-grad-overlay"
              style={{
                background:
                  theme === "dark"
                    ? `radial-gradient(circle at ${highlight.x}px ${highlight.y}px,rgba(236,236,236,0) 20%, rgba(0, 0, 0, 0.7) 120%)`
                    : `radial-gradient(circle at ${highlight.x}px ${highlight.y}px,rgba(236,236,236,0) 20%, rgba(255, 255, 255, 0.83) 100%)`,
              }}
            ></div>
          ) : null}
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
