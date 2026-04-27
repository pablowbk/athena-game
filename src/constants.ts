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

/** Phrases that show `scenes.<sceneId>.examine` (and optional `examine_<character>`) without advancing. */
const EXAMINE_SURROUNDINGS_EXACT = new Set([
  'examine',
  'examinar',
  'look',
  'look around',
  'inspect',
  'survey',
  'scan',
  'mirar',
  'mirar alrededor',
  'observar',
  'examinar alrededores',
  'inspeccionar',
]);

const EXAMINE_SURROUNDINGS_TARGETS = new Set([
  'room',
  'surroundings',
  'area',
  'chamber',
  'place',
  'around',
  'alrededores',
  'alrededor',
  'habitacion',
  'habitación',
  'cámara',
  'camara',
  'sala',
  'entorno',
  'lugar',
]);

export function isExamineSurroundingsCommand(normalizedInput: string): boolean {
  if (EXAMINE_SURROUNDINGS_EXACT.has(normalizedInput)) return true;
  const parts = normalizedInput.split(/\s+/).filter(Boolean);
  if (parts.length !== 2) return false;
  const [verb, target] = parts;
  if (!EXAMINE_SURROUNDINGS_TARGETS.has(target)) return false;
  if (['examine', 'examinar', 'inspect', 'survey', 'scan'].includes(verb)) return true;
  if (verb === 'look' && (target === 'around' || target === 'room')) return true;
  if (verb === 'mirar' || verb === 'observar') return true;
  return false;
}

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

/** Myth items used at the Hydra finale; removed on victory or failure retry. */
export const MYTH_HYDRA_ITEM_IDS = ['staff', 'fire-sword', 'greek-fire'] as const;
export type MythHydraItemId = (typeof MYTH_HYDRA_ITEM_IDS)[number];

/**
 * Keywords in `hydra_battle` that lead to victory — each requires the matching inventory id.
 * Keeps parser synonyms from bypassing inventory (e.g. "activate staff" without the staff).
 */
export const HYDRA_VICTORY_KEYWORD_REQUIRED_ITEM: Record<string, MythHydraItemId> = {
  'use staff': 'staff',
  'activate staff': 'staff',
  'operate staff': 'staff',
  'usar baston': 'staff',
  'utilizar baston': 'staff',
  'activar baston': 'staff',
  'use sword': 'fire-sword',
  'activate sword': 'fire-sword',
  'operate sword': 'fire-sword',
  'usar espada': 'fire-sword',
  'utilizar espada': 'fire-sword',
  'activar espada': 'fire-sword',
  'use trap': 'greek-fire',
  'activate trap': 'greek-fire',
  'trigger trap': 'greek-fire',
  'usar trampa': 'greek-fire',
  'utilizar trampa': 'greek-fire',
  'activar trampa': 'greek-fire',
};

export const SCENE_HYDRA_DEFEAT_FINAL = 'hydra_defeat_final';
export const SCENE_HYDRA_VICTORY = 'hydra_victory';
export const SCENE_ATHENA_QUEST = 'athena_appears';
