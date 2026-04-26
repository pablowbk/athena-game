import React, { useState, useEffect } from 'react';
import { Scene, GameState, Choice, StoryData, CharacterType } from '../types/game';
import { useLanguage } from '../contexts/LanguageContext';
import storyData from '../data/story.json';
import StartScreen from './StartScreen/StartScreen';
import CharacterSelection from './CharacterSelection/CharacterSelection';
import Onboarding from './Onboarding/Onboarding';
import GameScene from './GameScene/GameScene';
import styles from './Game.module.css';
import { STORAGE_KEY, ITEM_PICKUP_COMMANDS, SPECIAL_ACTIONS, GAME_SCENE } from '../constants';

const typedStoryData = storyData as StoryData;

const initialGameState: GameState = {
  currentScene: GAME_SCENE.TITLE,
  inventory: [],
  visitedScenes: new Set(),
};

const Game: React.FC = () => {
  const { t, language } = useLanguage();
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      // Only restore saved state if we're not at title or character selection
      if (parsed.currentScene !== GAME_SCENE.TITLE && parsed.currentScene !== GAME_SCENE.START) {
        return {
          ...parsed,
          visitedScenes: new Set(parsed.visitedScenes),
          currentScene: GAME_SCENE.TITLE,
          savedScene: parsed.currentScene,
        };
      }
    }
    return initialGameState;
  });

  // Save game state to local storage whenever it changes
  useEffect(() => {
    // Don't save state during title screen or character selection
    if (
      gameState.currentScene === GAME_SCENE.TITLE ||
      gameState.currentScene === GAME_SCENE.START ||
      gameState.currentScene === GAME_SCENE.ONBOARDING
    ) {
      return;
    }

    const stateToSave = {
      ...gameState,
      visitedScenes: Array.from(gameState.visitedScenes),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [gameState]);

  useEffect(() => {
    document.title = t('gameTitle');
  }, [language]);

  useEffect(() => {
    const listener = () => handleHardReset();
    window.addEventListener('hardResetGame', listener);
    return () => window.removeEventListener('hardResetGame', listener);
  }, []);

  const currentScene =
    gameState.currentScene === GAME_SCENE.TITLE
      ? null
      : (typedStoryData.scenes[gameState.currentScene] as Scene);

  const handleChoice = (choice: Choice, playerName?: string) => {
    if (gameState.currentScene === GAME_SCENE.START) {
      const characterType = choice.text.toLowerCase().includes('wizard')
        ? 'wizard'
        : choice.text.toLowerCase().includes('hero')
          ? 'hero'
          : 'thief';

      setGameState((prev) => ({
        ...prev,
        currentScene: choice.nextScene,
        character: typedStoryData.characters[characterType as CharacterType],
        visitedScenes: new Set([choice.nextScene]),
        playerName: playerName,
      }));
      return;
    }

    if (choice.requiredCharacter && choice.requiredCharacter !== gameState.character?.type) {
      return;
    }

    const normalizedInput = choice.text.toLowerCase();

    // Handle item pickups
    for (const [item, commands] of Object.entries(ITEM_PICKUP_COMMANDS)) {
      if (commands.includes(normalizedInput)) {
        // For character-specific items, check if the character type matches
        if (item === 'staff' && gameState.character?.type !== 'wizard') {
          continue;
        }

        setGameState((prev) => ({
          ...prev,
          currentScene: choice.nextScene,
          visitedScenes: new Set([...prev.visitedScenes, choice.nextScene]),
          inventory: [...prev.inventory, item],
        }));
        return;
      }
    }

    // Handle special item acquisitions
    if (gameState.character?.type) {
      const specialAction = SPECIAL_ACTIONS[gameState.character.type];
      if (choice.text.includes(specialAction.command)) {
        setGameState((prev) => ({
          ...prev,
          currentScene: choice.nextScene,
          visitedScenes: new Set([...prev.visitedScenes, choice.nextScene]),
          inventory: [...prev.inventory, specialAction.item],
        }));
        return;
      }
    }

    setGameState((prev) => ({
      ...prev,
      currentScene: choice.nextScene,
      visitedScenes: new Set([...prev.visitedScenes, choice.nextScene]),
    }));
  };

  const handleStart = () => {
    // set nextScene to 'start' unless there are are visited scenes in which case we want to get the last visited scene
    const nextScene = gameState.savedScene ? gameState.savedScene : GAME_SCENE.START;
    setGameState((prev) => ({
      ...prev,
      currentScene: nextScene,
      visitedScenes: new Set(),
    }));
  };

  // Soft reset - keeps player name but resets progress
  const handleSoftReset = () => {
    setGameState((prev) => ({
      currentScene: GAME_SCENE.START,
      inventory: [],
      visitedScenes: new Set(),
      playerName: prev.playerName, // Keep the player name
    }));
  };

  // Hard reset - completely resets everything
  const handleHardReset = () => {
    if (window.confirm(t('confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      setGameState(initialGameState);
    }
  };

  const getSceneText = () => {
    if (!currentScene) return '';
    if (
      'characterSpecificText' in currentScene &&
      currentScene.characterSpecificText &&
      gameState.character
    ) {
      const specificText = currentScene.characterSpecificText[gameState.character.type];
      if (specificText) {
        return t(specificText);
      }
    }
    return t(currentScene.text);
  };

  return (
    <div className={styles.Game}>
      {/* bg blob */}
      <div className={styles.blob}></div>
      {/* Game state */}
      {gameState.currentScene === GAME_SCENE.TITLE ? (
        <StartScreen onStart={handleStart} hasSavedGame={!!gameState.savedScene} />
      ) : gameState.currentScene === GAME_SCENE.START ? (
        <CharacterSelection characters={typedStoryData.characters} onSelect={handleChoice} />
      ) : gameState.currentScene === GAME_SCENE.ONBOARDING && gameState.character ? (
        <Onboarding
          onComplete={() =>
            setGameState((prev) => ({
              ...prev,
              currentScene: GAME_SCENE.INTRO,
              visitedScenes: new Set([...prev.visitedScenes, GAME_SCENE.INTRO]),
            }))
          }
        />
      ) : currentScene && gameState.character ? (
        <>
          <GameScene
            scene={currentScene}
            character={gameState.character}
            sceneText={getSceneText()}
            visitedScenesCount={gameState.visitedScenes.size}
            inventory={gameState.inventory}
            onChoice={handleChoice}
            playerName={gameState.playerName}
            onReset={handleSoftReset}
          />
        </>
      ) : null}
    </div>
  );
};

export default Game;
