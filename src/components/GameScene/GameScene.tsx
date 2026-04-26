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
import SceneText from './SceneText';
import {
  HELP_COMMANDS,
  INVENTORY_COMMANDS,
  itemRestrictions,
  HYDRA_VICTORY_KEYWORD_REQUIRED_ITEM,
  SCENE_HYDRA_DEFEAT_FINAL,
  SCENE_HYDRA_VICTORY,
} from '../../constants';
import useAuxDisplay from '../../hooks/useAuxDisplay';

interface GameSceneProps {
  scene: Scene;
  /** Story scene id (e.g. `hydra_battle`) for inventory gates and failure retry. */
  sceneId: string;
  character: Character;
  sceneText: string;
  visitedScenesCount: number;
  inventory: string[];
  onChoice: (choice: Choice) => void;
  playerName?: string;
  onReset?: () => void;
  /** Return to Athena quest choice after Hydra game over (design: bad-ending recovery). */
  onHydraFailureRetry?: () => void;
}

const GameScene: React.FC<GameSceneProps> = ({
  scene,
  sceneId,
  character,
  sceneText,
  inventory,
  onChoice,
  playerName,
  onReset,
  onHydraFailureRetry,
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

    // Story keywords first (tutorial "examinar pergamino", door, myth commands) so they are not
    // swallowed by generic inventory examine/use handlers when the item is not in inventory yet.
    const textScene = scene as TextInputScene;
    for (const [keyword, nextScene] of Object.entries(textScene.keywords)) {
      if (!normalizedInput.includes(keyword)) continue;

      if (nextScene === SCENE_HYDRA_VICTORY) {
        const required = HYDRA_VICTORY_KEYWORD_REQUIRED_ITEM[keyword];
        if (!required || !inventory.includes(required)) {
          setErrorMessage('');
          hideAuxDisplay();
          onChoice({ text: normalizedInput, nextScene: SCENE_HYDRA_DEFEAT_FINAL });
          setUserInput('');
          return;
        }
      }

      setErrorMessage('');
      hideAuxDisplay();
      onChoice({ text: normalizedInput, nextScene });
      setUserInput('');
      return;
    }

    // Handle item examination (inventory only — world objects use scene keywords above)
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

        const useKeyword = `use ${itemName}`;
        for (const [keyword, nextScene] of Object.entries(textScene.keywords)) {
          if (keyword.toLowerCase().includes(useKeyword)) {
            if (nextScene === SCENE_HYDRA_VICTORY) {
              const required = HYDRA_VICTORY_KEYWORD_REQUIRED_ITEM[keyword];
              if (!required || !inventory.includes(required)) {
                setErrorMessage('');
                hideAuxDisplay();
                onChoice({ text: normalizedInput, nextScene: SCENE_HYDRA_DEFEAT_FINAL });
                setUserInput('');
                return;
              }
            }
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
    if (sceneId === SCENE_HYDRA_DEFEAT_FINAL && onHydraFailureRetry) {
      onHydraFailureRetry();
      return;
    }
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
      {'type' in scene && scene.type === 'game_over' && (
        <GameOver onRetry={handleRetry} isHydraFailure={sceneId === SCENE_HYDRA_DEFEAT_FINAL} />
      )}

      {/* Scene container */}
      <div className={`${styles.GameScene} ${fade ? 'fadeIn' : 'fadeOut'}`}>
        <SceneText sceneText={sceneText} />

        {'type' in scene && scene.type === 'text_input' ? (
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
        ) : 'choices' in scene && scene.choices && scene.choices.length > 0 ? (
          <ChoicesContainer
            character={character}
            onChoice={onChoice}
            scene={scene as MultipleChoiceScene}
          />
        ) : null}
      </div>

      {/* Aux display */}
      {(showHelp || showInventory) && (
        <div className={styles.auxDisplay}>
          {/* Backdrop overlay */}
          <div className={styles.backdrop} onClick={hideAuxDisplay}></div>
          {/* Show Help */}
          <HelpMenu show={showHelp} onClose={hideAuxDisplay} />
          {/* Show Inventory */}
          <InventoryDisplay show={showInventory} inventory={inventory} onClose={hideAuxDisplay} />
        </div>
      )}
    </>
  );
};

export default GameScene;
