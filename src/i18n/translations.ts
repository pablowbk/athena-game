export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Game title and description
    gameTitle: 'Text Adventure',
    gameDescription: 'Embark on a mysterious journey where your choices shape the story.',
    startGame: 'Start Adventure',

    // Character selection
    chooseCharacter: 'Choose Your Character',
    playingAs: 'Playing as',
    specialAbility: 'Special Ability',
    enterName: 'Enter your name',
    yourName: 'Your name',
    defaultPlayerName: 'Player',

    // Characters
    wizard: {
      name: 'Wizard',
      description: 'A master of arcane arts, skilled in solving mysteries with magic.',
      ability: 'Can detect magical auras and cast spells',
      choice: 'A wise Wizard, versed in the arcane arts'
    },
    hero: {
      name: 'Hero',
      description: 'A brave warrior, strong in combat and natural leadership.',
      ability: 'Can overcome physical challenges and inspire others',
      choice: 'A brave Hero, skilled in combat'
    },
    thief: {
      name: 'Thief',
      description: 'A cunning rogue, expert in stealth and finding hidden paths.',
      ability: 'Can pick locks and find secret passages',
      choice: 'A cunning Thief, master of stealth'
    },

    // Game UI
    visitedLocations: 'Visited locations',
    inventory: 'Inventory',
    submit: 'Submit',
    whatToDo: 'What do you want to do?',
    whatToDo_placeholder: 'Type a command (verb + object)',
    errorMessage: "I don't understand that command. Try using: examine, take, use, attack, or prepare. Type 'help' for more details.",
    resetGame: 'Reset game',
    confirmReset: 'Are you sure you want to reset the game? All progress will be lost.',

    // Items
    items: {
      scroll: 'Ancient Scroll',
      sword: 'Bronze Sword',
      staff: 'Fire Staff',
      key: 'Celestial Key',
      'fire-sword': 'Fire-Imbued Sword',
      'greek-fire': 'Greek Fire Pots'
    },

    // Item descriptions and restrictions
    itemDescriptions: {
      scroll: {
        description: 'An ancient scroll with mysterious writing. It seems to contain important information.',
        examine: 'The scroll is made of weathered parchment, covered in ancient Greek text with detailed illustrations.',
        canUse: 'Anyone can read this scroll.'
      },
      staff: {
        description: 'A powerful staff crackling with fire magic.',
        examine: 'The staff pulses with magical energy, its tip glowing with barely contained fire.',
        canUse: 'Only a wizard can properly channel this staff\'s magic.',
        wrongCharacter: 'This magical staff requires a wizard\'s expertise to use.'
      },
      'fire-sword': {
        description: 'A sword imbued with sacred fire.',
        examine: 'The blade glows with divine fire, ready to prevent the Hydra\'s regeneration.',
        canUse: 'Only a hero can wield this mighty weapon.',
        wrongCharacter: 'This sacred weapon can only be wielded by a true hero.'
      },
      'greek-fire': {
        description: 'Ancient incendiary weapons, perfect for traps.',
        examine: 'These clay pots contain a mysterious, highly flammable substance. Handle with care!',
        canUse: 'Only a thief knows how to properly set these traps.',
        wrongCharacter: 'Setting these traps requires a thief\'s expertise.'
      }
    },

    // Game Over
    gameOver: {
      title: 'GAME OVER',
      message: 'The Hydra proved too powerful this time. But perhaps another hero, with a different approach, might succeed where you failed...',
      tryAgain: 'Try again'
    },

    // Available commands
    availableCommands: {
      title: 'Available Commands',
      examine: 'examine [object] - Look at something closely',
      take: 'take [object] - Pick up an item',
      use: 'use [object] - Use an item or interact with something',
      attack: 'attack [target] - Engage in combat',
      prepare: 'prepare [action] - Get ready for an action'
    },

    // Command synonyms (for internal use)
    commandSynonyms: {
      examine: ['look at', 'inspect', 'study', 'observe', 'check'],
      take: ['pick up', 'grab', 'get', 'collect'],
      use: ['interact with', 'activate', 'operate', 'trigger', 'open'],
      attack: ['fight', 'strike', 'hit', 'battle'],
      prepare: ['ready', 'set up', 'equip', 'arrange'],
      inventory: ['inv', 'items', 'bag', 'backpack']
    },

    // Inventory messages
    inventoryMessages: {
      title: 'Inventory',
      empty: 'Your inventory is empty.',
      check: 'You check your inventory:',
      carrying: 'You are carrying:',
      usage_hint: 'You can examine or use items by typing "examine [item]" or "use [item]".'
    },

    // Compact command list for UI
    commandList: {
      title: 'Commands:',
      list: [
        'EXAMINE thing',
        'TAKE item',
        'USE object',
        'ATTACK target',
        'PREPARE action'
      ]
    },

    // Prompts and choices
    prompt: {
      what_to_do: "What would you like to do? Try: 'examine scroll', 'take scroll', or 'use door'",
      hydra_quest: "What would you like to do? Try: 'examine hydra', 'prepare weapon', or 'attack hydra'",
      help: "Type 'help' at any time to see available commands"
    },
    choices: {
      step_through: "Step through the door",
      examine_surroundings: 'Examine your surroundings carefully',
      help_hercules: 'Aid Hercules in his battle against the fearsome Hydra',
      help_dedalo: 'Assist Daedalus in navigating the deadly Labyrinth',
      help_persephone: 'Help Persephone escape from the clutches of Hades',
      hercules: {
        study_hydra: 'Study the Hydra\'s behavior and weaknesses',
        prepare_weapons: 'Help prepare weapons and fire for cauterizing the stumps',
        scout_area: 'Scout the area for tactical advantages'
      },
      dedalo: {
        examine_map: 'Examine Daedalus\'s mechanical map of the Labyrinth',
        check_walls: 'Inspect the maze walls for hidden mechanisms',
        listen_sounds: 'Listen for the Minotaur\'s echoing movements'
      },
      persephone: {
        shadow_path: 'Take the hidden path through the shadows',
        challenge_hades: 'Approach Hades\' throne directly',
        find_passage: 'Search for a secret passage into the palace'
      },
      hydra: {
        attack_directly: 'Attack the Hydra\'s heads directly',
        prepare_strategy: 'Take time to prepare a proper strategy',
        get_equipment: 'Gather the necessary equipment',
        face_hydra: 'Face the Hydra in battle',
        use_fire: 'Cast a powerful fire spell to prevent regeneration',
        fire_sword: 'Strike with your fire-imbued sword',
        distract_hydra: 'Execute your trap with the Greek fire pots',
        attack_head: 'Try to cut off a head',
        return_olympus: 'Return to Olympus victorious'
      },
      game_over: {
        try_again: 'Try Again'
      }
    },

    // Scene texts
    scenes: {
      start: {
        text: 'Before your adventure begins, you must choose your path. Who are you?'
      },
      character_chosen: {
        base: 'You find yourself in a small chamber within an ancient temple. Sunlight filters through a high window, illuminating dust motes that dance in the air. The walls are adorned with faded frescoes depicting the gods of Olympus. A wooden table stands in the corner, and upon it rests an old scroll. The only exit is a heavy bronze door.',
        wizard: 'The air tingles with ancient magic, and your arcane senses detect faint traces of protective enchantments woven into the temple\'s stones. A wooden table holds what appears to be a magical scroll.',
        hero: 'Your warrior instincts tell you this is a place of great significance. The temple\'s architecture speaks of strength and endurance. A scroll on a nearby table catches your attention.',
        thief: 'Your keen eyes quickly assess the chamber. The high window could serve as an escape route if needed. More immediately interesting is a scroll on a wooden table - it might be valuable.'
      },
      scroll_examined: {
        text: 'The scroll contains a simple message: \'To proceed on your journey, you must first learn to interact with the world. You may take this scroll with you if you wish - try commands like "take scroll". When you\'re ready to continue, try to "open door".\''
      },
      scroll_taken: {
        text: 'You take the scroll and carefully store it away. It might prove useful later. The bronze door remains the only way forward.'
      },
      door_locked: {
        text: 'The bronze door is heavy but yields to your push. Beyond lies your adventure in the world of ancient Greek myths and legends. Are you ready to proceed?',
        step_through: 'Step through the door'
      },
      next_chamber: {
        base: 'You step into a vast chamber, dimly lit by torches along the walls. The air is heavy with the scent of age and stone. With growing unease, you realize this is no temple - it\'s a prison disguised as one.',
        wizard: 'Your magical senses tingle as you detect powerful binding enchantments woven into the walls. These are divine-level containment spells, meant to hold beings of great power.',
        hero: 'Your battle-trained eyes spot defensive positions and guard posts - all abandoned now, but clearly this place was built to keep people in, not out.',
        thief: 'Your expertise in escape immediately kicks in - you notice the worn patterns in the stone floor, marking where countless prisoners have paced before. The windows are too narrow for escape, and the doors are reinforced with celestial bronze.'
      },
      athena_appears: {
        text: 'The torches flicker and dim as the air grows thick with divine presence. A brilliant light erupts in the center of the chamber, coalescing into the majestic form of Athena, Goddess of Wisdom and Strategic Warfare. Her aegis gleams with otherworldly power, and her grey eyes pierce through you with the weight of millennia.\n\n"MORTAL," her voice resonates through both the chamber and your mind, each word carrying the authority of Olympus itself. "Your presence in this prison was ordained by the Fates themselves. The threads of destiny have been woven with purpose - the gods require a champion, and you have been chosen through divine trial."\n\nShe raises her spear, its tip igniting with celestial fire. "Three heroes stand at the crossroads of fate, each facing a trial that will shape the future of both gods and mortals. You must choose whose call to answer:"'
      },
      hercules_quest: {
        base: 'You find Hercules at the edge of a murky swamp. The legendary hero stands ready for battle, his mighty club resting on his shoulder. In the distance, you can hear the hissing of the Hydra\'s many heads. "The beast grows two heads for each one cut," Hercules explains grimly. "We should study it before attacking."',
        wizard: 'Your magical awareness reveals traces of divine energy emanating from the Hydra - this creature is more than just a monster, it\'s a manifestation of immortal power. Perhaps observing it will reveal its weaknesses.',
        hero: 'Your combat experience tells you this won\'t be a straightforward fight. The swamp terrain will make movement difficult, and the Hydra\'s multiple heads require careful tactical consideration. You should study its movements.',
        thief: 'Your keen eye spots patches of higher ground that could provide tactical advantages, and you notice the Hydra\'s movements follow distinct patterns. Taking time to observe might reveal opportunities.'
      },
      dedalo_quest: {
        base: 'Daedalus greets you at the entrance of his infamous Labyrinth. The genius inventor appears troubled, his hands fidgeting with various mechanical devices. "The Minotaur has learned the maze\'s original paths," he whispers. "We must find a new way through."',
        wizard: 'You sense complex enchantments woven into the Labyrinth\'s walls - magic that shifts and changes the paths. Perhaps these could be manipulated.',
        hero: 'The maze\'s architecture speaks to you - defensive positions, chokepoints, and potential ambush locations are clear to your trained eye.',
        thief: 'Your expertise in navigation reveals subtle marks and signs - previous explorers have left traces that might help guide the way.'
      },
      persephone_quest: {
        base: 'The entrance to the Underworld looms before you - a dark cave emanating cold air and echoing with distant whispers. Demeter\'s instructions were clear: find her daughter Persephone and help her escape Hades\' realm.',
        wizard: 'The boundary between life and death is palpable here. Your magical senses detect the ancient wards that separate the mortal world from the realm of Hades.',
        hero: 'Even your courageous heart feels the weight of this place. But you\'ve faced death before, and your determination only grows stronger.',
        thief: 'The shadows here are different - deeper, more alive. But where there are guards and gates, there are always blind spots to exploit.'
      },
      hydra_study: {
        base: 'You observe the Hydra from a safe distance. Its nine heads move with surprising coordination, and its scales gleam with an unnatural sheen. The swamp around it is littered with bones - evidence of failed attempts to defeat it. You should prepare before engaging it.',
        wizard: 'Your arcane knowledge recalls ancient texts about the Hydra\'s regenerative powers. Fire magic could prevent the heads from regenerating. You should look for a way to harness magical fire.',
        hero: 'Your tactical assessment reveals that conventional weapons alone won\'t work. The heads must be prevented from regenerating - perhaps with fire. There might be a way to prepare your weapon.',
        thief: 'You notice the Hydra\'s heads follow a pattern when attacking. More importantly, you spot several ancient Greek fire pots hidden among the ruins. Setting up a trap could be effective.'
      },
      hydra_preparation: {
        base: 'Hercules nods approvingly at your caution. "Yes, we must prepare properly. The Hydra cannot be defeated by strength alone."',
        wizard: 'You spot an ancient staff crackling with fire magic - perfect for casting spells to cauterize the Hydra\'s wounds. You could take the staff.',
        hero: 'There\'s a brazier nearby where you could imbue your sword with sacred fire. Preparing your sword with fire might be the key.',
        thief: 'You notice several positions where you could place the Greek fire pots for a clever trap. Setting up the trap carefully could give you an advantage.'
      },
      hydra_equipment: {
        base: 'You gather what you need for the battle ahead. Hercules watches approvingly, his own club ready.',
        wizard: 'The fire staff pulses with power in your hands, ready to channel your spells.',
        hero: 'Your sword glows with sacred fire, its heat matching your determination.',
        thief: 'You\'ve carefully arranged the Greek fire pots, creating the perfect setup for your plan.'
      },
      hydra_battle: {
        base: 'The Hydra towers before you, its many heads hissing in anticipation. Hercules stands ready with his club. This is the moment of truth.',
        wizard: 'The staff of fire thrums with power, waiting for your command to unleash its magic. You could cast a fire spell.',
        hero: 'Your sword glows brightly with sacred fire, ready to strike. You could use the fire-imbued weapon.',
        thief: 'Your traps are perfectly positioned. You could trigger them at just the right moment.'
      },
      hydra_victory: {
        base: 'The Hydra falls at last! Hercules beams with pride. "Well done, champion! The gods chose wisely."',
        wizard: 'Your fire magic proved decisive, preventing the Hydra\'s regeneration and ensuring victory.',
        hero: 'Your flaming sword technique was perfect, each strike final and true.',
        thief: 'Your clever use of Greek fire traps worked brilliantly, leading the Hydra to its own defeat.'
      },
      hydra_defeat: {
        first_try: 'The Hydra\'s heads snap at you, but you manage to dodge back. That was close! Perhaps attacking directly isn\'t the best approach...',
        second_try: 'Two heads strike where one did before. You barely escape, your confidence shaken. There must be a better way to defeat this beast.',
        final: 'As you strike the Hydra, two new heads grow where one fell. Overwhelmed by the increasing number of heads, you try to retreat, but it\'s too late.'
      }
    }
  },
  es: {
    // Game title and description
    gameTitle: 'Aventura de Texto',
    gameDescription: 'Embárcate en un viaje misterioso donde tus decisiones dan forma a la historia.',
    startGame: 'Comenzar Aventura',

    // Character selection
    chooseCharacter: 'Elige tu Personaje',
    playingAs: 'Jugando como',
    specialAbility: 'Habilidad Especial',
    enterName: 'Ingresa tu nombre',
    yourName: 'Tu nombre',
    defaultPlayerName: 'Jugador',

    // Characters
    wizard: {
      name: 'Mago',
      description: 'Un maestro de las artes arcanas, experto en resolver misterios con magia.',
      ability: 'Puede detectar auras mágicas y lanzar hechizos',
      choice: 'Un sabio Mago, versado en las artes arcanas'
    },
    hero: {
      name: 'Héroe',
      description: 'Un valiente guerrero, fuerte en combate y con liderazgo natural.',
      ability: 'Puede superar desafíos físicos e inspirar a otros',
      choice: 'Un valiente Héroe, experto en combate'
    },
    thief: {
      name: 'Ladrón',
      description: 'Un pícaro astuto, experto en sigilo y en encontrar caminos ocultos.',
      ability: 'Puede forzar cerraduras y encontrar pasajes secretos',
      choice: 'Un astuto Ladrón, maestro del sigilo'
    },

    // Game UI
    visitedLocations: 'Lugares visitados',
    inventory: 'Inventario',
    submit: 'Enviar',
    whatToDo: '¿Qué quieres hacer?',
    whatToDo_placeholder: 'Escribe un comando (verbo + objeto)',
    errorMessage: "No entiendo ese comando. Intenta usar: examinar, tomar, usar, atacar, o preparar. Escribe 'ayuda' para más detalles.",
    resetGame: 'Reiniciar juego',
    confirmReset: "¿Estás seguro de que quieres reiniciar el juego? Se perderán todos los progresos.",

    // Items
    items: {
      scroll: 'Pergamino Antiguo',
      sword: 'Espada de Bronce',
      staff: 'Bastón de Fuego',
      key: 'Llave Celestial',
      'fire-sword': 'Espada Imbuida de Fuego',
      'greek-fire': 'Vasijas de Fuego Griego'
    },

    // Item descriptions and restrictions in Spanish
    itemDescriptions: {
      scroll: {
        description: 'Un pergamino antiguo con escritura misteriosa. Parece contener información importante.',
        examine: 'El pergamino está hecho de pergamino desgastado, cubierto de texto griego antiguo con ilustraciones detalladas.',
        canUse: 'Cualquiera puede leer este pergamino.'
      },
      staff: {
        description: 'Un poderoso bastón que crepita con magia de fuego.',
        examine: 'El bastón pulsa con energía mágica, su punta brillando con fuego apenas contenido.',
        canUse: 'Solo un mago puede canalizar apropiadamente la magia de este bastón.',
        wrongCharacter: 'Este bastón mágico requiere la experiencia de un mago para usarlo.'
      },
      'fire-sword': {
        description: 'Una espada imbuida con fuego sagrado.',
        examine: 'La hoja brilla con fuego divino, lista para prevenir la regeneración de la Hidra.',
        canUse: 'Solo un héroe puede empuñar esta poderosa arma.',
        wrongCharacter: 'Esta arma sagrada solo puede ser empuñada por un verdadero héroe.'
      },
      'greek-fire': {
        description: 'Armas incendiarias antiguas, perfectas para trampas.',
        examine: 'Estas vasijas de arcilla contienen una sustancia misteriosa y altamente inflamable. ¡Manejar con cuidado!',
        canUse: 'Solo un ladrón sabe cómo colocar estas trampas correctamente.',
        wrongCharacter: 'Colocar estas trampas requiere la experiencia de un ladrón.'
      }
    },

    // Game Over
    gameOver: {
      title: 'FIN DEL JUEGO',
      message: 'La Hidra demostró ser demasiado poderosa esta vez. Pero quizás otro héroe, con un enfoque diferente, podría tener éxito donde tú fallaste...',
      tryAgain: 'Intentar de nuevo'
    },

    // Available commands
    availableCommands: {
      title: 'Comandos Disponibles',
      examine: 'examinar [objeto] - Mirar algo detenidamente',
      take: 'tomar [objeto] - Recoger un objeto',
      use: 'usar [objeto] - Usar un objeto o interactuar con algo',
      attack: 'atacar [objetivo] - Entrar en combate',
      prepare: 'preparar [acción] - Prepararse para una acción'
    },

    // Command synonyms (for internal use)
    commandSynonyms: {
      examine: ['mirar', 'inspeccionar', 'estudiar', 'observar', 'revisar'],
      take: ['recoger', 'agarrar', 'coger', 'obtener', 'tomar'],
      use: ['utilizar', 'activar', 'operar', 'accionar', 'abrir'],
      attack: ['luchar', 'golpear', 'combatir', 'pelear'],
      prepare: ['alistar', 'equipar', 'disponer', 'arreglar'],
      inventory: ['inv', 'objetos', 'mochila', 'inventario']
    },

    // Inventory messages in Spanish
    inventoryMessages: {
      title: 'Inventario',
      empty: 'Tu inventario está vacío.',
      check: 'Revisas tu inventario:',
      carrying: 'Estás llevando:',
      usage_hint: 'Puedes examinar o usar objetos escribiendo "examinar [objeto]" o "usar [objeto]".'
    },

    // Compact command list for UI
    commandList: {
      title: 'Comandos:',
      list: [
        'EXAMINAR objeto',
        'TOMAR objeto',
        'USAR objeto',
        'ATACAR objetivo',
        'PREPARAR acción'
      ]
    },

    // Prompts and choices
    prompt: {
      what_to_do: "¿Qué quieres hacer? Prueba: 'examinar pergamino', 'tomar pergamino', o 'usar puerta'",
      hydra_quest: "¿Qué quieres hacer? Prueba: 'examinar hidra', 'preparar arma', o 'atacar hidra'",
      help: "Escribe 'ayuda' en cualquier momento para ver los comandos disponibles"
    },
    choices: {
      step_through: "Atravesar la puerta",
      examine_surroundings: 'Examinar los alrededores cuidadosamente',
      help_hercules: 'Ayudar a Hércules en su batalla contra la temible Hidra',
      help_dedalo: 'Asistir a Dédalo en la navegación del mortal Laberinto',
      help_persephone: 'Ayudar a Perséfone a escapar de las garras de Hades',
      hercules: {
        study_hydra: 'Estudiar el comportamiento y debilidades de la Hidra',
        prepare_weapons: 'Ayudar a preparar armas y fuego para cauterizar los muñones',
        scout_area: 'Explorar el área en busca de ventajas tácticas'
      },
      dedalo: {
        examine_map: 'Examinar el mapa mecánico del Laberinto de Dédalo',
        check_walls: 'Inspeccionar las paredes del laberinto en busca de mecanismos ocultos',
        listen_sounds: 'Escuchar los movimientos resonantes del Minotauro'
      },
      persephone: {
        shadow_path: 'Tomar el camino oculto a través de las sombras',
        challenge_hades: 'Aproximarse directamente al trono de Hades',
        find_passage: 'Buscar un pasaje secreto hacia el palacio'
      },
      hydra: {
        attack_directly: 'Atacar directamente las cabezas de la Hidra',
        prepare_strategy: 'Tomar tiempo para preparar una estrategia adecuada',
        get_equipment: 'Reunir el equipo necesario',
        face_hydra: 'Enfrentar a la Hidra en batalla',
        use_fire: 'Lanzar un poderoso hechizo de fuego para prevenir la regeneración',
        fire_sword: 'Golpear con tu espada imbuida de fuego',
        distract_hydra: 'Ejecutar tu trampa con las vasijas de fuego griego',
        attack_head: 'Intentar cortar una cabeza',
        return_olympus: 'Regresar victorioso al Olimpo'
      },
      game_over: {
        try_again: 'Elegir un Nuevo Héroe'
      }
    },

    // Scene texts
    scenes: {
      start: {
        text: 'Antes de que comience tu aventura, debes elegir tu camino. ¿Quién eres?'
      },
      character_chosen: {
        base: 'Te encuentras en una pequeña cámara dentro de un antiguo templo. La luz del sol se filtra por una ventana alta, iluminando motas de polvo que danzan en el aire. Las paredes están adornadas con frescos descoloridos que representan a los dioses del Olimpo. Una mesa de madera se encuentra en la esquina, y sobre ella descansa un viejo pergamino. La única salida es una pesada puerta de bronce.',
        wizard: 'El aire vibra con magia antigua, y tus sentidos arcanos detectan tenues rastros de encantamientos protectores tejidos en las piedras del templo. Una mesa de madera sostiene lo que parece ser un pergamino mágico.',
        hero: 'Tus instintos de guerrero te dicen que este es un lugar de gran importancia. La arquitectura del templo habla de fuerza y resistencia. Un pergamino en una mesa cercana llama tu atención.',
        thief: 'Tus ojos agudos evalúan rápidamente la cámara. La ventana alta podría servir como ruta de escape si fuera necesario. Más interesante es un pergamino sobre una mesa de madera - podría ser valioso.'
      },
      scroll_examined: {
        text: 'El pergamino contiene un mensaje simple: \'Para continuar tu viaje, primero debes aprender a interactuar con el mundo. Puedes llevar este pergamino contigo si lo deseas - prueba comandos como "tomar pergamino". Cuando estés listo para continuar, intenta "abrir puerta".\''
      },
      scroll_taken: {
        text: 'Tomas el pergamino y lo guardas cuidadosamente. Podría ser útil más adelante. La puerta de bronce sigue siendo el único camino hacia adelante.'
      },
      door_locked: {
        text: 'La puerta de bronce es pesada pero cede a tu empuje. Más allá se encuentra tu aventura en el mundo de los mitos y leyendas de la antigua Grecia. ¿Estás listo para continuar?',
        step_through: 'Atravesar la puerta'
      },
      next_chamber: {
        base: 'Entras en una vasta cámara, tenuemente iluminada por antorchas a lo largo de las paredes. El aire está cargado con el aroma de la antigüedad y la piedra. Con creciente inquietud, te das cuenta de que esto no es un templo - es una prisión disfrazada.',
        wizard: 'Tus sentidos mágicos se estremecen al detectar poderosos encantamientos de atadura tejidos en las paredes. Estos son hechizos de contención de nivel divino, destinados a contener seres de gran poder.',
        hero: 'Tus ojos entrenados para la batalla detectan posiciones defensivas y puestos de guardia - todos abandonados ahora, pero claramente este lugar fue construido para mantener a la gente dentro, no fuera.',
        thief: 'Tu experiencia en escapes se activa inmediatamente - notas los patrones desgastados en el suelo de piedra, marcando donde innumerables prisioneros han caminado antes. Las ventanas son demasiado estrechas para escapar, y las puertas están reforzadas con bronce celestial.'
      },
      athena_appears: {
        text: 'Las antorchas parpadean y se atenúan mientras el aire se vuelve denso con presencia divina. Una luz brillante erupciona en el centro de la cámara, transformándose en la majestuosa forma de Atenea, Diosa de la Sabiduría y la Guerra Estratégica. Su égida resplandece con poder sobrenatural, y sus ojos grises te atraviesan con el peso de milenios.\n\n"MORTAL," su voz resuena tanto en la cámara como en tu mente, cada palabra portando la autoridad del Olimpo mismo. "Tu presencia en esta prisión fue ordenada por las Moiras. Los hilos del destino han sido tejidos con propósito - los dioses requieren un campeón, y tú has sido elegido mediante prueba divina."\n\nLevanta su lanza, cuya punta se enciende con fuego celestial. "Tres héroes se encuentran en la encrucijada del destino, cada uno enfrentando una prueba que moldeará el futuro tanto de dioses como de mortales. Debes elegir a cuál responder:"'
      },
      hercules_quest: {
        base: 'Encuentras a Hércules al borde de un pantano oscuro. El legendario héroe está listo para la batalla, su poderosa clava descansando sobre su hombro. En la distancia, puedes oír el siseo de las múltiples cabezas de la Hidra. "La bestia crece dos cabezas por cada una cortada," explica Hércules sombríamente. "Deberíamos estudiarla antes de atacar."',
        wizard: 'Tu conciencia mágica revela rastros de energía divina emanando de la Hidra - esta criatura es más que un monstruo, es una manifestación de poder inmortal. Quizás observarla revele sus debilidades.',
        hero: 'Tu experiencia en combate te dice que esta no será una pelea directa. El terreno pantanoso dificultará el movimiento, y las múltiples cabezas de la Hidra requieren una consideración táctica cuidadosa. Deberías estudiar sus movimientos.',
        thief: 'Tu ojo agudo detecta zonas de terreno elevado que podrían proporcionar ventajas tácticas, y notas que los movimientos de la Hidra siguen patrones distintos. Tomar tiempo para observar podría revelar oportunidades.'
      },
      dedalo_quest: {
        base: 'Dédalo te recibe en la entrada de su infame Laberinto. El genio inventor parece preocupado, sus manos jugueteando con varios dispositivos mecánicos. "El Minotauro ha aprendido los caminos originales del laberinto," susurra. "Debemos encontrar una nueva ruta."',
        wizard: 'Percibes complejos encantamientos tejidos en las paredes del Laberinto - magia que cambia y altera los caminos. Quizás podrían ser manipulados.',
        hero: 'La arquitectura del laberinto te habla - posiciones defensivas, puntos de estrangulamiento y posibles lugares de emboscada son claros para tu ojo entrenado.',
        thief: 'Tu experiencia en navegación revela marcas y señales sutiles - exploradores anteriores han dejado rastros que podrían ayudar a guiar el camino.'
      },
      persephone_quest: {
        base: 'La entrada al Inframundo se alza ante ti - una cueva oscura que emana aire frío y resuena con susurros distantes. Las instrucciones de Deméter fueron claras: encuentra a su hija Perséfone y ayúdala a escapar del reino de Hades.',
        wizard: 'La frontera entre la vida y la muerte es palpable aquí. Tus sentidos mágicos detectan las antiguas protecciones que separan el mundo mortal del reino de Hades.',
        hero: 'Incluso tu corazón valiente siente el peso de este lugar. Pero has enfrentado a la muerte antes, y tu determinación solo se hace más fuerte.',
        thief: 'Las sombras aquí son diferentes - más profundas, más vivas. Pero donde hay guardias y puertas, siempre hay puntos ciegos que explotar.'
      },
      hydra_study: {
        base: 'Observas a la Hidra desde una distancia segura. Sus nueve cabezas se mueven con sorprendente coordinación, y sus escamas brillan con un resplandor antinatural. El pantano a su alrededor está lleno de huesos - evidencia de intentos fallidos por derrotarla. Deberías prepararte antes de enfrentarla.',
        wizard: 'Tu conocimiento arcano recuerda antiguos textos sobre los poderes regenerativos de la Hidra. La magia de fuego podría evitar que las cabezas se regeneren. Deberías buscar una forma de utilizar fuego mágico.',
        hero: 'Tu evaluación táctica revela que las armas convencionales no funcionarán. Las cabezas deben ser impedidas de regenerarse - quizás con fuego. Podría haber una forma de preparar tu arma.',
        thief: 'Notas que las cabezas de la Hidra siguen un patrón al atacar. Más importante aún, detectas varias vasijas de fuego griego ocultas entre las ruinas. Preparar una trampa podría ser efectivo.'
      },
      hydra_preparation: {
        base: 'Hércules asiente aprobando tu cautela. "Sí, debemos prepararnos adecuadamente. La Hidra no puede ser derrotada solo con fuerza."',
        wizard: 'Detectas un antiguo bastón crepitando con magia de fuego - perfecto para lanzar hechizos que cauterizarán las heridas de la Hidra. Podrías tomar el bastón.',
        hero: 'Hay un brasero cerca donde podrías imbuir tu espada con fuego sagrado. Preparar tu espada con fuego podría ser la clave.',
        thief: 'Notas varias posiciones donde podrías colocar las vasijas de fuego griego para una trampa ingeniosa. Preparar la trampa cuidadosamente podría darte una ventaja.'
      },
      hydra_equipment: {
        base: 'Reúnes lo necesario para la batalla que se avecina. Hércules observa con aprobación, su propia clava lista.',
        wizard: 'El bastón de fuego pulsa con poder en tus manos, listo para canalizar tus hechizos.',
        hero: 'Tu espada brilla con fuego sagrado, su calor igualando tu determinación.',
        thief: 'Has dispuesto cuidadosamente las vasijas de fuego griego, creando la preparación perfecta para tu plan.'
      },
      hydra_battle: {
        base: 'La Hidra se alza ante ti, sus múltiples cabezas silbando en anticipación. Hércules está listo con su clava. Este es el momento de la verdad.',
        wizard: 'El bastón de fuego vibra con poder, esperando tu orden para desatar su magia. Podrías lanzar un hechizo de fuego.',
        hero: 'Tu espada brilla intensamente con fuego sagrado, lista para golpear. Podrías usar el arma imbuida con fuego.',
        thief: 'Tus trampas están perfectamente posicionadas. Podrías activarlas en el momento justo.'
      },
      hydra_victory: {
        base: '¡La Hidra cae por fin! Hércules sonríe con orgullo. "¡Bien hecho, campeón! Los dioses eligieron sabiamente."',
        wizard: 'Tu magia de fuego fue decisiva, previniendo la regeneración de la Hidra y asegurando la victoria.',
        hero: 'Tu técnica con la espada llameante fue perfecta, cada golpe final y certero.',
        thief: 'Tu uso ingenioso de las trampas de fuego griego funcionó brillantemente, llevando a la Hidra a su propia derrota.'
      },
      hydra_defeat: {
        first_try: 'Las cabezas de la Hidra te atacan, pero logras esquivarlas. ¡Eso estuvo cerca! Quizás atacar directamente no sea la mejor estrategia...',
        second_try: 'Dos cabezas atacan donde antes había una. Apenas escapas, tu confianza se tambalea. Debe haber una mejor manera de derrotar a esta bestia.',
        final: 'Mientras golpeas a la Hidra, dos nuevas cabezas crecen donde una cayó. Abrumado por el creciente número de cabezas, intentas retirarte, pero es demasiado tarde.'
      }
    }
  }
}; 