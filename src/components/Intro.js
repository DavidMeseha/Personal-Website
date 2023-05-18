import style from '@/styles/Intro.module.scss'
import Background from './BackGround';

const Intro = ({ theme }) => {
    return (
        <div className={style.container}>
            <div style={{ position: 'absolute', height: '100vh', zIndex: -2 }}><Background theme={theme} /></div>
            <div style={{ width: '80%' }}>
                <div className={style.hello}><h1>HELLO,</h1></div>
                <div className={style.me}>
                    <h2>I'M</h2>
                    <h2 className={style.value}>DAVID MAGDY</h2>
                </div>
                <div>
                    <p className={style.description}>I develop websites using<span> MERN Stack </span>, Implementing the <span>Front end, back end and databases </span>
                        using the <span> latest Technologies</span></p>
                </div>
            </div>
            {/*<div style={{ position: 'absolute', width: '100vw', height: 200, backgroundColor:'#ffffff'}}></div>*/}
        </div>
    )
};
export default Intro;