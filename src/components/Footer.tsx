import style from "../styles/Footer.module.scss";
import { Git, LinkedIn } from "./Icons";

const Footer = () => {
  return (
    <div className={style.container}>
      <a
        target="_blank"
        href="https://github.com/DavidMeseha/Personal-Website"
        className={style.icons}
      >
        <Git />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/david-meseha-657b4b230/"
        className={style.icons}
      >
        <LinkedIn />
      </a>
    </div>
  );
};
export default Footer;
