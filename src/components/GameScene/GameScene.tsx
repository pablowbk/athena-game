import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Scene,
  Character,
  Choice,
  TextInputScene,
  MultipleChoiceScene,
  CharacterType,
} from '../../types/game';
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
  isExamineSurroundingsCommand,
} from '../../constants';
import useAuxDisplay from '../../hooks/useAuxDisplay';

function resolveExamineSurroundingsMessage(
  t: (key: string) => string,
  sceneId: string,
  characterType: CharacterType
): string {
  const charKey = `scenes.${sceneId}.examine_${characterType}`;
  if (t(charKey) !== charKey) return t(charKey);
  const baseKey = `scenes.${sceneId}.examine`;
  if (t(baseKey) !== baseKey) return t(baseKey);
  return t('examineSurroundings.fallback');
}

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
  /** Full reset to title (confirm in parent). Shown on Hydra final defeat. */
  onFullReset?: () => void;
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
  onFullReset,
}) => {
  const { t } = useLanguage();
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  /** Shown inside the main scene panel (not below the prompt). */
  const [examineSurroundingsDetail, setExamineSurroundingsDetail] = useState<string | null>(null);
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
      setExamineSurroundingsDetail(null);
      return;
    }

    // Handle inventory check
    if (INVENTORY_COMMANDS.includes(normalizedInput)) {
      toggleInventory();
      setUserInput('');
      setExamineSurroundingsDetail(null);
      return;
    }

    const textScene = scene as TextInputScene;

    // Story keywords first (tutorial "examinar pergamino", door, myth commands) so they are not
    // swallowed by generic inventory examine/use handlers when the item is not in inventory yet.
    for (const [keyword, nextScene] of Object.entries(textScene.keywords)) {
      if (!normalizedInput.includes(keyword)) continue;

      if (nextScene === SCENE_HYDRA_VICTORY) {
        const required = HYDRA_VICTORY_KEYWORD_REQUIRED_ITEM[keyword];
        if (!required || !inventory.includes(required)) {
          setErrorMessage('');
          hideAuxDisplay();
          setExamineSurroundingsDetail(null);
          onChoice({ text: normalizedInput, nextScene: SCENE_HYDRA_DEFEAT_FINAL });
          setUserInput('');
          return;
        }
      }

      setErrorMessage('');
      hideAuxDisplay();
      setExamineSurroundingsDetail(null);
      onChoice({ text: normalizedInput, nextScene });
      setUserInput('');
      return;
    }

    if (isExamineSurroundingsCommand(normalizedInput)) {
      setExamineSurroundingsDetail(resolveExamineSurroundingsMessage(t, sceneId, character.type));
      setErrorMessage('');
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
        setExamineSurroundingsDetail(null);
        setErrorMessage(t(`itemDescriptions.${inventoryItem}.examine`));
        setUserInput('');
        return;
      } else {
        setExamineSurroundingsDetail(null);
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
          setExamineSurroundingsDetail(null);
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
                setExamineSurroundingsDetail(null);
                onChoice({ text: normalizedInput, nextScene: SCENE_HYDRA_DEFEAT_FINAL });
                setUserInput('');
                return;
              }
            }
            setErrorMessage('');
            hideAuxDisplay();
            setExamineSurroundingsDetail(null);
            onChoice({ text: normalizedInput, nextScene });
            setUserInput('');
            return;
          }
        }

        // If no specific scene interaction, show generic use message
        setExamineSurroundingsDetail(null);
        setErrorMessage(t(`itemDescriptions.${inventoryItem}.canUse`));
        setUserInput('');
        return;
      }
    }

    setExamineSurroundingsDetail(null);
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

  useEffect(() => {
    setUserInput('');
    setErrorMessage('');
    setExamineSurroundingsDetail(null);
  }, [sceneId]);

  return (
    <>
      {/* Character Details */}
      <div className={`${styles.characterDetailsWrapper} ${fade ? 'fadeIn' : 'fadeOut'}`}>
        {memoizedCharacterDetails}
      </div>

      {/* GAMEOVER */}
      {'type' in scene && scene.type === 'game_over' && (
        <GameOver
          onRetry={handleRetry}
          isHydraFailure={sceneId === SCENE_HYDRA_DEFEAT_FINAL}
          onFullReset={sceneId === SCENE_HYDRA_DEFEAT_FINAL ? onFullReset : undefined}
        />
      )}

      {/* Scene container */}
      <div className={`${styles.GameScene} ${fade ? 'fadeIn' : 'fadeOut'}`}>
        <SceneText sceneText={sceneText} examineDetail={examineSurroundingsDetail} />

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
