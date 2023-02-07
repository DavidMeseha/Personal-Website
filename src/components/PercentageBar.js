import { useEffect, useState } from "react";

const PercentageBar = ({ max, value, label }) => {
    const [percent, setPercent] = useState(0)
    
    const blue = process.env.BLUE
    const yellow = process.env.YELLOW

    const valueStyle = {
        width: `${percent}%`,
        height: 15,
        background: blue,
        transition: 'all 0.6s cubic-bezier(0.52, 0.22, 0.29, 0.82) 0s'
    }

    const containerStyle = {
        height: 15,
        width: '100%',
        background: yellow,
        overflow: 'hidden'
    }

    useEffect(() => {
        setTimeout(() => {
            setPercent((value / max) * 100)
        }, 100);
    }, [])

    return (
        <div>
            <p style={{ fontWeight: '400' }}>{label}</p>
            <div title={`${percent}`} style={containerStyle}>
                <div style={valueStyle}></div>
            </div>
        </div >
    )
};
export default PercentageBar;