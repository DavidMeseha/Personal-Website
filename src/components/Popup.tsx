import style from "@/styles/popup.module.scss";
import UsePopups from "@/hooks/usePopups";
import { Close } from "./Icons";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Loading from "./Loading";

export default function Popup() {
  const { graphicProject, setGraphicProject } = UsePopups();
  const [showContent, setShowContent] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [graphicProject.show]);

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
        {(!imgLoaded || !showContent) && <Loading />}
        {showContent && (
          <>
            <Image
              className={`${imgLoaded ? style["show"] : style["hide"]}`}
              onLoad={() => setImgLoaded(true)}
              src={graphicProject.img}
              alt="David Magdy Meseha"
              sizes="(max-width: 1400px) 100vw, 1400px"
              loading="eager"
              fill
            />
          </>
        )}
      </div>
    </div>
  );
}
