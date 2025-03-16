import style from "../styles/Interested.module.scss";
import { useState } from "react";
import { Copy } from "../components/Icons";
import PageAnimationLayout from "@/layouts/PageAnimationLayout";

export default function Interested() {
  const [headerDistance, setHeaderDistance] = useState({ x: 0, y: 0 });
  const [mouseStart, setMouseStart] = useState<{ x: number; y: number }>();

  const [copyState, setCopyState] = useState(false);

  const mouseMoveHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseStart) {
      setMouseStart({ x: event.clientX, y: event.clientY });
      return;
    }

    setHeaderDistance({
      x: (event.clientX - mouseStart.x) * 0.012,
      y: (event.clientY - mouseStart.y) * 0.012,
    });
  };

  const copyHandle = () => {
    if (copyState) return;

    navigator.clipboard.writeText("davidmmyh@gmail.com").then(() => {
      setCopyState(true);
    });
  };
  return (
    //     -Creating MVPs.
    // -Refactoring and updating old code.
    // -JavaScript developer.
    // -Create full responsive and pixel perfect web apps with CSS or Bootstap or TailwindCSS.
    // -Using Next.js with React to increase performance and optimize search engines with SSR options.
    // -Implementing complex features and React.js Components.
    // -Using Version control tool (git).
    <div className="section">
      <PageAnimationLayout>
        <div onMouseMove={mouseMoveHandle}>
          <div className={style.container}>
            <div className={style.wrapper}>
              <div className={style.heading}>
                <h1 className={style.shadowHeader}>Let's Work Together !</h1>
                <h1
                  className={style.floatingHeader}
                  style={{
                    transform: `translate(${headerDistance.x}px, ${headerDistance.y}px)`,
                  }}
                >
                  Let's Work Together<span className={style.beating}> !</span>
                </h1>
              </div>
              <div className={style.details}>
                <h2>Here is how I can help.</h2>
                <ul className={style.list}>
                  <li>Creating Fullstack MVP.</li>
                  <li>
                    Create custom or complex features and pages for react.js and
                    next.js apps.
                  </li>
                  <li>
                    Implementing UI/UX dsigns with high quality, performance and
                    screen-resposive.
                  </li>
                  <li>Refactoring and updating old code.</li>
                  <li>
                    Using Next.js with React to increase performance and
                    optimize search engines with SSR options.
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ fontSize: "0.8rem" }}>
                  Ready to discuss your project
                </p>
                <button
                  onClick={copyHandle}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      setCopyState(false);
                    }, 350)
                  }
                  className={style.button}
                >
                  <div>davidmmyh@gmail.com</div>
                  <div className={style.copy}>
                    {copyState ? "copied" : "copy"}
                    <div>
                      <Copy />
                    </div>
                  </div>
                </button>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  onMouseLeave={() =>
                    setTimeout(() => {
                      setCopyState(false);
                    }, 350)
                  }
                  className={style.button}
                >
                  <span>CV</span>
                  <div className={style.copy}>Download</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageAnimationLayout>
    </div>
  );
}
