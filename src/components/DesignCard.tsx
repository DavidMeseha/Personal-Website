import { useState } from "react";
import style from "../styles/GraphicCard.module.scss";
import Loading from "./Loading";

export default function DesignCard(props: { projectURL: string }) {
  const [loaded, setLoaded] = useState<boolean>(false);

  function onLoadHandle() {
    setLoaded(true);
  }

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <div
          className={style.img}
          style={{ width: "100%", height: 235 }}
        >
          {!loaded && <Loading />}
          <iframe
            style={{ opacity: loaded ? 1 : 0 }}
            src={props.projectURL}
            height="250"
            width="100%"
            allow="clipboard-write"
            onLoad={onLoadHandle}
            title="David Magdy Project"
          ></iframe>
        </div>
        <div className={style.vHover}>
          <div></div>
        </div>
        <div className={style.hHover}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
