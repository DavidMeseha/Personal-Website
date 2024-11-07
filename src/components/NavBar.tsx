import style from "../styles/NavBar.module.scss";
import { StartEnd, EndSlash } from "../components/Icons";
import { useState } from "react";
import Menu from "./Menu";
import { useRouter } from "next/router";
import navBarOptions from "@/constants/navBarOptions";
import { Theme } from "@/constants/themes";
import Link from "next/link";

const NavBar: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}> = ({ setTheme, theme }) => {
  const router = useRouter();
  const selected = router.pathname;
  const [menuState, setMenuState] = useState(false);

  function toggleTheme() {
    const changeTheme: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", changeTheme);
    setTheme(changeTheme);
  }

  return (
    <>
      <div
        className={`${style.mobileMenu} ${menuState ? style.open : style.close}`}
        style={{ zIndex: 99 }}
      >
        <Menu closeMenu={() => setMenuState(false)} />
      </div>

      <div className={style.container}>
        <div className={style.startIcon}>
          <StartEnd />
        </div>

        <div
          onClick={() => setMenuState(true)}
          className={`${menuState ? style.mobileSelectedActive : style.mobileSelected}`}
        >
          {
            navBarOptions.find((option) => {
              return option.to === selected;
            })?.name
          }
        </div>

        <div className={style.listContainer}>
          <ul className={style.navList}>
            {navBarOptions.map((option, index) => {
              return (
                <li
                  key={option.name + index}
                  className={
                    selected === option.to ? style.selectedItem : style.item
                  }
                >
                  <Link href={option.to}>
                    <div className={style.navItem}>{option.name}</div>
                    <div className={style.underline}></div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.endIcon}>
          <EndSlash />
        </div>
      </div>

      <div className={style.options}>
        <div className={style.themeContainer}>
          {theme === "dark" ? "Dark Mood" : "Light Mood"}
          <label
            htmlFor="theme"
            className={style.toggle}
          >
            <span style={{ opacity: 0 }}>
              {theme === "dark" ? "Dark Mood" : "Light Mood"}
            </span>
            <input
              onChange={toggleTheme}
              type="checkbox"
              id="theme"
            />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>
    </>
  );
};
export default NavBar;
