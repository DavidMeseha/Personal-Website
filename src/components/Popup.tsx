import style from "@/styles/popup.module.scss";
import Image from "next/image";
import UsePopups from "@/hooks/usePopups";
import { Close } from "./Icons";
import { useEffect, useState } from "react";
// import { preloadImage } from "@/utils/PreloadImage";

export default function Popup() {
  const { graphicProject, setGraphicProject } = UsePopups();
  const [showContent, setShowContent] = useState(false);

  // preloadImage(graphicProject.img);

  const timeoutId = setTimeout(() => {
    setShowContent(true);
  }, 1000);

  useEffect(() => {
    return clearTimeout(timeoutId);
  }, []);

  function closeClickHandle() {
    setGraphicProject({ show: false, img: "" });
  }

  return (
    <div className={style["popup-container"]}>
      <div className={style["popup-content"]}>
        {showContent && (
          <>
            <div
              onClick={closeClickHandle}
              className={style.close}
            >
              <Close />
            </div>
            <Image
              src={graphicProject.img}
              alt="1p"
              sizes="500px"
              priority
              fill
            />
          </>
        )}
      </div>
    </div>
  );
}
