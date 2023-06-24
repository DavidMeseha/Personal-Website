import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import style from '@/styles/Skills.module.scss'
import SkillSetContainer from "./SkillSetContainer";
import useNavState from "@/hooks/useNavState";


const Skills = ({ skills }) => {
    const windowWidth = useWindowWidth()
    const { selected } = useNavState()
    const projectNav = useRef()

    const [index, setIndex] = useState(0)
    const [draged, setDraged] = useState(false)

    const [mainContainer, setMainContainer] = useState()
    const [secondContainer, setSecondContainer] = useState()

    const [nextState, setNextState] = useState(true)
    const [previousState, setPreviousState] = useState(false)

    const [touchStart, setTouchStart] = useState()

    useEffect(() => {
        const changeIndex = () => {
            setIndex(0)

            setNextState(true)
            setPreviousState(false)

            setMainContainer(skills[0])
            setSecondContainer(skills[1])
        }

        if (selected !== 'Skills' && selected === 'Intro.') {
            setTimeout(() => {
                setMainContainer(null)
                setSecondContainer(null)
            }, 300)
        } else {
            setTimeout(() => {
                setMainContainer(skills[index])
                setSecondContainer(skills[index + 1])
            }, 300)
        }

        window.addEventListener('resize', changeIndex)
        return () => window.removeEventListener('resize', changeIndex)
    }, [selected])

    const nextSkillSet = () => {
        if (!nextState) return
        let i = index

        if (windowWidth >= 860) {
            i += 2

            if (i >= skills.length - 2) setNextState(false)
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

    const touchStartHandle = (event) => {
        projectNav.current.style.transition = `unset`

        setTouchStart(event.targetTouches[0].clientX)
    }

    const touchMoveHandle = (event) => {
        let position = event.targetTouches[0].clientX
        let distance = (position - touchStart)
        let max = (windowWidth / 2) - 90

        if (distance > 20 || distance < -20) setDraged(true)
        if (distance > max) distance = max
        if (distance < -max) distance = -max

        if (!previousState && distance < 0) projectNav.current.style.transform = `translate(${distance * 0.2}px, 0px)`
        if (previousState && distance < 0) projectNav.current.style.transform = `translate(${distance}px, 0px)`
        if (!nextState && distance > 0) projectNav.current.style.transform = `translate(${distance * 0.2}px, 0px)`
        if (nextState && distance > 0) projectNav.current.style.transform = `translate(${distance}px, 0px)`
    }

    const touchEndHandle = (event) => {
        let end = event.changedTouches[0].clientX

        if (end - touchStart > 35) nextSkillSet()
        if (end - touchStart < -35) previousSkillSet()

        projectNav.current.style.transition = `all 0.2s`
        projectNav.current.style.transform = `translate(0px, 0px)`
    }

    return (
        <div className={style.warper}>
            <div className={style.container}>
                <div className={style.skillSet}>
                    <SkillSetContainer skillSet={mainContainer?.skillSet} title={mainContainer?.title} />
                </div>
                {secondContainer?.skillSet?.length > 0 && <div className={`${style.skillSet} ${style.secondrySkillSet}`}>
                    <SkillSetContainer skillSet={secondContainer?.skillSet} title={secondContainer?.title} />
                </div>}
            </div>
            <div style={{ width: '100%' }}>
                <div className={style.track}></div>
                <div onTouchStart={touchStartHandle} onTouchEnd={touchEndHandle} onTouchMove={touchMoveHandle} className={style.skillNavButton} style={{ transform: `translate(0px, 0px)` }} ref={projectNav}>
                    <div onClick={() => previousSkillSet()} className={previousState ? style.arrowLeft : style.arrowLeftInactive}></div>
                    <div onClick={() => nextSkillSet()} className={nextState ? style.arrowRight : style.arrowRightInactive}></div>
                </div>
                <div className={draged ? style.displayNone : style.dragHint}>{'Drag Me  >'}</div>
            </div>
        </div>
    )
};

export default Skills;