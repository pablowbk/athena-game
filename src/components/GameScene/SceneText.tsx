import React, { useEffect, useRef, useState } from 'react';
import styles from './GameScene.module.css';
import useTypingEffect from '../../hooks/useTypingEffect';
import ScrollDown from '../ui/ScrollDownIcon/ScrollDownIcon';

interface SceneTextProps {
  sceneText: string;
}

const SceneText: React.FC<SceneTextProps> = ({ sceneText }) => {
  const { displayedText: textWithEffect, finishedTyping } = useTypingEffect(sceneText, 10);
  const textContainer = useRef<HTMLDivElement>(null);
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);

  const scrollByAmount = (amount: number = 150) => {
    if (textContainer.current) {
      textContainer.current.scrollTo({
        top: textContainer.current.scrollTop + amount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (textContainer.current) {
        const { scrollTop, scrollHeight, clientHeight } = textContainer.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // Allow for rounding errors
        setShowScrollIcon(finishedTyping && !isAtBottom);
      }
    };

    if (textContainer.current) {
      const hasScroll = textContainer.current.scrollHeight > textContainer.current.clientHeight;
      setClientHeight(textContainer.current.clientHeight);
      setShowScrollIcon(finishedTyping && hasScroll);

      textContainer.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (textContainer.current) {
        textContainer.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [finishedTyping]);

  return (
    <>
      <div className={styles.sceneTextContainer} ref={textContainer}>
        <div className={styles.hiddenText}>{sceneText}</div>
        <div className={styles.sceneText}>{textWithEffect}</div>
      </div>
      <ScrollDown containerHeight={clientHeight} show={showScrollIcon} scroll={scrollByAmount} />
    </>
  );
};

export default SceneText;
