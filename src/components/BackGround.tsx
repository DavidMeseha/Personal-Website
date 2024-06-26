import { useEffect, useRef, useState } from "react";

const Background: React.FC<{ theme: string }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: "500px", height: "500px" });

  let width: number, height: number;
  let awaitTransition = false;
  let x = 350,
    y = 250;
  let canvasCtx: CanvasRenderingContext2D | null;

  const drawHexagon = (
    hx: number,
    hy: number,
    canvasCtx: CanvasRenderingContext2D
  ) => {
    let side = 0;
    const size = 40;

    canvasCtx.beginPath();
    canvasCtx.moveTo(hx + size * Math.cos(0), hy + size * Math.sin(0));

    for (side; side <= 6; side++) {
      canvasCtx.lineTo(
        hx + size * Math.cos((side * 2 * Math.PI) / 6),
        hy + size * Math.sin((side * 2 * Math.PI) / 6)
      );
    }

    canvasCtx.fillStyle = theme === "dark" ? "#1b1b1b" : "#fff";
    canvasCtx.fill();
  };

  const drawHexagonPattern = () => {
    if (!canvasCtx) return;
    let rowCount = 0;
    for (let y = 0; y < height + 40; y += 36) {
      for (
        let x = rowCount % 2 === 0 ? 0 : -126 / 2;
        x < width + 40;
        x += 126
      ) {
        drawHexagon(x, y, canvasCtx);
      }

      rowCount++;
    }
  };

  const drawBackground = () => {
    if (!canvasCtx) return;

    canvasCtx.clearRect(0, 0, width, height);
    if (awaitTransition) return;

    const grd = canvasCtx.createRadialGradient(x, y, 20, x, y, 150);
    grd.addColorStop(0, theme === "dark" ? "#fdfb39" : "#ff1567");
    grd.addColorStop(0.7, theme === "dark" ? "#4e4d315f" : "#ff9fc0");
    grd.addColorStop(1, theme === "dark" ? "#4e4d3100" : "#ff156700");

    canvasCtx.fillStyle = grd;
    canvasCtx.fillRect(x - 150, y - 150, 300, 300);

    drawHexagonPattern();
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    awaitTransition = true;

    width = window.innerWidth;
    height = window.innerHeight;
    canvasCtx = canvasRef.current.getContext("2d");

    setSize({ width: width.toString(), height: height.toString() });

    canvasCtx && canvasCtx.clearRect(0, 0, width, height);

    setTimeout(() => {
      awaitTransition = false;
      drawBackground();
    }, 300);

    const mouseMoveHandle = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      drawBackground();
    };

    const touchHandle = (e: TouchEvent) => {
      x = e.targetTouches[0].clientX;
      y = e.targetTouches[0].clientY;

      drawBackground();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      setSize({ width: width.toString(), height: height.toString() });
      drawBackground();
    };

    window.addEventListener("mousemove", mouseMoveHandle);
    window.addEventListener("touchstart", touchHandle);
    window.addEventListener("touchmove", touchHandle);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
      window.removeEventListener("touchstart", touchHandle);
      window.removeEventListener("resize", resize);
      window.removeEventListener("touchmove", touchHandle);
    };
  }, [canvasRef.current, theme]);

  return (
    <canvas
      style={{ width: "100vw", height: "100vh" }}
      ref={canvasRef}
      width={size.width}
      height={size.height}
    ></canvas>
  );
};

export default Background;
