import style from '@/styles/Intro.module.scss'

const Intro = () => {
    return (
        <div className={style.container}>
            <div style={{ width: '80%' }}>
                <div className={style.hello}><h1>HELLO,</h1></div>
                <div className={style.me}>
                    <h2>I'M</h2>
                    <h2 className={style.value}>DAVID MAGDY</h2>
                </div>
                <div>
                    <p className={style.description}>I develop websites using<span style={{ color: '#fdfb39' }}> MERN Stack </span>, Implementing the <span style={{ color: '#fdfb39' }}>Front end, back end and databases </span>
                        using the <span style={{ color: '#fdfb39' }}> latest Technologies</span></p>
                </div>
            </div>
        </div>
    )
};
export default Intro;