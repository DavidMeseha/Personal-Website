import Intro from "../components/Intro";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main style={{ height: "100dvh", position: "relative" }}>
        <div className="section">
          <Intro />
        </div>
      </main>
      <Footer />
    </>
  );
}
