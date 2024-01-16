import { FC, useEffect, useState } from "react";

interface AnimateTextProps {
  originalText: string;
  interval?: number;
  itrations?: number;
}

const AnimateText: FC<AnimateTextProps> = ({
  originalText,
  interval = 30,
  itrations = 2,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const animate = () => {
      if (!originalText) return;
      let animatedText = "";
      let decodedCharacters = "";
      let decodedIndex = 0;
      let times = 0;

      let notDecodedCount = originalText.length;
      const characters = "abcdefghijklmnopqrstuvwxyz";
      intervalId = setInterval(() => {
        for (var charIndex = 0; charIndex < notDecodedCount; charIndex++) {
          animatedText += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }

        if (times % itrations === 0) {
          decodedCharacters += originalText[decodedIndex];
          decodedIndex++;
          notDecodedCount--;
        }

        setText(animatedText);
        animatedText = decodedCharacters;
        times++;

        if (times === originalText.length * itrations)
          clearInterval(intervalId);
      }, interval);
    };

    animate();

    return () => {
      clearInterval(intervalId);
    };
  }, [originalText]);

  return <span>{text}</span>;
};
export default AnimateText;
