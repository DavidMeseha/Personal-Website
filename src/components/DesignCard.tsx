import Image from "next/image";
import style from "../styles/GraphicCard.module.scss";
import { GraphicProject } from "@/constants/GraphicPortfolio";

export default function DesignCard(props: { project: GraphicProject }) {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={props.project.img}
          alt="1p"
          sizes="500px"
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
