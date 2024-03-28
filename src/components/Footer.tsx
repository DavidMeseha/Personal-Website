import Link from "next/link";
import style from "../styles/Footer.module.scss";
import { Git, LinkedIn } from "./Icons";

const Footer = () => {
  return (
    <div className={style.container}>
      <Link
        aria-label="Visit My Github account"
        target="_blank"
        href="https://github.com/DavidMeseha/Personal-Website"
        className={style.icons}
      >
        <Git />
      </Link>
      <Link
        aria-label="Visit My Linkedin account"
        target="_blank"
        href="https://www.linkedin.com/in/david-meseha-657b4b230/"
        className={style.icons}
      >
        <LinkedIn />
      </Link>
    </div>
  );
};
export default Footer;
