import Image from "next/image";
import style from "../styles/GraphicCard.module.scss";
import { GraphicProject } from "@/constants/GraphicPortfolio";
import UsePopups from "@/hooks/usePopups";

export default function DesignCard(props: { project: GraphicProject }) {
  const { setGraphicProject } = UsePopups();

  function cardClickHandle() {
    setGraphicProject({ show: true, img: props.project.contentImg });
  }

  return (
    <div
      onClick={cardClickHandle}
      className={style.container}
    >
      <div className={style.imageContainer}>
        <Image
          src={props.project.img}
          alt="1p"
          sizes="1000px"
          loading="eager"
          priority
          fill
        />
        <div className={style.vHover}>
          <div></div>
        </div>
        <div className={style.hHover}>
          <div></div>
        </div>
      </div>
      <div className={style.info}>
        <h4>{props.project.title}</h4>
      </div>
    </div>
  );
}
