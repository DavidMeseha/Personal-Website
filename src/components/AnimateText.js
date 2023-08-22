import { useEffect, useState } from "react";

const AnimateText = ({ originalText, interval = 30, iterations = 2 }) => {
    const [text, setText] = useState()

    useEffect(() => {
        let intervalId

        const animate = () => {
            if (!originalText) return
            let animatedText = ''
            let decodedCharacters = ''
            let decodedIndex = 0
            let times = 0

            let notDecodedCount = originalText.length
            const characters = 'abcdefghijklmnopqrstuvwxyz'
            intervalId = setInterval(() => {
                for (
                    var charIndex = 0;
                    charIndex < notDecodedCount;
                    charIndex++
                ) {
                    animatedText +=
                        characters.charAt(
                            Math.floor(Math.random() * characters.length)
                        )
                }

                if (times % iterations === 0) {
                    decodedCharacters += originalText[decodedIndex]
                    decodedIndex++
                    notDecodedCount--
                }

                setText(animatedText)
                animatedText = decodedCharacters
                times++

                if (times === originalText.length * iterations)
                    clearInterval(intervalId)

            }, interval)
        }

        animate()

        return (() => {
            clearInterval(intervalId)
        })

    }, [originalText])

    return (
        <span>{text}</span>
    )
};
export default AnimateText;