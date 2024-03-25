import Head from "next/head";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"David Magdy | Intro"}</title>
        <meta
          name="description"
          content="The Front-End developer David Magdy personal profile and protofolio"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/logo.svg"
        />
      </Head>
      <>
        <main style={{ height: "100dvh", position: "relative" }}>
          <div className="section">
            <Intro theme={"dark"} />
          </div>
        </main>
        <Footer />
      </>
    </>
  );
}
