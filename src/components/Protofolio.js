import style from '@/styles/Protofolio.module.scss'
import { Arrow } from 'public/Icons';
import { useEffect, useRef, useState } from 'react';
import { useWindowHeight } from '@react-hook/window-size';

const Protofolio = ({ projects }) => {
    const projectsRef = useRef()
    const windowHeight = useWindowHeight()

    const [display, setDisplay] = useState([])
    const [waitAnimation, setWaitanimation] = useState()
    const [touchStart, setTouchStart] = useState()
    const [touchEnd, setTouchEnd] = useState()

    useEffect(() => {
        const displayArraySetting = () => {
            let projectsCount = projects.length
            let temp = []
            let index = 0

            for (var times = 0; times < 5; times++, index++) {
                if (times % projectsCount === 0) index = 0

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

        projectsRef.current.children[1].className = style.rank3
        projectsRef.current.children[2].className = style.rank2
        projectsRef.current.children[3].className = style.rank1
        projectsRef.current.children[4].className = style.rank2


        projectsRef.current.removeChild(projectsRef.current.children[0])
        projectsRef.current.append(child)

        setTimeout(() => setWaitanimation(false), 900)
    }

    const prevProject = () => {
        if (waitAnimation) return
        setWaitanimation(true)

        let child = projectsRef.current.children[4]

        projectsRef.current.children[0].className = style.rank2
        projectsRef.current.children[1].className = style.rank1
        projectsRef.current.children[2].className = style.rank2
        projectsRef.current.children[3].className = style.rank3
        projectsRef.current.children[4].className = style.rank3


        projectsRef.current.removeChild(projectsRef.current.children[4])
        projectsRef.current.prepend(child)

        setTimeout(() => setWaitanimation(false), 900)
    }

    const touchStartHandle = (event) => {
        console.log(event.targetTouches[0].clientY)
    }

    const touchMoveHandle = (event) => {
        console.log(event.targetTouches[0].clientY)
    }

    const touchEndHandle = (event) => {
        console.log(event.changedTouches[0].clientY)
    }

    return (
        <div className={style.container}>
            <div className={style.projectsRoller}>
                <div onClick={prevProject} className={style.topNavClickSpace}>
                    <div className={style.arrow} style={{ transform: 'rotate(0deg)' }}><Arrow /></div>
                </div>
                <div onTouchEnd={touchEndHandle} onTouchStart={touchStartHandle} onTouchMove={touchMoveHandle} className={style.projects} ref={projectsRef}>
                    {display?.map((project, i) => {
                        return (
                            <div key={i} className={`${i === 0 || i === 4 ? style.rank3 : i === 2 ? style.rank1 : style.rank2}`}>
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
                                <div style={{ margin: '20px 0 0 0' }}><span><a href={`${project.link}`} target='_blank'>Visit this project ?</a></span></div>
                            </div>
                        )
                    })}
                </div>
                <div onClick={nextProject} className={style.bottomNavClickSpace}>
                    <div className={style.arrow} style={{ transform: 'rotate(180deg)' }}><Arrow /></div>
                </div>
            </div>
        </div>
    )
}
export default Protofolio