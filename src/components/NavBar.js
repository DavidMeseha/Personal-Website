import style from '@/styles/NavBar.module.scss'
import { StartEnd, EndSlash } from 'public/Icons'
import { useState } from 'react';
import Menu from './Menu';

const NavBar = () => {
    const [navState, setNavState] = useState(false)
    const [menuState, setMenuState] = useState(false)
    const [selectedSection, setSelectedSection] = useState('Intro.')

    return (
        <>
            <div className={`${style.mobileMenu} ${menuState ? style.open : style.close}`}><Menu closeMenu={setMenuState} selected={selectedSection} /></div>

            <div className={style.container}>
                <div onClick={() => setNavState(!navState)} className={style.startIcon}><StartEnd /></div>

                <div onClick={() => setMenuState(true)} className={`${menuState ? style.mobileSelectedActive : style.mobileSelected}`}>{selectedSection}</div>

                <div className={style.listContainer} style={{ width: navState ? 725 : 4 }}>
                    <ul className={style.navList}>
                        <li className={style.selectedItem}>
                            <div className={style.navItem}>Intro.</div>
                            <div className={style.underline} ></div>
                        </li>
                        <li className={style.item}>
                            <div className={style.navItem}>About</div>
                            <div className={style.underline}></div>
                        </li>
                        <li className={style.item}>
                            <div className={style.navItem}>What I Do</div>
                            <div className={style.underline}></div>
                        </li>
                        <li className={style.item}>
                            <div className={style.navItem}>Skills</div>
                            <div className={style.underline}></div>
                        </li>
                        <li className={style.item}>
                            <div className={style.navItem}>Protofolio</div>
                            <div className={style.underline}></div>
                        </li>
                        <li className={style.item}>
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