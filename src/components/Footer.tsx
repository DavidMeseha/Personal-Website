import Link from "next/link";
import style from "../styles/Footer.module.scss";
import { Git, LinkedIn, Upwork } from "./Icons";

const Footer = () => {
  return (
    <div className={style.container}>
      <Link
        aria-label="Visit My Github account"
        target="_blank"
        href="https://github.com/DavidMeseha"
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
      <Link
        aria-label="Visit My Upwork Account"
        target="_blank"
        href="https://www.upwork.com/freelancers/davidmeseha"
        className={style.icons}
      >
        <Upwork />
      </Link>
    </div>
  );
};
export default Footer;
