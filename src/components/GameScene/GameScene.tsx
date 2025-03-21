import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Scene, Character, Choice, TextInputScene } from '../../types/game';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { GameOver } from '../GameOver';
import { HelpMenu } from '../HelpMenu';
import { InventoryDisplay } from '../InventoryDisplay';
import styles from './GameScene.module.css';

interface GameSceneProps {
  scene: Scene;
  character: Character;
  sceneText: string;
  visitedScenesCount: number;
  inventory: string[];
  onChoice: (choice: Choice) => void;
  playerName?: string;
  onReset?: () => void;
}

const GameScene: React.FC<GameSceneProps> = ({
  scene,
  character,
  sceneText,
  inventory,
  onChoice,
  playerName,
  onReset,
}) => {
  const { t } = useLanguage();
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [cursorOffset, setCursorOffset] = useState(0);
  const hiddenTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hiddenTextRef.current) {
      const textWidth = hiddenTextRef.current.getBoundingClientRect().width;
      setCursorOffset(textWidth);
    }
  }, [userInput]);

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const normalizedInput = userInput.toLowerCase().trim();

    // Special handling for help command
    if (normalizedInput === 'help' || normalizedInput === 'ayuda') {
      setShowHelp(true);
      setShowInventory(false);
      setUserInput('');
      setErrorMessage('');
      return;
    }

    // Handle inventory check
    const inventoryCommands = [
      'inventory',
      'inv',
      'items',
      'bag',
      'backpack',
      'inventario',
      'objetos',
      'mochila',
    ];
    if (inventoryCommands.includes(normalizedInput)) {
      setShowInventory(true);
      setShowHelp(false);
      setUserInput('');
      return;
    }

    // Handle item examination
    if (normalizedInput.startsWith('examine ') || normalizedInput.startsWith('examinar ')) {
      const itemName = normalizedInput.split(' ')[1];
      const inventoryItem = inventory.find(
        (item) =>
          item.toLowerCase() === itemName || t(`items.${item}`).toLowerCase().includes(itemName)
      );

      if (inventoryItem) {
        setErrorMessage(t(`itemDescriptions.${inventoryItem}.examine`));
        setUserInput('');
        return;
      }
    }

    // Handle item usage
    if (normalizedInput.startsWith('use ') || normalizedInput.startsWith('usar ')) {
      const itemName = normalizedInput.split(' ')[1];
      const inventoryItem = inventory.find(
        (item) =>
          item.toLowerCase() === itemName || t(`items.${item}`).toLowerCase().includes(itemName)
      );

      if (inventoryItem) {
        // Check character restrictions
        const itemRestrictions = {
          staff: 'wizard',
          'fire-sword': 'hero',
          'greek-fire': 'thief',
        };

        if (
          itemRestrictions[inventoryItem as keyof typeof itemRestrictions] &&
          itemRestrictions[inventoryItem as keyof typeof itemRestrictions] !== character.type
        ) {
          setErrorMessage(t(`itemDescriptions.${inventoryItem}.wrongCharacter`));
          setUserInput('');
          return;
        }

        // Check if the current scene has a keyword for using this item
        const textScene = scene as TextInputScene;
        const useKeyword = `use ${itemName}`;
        for (const [keyword, nextScene] of Object.entries(textScene.keywords)) {
          if (keyword.toLowerCase().includes(useKeyword)) {
            setErrorMessage('');
            setShowHelp(false);
            setShowInventory(false);
            onChoice({ text: normalizedInput, nextScene });
            setUserInput('');
            return;
          }
        }

        // If no specific scene interaction, show generic use message
        setErrorMessage(t(`itemDescriptions.${inventoryItem}.canUse`));
        setUserInput('');
        return;
      }
    }

    const textScene = scene as TextInputScene;
    for (const [keyword, nextScene] of Object.entries(textScene.keywords)) {
      if (normalizedInput.includes(keyword)) {
        setErrorMessage('');
        setShowHelp(false);
        setShowInventory(false);
        onChoice({ text: normalizedInput, nextScene });
        setUserInput('');
        return;
      }
    }

    setErrorMessage(t('errorMessage'));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTextInput(e);
    }
  };

  const handleRetry = () => {
    if (onReset) {
      onReset();
    }
  };

  const availableChoices =
    'choices' in scene
      ? scene.choices.filter(
          (choice) => !choice.requiredCharacter || choice.requiredCharacter === character.type
        )
      : [];

  return (
    <>
      <div className={styles.characterDetailsWrapper}>
        <CharacterDetails character={character} playerName={playerName} />
      </div>

      <div className={styles.container}>
        <div className={styles.sceneText}>{sceneText}</div>

        {'type' in scene && scene.type === 'game_over' ? (
          <GameOver onRetry={handleRetry} />
        ) : 'choices' in scene ? (
          <div className={styles.choices} role="menu">
            {availableChoices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onChoice(choice)}
                className={styles.choiceButton}
                role="menuitem"
                tabIndex={0}
              >
                {t(choice.text)}
              </button>
            ))}
          </div>
        ) : (
          <>
            <form onSubmit={handleTextInput} className={styles.textInput}>
              <p>{t(scene.prompt)}</p>
              <div className={styles.textInputWrapper}>
                <div ref={hiddenTextRef} className={styles.hiddenText} aria-hidden="true">
                  {userInput}
                </div>
                <div
                  className={styles.cursor}
                  style={{
                    transform: `translateX(${cursorOffset}px)`,
                  }}
                />
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                    setErrorMessage('');
                  }}
                  onKeyDown={handleKeyPress}
                  placeholder={t('whatToDo_placeholder')}
                  autoFocus
                />
              </div>
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </form>

            <HelpMenu show={showHelp} />
            <InventoryDisplay
              show={showInventory}
              inventory={inventory}
              onClose={() => setShowInventory(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default GameScene;
