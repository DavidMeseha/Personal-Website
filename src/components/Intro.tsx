import { Theme } from "@/constants/themes";
import style from "../styles/Intro.module.scss";
import Background from "./BackGround";

const Intro = () => {
  return (
    <div className={style.container}>
      <div style={{ position: "absolute", height: "100dvh", zIndex: -2 }}>
        <Background theme={localStorage.getItem("theme") as Theme} />
      </div>
      <div style={{ width: "80%" }}>
        <div className={style.hello}>
          <h1>HELLO,</h1>
        </div>
        <div className={style.me}>
          <h2>I'M</h2>
          <h2 className={style.value}>DAVID MAGDY</h2>
        </div>
        <div>
          <p className={style.description}>
            <span>Front-end Developer </span> using React.js and Next.js who
            enjoys systems development and Problem-solving.
          </p>
        </div>
      </div>
      {/*<div style={{ position: 'absolute', width: '100vw', height: 200, backgroundColor:'#ffffff'}}></div>*/}
    </div>
  );
};
export default Intro;
