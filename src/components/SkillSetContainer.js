import { useEffect, useState } from "react";
import PercentageBar from "./PercentageBar";
import style from '@/styles/SkillSetContainer.module.scss';
import DecodeText from "./AnimateText";

const SkillSetContainer = ({ skillSet, title }) => {
    const [skillSetAvg, setSkillSetAvg] = useState()

    useEffect(() => {
        if (!skillSet) return

        const getAvg = () => {
            let total = 0
            for (var it = 0; it < skillSet.length; it++) {
                total += skillSet[it].level
            }

            return (total / skillSet.length)
        }

        setSkillSetAvg(getAvg())
    }, [skillSet])

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.title}><DecodeText originalText={title} interval={40} itrations={5} /></div>
                <div style={{ width: '100%' }}><PercentageBar max={100} value={skillSetAvg} /></div>
            </div>
            <div className={style.body}>
                {skillSet?.map((skill, i) => {
                    return (
                        <div key={i} className={style.skill} style={{ backgroundColor: i % 2 === 0 ? 'transparent' : 'rgb(57 90 253 / 15%)' }}>
                            <div className={style.label}><DecodeText originalText={skill.skill} /></div>
                            <div style={{ width: '100%' }}><PercentageBar max={100} value={skill.level} /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default SkillSetContainer;