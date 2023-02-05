import { StartEnd } from "public/Icons";
import style from '@/styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.endsIcon}><StartEnd /></div>
                <div className={style.dotsContainer}>
                    <div className={`${style.selectedDot}`}></div>
                    <div className={style.dots}></div>
                    <div className={style.dots}></div>
                    <div className={style.dots}></div>
                    <div className={style.dots}></div>
                    <div className={style.dots}></div>
                </div>
                <div className={style.endsIcon} style={{ transform: 'rotate(180deg)' }}><StartEnd /></div>
            </div>
        </div>
    )
};
export default Footer