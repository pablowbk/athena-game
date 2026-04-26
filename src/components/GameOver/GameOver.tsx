import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './GameOver.css';

interface GameOverProps {
  onRetry: () => void;
  /** Hydra myth failure: copy explains return to Athena's quest choice. */
  isHydraFailure?: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({ onRetry, isHydraFailure }) => {
  const { t } = useLanguage();

  return (
    <div className="game-over">
      <h2 className="game-over__title">{t('gameOver.title')}</h2>
      <p className="game-over__message">
        {t(isHydraFailure ? 'gameOver.hydraFailureMessage' : 'gameOver.message')}
      </p>
      <button className="game-over__button" onClick={onRetry}>
        {t(isHydraFailure ? 'gameOver.tryAgainAthena' : 'gameOver.tryAgain')}
      </button>
    </div>
  );
};
