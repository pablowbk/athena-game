import { useState, useEffect } from 'react';

/**
 * Custom hook to create a typing effect for a given text.
 * @param text The text to display with a typing effect.
 * @param typingSpeed The speed of typing in milliseconds per character (default: 50ms).
 * @returns The progressively displayed text.
 */
const useTypingEffect = (text: string, typingSpeed: number = 50): string => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText(text[0] || ''); // Display the first letter immediately

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on unmount or text change
  }, [text, typingSpeed]);

  return displayedText;
};

export default useTypingEffect;
