import style from "../styles/NavBar.module.scss";
import { StartEnd, EndSlash } from "../components/Icons";
import { useState } from "react";
import Menu from "./Menu";
import useNavState from "../hooks/useNavState";
import Link from "next/link";
import { useRouter } from "next/router";
import navBarOptions, { NavOptions } from "@/constants/navBarOptions";
import { Theme } from "@/constants/themes";

const NavBar: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}> = ({ setTheme, theme }) => {
  const router = useRouter();
  const selected: NavOptions =
    typeof router.query["section"] == "string" ? router.query["section"] : "intro";

  const { selectSection, nextSection, previousSection } = useNavState();
  const [menuState, setMenuState] = useState(false);

  function toggleTheme() {
    setTheme((prevstate) => (prevstate === "dark" ? "light" : "dark"));
  }

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
            {navBarOptions.map((option, index) => {
              return (
                <li
                  key={option + index}
                  onClick={() => selectSection(option)}
                  className={
                    selected === option ? style.selectedItem : style.item
                  }
                >
                  <div className={style.navItem}>{option}</div>
                  <div className={style.underline}></div>
                </li>
              );
            })}
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
