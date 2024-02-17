import { useEffect } from "react";
import { useRouter } from "next/router";
import UseNavState from "../hooks/useNavState";
import { Close, EndSlash, Logo, StartEnd } from "./Icons";
import style from "../styles/Menu.module.scss";
import { NavOptions } from "@/constants/navBarOptions";

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
          <li
            onClick={() => selectSection("intro")}
            className={
              selected === "intro" ? style.selectedListItem : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>Intro.</div>
            <div className={style.endIcon}>
              <EndSlash />
            </div>
          </li>

          <li
            onClick={() => selectSection("skills")}
            className={
              selected === "skills" ? style.selectedListItem : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>Skills</div>
            <div className={style.endIcon}>
              <EndSlash />
            </div>
          </li>

          <li
            onClick={() => selectSection("portfolio")}
            className={
              selected === "portfolio" ? style.selectedListItem : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>Portfolio</div>
            <div className={style.endIcon}>
              <EndSlash />
            </div>
          </li>

          <li
            onClick={() => selectSection("interested")}
            className={
              selected === "interested"
                ? style.selectedListItem
                : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>Interested ?</div>
            <div className={style.endIcon}>
              <EndSlash />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
