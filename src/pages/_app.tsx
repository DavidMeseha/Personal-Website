import "../styles/globals.scss";
import { NavStateProvider } from "../context/NavStateProvider";
import ErrorBoundary from "../components/ErrorBoundry";
import { AppProps } from "next/app";
import { PopupsProvider } from "../context/PopupsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PopupsProvider>
        <NavStateProvider>
          <Component {...pageProps} />
        </NavStateProvider>
      </PopupsProvider>
    </ErrorBoundary>
  );
}
