import { useEffect, useRef, useState } from "react";
import SkillSetContainer from "./SkillSetContainer";
import style from '@/styles/Skills.module.scss'
import { useWindowWidth } from "@react-hook/window-size";
import useNavState from "@/hooks/useNavState";

const Skills = ({ skills }) => {
    const windowWidth = useWindowWidth()
    const { selected } = useNavState()

    const [index, setIndex] = useState(0)
    const [mainContainer, setMainContainer] = useState()
    const [secondContainer, setSecondContainer] = useState()
    const [nextState, setNextState] = useState(true)
    const [previousState, setPreviousState] = useState(false)

    useEffect(() => {
        const changeIndex = () => {
            setIndex(0)

            setNextState(true)
            setPreviousState(false)

            setMainContainer(skills[0])
            setSecondContainer(skills[1])
        }

        setMainContainer(skills[index])
        setSecondContainer(skills[index + 1])

        window.addEventListener('resize', changeIndex)
        return () => window.removeEventListener('resize', changeIndex)
    }, [selected])

    const nextSkillSet = () => {
        if (!nextState) return
        let i = index

        if (windowWidth >= 860) {
            i += 2

            if (i === skills.length - 2) setNextState(false)
        }
        else {
            i += 1

            if (i === skills.length - 1) setNextState(false)
        }

        setPreviousState(true)

        setIndex(i)
        setMainContainer(skills[i])
        setSecondContainer(i + 1 >= skills.length ? null : skills[i + 1])
    }

    const previousSkillSet = () => {
        if (!previousState) return
        let i = index

        if (windowWidth >= 861) { i -= 2 }
        else { i -= 1 }

        if (i === 0) setPreviousState(false)
        setNextState(true)

        setIndex(i)
        setMainContainer(skills[i])
        setSecondContainer(skills[i + 1])
    }

    return (
        <div className={style.warper}>
            <div className={style.container}>
                <div className={style.skillSet}>
                    <SkillSetContainer skillSet={mainContainer?.skillSet} title={mainContainer?.title} />
                </div>
                <div className={`${style.skillSet} ${style.secondrySkillSet}`}>
                    <SkillSetContainer skillSet={secondContainer?.skillSet} title={secondContainer?.title} />
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div style={{ height: 1, background: 'white' }}></div>
                <div className={style.skillNavButton}>
                    <div onClick={previousSkillSet} className={previousState ? style.arrowLeft : style.arrowLeftInactive}></div>
                    <div onClick={nextSkillSet} className={nextState ? style.arrowRight : style.arrowRightInactive}></div>
                </div>
            </div>
        </div>
    )
};

export default Skills;