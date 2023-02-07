import { StartEnd } from "public/Icons";
import style from '@/styles/Footer.module.scss'
import useNavState from "@/hooks/useNavState";

const Footer = () => {
    const { index, selectSection, nextSection, previousSection } = useNavState()

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div onClick={previousSection} className={style.endsIcon}><StartEnd /></div>
                <div className={style.dotsContainer}>
                    <div onClick={() => selectSection(0)} className={`${index === 0 ? style.selectedDot : style.dots}`}></div>
                    <div onClick={() => selectSection(1)} className={`${index === 1 ? style.selectedDot : style.dots}`}></div>
                    <div onClick={() => selectSection(2)} className={`${index === 2 ? style.selectedDot : style.dots}`}></div>
                    <div onClick={() => selectSection(3)} className={`${index === 3 ? style.selectedDot : style.dots}`}></div>
                    <div onClick={() => selectSection(4)} className={`${index === 4 ? style.selectedDot : style.dots}`}></div>
                </div>
                <div onClick={nextSection} className={style.endsIcon} style={{ transform: 'rotate(180deg)' }}><StartEnd /></div>
            </div>
        </div>
    )
};
export default Footer