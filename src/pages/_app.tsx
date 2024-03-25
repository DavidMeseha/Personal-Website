import "../styles/globals.scss";
import ErrorBoundary from "../components/ErrorBoundry";
import { AppProps } from "next/app";
import { Dispatch, useEffect, useState } from "react";
import { Theme } from "@/constants/themes";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useRouter } from "next/router";

//TODO: Change to CSS instead of SCSS
//TODO: Use Pure React(Vite) (Remove Next.js)
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("theme"))
      return localStorage.setItem("theme", "dark");
    setTheme(localStorage.getItem("theme") as Theme);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>{`David | ${router.pathname.replace("/", "")}`}</title>{" "}
      </Head>
      {theme && (
        <div className={theme}>
          <NavBar
            setTheme={setTheme as Dispatch<React.SetStateAction<Theme>>}
            theme={theme}
          />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </div>
      )}
    </>
  );
}
