import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Character, Choice, CharacterType } from '../../types/game';
import { characterIcons } from '../../assets/images/placeholders';
import styles from './CharacterSelection.module.css';

interface CharacterSelectionProps {
  characters: Record<CharacterType, Character>;
  onSelect: (choice: Choice, playerName: string) => void;
  defaultPlayerName: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  characters,
  onSelect,
  defaultPlayerName,
}) => {
  const { t } = useLanguage();
  const [playerName, setPlayerName] = useState(defaultPlayerName);

  const handleKeyDown = (e: React.KeyboardEvent, character: Character) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(
        {
          text: character.type,
          nextScene: 'character_chosen',
        },
        playerName
      );
    }
  };

  const handleCharacterSelect = (character: Character) => {
    onSelect(
      {
        text: character.type,
        nextScene: 'character_chosen',
      },
      playerName
    );
  };

  return (
    <section className={styles.CharacterSelection}>
      <h2 className={styles.title}>{t('chooseCharacter')}</h2>
      <div className={styles.nameInput}>
        <label htmlFor="playerName">{t('enterName')}:</label>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className={styles.input}
          placeholder={t('yourName')}
        />
      </div>
      <div className={styles.container} role="listbox" aria-label={t('chooseCharacter')}>
        {Object.values(characters).map((character) => (
          <div
            key={character.type}
            className={styles.card}
            role="option"
            tabIndex={0}
            onClick={() => handleCharacterSelect(character)}
            onKeyDown={(e) => handleKeyDown(e, character)}
            aria-selected={false}
          >
            <div className={styles.icon} aria-hidden="true">
              {characterIcons[character.type]}
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{t(`${character.type}.name`)}</h3>
              <p className={styles.description}>{t(`${character.type}.description`)}</p>
              <p className={styles.ability}>{t(`${character.type}.ability`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterSelection;
