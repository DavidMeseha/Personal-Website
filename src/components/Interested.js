import style from '@/styles/Interested.module.scss'
import { useEffect, useState } from 'react';
import { Copy } from 'public/Icons';

const Interested = () => {
    const [headerDistance, setHeaderDistance] = useState({ x: 0, y: 0 })
    const [mouseStart, setMouseStart] = useState(null)

    const [copyState, setCopyState] = useState(false)

    const mouseMoveHandle = (event) => {
        if (!mouseStart) {
            setMouseStart({ x: event.clientX, y: event.clientY })
            return
        }

        setHeaderDistance({ x: (event.clientX - mouseStart.x) * 0.012, y: (event.clientY - mouseStart.y) * 0.012 })
    }

    const copyHandle = () => {
        if (copyState) return

        navigator.clipboard.writeText('davidmmyh@gmail.com').then(() => {
            setCopyState(true)
        })
    }



    return (
        <div onMouseMove={mouseMoveHandle}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.heading}>
                        <h1 className={style.shadowHeader}>Let's Work Together !</h1>
                        <h1 className={style.floatingHeader} style={{ transform: `translate(${headerDistance.x}px, ${headerDistance.y}px)` }}>Let's Work Together<span className={style.beating}> !</span></h1>
                    </div>
                    <div className={style.details}>
                        <h2>Here is how I can help...</h2>
                        <ul className={style.list}>
                            <li>Create a fullstack website with custom backend, front end and database(MongoDB & SQl).</li>
                            <li>Create custom features and pages for your react.js and next.js app.</li>
                            <li>Create custome features for Node.js(express.js) backend RESTful API and GraphQL</li>
                            <li>Implementing UI/UX dsigns with high quality and performance.</li>
                            <li>Create Web components.</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.8rem' }}>Ready to descuss your project</p>
                        <div onClick={copyHandle} onMouseLeave={() => setTimeout(() => { setCopyState(false) }, 350)} className={style.button}>
                            <div>davidmmyh@gmail.com</div>
                            <div className={style.copy}>{copyState ? 'copied' : 'copy'}<div><Copy /></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default Interested;