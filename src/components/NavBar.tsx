import style from "../styles/NavBar.module.scss";
import { StartEnd, EndSlash } from "../components/Icons";
import { useState } from "react";
import Menu from "./Menu";
import useNavState from "../hooks/useNavState";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}> = ({ setTheme, theme }) => {
  const router = useRouter();
  const selected = router.query["section"];

  const { selectSection, nextSection, previousSection } = useNavState();
  const [menuState, setMenuState] = useState(false);

  const toggleTheme = () => {
    setTheme((prevstate) => {
      if (prevstate === "dark") return "light";
      else return "dark";
    });
  };

  return (
    <>
      <div
        className={`${style.mobileMenu} ${menuState ? style.open : style.close}`}
        style={{ zIndex: 10 }}
      >
        <Menu closeMenu={() => setMenuState(false)} />
      </div>

      <div className={style.container}>
        <div onClick={() => previousSection()} className={style.startIcon}>
          <StartEnd />
        </div>

        <div
          onClick={() => setMenuState(true)}
          className={`${menuState ? style.mobileSelectedActive : style.mobileSelected}`}
        >
          {selected}
        </div>

        <div className={style.listContainer}>
          <ul className={style.navList}>
            <li
              onClick={() => selectSection("Intro")}
              className={selected === "Intro" ? style.selectedItem : style.item}
            >
              <div className={style.navItem}>Intro.</div>
              <div className={style.underline}></div>
            </li>
            <li
              onClick={() => selectSection("Skills")}
              className={
                selected === "Skills" ? style.selectedItem : style.item
              }
            >
              <div className={style.navItem}>Skills</div>
              <div className={style.underline}></div>
            </li>
            <li
              onClick={() => selectSection("Portfolio")}
              className={
                selected === "Portfolio" ? style.selectedItem : style.item
              }
            >
              <div className={style.navItem}>Portfolio</div>
              <div className={style.underline}></div>
            </li>
            <li
              onClick={() => selectSection("interested")}
              className={
                selected === "interested" ? style.selectedItem : style.item
              }
            >
              <div className={style.navItem}>Intersted ?</div>
              <div className={style.underline}></div>
            </li>
          </ul>
        </div>
        <div onClick={() => nextSection()} className={style.endIcon}>
          <EndSlash />
        </div>
      </div>

      <div className={style.options}>
        <div className={style.source}>
          <Link
            href="https://github.com/DavidMeseha/Personal-Website"
            target="_blank"
          >
            source
          </Link>
        </div>
        <div className={style.themeContainer}>
          {theme === "dark" ? "Dark Mood" : "Light Mood"}
          <label className={style.toggle}>
            <input onChange={toggleTheme} type="checkbox" />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>
    </>
  );
};
export default NavBar;
