import { useEffect } from "react";
import { useRouter } from "next/router";
import UseNavState from "../hooks/useNavState";
import { Close, EndSlash, Logo, StartEnd } from "./Icons";
import style from "../styles/Menu.module.scss";

const Menu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const router = useRouter();
  const { selectSection } = UseNavState();

  const selected = router.query["section"];

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
        <div onClick={() => closeMenu()} className={style.closeIcon}>
          <Close />
        </div>
      </div>
      <div>
        <ul className={style.list}>
          <li
            onClick={() => selectSection("Intro")}
            className={
              selected === "Intro." ? style.selectedListItem : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>intro.</div>
            <div className={style.endIcon}>
              <EndSlash />
            </div>
          </li>

          <li
            onClick={() => selectSection("Skills")}
            className={
              selected === "Skills" ? style.selectedListItem : style.listItem
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
            onClick={() => selectSection("Portfolio")}
            className={
              selected === "Portfolio" ? style.selectedListItem : style.listItem
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
              selected === "interested?"
                ? style.selectedListItem
                : style.listItem
            }
          >
            <div className={style.startIcon}>
              <StartEnd />
            </div>
            <div style={{ padding: "0 15px", height: 28 }}>interested ?</div>
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
