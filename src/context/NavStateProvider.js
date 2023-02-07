import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext({})

export const NavStateProvider = ({ children }) => {
    const navBar = ['Intro.', 'Skills', 'What I Do', 'Protofolio', 'About Website']
    const router = useRouter()
    const [selected, setSelected] = useState('Intro.')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        router.replace({
            pathname: '/',
            query: { section: selected }
        })
    }, [selected])


    const nextSection = () => {
        let newIndex = (index + 1) % navBar.length
        setSelected(navBar[newIndex])
        setIndex(newIndex)
    }

    const previousSection = () => {
        let newindex = index - 1 < 0 ? navBar.length - 1 : index - 1
        setSelected(navBar[newindex])
        setIndex(newindex)
    }

    function selectSection(value) {
        let i = 0

        if (typeof value == 'number') i = value
        else i = navBar.indexOf(value)

        setIndex(i)
        setSelected(navBar[i])
    }

    return (
        <NavContext.Provider value={{ index, selected, nextSection, previousSection, selectSection }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext