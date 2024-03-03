import "../styles/globals.scss";
import { NavStateProvider } from "../context/NavStateProvider";
import ErrorBoundary from "../components/ErrorBoundry";
import { AppProps } from "next/app";

//TODO: Change to CSS instead of SCSS
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <NavStateProvider>
        <Component {...pageProps} />
      </NavStateProvider>
    </ErrorBoundary>
  );
}
