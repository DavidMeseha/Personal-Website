import Intro from "../components/Intro";
import Footer from "../components/Footer";
import PageAnimationLayout from "../layouts/PageAnimationLayout";

export default function Home() {
  return (
    <>
      <div className="section">
        <PageAnimationLayout>
          <Intro />
        </PageAnimationLayout>
      </div>
      <Footer />
    </>
  );
}
