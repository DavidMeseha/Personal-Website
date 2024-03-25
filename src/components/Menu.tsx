import { useEffect } from "react";
import { useRouter } from "next/router";
import { Close, EndSlash, Logo, StartEnd } from "./Icons";
import style from "../styles/Menu.module.scss";
import navBarOptions from "@/constants/navBarOptions";

const Menu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const router = useRouter();

  const selected = router.pathname;

  useEffect(() => closeMenu(), [selected]);

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
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
              className={
                selected === option.to ? style.selectedListItem : style.listItem
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
                {option.name}
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
