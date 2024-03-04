import style from "@/styles/popup.module.scss";
import UsePopups from "@/hooks/usePopups";
import { Close } from "./Icons";
import { useState } from "react";
import Image from "next/image";
import Loading from "./Loading";

export default function Popup() {
  const { graphicProject, setGraphicProject } = UsePopups();
  // const [showContent, setShowContent] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  // const timeoutId = setTimeout(() => {
  //   setShowContent(true);
  // }, 400);

  // useEffect(() => {
  //   return clearTimeout(timeoutId);
  // }, []);

  function closeClickHandle() {
    setGraphicProject({ show: false, img: "" });
  }

  return (
    <div className={style["popup-container"]}>
      <div className={style["popup-content"]}>
        <div
          onClick={closeClickHandle}
          className={style.close}
        >
          <Close />
        </div>
        {!imgLoaded && <Loading />}
        {true && (
          <>
            <Image
              className={`${imgLoaded ? style["show"] : style["hide"]}`}
              onLoad={() => setImgLoaded(true)}
              src={graphicProject.img}
              alt="David Magdy Meseha"
              sizes="500px"
              loading="eager"
              fill
            />
          </>
        )}
      </div>
    </div>
  );
}
