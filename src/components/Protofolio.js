import style from '@/styles/Protofolio.module.scss'
import { useEffect, useRef, useState } from 'react';

const Protofolio = ({ projects }) => {
    const projectsRef = useRef()

    const [display, setDisplay] = useState([])
    const [waitAnimation, setWaitanimation] = useState()

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

        setTimeout(() => setWaitanimation(false), 1000)
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

        setTimeout(() => setWaitanimation(false), 1000)
    }

    useEffect(() => {
        console.log(projects)
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
    }, [projects])

    return (
        <div className={style.container}>
            <div className={style.projectsRoller}>
                <div onClick={prevProject} className={style.topNavClickSpace}></div>
                <div className={style.projects} ref={projectsRef}>
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
                <div onClick={nextProject} className={style.bottomNavClickSpace}></div>
            </div>
        </div>
    )
};
export default Protofolio