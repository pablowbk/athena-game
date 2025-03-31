import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const { t } = useLanguage();
  const [start, setStart] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleStart();
    }
  };

  const handleStart = () => {
    setStart(true);
    setTimeout(() => {
      onStart();
    }, 2000);
  };

  return (
    <div className={`${styles.container} ${start ? styles.start : ''}`}>
      <h1 className={styles.title}>{t('gameTitle')}</h1>
      <p className={styles.description}>{t('gameDescription')}</p>

      <button
        type="button"
        className={styles.button}
        onClick={handleStart}
        onKeyDown={handleKeyDown}
        disabled={start}
      >
        <span className={styles.cursor}></span>
        <span>{t('startGame')}</span>
      </button>
    </div>
  );
};

export default StartScreen;
