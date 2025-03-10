import { useLanguage } from '../../contexts/LanguageContext';
import './GameOver.css';

interface GameOverProps {
  onRetry: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ onRetry }) => {
  const { t } = useLanguage();

  return (
    <div className="game-over">
      <h2 className="game-over__title">{t('gameOver.title')}</h2>
      <p className="game-over__message">{t('gameOver.message')}</p>
      <button
        className="game-over__button"
        onClick={onRetry}
      >
        {t('gameOver.tryAgain')}
      </button>
    </div>
  );
}; 