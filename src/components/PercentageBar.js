import { useEffect, useState } from "react";

const PercentageBar = ({ max, value }) => {
    const [percent, setPercent] = useState(0)

    const valueStyle = {
        width: `${percent}%`,
        height: 15,
        background: '#3959fd',
        transitionDelay: '0.2',
        transition: 'all 0.6s cubic-bezier(0.52, 0.22, 0.29, 0.82) 0s'
    }

    const containerStyle = {
        height: 10,
        width: '100%',
        background: '#fdfb39',
        overflow: 'hidden',
    }

    useEffect(() => {
        setPercent((value / max) * 100)
    }, [value])

    return (
        <div>
            <div title={`${percent}%`} style={containerStyle}>
                <div style={valueStyle}></div>
            </div>
        </div >
    )
};
export default PercentageBar;