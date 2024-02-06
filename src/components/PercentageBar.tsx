import { useEffect, useState } from "react";
import style from "../styles/PercentPar.module.scss";

interface ProgressParProps {
  max: number;
  value: number;
}

const PercentageBar: React.FC<ProgressParProps> = ({ max, value }) => {
  const [percent, setPercent] = useState(0);

  const valueStyle = {
    width: `${percent}%`,
    height: 15,
    transitionDelay: "0.2",
    transition: "all 0.6s cubic-bezier(0.52, 0.22, 0.29, 0.82) 0s",
  };

  const containerStyle = {
    height: 10,
    width: "100%",
    overflow: "hidden",
  };

  useEffect(() => {
    setPercent((value / max) * 100);
  }, [value]);

  return (
    <div>
      <div
        className={style.container}
        title={`${percent}%`}
        style={containerStyle}
      >
        <div
          className={style.value}
          style={valueStyle}
        ></div>
      </div>
    </div>
  );
};
export default PercentageBar;
