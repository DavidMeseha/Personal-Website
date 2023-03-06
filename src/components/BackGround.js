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

    const drawBackground = (x, y) => {
        canvasCtx.clearRect(0, 0, size.width, size.height)

        if (awaitTransition) return

        var grd = canvasCtx.createRadialGradient(x, y, 20, x, y, 150);
        grd.addColorStop(0, theme === 'dark' ? '#fdfb39' : '#ff1567');
        grd.addColorStop(0.7, theme === 'dark' ? "#4e4d315f" : '#ff9fc0');
        grd.addColorStop(1, theme === 'dark' ? '#1b1b1b' : '#fff');

        canvasCtx.fillStyle = grd;
        canvasCtx.fillRect(x - 150, y - 150, 300, 300);


        let rowCount = 0
        for (let y = 0; y < size.height + 40; y += 36) {
            for (let x = rowCount % 2 === 0 ? 0 : -126 / 2; x < size.width + 40; x += 126) {
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
            drawBackground(350, 250)
        }, 300)

        const mouseMoveHandle = (e) => {
            let x = e.clientX
            let y = e.clientY

            drawBackground(x, y)
        }

        const touchHandle = (e) => {
            let x = e.targetTouches[0].clientX
            let y = e.targetTouches[0].clientY

            drawBackground(x, y)
        }

        window.addEventListener('mousemove', mouseMoveHandle)
        window.addEventListener('touchstart', touchHandle)
        window.addEventListener('touchmove', touchHandle)

        return (() => {
            window.removeEventListener('mousemove', mouseMoveHandle)
            window.removeEventListener('touchstart', touchHandle)
            window.removeEventListener('touchmove', touchHandle)
        })
    }, [canvasRef.current, theme])

    return (
        <>
            <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
        </>
    )
};
export default Background;