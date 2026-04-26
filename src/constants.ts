import { CharacterType } from './types/game';

/** Scene ids for `GameState.currentScene` — story keys plus UI-only routes. */
export const GAME_SCENE = {
  TITLE: 'title',
  ONBOARDING: 'onboarding',
  START: 'start',
  INTRO: 'intro',
  TUTORIAL: 'tutorial',
  SCROLL_EXAMINED: 'scroll_examined',
  SCROLL_TAKEN: 'scroll_taken',
  DOOR_LOCKED: 'door_locked',
  NEXT_CHAMBER: 'next_chamber',
  ATHENA_APPEARS: 'athena_appears',
  HERCULES_QUEST: 'hercules_quest',
  HYDRA_DEFEAT_FIRST: 'hydra_defeat_first',
  HYDRA_DEFEAT_SECOND: 'hydra_defeat_second',
  HYDRA_DEFEAT_FINAL: 'hydra_defeat_final',
  HYDRA_STUDY: 'hydra_study',
  HYDRA_PREPARATION: 'hydra_preparation',
  HYDRA_EQUIPMENT: 'hydra_equipment',
  HYDRA_BATTLE: 'hydra_battle',
  HYDRA_VICTORY: 'hydra_victory',
  DEDALO_QUEST: 'dedalo_quest',
  PERSEPHONE_QUEST: 'persephone_quest',
  QUEST_COMPLETE: 'quest_complete',
} as const;

export type GameSceneId = (typeof GAME_SCENE)[keyof typeof GAME_SCENE];

export const STORAGE_KEY = 'athena-game';

export const ITEM_PICKUP_COMMANDS: Record<string, string[]> = {
  scroll: [
    'take scroll',
    'pick up scroll',
    'grab scroll',
    'get scroll',
    'collect scroll',
    'tomar pergamino',
    'recoger pergamino',
    'agarrar pergamino',
    'coger pergamino',
    'obtener pergamino',
  ],
  staff: [
    'take staff',
    'pick up staff',
    'grab staff',
    'get staff',
    'collect staff',
    'tomar baston',
    'recoger baston',
    'agarrar baston',
    'coger baston',
    'obtener baston',
  ],
};

// Added constants for help and inventory commands
export const HELP_COMMANDS = ['help', 'ayuda', 'command', 'comando', 'commands', 'comandos'];

export const INVENTORY_COMMANDS = [
  'inventory',
  'inv',
  'items',
  'bag',
  'backpack',
  'inventario',
  'objetos',
  'mochila',
];

export const SPECIAL_ACTIONS: Record<CharacterType, { command: string; item: string }> = {
  hero: { command: 'use sword', item: 'fire-sword' },
  wizard: { command: 'use staff', item: 'staff' },
  thief: { command: 'prepare trap', item: 'greek-fire' },
};

export const itemRestrictions = {
  staff: 'wizard',
  'fire-sword': 'hero',
  'greek-fire': 'thief',
};
