import { CharacterType } from './types/game';

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
