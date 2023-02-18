import { useEffect, useState } from "react";

const AnimateText = ({ value }) => {
    const [text, setText] = useState()
    let times = 0
    let valueLength = value?.length

    const characters = 'abcdefghijklmnopqrstuvwxyz'

    useEffect(() => {
        let intervalId

        const animate = () => {
            if (!value) return
            let animatedText = ''
            let stack = ''
            let stackIndex = 0
            times = 0
            valueLength = value?.length

            //set initial Value...........
            for (var charIndex = 0; charIndex < value.length; charIndex++) {
                animatedText += characters.charAt(Math.floor(Math.random() * characters.length))
            }
            
            setText(animatedText)
            animatedText = ''

            //start animation
            intervalId = setInterval(() => {
                times++
                
                for (var charIndex = 0; charIndex < valueLength; charIndex++) {
                    animatedText += characters.charAt(Math.floor(Math.random() * characters.length))
                }

                if (times % 2 === 0) {
                    stack += value[stackIndex]
                    stackIndex++
                    valueLength--
                }

                setText(animatedText)
                animatedText = stack

                if (times === value.length * 2) {
                    setText(animatedText)
                    clearInterval(intervalId)
                }
            }, 30)
        }

        animate()

        return (() => {
            clearInterval(intervalId)
        })

    }, [value])

    return (
        <span>{text}</span>
    )
};
export default AnimateText;