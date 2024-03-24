import style from "../styles/GraphicCard.module.scss";

export default function DesignCard(props: { projectURL: string }) {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <iframe
          className={style.img}
          src={props.projectURL}
          height="316"
          width="404"
          allow="clipboard-write"
        ></iframe>
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
