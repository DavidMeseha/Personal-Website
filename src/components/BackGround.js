import { useEffect, useRef, useState } from "react";

const Background = ({ theme }) => {
    const canvasRef = useRef()
    const [size, setSize] = useState({ width: '500px', height: '500px' })
    let awaitTransition = false

    let canvasCtx;
    let gridR = 10

    const drawHexagon = (x, y, canvasCtx) => {
        let side = 0,
            size = 40;

        canvasCtx.beginPath();
        canvasCtx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

        for (side; side <= 6; side++) {
            canvasCtx.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }

        canvasCtx.fillStyle = theme === 'dark' ? "#1b1b1b" : '#fff';
        canvasCtx.fill();

    }

    const drawBackground = (e) => {
        canvasCtx.clearRect(0, 0, size.width, size.height)

        if (awaitTransition) return

        var grd = canvasCtx.createRadialGradient(e?.clientX || 150, e?.clientY || 450, 20, e?.clientX || 150, e?.clientY || 450, 150);
        grd.addColorStop(0, theme === 'dark' ? '#fdfb39' : '#ff1567');
        grd.addColorStop(0.7, theme === 'dark' ? "#4e4d315f" : '#ff9fc0');
        grd.addColorStop(1, theme === 'dark' ? '#1b1b1b' : '#fff');

        canvasCtx.fillStyle = grd;
        canvasCtx.fillRect((e?.clientX || 150) - 150, (e?.clientY || 450) - 150, 300, 300);


        let rowCount = 0
        for (let y = 0; y < size.height + 42; y += 36) {
            for (let x = rowCount % 2 === 0 ? 0 : -126 / 2; x < size.width; x += 126) {
                drawHexagon(x, y, canvasCtx)
            }

            rowCount++;
        }
    }

    useEffect(() => {
        if (!canvasRef) return
        awaitTransition = true

        canvasCtx = canvasRef.current.getContext('2d')
        setSize({ width: window.innerWidth, height: window.innerHeight })

        canvasCtx.clearRect(0, 0, size.width, size.height)

        setTimeout(() => {
            awaitTransition = false
            drawBackground()
        }, 300)

        window.addEventListener('mousemove', drawBackground)
        return (() => window.removeEventListener('mousemove', drawBackground))
    }, [canvasRef.current, theme])

    return (
        <>
            <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
        </>
    )
};
export default Background;