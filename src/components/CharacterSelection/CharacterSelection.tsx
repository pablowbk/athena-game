import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Character, Choice, CharacterType } from '../../types/game';
import { characterIcons } from '../../assets/images/placeholders';
import styles from './CharacterSelection.module.css';

interface CharacterSelectionProps {
  characters: Record<CharacterType, Character>;
  onSelect: (choice: Choice, playerName: string) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ characters, onSelect }) => {
  const { t } = useLanguage();
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const checkForName = () => {
    if (playerName.trim() === '') {
      setError(true);
      focusInput();
      return false;
    }
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    if (error && name.trim() !== '') {
      setError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, character: Character) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!checkForName()) return;
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
    if (!checkForName()) return;
    onSelect(
      {
        text: character.type,
        nextScene: 'character_chosen',
      },
      playerName
    );
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <section className={styles.CharacterSelection}>
      <h2 className={styles.title}>{t('chooseCharacter')}</h2>

      {/* Name input */}
      <div className={styles.nameInput}>
        <label htmlFor="playerName">{t('enterName')}:</label>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="playerName"
            id="playerName"
            className={`${styles.input} ${error ? styles.error : ''}`}
            ref={inputRef}
            value={playerName}
            onChange={handleNameChange}
            placeholder={t('yourName')}
            autoFocus
          />
          {error && <p>{t('yourName_error')}</p>}
        </div>
      </div>

      {/* Character type selection */}
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
