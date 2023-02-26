import style from '@/styles/Interested.module.scss'
import { useState } from 'react';

const Interested = () => {
    const [headerDistance, setHeaderDistance] = useState({ x: 0, y: 0 })

    const mouseMoveHandle = () => {
        
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <h1 className={style.shadowHeader}>Let's Work Together !</h1>
                    <h1 className={style.shadowHeader} style={{ position: 'absolute', top: 0, left: 0, fontWeight: 'bolder' }}>Let's Work Together !</h1>
                    <h1 className={style.floatingHeader}>Let's Work Together<span> !</span></h1>
                </div>
                <div className={style.details}>
                    <h2>Here is how I can help...</h2>
                    <ul className={style.list}>
                        <li>Create a fullstack website with custom backend, front end and database(MongoDB & SQl).</li>
                        <li>Create custom features and pages for your react.js and next.js app.</li>
                        <li>Create custome features for you Node.js(express.js) backend RESTful API and GraphQL</li>
                        <li>Implementing UI/UX dsigns with high quality and performance.</li>
                        <li>Create Web components.</li>
                    </ul>
                </div>
                <div>
                    <p style={{ fontSize: '0.8rem' }}>Ready to descuss your project</p>
                    <div className={style.button}>davidmmyh@gmail.com</div>
                </div>
            </div>
        </div>
    )
};
export default Interested;