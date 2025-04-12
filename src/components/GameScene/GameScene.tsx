import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Scene, Character, Choice, TextInputScene, MultipleChoiceScene } from '../../types/game';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { GameOver } from '../GameOver';
import { HelpMenu } from '../HelpMenu';
import { InventoryDisplay } from '../InventoryDisplay';
import PromptContainer from '../PromptContainer/PromptContainer';
import ChoicesContainer from '../ChoicesContainer/ChoicesContainer';
import styles from './GameScene.module.css';
import cs from 'classnames';
import SceneText from './SceneText';
import { HELP_COMMANDS, INVENTORY_COMMANDS, itemRestrictions } from '../../constants';
import useAuxDisplay from '../../hooks/useAuxDisplay';

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
  const [cursorOffset, setCursorOffset] = useState(0);
  const hiddenTextRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(false);
  const scenePromptRef = useRef<HTMLInputElement>(null);

  const { showHelp, showInventory, hideAuxDisplay, toggleHelp, toggleInventory } = useAuxDisplay();

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const normalizedInput = userInput.toLowerCase().trim();

    // Special handling for help command
    if (HELP_COMMANDS.includes(normalizedInput)) {
      toggleHelp();
      setUserInput('');
      setErrorMessage('');
      return;
    }

    // Handle inventory check
    if (INVENTORY_COMMANDS.includes(normalizedInput)) {
      toggleInventory();
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
      } else {
        setErrorMessage(t('errorMessage'));
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
            hideAuxDisplay();
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
        hideAuxDisplay();
        onChoice({ text: normalizedInput, nextScene });
        setUserInput('');
        return;
      }
    }

    setErrorMessage(t('errorMessage'));
    setUserInput('');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setErrorMessage('');
  };

  const memoizedCharacterDetails = useMemo(
    () => <CharacterDetails character={character} playerName={playerName} />,
    [character, playerName, t]
  );

  useEffect(() => {
    if (hiddenTextRef.current) {
      const textWidth = hiddenTextRef.current.getBoundingClientRect().width;
      setCursorOffset(textWidth);
    }
  }, [userInput]);

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
  }, [scene]);

  return (
    <>
      {/* Character Details */}
      <div className={`${styles.characterDetailsWrapper} ${fade ? 'fadeIn' : 'fadeOut'}`}>
        {memoizedCharacterDetails}
      </div>

      {/* GAMEOVER */}
      {'type' in scene && scene.type === 'game_over' && <GameOver onRetry={handleRetry} />}

      {/* Scene container */}
      <div className={`${styles.GameScene} ${fade ? 'fadeIn' : 'fadeOut'}`}>
        <SceneText sceneText={sceneText} />

        {'choices' in scene ? (
          <ChoicesContainer
            character={character}
            onChoice={onChoice}
            scene={scene as MultipleChoiceScene}
          />
        ) : (
          <PromptContainer
            cursorOffset={cursorOffset}
            errorMessage={errorMessage}
            handleInputChange={handleInputChange}
            handleKeyPress={handleKeyPress}
            handleTextInput={handleTextInput}
            hiddenTextRef={hiddenTextRef}
            scene={scene as TextInputScene}
            scenePromptRef={scenePromptRef}
            userInput={userInput}
          />
        )}
      </div>

      {/* Aux display */}
      <div className={cs(styles.auxDisplay, { fadeIn: fade })}>
        {(showHelp || showInventory) && (
          <div className={styles.backdrop} onClick={hideAuxDisplay}></div>
        )}
        {/* Show Help */}
        <HelpMenu show={showHelp} onClose={hideAuxDisplay} />
        {/* Show Inventory */}
        <InventoryDisplay show={showInventory} inventory={inventory} onClose={hideAuxDisplay} />
      </div>
    </>
  );
};

export default GameScene;
