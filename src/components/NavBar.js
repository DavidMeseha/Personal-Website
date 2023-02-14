import style from '@/styles/NavBar.module.scss'
import { StartEnd, EndSlash } from 'public/Icons'
import { useState } from 'react';
import Menu from './Menu';
import useNavState from '@/hooks/useNavState';

const NavBar = () => {
    const { selectSection, selected } = useNavState()

    const [navState, setNavState] = useState(true)
    const [menuState, setMenuState] = useState(false)

    return (
        <>
            <div className={`${style.mobileMenu} ${menuState ? style.open : style.close}`} style={{ zIndex: 10 }}><Menu closeMenu={setMenuState} /></div>

            <div className={style.container}>
                <div onClick={() => setNavState(!navState)} className={style.startIcon}><StartEnd /></div>

                <div onClick={() => setMenuState(true)} className={`${menuState ? style.mobileSelectedActive : style.mobileSelected}`}>{selected}</div>

                <div className={style.listContainer} style={{ width: navState ? 640 : 4 }}>
                    <ul className={style.navList}>
                        <li onClick={() => selectSection('Intro.')} className={selected === 'Intro.' ? style.selectedItem : style.item}>
                            <div className={style.navItem}>Intro.</div>
                            <div className={style.underline} ></div>
                        </li>
                        <li onClick={() => selectSection('Skills')} className={selected === 'Skills' ? style.selectedItem : style.item}>
                            <div className={style.navItem}>Skills</div>
                            <div className={style.underline}></div>
                        </li>
                        <li onClick={() => selectSection('What I Do')} className={selected === 'What I Do' ? style.selectedItem : style.item}>
                            <div className={style.navItem}>What I Do</div>
                            <div className={style.underline}></div>
                        </li>
                        <li onClick={() => selectSection('Protofolio')} className={selected === 'Protofolio' ? style.selectedItem : style.item}>
                            <div className={style.navItem}>Protofolio</div>
                            <div className={style.underline}></div>
                        </li>
                        <li onClick={() => selectSection('About Website')} className={selected === 'About Website' ? style.selectedItem : style.item}>
                            <div className={style.navItem}>About Website</div>
                            <div className={style.underline}></div>
                        </li>
                    </ul>
                </div>
                <div onClick={() => setNavState(!navState)} className={`${style.endIcon} ${navState ? '' : style.closedNav}`}><EndSlash /></div>
            </div>
        </>
    )
};
export default NavBar;