import React from 'react';
import { Character } from '../../types/game';
import { characterIcons } from '../../assets/images/placeholders';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './CharacterDetails.module.css';

interface CharacterDetailsProps {
  character: Character;
  playerName?: string;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character, playerName }) => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {characterIcons[character.type]}
      </div>
      <div className={styles.info}>
        <span className={styles.characterName}>{t(`${character.type}.name`)}</span>
        <span className={styles.playerName}>{playerName || t('defaultPlayerName')}</span>
      </div>
    </div>
  );
};

export default CharacterDetails; 