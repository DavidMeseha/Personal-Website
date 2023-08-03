import style from '@/styles/Protofolio.module.scss'
import { useEffect, useRef, useState } from 'react';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';

const Protofolio = ({ projects }) => {
    const projectsRef = useRef()
    const windowHeight = useWindowHeight()
    const windowWidth = useWindowWidth()

    const [display, setDisplay] = useState([])
    const [waitAnimation, setWaitanimation] = useState()
    const [touchStart, setTouchStart] = useState()

    const r1Margin = windowWidth < 769 ? (windowWidth < 426 ? -220 : -150) : -90
    const r2MaxHeight = windowWidth < 769 ? (windowWidth < 426 ? 360 : 600) : 220

    const rank1 = {
        zIndex: 2,
        margin: windowWidth < 769 ? windowWidth < 426 ? '-220px 0' : '-150px 0' : '-90px 0',
        maxHeight: windowWidth < 769 ? '600px' : '220px',
        transform: 'scale(1)',
        opacity: 1,
        padding: '30px',
        transition: 'all 0.9s'
    }

    const rank2 = {
        margin: 0,
        maxHeight: windowWidth < 769 ? windowWidth < 426 ? '360px' : '600px' : '220px',
        transform: 'scale(0.5)',
        opacity: 0.2,
        padding: '30px',
        zIndex: 0,
        transition: 'all 1s'
    }

    const rank3 = {
        margin: 0,
        zIndex: 0,
        transform: 'scale(0)',
        opacity: 0,
        maxHeight: 0,
        padding: 0,
        transition: 'all 0.6s'
    }

    useEffect(() => {
        const displayArraySetting = () => {
            let projectsCount = projects.length
            let temp = []
            let index = 0

            for (var times = 0; times < 5; times++, index++) {
                if (times % projectsCount === 0 && times !== 0) index = projectsCount - 2

                console.log(projects[index])
                console.log(index)
                console.log(projects)
                temp.push(projects[index])
            }

            setDisplay(temp)
        }

        displayArraySetting()
    }, [])

    const nextProject = () => {
        if (waitAnimation) return
        setWaitanimation(true)

        let child = projectsRef.current.children[0]

        for (const key in rank3) {
            projectsRef.current.children[0].style[`${key}`] = `${rank3[`${key}`]}`
        }

        for (const key in rank3) {
            projectsRef.current.children[1].style[`${key}`] = `${rank3[`${key}`]}`
        }

        for (const key in rank2) {
            projectsRef.current.children[2].style[`${key}`] = `${rank2[`${key}`]}`
        }

        for (const key in rank1) {
            projectsRef.current.children[3].style[`${key}`] = `${rank1[`${key}`]}`
        }

        for (const key in rank3) {
            projectsRef.current.children[4].style[`${key}`] = `${rank2[`${key}`]}`
        }

        projectsRef.current.removeChild(projectsRef.current.children[0])
        projectsRef.current.append(child)

        setTimeout(() => setWaitanimation(false), 900)
    }

    const prevProject = () => {
        if (waitAnimation) return
        setWaitanimation(true)

        let child = projectsRef.current.children[4]

        for (const key in rank2) {
            projectsRef.current.children[0].style[`${key}`] = `${rank2[`${key}`]}`
        }

        for (const key in rank1) {
            projectsRef.current.children[1].style[`${key}`] = `${rank1[`${key}`]}`
        }

        for (const key in rank2) {
            projectsRef.current.children[2].style[`${key}`] = `${rank2[`${key}`]}`
        }

        for (const key in rank3) {
            projectsRef.current.children[3].style[`${key}`] = `${rank3[`${key}`]}`
        }

        for (const key in rank3) {
            projectsRef.current.children[4].style[`${key}`] = `${rank3[`${key}`]}`
        }

        projectsRef.current.removeChild(projectsRef.current.children[4])
        projectsRef.current.prepend(child)

        setTimeout(() => setWaitanimation(false), 900)
    }

    const resetProjectsDrag = () => {
        projectsRef.current.children[0].style.transition = rank3.transition
        projectsRef.current.children[1].style.transition = rank2.transition
        projectsRef.current.children[2].style.transition = rank1.transition
        projectsRef.current.children[3].style.transition = rank2.transition
        projectsRef.current.children[4].style.transition = rank3.transition

        for (const key in rank3) {
            projectsRef.current.children[0].style[`${key}`] = `${rank3[`${key}`]}`
        }

        for (const key in rank2) {
            projectsRef.current.children[1].style[`${key}`] = `${rank2[`${key}`]}`
        }

        for (const key in rank1) {
            projectsRef.current.children[2].style[`${key}`] = `${rank1[`${key}`]}`
        }

        for (const key in rank2) {
            projectsRef.current.children[3].style[`${key}`] = `${rank2[`${key}`]}`
        }

        for (const key in rank3) {
            projectsRef.current.children[4].style[`${key}`] = `${rank3[`${key}`]}`
        }
    }

    const touchStartHandle = (event) => {
        setTouchStart(event.targetTouches[0].clientY)
        projectsRef.current.children[0].style.transition = 'unset'
        projectsRef.current.children[1].style.transition = 'unset'
        projectsRef.current.children[2].style.transition = 'unset'
        projectsRef.current.children[3].style.transition = 'unset'
        projectsRef.current.children[4].style.transition = 'unset'
    }

    const touchMoveHandle = (event) => {
        let position = event.targetTouches[0].clientY
        let distance = position - touchStart
        let max = windowHeight / 2
        let percent

        if (distance < 0) {
            percent = ((distance * -1) / max)
            if (percent > 1) percent = 1

            projectsRef.current.children[4].style.transform = `scale(${0.5 * percent})`
            projectsRef.current.children[4].style.maxHeight = `${r2MaxHeight * percent}px`
            projectsRef.current.children[4].style.opacity = `${0.2 * percent}`
            projectsRef.current.children[4].style.padding = `${30 * percent}px`

            projectsRef.current.children[3].style.transform = `scale(${0.5 + (0.5 * percent)})`
            projectsRef.current.children[3].style.opacity = `${0.2 + (0.8 * percent)}`
            projectsRef.current.children[3].style.maxHeight = `${r2MaxHeight + ((600 - r2MaxHeight) * percent)}px`
            projectsRef.current.children[3].style.margin = `${r1Margin * percent}px 0`
            if (percent > 0.5) projectsRef.current.children[1].style.zIndex = 2

            projectsRef.current.children[2].style.transform = `scale(${1 - (0.5 * percent)})`
            projectsRef.current.children[2].style.opacity = `${1 - (0.8 * percent)}`
            projectsRef.current.children[2].style.maxHeight = `${600}px`
            projectsRef.current.children[2].style.margin = `${r1Margin - (r1Margin * percent)}px 0`
            if (percent > 0.5) projectsRef.current.children[2].style.zIndex = 1

            projectsRef.current.children[1].style.transform = `scale(${0.5 - (0.5 * percent)})`
            projectsRef.current.children[1].style.opacity = `${0.2 - (0.2 * percent)}`
            projectsRef.current.children[1].style.maxHeight = `${r2MaxHeight - (r2MaxHeight * percent)}px`
            projectsRef.current.children[1].style.padding = `${30 - (30 * percent)}px`
        } else {
            percent = (distance / max)
            if (percent > 1) percent = 1

            projectsRef.current.children[0].style.transform = `scale(${0.5 * percent})`
            projectsRef.current.children[0].style.maxHeight = `${r2MaxHeight * percent}px`
            projectsRef.current.children[0].style.opacity = `${0.2 * percent}`
            projectsRef.current.children[0].style.padding = `${30 * percent}px`

            projectsRef.current.children[1].style.transform = `scale(${0.5 + (0.5 * percent)})`
            projectsRef.current.children[1].style.opacity = `${0.2 + (0.8 * percent)}`
            projectsRef.current.children[1].style.maxHeight = `${r2MaxHeight + ((600 - r2MaxHeight) * percent)}px`
            projectsRef.current.children[1].style.margin = `${r1Margin * percent}px 0`
            if (percent > 0.6) projectsRef.current.children[1].style.zIndex = 2

            projectsRef.current.children[2].style.transform = `scale(${1 - (0.5 * percent)})`
            projectsRef.current.children[2].style.opacity = `${1 - (0.8 * percent)}`
            projectsRef.current.children[2].style.maxHeight = `${600}px`
            projectsRef.current.children[2].style.margin = `${r1Margin - (r1Margin * percent)}px 0`
            if (percent > 0.6) projectsRef.current.children[2].style.zIndex = 1

            projectsRef.current.children[3].style.transform = `scale(${0.5 - (0.5 * percent)})`
            projectsRef.current.children[3].style.opacity = `${0.2 - (0.2 * percent)}`
            projectsRef.current.children[3].style.maxHeight = `${r2MaxHeight - (r2MaxHeight * percent)}px`
            projectsRef.current.children[3].style.padding = `${30 - (30 * percent)}px`
        }
    }

    const touchEndHandle = (event) => {
        let touchEnd = event.changedTouches[0].clientY

        projectsRef.current.children[0].style.transition = rank3.transition
        projectsRef.current.children[1].style.transition = rank2.transition
        projectsRef.current.children[2].style.transition = rank1.transition
        projectsRef.current.children[3].style.transition = rank2.transition
        projectsRef.current.children[4].style.transition = rank3.transition

        if (touchEnd - touchStart < -20) nextProject()
        if (touchEnd - touchStart > 20) prevProject()
        if (!(touchEnd - touchStart > 20) || !(touchEnd - touchStart < -20)) resetProjectsDrag()
    }

    return (
        <div className={style.container}>
            <div className={style.projectsRoller}>
                <div onClick={prevProject} className={style.topNavClickSpace}></div>
                <div onTouchEnd={touchEndHandle} onTouchStart={touchStartHandle} onTouchMove={touchMoveHandle} className={style.projects} ref={projectsRef}>
                    {display?.map((project, i) => {
                        return (
                            <div key={i} className={style.project} style={i === 0 || i === 4 ? rank3 : i === 2 ? rank1 : rank2}>
                                <h1 className={style.heading}>{project.title}</h1>
                                <div className={style.description}>
                                    <div>
                                        <h2 className={style.supHeading}>Technologies</h2>
                                        <p>
                                            {project.technologies}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className={style.supHeading}>Features</h2>
                                        <p>
                                            {project.features}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ margin: '20px 0 0 0' }}><span><a href={`${project.link}`} target='_blank'>Visit website ?</a></span></div>
                                    <div style={{ margin: '20px 0 0 0' }}><span><a href={`${project.link}`} target='_blank'>View Source ?</a></span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div onClick={nextProject} className={style.bottomNavClickSpace}></div>
            </div>
        </div>
    )
}
export default Protofolio