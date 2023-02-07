import { Close, EndSlash, Logo, StartEnd } from "public/Icons";
import style from "@/styles/Menu.module.scss"
import useNavState from "@/hooks/useNavState";
import { useEffect, useState } from "react";

const Menu = ({ closeMenu }) => {
    const { selectSection, selected } = useNavState()

    useEffect(() => {
        closeMenu(false)
    }, [selected])

    return (
        <div style={{ width: '100vw', height: '100vh', fontWeight: 600, fontSize: '1.3rem' }}>
            <div width='100%'>
                <div className={style.logo}><Logo /></div>
                <div onClick={() => closeMenu(false)} className={style.closeIcon}><Close /></div>
            </div>
            <div>
                <ul className={style.list}>

                    <li onClick={() => selectSection('Intro.')} className={selected === 'Intro.' ? style.selectedListItem : style.listItem}>
                        <div className={style.startIcon}><StartEnd /></div>
                        <div style={{ padding: '0 15px', height: 28 }}>intro.</div>
                        <div className={style.endIcon}><EndSlash /></div>
                    </li>

                    <li onClick={() => selectSection('Skills')} className={selected === 'Skills' ? style.selectedListItem : style.listItem}>
                        <div className={style.startIcon}><StartEnd /></div>
                        <div style={{ padding: '0 15px', height: 28 }}>Skills</div>
                        <div className={style.endIcon}><EndSlash /></div>
                    </li>

                    <li onClick={() => selectSection('What I Do')} className={selected === 'What I Do' ? style.selectedListItem : style.listItem}>
                        <div className={style.startIcon}><StartEnd /></div>
                        <div style={{ padding: '0 15px', height: 28 }}>What I Do</div>
                        <div className={style.endIcon}><EndSlash /></div>
                    </li>

                    <li onClick={() => selectSection('Protofolio')} className={selected === 'Protofolio' ? style.selectedListItem : style.listItem}>
                        <div className={style.startIcon}><StartEnd /></div>
                        <div style={{ padding: '0 15px', height: 28 }}>Protofolio</div>
                        <div className={style.endIcon}><EndSlash /></div>
                    </li>

                    <li onClick={() => selectSection('About Website')} className={selected === 'About Website' ? style.selectedListItem : style.listItem}>
                        <div className={style.startIcon}><StartEnd /></div>
                        <div style={{ padding: '0 15px', height: 28 }}>About Website</div>
                        <div className={style.endIcon}><EndSlash /></div>
                    </li>

                </ul>
            </div>
        </div >
    )
};
export default Menu;