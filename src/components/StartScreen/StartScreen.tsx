import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const { t } = useLanguage();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onStart();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('gameTitle')}</h1>
      <p className={styles.description}>{t('gameDescription')}</p>
      <button
        className={styles.button}
        onClick={onStart}
        onKeyDown={handleKeyDown}
      >
        {t('startGame')}
      </button>
    </div>
  );
};

export default StartScreen; 