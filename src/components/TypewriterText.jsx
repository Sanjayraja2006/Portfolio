import React, { useState, useEffect } from "react";

export default function TypewriterText({
  staticPrefix = "Computer Science Undergraduate &",
  words = ["Frontend Developer", "UI/UX Designer"],
  typingSpeed = 90,
  deletingSpeed = 50,
  delayBetweenWords = 1800,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex % words.length];

    let timer;

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <h2>
      {staticPrefix}
      <br />
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </h2>
  );
}
