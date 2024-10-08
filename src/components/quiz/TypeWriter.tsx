import React, { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
};

const Typewriter = ({ text }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setInterval(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 40);

      return () => {
        clearInterval(timer);
      };
    }
  }, [currentIndex, text]);

  return <p className='animate-fade'>{currentText}</p>;
};

export default Typewriter;
