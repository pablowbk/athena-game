import React, { useEffect, useRef, useState } from 'react';
import styles from './GameScene.module.css';
import useTypingEffect from '../../hooks/useTypingEffect';
import ScrollDown from '../ui/ScrollDownIcon/ScrollDownIcon';

interface SceneTextProps {
  sceneText: string;
  /** Rich “look around” copy shown in the main scene panel (below the primary scene text). */
  examineDetail?: string | null;
}

const SceneText: React.FC<SceneTextProps> = ({ sceneText, examineDetail = null }) => {
  const { displayedText: textWithEffect, finishedTyping } = useTypingEffect(sceneText, 10);
  const textContainer = useRef<HTMLDivElement>(null);
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);

  const measureText =
    sceneText + (examineDetail ? `\n\n${examineDetail}` : '');

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
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
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
  }, [finishedTyping, examineDetail, sceneText]);

  useEffect(() => {
    if (!examineDetail || !textContainer.current) return;
    requestAnimationFrame(() => {
      textContainer.current?.scrollTo({
        top: textContainer.current.scrollHeight,
        behavior: 'smooth',
      });
    });
  }, [examineDetail]);

  return (
    <>
      <div className={styles.sceneTextContainer} ref={textContainer}>
        <div className={styles.sceneTextStack}>
          <div className={styles.hiddenText} aria-hidden="true">
            {measureText}
          </div>
          <div className={styles.sceneTextLayer}>
            <div className={styles.sceneText}>{textWithEffect}</div>
            {examineDetail ? (
              <p className={styles.examineSurroundings}>{examineDetail}</p>
            ) : null}
          </div>
        </div>
      </div>
      <ScrollDown containerHeight={clientHeight} show={showScrollIcon} scroll={scrollByAmount} />
    </>
  );
};

export default SceneText;
