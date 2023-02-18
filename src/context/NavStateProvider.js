import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext({})

export const NavStateProvider = ({ children }) => {
    const navBar = ['Intro.', 'Skills', 'Protofolio', 'What I Do', 'About Website']
    const router = useRouter()
    const [selected, setSelected] = useState('Intro.')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let routerSelect = router.query.section

        if (!routerSelect) return

        if (!navBar.includes(routerSelect)) return

        setSelected(routerSelect)
        setIndex(navBar.indexOf(routerSelect))
    }, [router])


    const nextSection = () => {
        let newIndex = (index + 1) % navBar.length

        router.replace({
            pathname: '/',
            query: { section: navBar[newIndex] }
        })
    }

    const previousSection = () => {
        let newIndex = index - 1 < 0 ? navBar.length - 1 : index - 1

        router.replace({
            pathname: '/',
            query: { section: navBar[newIndex] }
        })
    }

    function selectSection(value) {
        let i = 0

        if (typeof value == 'number') i = value
        else i = navBar.indexOf(value)

        router.replace({
            pathname: '/',
            query: { section: navBar[i] }
        })
    }

    return (
        <NavContext.Provider value={{ index, selected, nextSection, previousSection, selectSection }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext