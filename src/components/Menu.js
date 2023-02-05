import { Close, EndSlash, StartEnd } from "public/Icons";
import style from "@/styles/Menu.module.scss"

const Menu = ({ closeMenu, selected }) => {
    const blue = '#3959fd'
    const red = '#fd3939'


    return (
        <div style={{ width: '100vw', height: '100vh', fontWeight: 600, fontSize: '1.3rem' }}>
            <div onClick={() => closeMenu(false)} className={style.closeIcon}><Close /></div>
            <div>
                <ul className={style.list}>
                    {selected != 'Intro.' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>intro.</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }

                    {selected != 'About' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>About</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }

                    {selected != 'What I Do' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>What I Do</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }

                    {selected != 'Skills' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>Skills</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }
                    {selected != 'Protofolio' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>Protofolio</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }
                    {selected != 'About Website' &&
                        <li className={style.listItem}>
                            <div className={style.startIcon}><StartEnd /></div>
                            <div style={{ padding: '0 15px', height: 28 }}>About Website</div>
                            <div className={style.endIcon}><EndSlash /></div>
                        </li>
                    }
                </ul>
            </div>
        </div >
    )
};
export default Menu;