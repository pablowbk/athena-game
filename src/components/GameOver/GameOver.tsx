import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './GameOver.css';

interface GameOverProps {
  onRetry: () => void;
  /** Hydra myth failure: copy explains return to Athena's quest choice. */
  isHydraFailure?: boolean;
  /** Clears all progress and returns to the title screen (confirm dialog in parent). */
  onFullReset?: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ onRetry, isHydraFailure, onFullReset }) => {
  const { t } = useLanguage();

  return (
    <div className="game-over">
      <h2 className="game-over__title">{t('gameOver.title')}</h2>
      <p className="game-over__message">
        {t(isHydraFailure ? 'gameOver.hydraFailureMessage' : 'gameOver.message')}
      </p>
      <div className="game-over__actions">
        <button type="button" className="game-over__button" onClick={onRetry}>
          {t(isHydraFailure ? 'gameOver.tryAgainAthena' : 'gameOver.tryAgain')}
        </button>
        {isHydraFailure && onFullReset ? (
          <button type="button" className="game-over__button game-over__button--secondary" onClick={onFullReset}>
            {t('gameOver.fullReset')}
          </button>
        ) : null}
      </div>
    </div>
  );
};
