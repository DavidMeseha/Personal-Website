import { Theme } from "@/constants/themes";
import style from "../styles/Intro.module.scss";
import Background from "./BackGround";

const Intro = () => {
  return (
    <div className={style.container}>
      <div style={{ position: "absolute", zIndex: -2 }}>
        <Background theme={localStorage.getItem("theme") as Theme} />
      </div>
      <div style={{ width: "80%" }}>
        <div className={style.hello}>
          <h1>HELLO,</h1>
        </div>
        <div className={style.me}>
          <h2>
            <span>I'M</span>
            <span className={style.value}>DAVID MAGDY</span>
          </h2>
        </div>
        <div>
          <p className={style.description}>
            <span>Front-end Developer </span> dedicated to building robust and
            intuitive web systems. With expertise in HTML, CSS, and JavaScript,
            creating responsive user interfaces that enhance user experience.
            <br />
            continuously seek to improve my skills to deliver high-quality,
            efficient solutions that meet complex project requirements.
          </p>
        </div>
      </div>
      {/*<div style={{ position: 'absolute', width: '100vw', height: 200, backgroundColor:'#ffffff'}}></div>*/}
    </div>
  );
};
export default Intro;
