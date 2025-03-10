export type CharacterType = 'wizard' | 'hero' | 'thief';

export interface Character {
  type: CharacterType;
  description: string;
  specialAbility: string;
  imagePath: string;
}

export interface Choice {
  text: string;
  nextScene: string;
  requiredCharacter?: CharacterType;
}

export interface GameOverScene {
  text: string;
  type: 'game_over';
  isGameOver: boolean;
  characterSpecificText?: Partial<Record<CharacterType, string>>;
}

export interface TextInputScene {
  text: string;
  type: 'text_input';
  prompt: string;
  keywords: Record<string, string>;
  characterSpecificText?: Partial<Record<CharacterType, string>>;
}

export interface MultipleChoiceScene {
  text: string;
  choices: Choice[];
  characterSpecificText?: Partial<Record<CharacterType, string>>;
}

export type Scene = TextInputScene | MultipleChoiceScene | GameOverScene;

export interface GameState {
  currentScene: string;
  inventory: string[];
  visitedScenes: Set<string>;
  character?: Character;
  playerName?: string;
}

export interface StoryData {
  scenes: Record<string, Scene>;
  characters: Record<CharacterType, Character>;
} 