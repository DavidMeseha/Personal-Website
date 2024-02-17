import { useEffect } from "react";
import { useRouter } from "next/router";
import UseNavState from "../hooks/useNavState";
import { Close, EndSlash, Logo, StartEnd } from "./Icons";
import style from "../styles/Menu.module.scss";
import navBarOptions, { NavOptions } from "@/constants/navBarOptions";

const Menu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const router = useRouter();
  const { selectSection } = UseNavState();

  const selected: NavOptions =
    typeof router.query["section"] == "string"
      ? router.query["section"]
      : "intro";

  useEffect(() => closeMenu(), [selected]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        fontWeight: 600,
        fontSize: "1.3rem",
      }}
    >
      <div style={{ width: "100%" }}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div
          onClick={() => closeMenu()}
          className={style.closeIcon}
        >
          <Close />
        </div>
      </div>
      <div>
        <ul className={style.list}>
          {navBarOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => selectSection(option)}
              className={
                selected === option ? style.selectedListItem : style.listItem
              }
            >
              <div className={style.startIcon}>
                <StartEnd />
              </div>
              <div
                style={{
                  padding: "0 15px",
                  height: 28,
                  textTransform: "capitalize",
                }}
              >
                {option}
              </div>
              <div className={style.endIcon}>
                <EndSlash />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
