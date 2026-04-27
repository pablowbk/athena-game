export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Game title and description
    gameTitle: "Athena's Challenge",
    gameDescription: 'Embark on a mysterious journey where your choices shape the story.',
    startGame: 'Start Adventure',
    continueGame: 'Resume Adventure',

    // Character selection
    chooseCharacter: 'Choose Your Character',
    playingAs: 'Playing as',
    specialAbility: 'Special Ability',
    enterName: 'Enter your name',
    yourName: 'Your name',
    yourName_error: 'Please enter a name.',
    defaultPlayerName: 'Player',
    skipTutorial: 'I already know the basics — skip the onboarding',

    onboarding: {
      progressLabel: 'Onboarding step',
      step1Title: 'How the adventure works',
      step1a:
        'The story unfolds in scenes. Sometimes you pick an option from the text; other times you type what you want to do in your own words.',
      step1b: 'Your character and the items you collect can open different paths. Read carefully and experiment.',
      step2Title: 'The command prompt',
      step2a:
        'At the bottom of the screen you will see a prompt asking what you want to do. Type a short command and press Enter to act.',
      step2b: "If the game does not understand, try rephrasing or type 'help' to see example commands.",
      step2c: 'Commands like examine, take, use, and attack often work, and synonyms are accepted in many places.',
      step3Title: 'Inventory and progress',
      step3a: 'You can type inventory or inv to review what items you are carrying.',
      step3b:
        'Your progress will be saved whenever you advance to the next scene, in case you want to resume your adventure later.',
      step3c: 'It is time to begin. May Athena guide you on your journey.',
      next: 'Next',
      back: 'Back',
      begin: 'Begin adventure',
    },

    // Characters
    wizard: {
      name: 'Wizard',
      description: 'A master of arcane arts, skilled in solving mysteries with magic.',
      ability: 'Can detect magical auras and cast spells',
      choice: 'A wise Wizard, versed in the arcane arts',
    },
    hero: {
      name: 'Hero',
      description: 'A brave warrior, strong in combat and with a gift for leadership.',
      ability: 'Can overcome physical challenges and inspire others',
      choice: 'A brave Hero, skilled in combat',
    },
    thief: {
      name: 'Thief',
      description: 'A cunning rogue, expert in stealth and finding hidden paths.',
      ability: 'Can pick locks and find secret passages',
      choice: 'A cunning Thief, master of stealth',
    },

    // Game UI
    visitedLocations: 'Visited locations',
    inventory: 'Inventory',
    submit: 'Submit',
    whatToDo: 'What do you want to do?',
    whatToDo_placeholder: 'Type a command',
    errorMessage: "I don't understand that command. Type 'help' for more details.",
    resetGame: 'Reset game',
    confirmReset: 'Are you sure you want to reset the game? All progress will be lost.',

    examineSurroundings: {
      fallback:
        'You take a slow turn, noting stone, air, and distance—the place refuses to give up every secret at once, but you have the measure of it for now.',
    },

    // Items
    items: {
      scroll: 'Ancient Scroll',
      sword: 'Bronze Sword',
      staff: 'Fire Staff',
      key: 'Celestial Key',
      'fire-sword': 'Fire-Imbued Sword',
      'greek-fire': 'Greek Fire Pots',
    },

    // Item descriptions and restrictions
    itemDescriptions: {
      scroll: {
        description:
          'An ancient scroll with mysterious writing. It seems to contain important information.',
        examine:
          'The scroll is made of weathered parchment, covered in ancient Greek text with detailed illustrations.',
        canUse: 'Anyone can read this scroll.',
      },
      staff: {
        description: 'A powerful staff crackling with fire magic.',
        examine:
          'The staff pulses with magical energy, its tip glowing with barely contained fire.',
        canUse: "Only a wizard can properly channel this staff's magic.",
        wrongCharacter: "This magical staff requires a wizard's expertise to use.",
      },
      'fire-sword': {
        description: 'A sword imbued with sacred fire.',
        examine: "The blade glows with divine fire, ready to prevent the Hydra's regeneration.",
        canUse: 'Only a hero can wield this mighty weapon.',
        wrongCharacter: 'This sacred weapon can only be wielded by a true hero.',
      },
      'greek-fire': {
        description: 'Ancient incendiary weapons, perfect for traps.',
        examine:
          'These clay pots contain a mysterious, highly flammable substance. Handle with care!',
        canUse: 'Only a thief knows how to properly set these traps.',
        wrongCharacter: "Setting these traps requires a thief's expertise.",
      },
    },

    // Game Over
    gameOver: {
      title: 'GAME OVER',
      message:
        'The Hydra proved too powerful this time. But perhaps another hero, with a different approach, might succeed where you failed...',
      hydraFailureMessage:
        'Without the right tool at the decisive moment, the Hydra overwhelms you. Athena can send you back to choose the trial again—prepare and use what you gathered.',
      tryAgain: 'Try again',
      tryAgainAthena: "Return to Athena's quest",
      fullReset: 'Restart from the beginning',
    },

    // Available commands
    availableCommands: {
      title: 'Available Commands',
      examine: 'examine',
      examine_description:
        '[object] — Look at something closely. Type examine alone or look around for a fuller description of where you are.',
      take: 'take',
      take_description: '[object] — Pick up an item',
      use: 'use',
      use_description: '[object] — Use an item or interact with something',
      attack: 'attack',
      attack_description: '[target] — Engage in combat',
      prepare: 'prepare',
      prepare_description: '[action] — Get ready for an action',
      help: 'help',
      help_description: 'Display a list of available commands',
      inventory: 'inventory',
      inventory_description: 'Check the items you are carrying',
    },

    // Command synonyms (for internal use)
    commandSynonyms: {
      examine: ['look at', 'inspect', 'study', 'observe', 'check'],
      take: ['pick up', 'grab', 'get', 'collect'],
      use: ['interact with', 'activate', 'operate', 'trigger', 'open'],
      attack: ['fight', 'strike', 'hit', 'battle'],
      prepare: ['ready', 'set up', 'equip', 'arrange'],
      inventory: ['inv', 'items', 'bag', 'backpack'],
    },

    // Inventory messages
    inventoryMessages: {
      title: 'Inventory',
      empty: 'Your inventory is empty.',
      check: 'You check your inventory:',
      carrying: 'You are carrying:',
      usage_hint: 'You can examine or use items by typing "examine [item]" or "use [item]".',
    },

    // Compact command list for UI
    commandList: {
      title: 'Commands:',
      list: ['EXAMINE thing', 'TAKE item', 'USE object', 'ATTACK target', 'PREPARE action'],
    },

    // Prompts and choices
    prompt: {
      what_to_do: 'What would you like to do?',
      hydra_quest:
        "What would you like to do? Try: 'examine hydra', 'prepare weapon', or 'attack hydra'",
      help: "Type 'help' at any time to see available commands",
    },
    choices: {
      proceed_to_tutorial: 'Continue',
      step_through: 'Step through the door',
      examine_surroundings: 'Examine your surroundings carefully',
      help_hercules: 'Aid Hercules in his battle against the fearsome Hydra',
      help_dedalo: 'Assist Daedalus in navigating the deadly Labyrinth',
      help_persephone: 'Help Persephone escape from the clutches of Hades',
      hercules: {
        study_hydra: "Study the Hydra's behavior and weaknesses",
        prepare_weapons: 'Help prepare weapons and fire for cauterizing the stumps',
        scout_area: 'Scout the area for tactical advantages',
      },
      dedalo: {
        examine_map: "Examine Daedalus's mechanical map of the Labyrinth",
        check_walls: 'Inspect the maze walls for hidden mechanisms',
        listen_sounds: "Listen for the Minotaur's echoing movements",
      },
      persephone: {
        shadow_path: 'Take the hidden path through the shadows',
        challenge_hades: "Approach Hades' throne directly",
        find_passage: 'Search for a secret passage into the palace',
      },
      hydra: {
        attack_directly: "Attack the Hydra's heads directly",
        prepare_strategy: 'Take time to prepare a proper strategy',
        get_equipment: 'Gather the necessary equipment',
        face_hydra: 'Face the Hydra in battle',
        use_fire: 'Cast a powerful fire spell to prevent regeneration',
        fire_sword: 'Strike with your fire-imbued sword',
        distract_hydra: 'Execute your trap with the Greek fire pots',
        attack_head: 'Try to cut off a head',
        return_olympus: 'Return to Olympus victorious',
      },
      game_over: {
        try_again: 'Try Again',
      },
      quest_complete: {
        restart: 'Start a new adventure',
      },
    },

    // Scene texts
    scenes: {
      start: {
        text: 'Before your adventure begins, you must choose your path. Who are you?',
      },
      intro: {
        text: "You awaken to the faint glow of runes etched into towering stone columns. The air is cool and carries the scent of ancient stone. Your mind is clouded, memories slipping through your grasp like sand. As you take in your surroundings, the murals on the walls (depicting epic battles between gods and mortals) seem to call to you. A faint whisper echoes in your mind, a voice not your own: 'This is the Hall of Trials, where heroes are chosen and destinies are forged.' Though you cannot recall how you arrived here, a sense of purpose stirs within you. Your adventure is about to begin.",
      },
      tutorial: {
        base:
          'You find yourself in a small chamber within an ancient temple. Sunlight filters through a high window, illuminating dust motes that dance in the air. The walls are adorned with faded frescoes depicting the gods of Olympus. Opposite you, set deep in the stone, stands a heavy bronze door—its seams dark with age, clearly the only way through to whatever lies beyond. In the corner, a wooden table holds an old scroll. You can pause to study or take the scroll, or cross the threshold by opening the door whenever you choose.',
        examine:
          'You mark details the first glance skipped: the door’s bronze has greened in the seams but the hinges are true—whoever hung it expected it to open often. Fresco flakes glitter on the floor like fallen stars; the high window is too narrow for a body but perfect for a blade of light. The scroll’s corners curl, weighted by honest age. The room is small, deliberate—a threshold dressed as a classroom.',
      },
      scroll_examined: {
        text: 'The scroll contains a simple message: \'To proceed on your journey, you must first learn to interact with the world. You may take this scroll with you if you wish—try commands like "take scroll". When you\'re ready to continue, try to "open door".\'',
        examine:
          'The parchment smells of dust and old ink; the letters are neat, almost teacherly, as if the temple itself left you homework. The table bears knife-scars from earlier visitors. The bronze door fills your vision when you face it—patina thicker at the handle, polished thinner where many hands have pushed. The chamber feels paused between lessons, waiting for you to choose the next one.',
      },
      scroll_taken: {
        text: 'You take the scroll and carefully store it away. It might prove useful later. The bronze door remains the only way forward.',
        examine:
          'With the scroll stowed, your pack carries a faint rustle when you shift. The chamber seems larger now that one loose end is tied. Torch brackets are empty; whoever lit this room trusted daylight alone. The door’s lip is flush with the floor—no trip, no gap—built for calm exits, not panicked ones. Outside this quiet, the mythic world is already leaning in.',
      },
      door_locked: {
        text: 'The bronze door is heavy but yields to your push. Beyond lies your adventure in the world of ancient Greek myths and legends. Are you ready to proceed?',
        step_through: 'Step through the door',
      },
      next_chamber: {
        base: "You step into a vast chamber, dimly lit by torches along the walls. The air is heavy with the scent of age and stone. With growing unease, you realize this is no temple—it's a prison disguised as one.",
        wizard:
          'Your magical senses tingle as you detect powerful binding enchantments woven into the walls. These are divine-level containment spells, meant to hold beings of great power.',
        hero: 'Your battle-trained eyes spot defensive positions and guard posts—all abandoned now, but clearly this place was built to keep people in, not out.',
        thief:
          'Your expertise in escape immediately kicks in—you notice the worn patterns in the stone floor, marking where countless prisoners have paced before. The windows are too narrow for escape, and the doors are reinforced with celestial bronze.',
      },
      athena_appears: {
        text: 'The torches flicker and dim as the air grows thick with divine presence. A brilliant light erupts in the center of the chamber, coalescing into the majestic form of Athena, Goddess of Wisdom and Strategic Warfare. Her aegis gleams with otherworldly power, and her grey eyes pierce through you with the weight of millennia.\n\n"MORTAL," her voice resonates through both the chamber and your mind, each word carrying the authority of Olympus itself. "Your presence in this prison was ordained by the Fates themselves. The threads of destiny have been woven with purpose—the gods require a champion, and you have been chosen through divine trial."\n\nShe raises her spear, its tip igniting with celestial fire. "Three heroes stand at the crossroads of fate, each facing a trial that will shape the future of both gods and mortals. You must choose whose call to answer:"',
      },
      hercules_quest: {
        base:
          "The world lurches; your boots find mud that sucks at your ankles. Heat and rot wrap around you—wet bark, stagnant water, and something sharper, like metal after lightning. Reeds part. There he is: a man built like a myth, leaning on a club as long as a young tree, gaze nailed to the grey-green distance.\n\nFrom the marsh comes a sound that is not one voice but many—hisses stacked on hiss, a cruel choir tuning itself.\n\nTracks in the mud tell you what he has been doing for hours: wide arcs where he has circled the beast, short rushes to measure its reach, longer retreats when too many throats turned at once. Fresh scrapes mark his arms; dried slime on the club says he has already been inside its range. When he finally glances at you, his voice is low and practical, irritation aimed mostly at himself. \"I tried the straight path,\" he says. \"One neck opened. Two answered before I could set my feet. Since then I have fed it feints, not victories—keeping it busy while I think.\"\n\nHe turns only long enough to pin you with a look. \"I can hold the thing when it commits. I need eyes that are not mine. Go closer in spirit if not in boots: study how the heads trade turns, which one leads, which one lies. When we strike again, we strike with a plan. Cut one neck without closing the work, and the swamp gives you two—that is the law here. Bravado without a plan only feeds the marsh. If you are with me, examine the Hydra first. Learn its rhythm before we answer it.\"",
        wizard:
          "Between the reeds, power hums the way a harp string hums after it has been struck. The Hydra is not merely flesh; something Olympian thrums through it, old and patient. If you watch how the heads defer to one another, you may see where the spellwork frays.",
        hero:
          "Your legs already know this ground: soft, treacherous, ready to twist an ankle at the worst moment. The hiss comes from more throats than you can count at a glance. Charging in blind would be a gift to the beast—your instincts insist on patience, even while your pulse insists on something louder.",
        thief:
          "Higher ground—rotted pilings, a fallen column—offers a line of sight the marsh would rather hide. The many heads move in turns, like sentries changing watch. There is a pattern; patterns are invitations, if you are rude enough to accept.",
        examine:
          'You study the beast the way a tracker reads sign—not as one animal, but as many wills sharing a single heavy body. Through the reeds it shows itself in turns: necks lifting and lowering like oars, tongues testing the same patch of mist. Folk tales give it a name—Hydra—and they all repeat the same cruel arithmetic Hercules just spoke: shorten a neck without closing the account, and the marsh answers with more throats, as if an open hurt were an invitation rather than an end.\n\nAlong the waterline, older stumps wear a glassy sheen, almost ceramic, where something once stopped the work completely. Others look rawer—busy, restless—where only speed mattered. You can read the lesson scale by scale: the difference is not how hard you strike, but whether the body is allowed to reply before the wound is settled.\n\nThe heads do not rush at random; one draws your eye while another lines up a strike from deeper in. The air carries silt, rot, and—under it—a sting of old pitch clinging to buckled shields half-sunk nearby, as if other hunters had planned past the first cut and still did not stay long enough to finish.\n\nHercules says nothing more. His grip on the club says the rest: a blind charge does not duel one neck—it feeds a tally that grows.',
      },
      dedalo_quest: {
        base: 'Daedalus greets you at the entrance of his infamous Labyrinth. The genius inventor appears troubled, his hands fidgeting with various mechanical devices. "The Minotaur has learned the maze\'s original paths," he whispers. "We must find a new way through."',
        wizard:
          "You sense complex enchantments woven into the Labyrinth's walls—magic that shifts and changes the paths. Perhaps these could be manipulated.",
        hero: "The maze's architecture speaks to you—defensive positions, chokepoints, and potential ambush locations are clear to your trained eye.",
        thief:
          'Your expertise in navigation reveals subtle marks and signs—previous explorers have left traces that might help guide the way.',
      },
      persephone_quest: {
        base: "The entrance to the Underworld looms before you—a dark cave emanating cold air and echoing with distant whispers. Demeter's instructions were clear: find her daughter Persephone and help her escape Hades' realm.",
        wizard:
          'The boundary between life and death is palpable here. Your magical senses detect the ancient wards that separate the mortal world from the realm of Hades.',
        hero: "Even your courageous heart feels the weight of this place. But you've faced death before, and your determination only grows stronger.",
        thief:
          'The shadows here are different—deeper, more alive. But where there are guards and gates, there are always blind spots to exploit.',
      },
      hydra_study: {
        base:
          "You ease closer until the marsh lets you see without being seen. Nine throats weave through the air like a single thought split into jealous pieces; scales catch the light in a way flesh should not—too clean, too deliberate. Half-sunk helms and splintered shields mark older battles the swamp has not forgotten.\n\nThe lesson is ugly and simple: this is not a duel; it is a siege against a riddle that grows new riddles.\n\nHercules exhales through his teeth. \"See? It rewards hurry.\"",
        wizard:
          "Old lectures surface unbidden: a wound that closes wrong unless fire finishes the argument. You do not need a library now—you need a spark that obeys you, not the monster.",
        hero:
          "Steel alone buys time, not victory. Every opening you imagine closes when you picture a stump blooming into two new jaws. You need heat—honest, binding heat—before you commit your weight to a swing.",
        thief:
          "The heads trade turns the way pickpockets trade signals. More usefully, clay gleams under moss—Greek fire pots, left like rude gifts among the ruins. A trap will not slay the thing outright, but it can buy the one second that matters.",
        examine:
          'From here you can count what hurry would miss: the Hydra’s scales overlap like roof-tiles, each ridge catching slime that never quite dries. Older scars shine pale—stories of blades that learned too late. The marsh floor keeps trophies—buckles, spearheads—half-swallowed and polite about it. Reeds bow where bodies once passed in a hurry. Hercules’s breath is steady; yours wants to race. Distance is a lie here: every meter is negotiable until it isn’t.',
      },
      hydra_preparation: {
        base:
          'Hercules\'s grin is grim, but real. "Good. Hunger is loud; discipline is quiet." He taps his club once against his palm. "We give it a story it has not heard—fire first, then force."',
        wizard:
          "Half-buried in silt, a staff sleeps with ember veins crawling its length. When you close your fingers, the wood answers like a held breath. This is not showy magic; it is the kind that cauterizes lies.",
        hero:
          "A brazier still breathes on a cracked plinth—coals sleeping under ash. Your blade remembers bronze; let it learn flame. When you pass steel through the heat, the air tastes briefly of oaths kept.",
        thief:
          "You map the ground the way you would map a vault: sight lines, splash zones, where panic will send a bulk of scales and muscle. The pots settle into their places with a thief's patience—innocent until the moment they are not.",
        examine:
          'The staging ground tells its own plan: ember-light on Hercules’s jaw, ash drifting like slow snow, the Hydra a murmur through the reeds—close enough to feel like pressure on the skin. Tools wait with insulting innocence—staff, blade, clay—each demanding respect. Mud records every choice you have not yet made. The air tastes of metal and burned leaves. This is the calm authors skip; you are inside it, counting heartbeats.',
      },
      hydra_equipment: {
        base:
          "The marsh holds its breath. Hercules rolls his shoulders; you feel the myth beside you tighten like a drawn cord. Whatever you gathered is no longer \"equipment\"—it is a promise you will have to keep in public.",
        wizard:
          "The staff's warmth climbs your wrists. Sparks fret at the ferrule as if eager to be introduced.",
        hero:
          "Heat crawls along the fuller of your sword in a steady line. The weight in your hands feels honest—earned, not given.",
        thief:
          "Trip lines of intent, not rope: angles, timing, the cruel arithmetic of splash and stumble. You have stacked the odds; now the world gets to argue.",
      },
      hydra_battle: {
        base:
          "The Hydra rises as if the marsh were merely its cloak. Heads lift, testing the air; tongues flick like questions you do not want to answer. Hercules plants his feet. \"Now,\" he says softly—permission, warning, dare.\n\nYour next move will name you.",
        wizard:
          "The staff hums against your palms, a single note held too long. One word of power, one disciplined arc—if you speak, speak cleanly.",
        hero:
          "Flame licks along the guard and kisses your knuckles—not to burn, but to remind. The opening you want is narrow; your strike must be narrower.",
        thief:
          "The field is set. The beast believes the story is about teeth. You intend to change the genre.",
        examine:
          'No safe distance now: the Hydra fills the middle distance like weather—heads at different heights, eyes flat and patient, throats working. Steam ghosts upward where breath meets cold air. Hercules is a shoulder in your periphery, club rising like a verdict delayed. Your footing shifts; the marsh argues back. Every sense narrows to heat, weight, and timing—the story stripped to physics and nerve.',
      },
      hydra_victory: {
        base:
          "The last great hiss thins into rain and heavy breathing. The Hydra's many voices stop negotiating. The swamp sounds too loud afterward—frogs, dripping reeds, your own pulse.\n\nHercules claps your shoulder hard enough to sting. \"That,\" he says, voice rough with relief, \"is how a trial ends when a mortal remembers to think.\"",
        wizard:
          "Where fire sealed the work, nothing new uncurls to mock you. Magic, for once, feels like simple justice.",
        hero:
          "Each blow you chose landed like a period at the end of a sentence. The beast did not get to rewrite the paragraph.",
        thief:
          "The trap did not steal the glory—it bought the opening. The Hydra's own momentum finished what your nerve started.",
      },
      hydra_defeat: {
        first_try:
          "Jaws snap where your shadow was a heartbeat ago. You skid back, mud painting your cloak; laughter bubbles up anyway—thin, shocked, alive. Brute speed is the story the Hydra loves best. Refuse to tell it.",
        second_try:
          "Two throats coordinate where one merely lunged. You escape by inches that feel stolen. The marsh seems wider, the monster larger; your pride, quieter. There is a smarter sequence here—if you survive long enough to find it.",
        final:
          "Your strike lands—and the swamp answers with a cruel miracle: new heads surge where old ones fell, a living knot tightening. You try to break away; the marsh catches your heel. The last thing you hear is the choir of hiss again—closer than feels fair.",
      },
      hydra_defeat_first: {
        examine:
          'You steady your breathing and inventory the danger: mud splattered to your knees, the Hydra’s heads weaving closer than comfort, Hercules a shout and a motion at the edge of sight. The swamp offers no clean line—every “open” space is a promise the beast can break. Your pulse hammers; the air stinks of lightning-before-rain. The mistake you almost made still hangs in the reeds, visible as a lesson.',
      },
      hydra_defeat_second: {
        examine:
          'The marsh feels smaller. Heads coordinate now—one feints while another commits, a cruel teamwork you did not invite. Your boots find roots and rot; balance is negotiable, time is not. Hercules’s voice cuts through hiss, raw with warning. Sweat stings; cold water does too. The creature is not angry—it is efficient. You need a plan with fire in it, not another dash of pride.',
      },
      quest_complete: {
        text:
          "Light gathers as if dawn remembered an appointment. The trial is behind you; the path home unspools through myth and mist alike. You have earned a quiet that feels heavier than applause.",
        wizard:
          "Athena's regard is not a shout—it is a steady hand on the scale. Wisdom, you suspect, is simply refusing to be surprised by the same trap twice.",
        hero:
          "Glory, when it comes, tastes like clean air after smoke. Olympus does not need a speech from you; it already read what you did.",
        thief:
          "The gods love a clever exit as much as a bold entrance. Let them argue which you offered; you know the truth is both.",
      },
    },

    // Settings
    settings: 'Settings',
    language: 'Language',
  },
  es: {
    // Game title and description
    gameTitle: 'El Desafío de Atenea',
    gameDescription:
      'Embárcate en un viaje misterioso donde tus decisiones dan forma a la historia.',
    startGame: 'Comenzar Aventura',
    continueGame: 'Continuar Aventura',

    // Character selection
    chooseCharacter: 'Elige tu Personaje',
    playingAs: 'Jugando como',
    specialAbility: 'Habilidad Especial',
    enterName: 'Ingresa tu nombre',
    yourName: 'Tu nombre',
    yourName_error: 'Debes ingresar un nombre.',
    defaultPlayerName: 'Jugador',
    skipTutorial: 'Ya conozco lo básico — omitir la introducción',

    onboarding: {
      progressLabel: 'Paso de introducción',
      step1Title: 'Cómo funciona la aventura',
      step1a:
        'La historia avanza por escenas. A veces eliges una opción en el texto; otras escribes libremente lo que quieres hacer.',
      step1b: 'Tu personaje y los objetos que recoges pueden abrir caminos distintos. Lee con atención y prueba cosas.',
      step2Title: 'El campo de comandos',
      step2a:
        'Abajo verás un campo que pregunta qué quieres hacer. Escribe un comando breve y pulsa Entrar para actuar.',
      step2b:
        "Si el juego no entiende, reformula o escribe 'ayuda' para ver ejemplos de comandos.",
      step2c: 'Comandos como examinar, tomar, usar y atacar suelen funcionar; en muchos sitios se aceptan sinónimos.',
      step3Title: 'Inventario y progreso',
      step3a: 'Puedes escribir inventario o inv para repasar qué objetos llevas contigo.',
      step3b:
        'Tu progreso se guardará cada vez que avances a la siguiente escena, por si quieres reanudar tu aventura más tarde.',
      step3c: 'Es hora de comenzar. Que Atenea te guíe en tu camino.',
      next: 'Siguiente',
      back: 'Atrás',
      begin: 'Comenzar aventura',
    },

    // Characters
    wizard: {
      name: 'Mago',
      description: 'Un maestro de las artes arcanas, experto en resolver misterios con magia.',
      ability: 'Puede detectar auras mágicas y lanzar hechizos',
      choice: 'Un sabio Mago, versado en las artes arcanas',
    },
    hero: {
      name: 'Héroe',
      description: 'Un valiente guerrero, fuerte en combate y con liderazgo natural.',
      ability: 'Puede superar desafíos físicos e inspirar a otros',
      choice: 'Un valiente Héroe, experto en combate',
    },
    thief: {
      name: 'Ladrón',
      description: 'Un pícaro astuto, experto en sigilo y en encontrar caminos ocultos.',
      ability: 'Puede forzar cerraduras y encontrar pasajes secretos',
      choice: 'Un astuto Ladrón, maestro del sigilo',
    },

    // Game UI
    visitedLocations: 'Lugares visitados',
    inventory: 'Inventario',
    submit: 'Enviar',
    whatToDo: '¿Qué quieres hacer?',
    whatToDo_placeholder: 'Escribe un comando',
    errorMessage: "No entiendo ese comando. Escribe 'ayuda' para más detalles.",
    resetGame: 'Reiniciar juego',
    confirmReset:
      '¿Estás seguro de que quieres reiniciar el juego? Se perderán todos los progresos.',

    examineSurroundings: {
      fallback:
        'Das una vuelta lenta: piedra, aire y distancia. El sitio no entrega todos sus secretos de golpe, pero ya le tomaste la medida.',
    },

    // Items
    items: {
      scroll: 'Pergamino Antiguo',
      sword: 'Espada de Bronce',
      staff: 'Bastón de Fuego',
      key: 'Llave Celestial',
      'fire-sword': 'Espada Imbuida de Fuego',
      'greek-fire': 'Vasijas de Fuego Griego',
    },

    // Item descriptions and restrictions in Spanish
    itemDescriptions: {
      scroll: {
        description:
          'Un pergamino antiguo con escritura misteriosa. Parece contener información importante.',
        examine:
          'La vitela está desgastada, cubierta de texto griego antiguo con ilustraciones detalladas.',
        canUse: 'Cualquiera puede leer este pergamino.',
      },
      staff: {
        description: 'Un poderoso bastón que crepita con magia de fuego.',
        examine:
          'El bastón pulsa con energía mágica, su punta brillando con fuego apenas contenido.',
        canUse: 'Solo un mago puede canalizar apropiadamente la magia de este bastón.',
        wrongCharacter: 'Este bastón mágico requiere la experiencia de un mago para usarlo.',
      },
      'fire-sword': {
        description: 'Una espada imbuida con fuego sagrado.',
        examine:
          'La hoja brilla con fuego divino, lista para prevenir la regeneración de la Hidra.',
        canUse: 'Solo un héroe puede empuñar esta poderosa arma.',
        wrongCharacter: 'Esta arma sagrada solo puede ser empuñada por un verdadero héroe.',
      },
      'greek-fire': {
        description: 'Armas incendiarias antiguas, perfectas para trampas.',
        examine:
          'Estas vasijas de arcilla contienen una sustancia misteriosa y altamente inflamable. ¡Manejar con cuidado!',
        canUse: 'Solo un ladrón sabe cómo colocar estas trampas correctamente.',
        wrongCharacter: 'Colocar estas trampas requiere la experiencia de un ladrón.',
      },
    },

    // Game Over
    gameOver: {
      title: 'FIN DEL JUEGO',
      message:
        'La Hidra demostró ser demasiado poderosa esta vez. Pero quizás otro héroe, con un enfoque diferente, podría tener éxito donde tú fallaste...',
      hydraFailureMessage:
        'Sin la herramienta adecuada en el momento decisivo, la Hidra te abruma. Atenea puede devolverte a elegir la prueba otra vez: prepárate y usa lo que reuniste.',
      tryAgain: 'Intentar de nuevo',
      tryAgainAthena: 'Volver a la misión de Atenea',
      fullReset: 'Reiniciar desde el principio',
    },

    // Available commands
    availableCommands: {
      title: 'Comandos Disponibles',
      examine: 'examinar',
      examine_description:
        '[objeto] — Mira algo con detalle. Escribe examinar solo, mirar alrededor o examinar alrededores para una descripción más amplia del lugar.',
      take: 'tomar',
      take_description: '[objeto] — Recoger un objeto',
      use: 'usar',
      use_description: '[objeto] — Usar un objeto o interactuar con algo',
      attack: 'atacar',
      attack_description: '[objetivo] — Iniciar combate',
      prepare: 'preparar',
      prepare_description: '[acción] — Prepararse para una acción',
      help: 'ayuda',
      help_description: 'Mostrar la lista de comandos disponibles',
      inventory: 'inventario',
      inventory_description: 'Ver los objetos que llevas contigo',
    },

    // Command synonyms (for internal use)
    commandSynonyms: {
      examine: ['mirar', 'inspeccionar', 'estudiar', 'observar', 'revisar'],
      take: ['recoger', 'agarrar', 'coger', 'obtener', 'tomar'],
      use: ['utilizar', 'activar', 'operar', 'accionar', 'abrir'],
      attack: ['luchar', 'golpear', 'combatir', 'pelear'],
      prepare: ['alistar', 'equipar', 'disponer', 'arreglar'],
      inventory: ['inv', 'objetos', 'mochila', 'inventario'],
    },

    // Inventory messages in Spanish
    inventoryMessages: {
      title: 'Inventario',
      empty: 'Tu inventario está vacío.',
      check: 'Revisas tu inventario:',
      carrying: 'Estás llevando:',
      usage_hint:
        'Puedes examinar o usar objetos escribiendo "examinar [objeto]" o "usar [objeto]".',
    },

    // Compact command list for UI
    commandList: {
      title: 'Comandos:',
      list: [
        'EXAMINAR objeto',
        'TOMAR objeto',
        'USAR objeto',
        'ATACAR objetivo',
        'PREPARAR acción',
      ],
    },

    // Prompts and choices
    prompt: {
      what_to_do: '¿Qué quieres hacer?',
      hydra_quest:
        '¿Qué haces? Puedes intentar: examinar hidra, preparar arma o atacar hidra (este último es arriesgado).',
      help: "Escribe 'ayuda' en cualquier momento para ver los comandos disponibles",
    },
    choices: {
      proceed_to_tutorial: 'Continuar',
      step_through: 'Atravesar la puerta',
      examine_surroundings: 'Examinar los alrededores cuidadosamente',
      help_hercules: 'Ayudar a Hércules en su batalla contra la temible Hidra',
      help_dedalo: 'Asistir a Dédalo en la navegación del Laberinto mortal',
      help_persephone: 'Ayudar a Perséfone a escapar de las garras de Hades',
      hercules: {
        study_hydra: 'Estudiar el comportamiento y debilidades de la Hidra',
        prepare_weapons: 'Ayudar a preparar armas y fuego para cauterizar los muñones',
        scout_area: 'Explorar el área en busca de ventajas tácticas',
      },
      dedalo: {
        examine_map: 'Examinar el mapa mecánico del Laberinto de Dédalo',
        check_walls: 'Inspeccionar las paredes del laberinto en busca de mecanismos ocultos',
        listen_sounds: 'Escuchar los movimientos resonantes del Minotauro',
      },
      persephone: {
        shadow_path: 'Tomar el camino oculto a través de las sombras',
        challenge_hades: 'Aproximarse directamente al trono de Hades',
        find_passage: 'Buscar un pasaje secreto hacia el palacio',
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
        return_olympus: 'Regresar victorioso al Olimpo',
      },
      game_over: {
        try_again: 'Elegir un nuevo héroe',
      },
      quest_complete: {
        restart: 'Comenzar una nueva aventura',
      },
    },

    // Scene texts
    scenes: {
      start: {
        text: 'Antes de que comience tu aventura, debes elegir tu camino. ¿Quién eres?',
      },
      intro: {
        text: "Te despiertas con el tenue resplandor de runas grabadas en imponentes columnas de piedra. El aire es fresco y lleva el aroma de la piedra antigua. Tu mente está nublada, los recuerdos se escapan de tu alcance como arena entre los dedos. Mientras observas tu entorno, los murales en las paredes (que representan batallas épicas entre dioses y mortales) parecen llamarte. Un susurro tenue resuena en tu mente, una voz que no es la tuya: 'Este es el Salón de las Pruebas, donde se eligen héroes y se forjan destinos.' Aunque no puedes recordar cómo llegaste aquí, un sentido de propósito se despierta en ti. Tu aventura está a punto de comenzar.",
      },
      tutorial: {
        base:
          'Te encuentras en una pequeña cámara dentro de un antiguo templo. La luz del sol se filtra por una ventana alta, iluminando motas de polvo que danzan en el aire. Las paredes están adornadas con frescos descoloridos que representan a los dioses del Olimpo. Frente a ti, encajada en la piedra, hay una pesada puerta de bronce: juntas oscurecidas por el tiempo, y tan claramente el único paso hacia lo que venga después. En un rincón, una mesa de madera sostiene un viejo pergamino. Puedes detenerte a examinarlo o llevártelo, o atravesar el umbral abriendo la puerta cuando quieras.',
        examine:
          'Atiendes detalles que el primer vistazo escondió: en las juntas el bronce muestra pátina verde, pero las bisagras son honestas—quien colgó la puerta esperaba abrirla a menudo. Copos de fresco brillan en el suelo como estrellas caídas; la ventana alta es estrecha para un cuerpo, perfecta para un hilo de luz. Las esquinas del pergamino se curvan, cargadas de años. La sala es pequeña y deliberada: un umbral disfrazado de aula.',
      },
      scroll_examined: {
        text: 'El pergamino contiene un mensaje simple: \'Para continuar tu viaje, primero debes aprender a interactuar con el mundo. Puedes llevar este pergamino contigo si lo deseas—prueba comandos como "tomar pergamino". Cuando estés listo para continuar, intenta "abrir puerta".\'',
        examine:
          'El pergamino huele a polvo y tinta vieja; las letras son prolijas, casi de maestro, como si el templo te hubiera dejado deberes. La mesa guarda cicatrices de cuchillo de visitas anteriores. La puerta de bronce domina cuando la miras de frente—pátina gruesa en la manija, más fina donde muchas manos empujaron. La cámara parece en pausa entre lecciones, esperando que elijas la siguiente.',
      },
      scroll_taken: {
        text: 'Tomas el pergamino y lo guardas cuidadosamente. Podría ser útil más adelante. La puerta de bronce sigue siendo el único camino hacia adelante.',
        examine:
          'Con el pergamino guardado, la mochila susurra al moverte. La sala parece más amplia ahora que ataste un cabo suelto. Los apliques están vacíos; quien iluminó este sitio confió solo en la luz del día. El borde de la puerta calza con el suelo—sin trampa ni rendija—hecha para salidas serenas, no para el pánico. Fuera de este silencio, el mundo mítico ya se inclina hacia ti.',
      },
      door_locked: {
        text: 'La puerta de bronce es pesada pero cede a tu empuje. Más allá se encuentra tu aventura en el mundo de los mitos y leyendas de la antigua Grecia. ¿Estás listo para continuar?',
        step_through: 'Atravesar la puerta',
      },
      next_chamber: {
        base: 'Entras en una vasta cámara, tenuemente iluminada por antorchas a lo largo de las paredes. El aire está cargado con el aroma de la antigüedad y la piedra. Con creciente inquietud, te das cuenta de que esto no es un templo: es una prisión disfrazada.',
        wizard:
          'Tus sentidos mágicos se estremecen al detectar poderosos encantamientos de atadura tejidos en las paredes. Estos son hechizos de contención de nivel divino, destinados a contener seres de gran poder.',
        hero: 'Tus ojos entrenados para la batalla detectan posiciones defensivas y puestos de guardia—todos abandonados ahora, pero claramente este lugar fue construido para mantener a la gente dentro, no fuera.',
        thief:
          'Tu experiencia en escapes se activa de inmediato: notas los patrones desgastados en el suelo de piedra, que marcan dónde innumerables prisioneros han caminado antes. Las ventanas son demasiado estrechas para escapar, y las puertas están reforzadas con bronce celestial.',
      },
      athena_appears: {
        text: 'Las antorchas parpadean y se atenúan mientras el aire se vuelve denso con presencia divina. Una luz brillante erupciona en el centro de la cámara, transformándose en la majestuosa forma de Atenea, Diosa de la Sabiduría y la Guerra Estratégica. Su égida resplandece con poder sobrenatural, y sus ojos grises te atraviesan con el peso de milenios.\n\n"MORTAL," su voz resuena tanto en la cámara como en tu mente, y cada palabra lleva la autoridad del Olimpo mismo. "Tu presencia en esta prisión fue ordenada por las Moiras. Los hilos del destino han sido tejidos con propósito: los dioses requieren un campeón, y tú has sido elegido mediante prueba divina."\n\nLevanta su lanza, cuya punta se enciende con fuego celestial. "Tres héroes se encuentran en la encrucijada del destino, cada uno enfrentando una prueba que moldeará el futuro tanto de dioses como de mortales. Debes elegir a cuál responder:"',
      },
      hercules_quest: {
        base:
          'El mundo da un tirón; tus botas encuentran barro que te lame los tobillos. Calor, podredumbre y un filo en el aire—como metal después de un rayo. Los juncos se abren. Ahí está: un hombre tallado como un mito, apoyado en una clava larga como un árbol joven, la mirada clavada en la lejanía verdosa del pantano.\n\nDel pantano llega un sonido que no es una voz sino muchas: siseos encimados, un coro grosero que afina las cuerdas.\n\nHuellas en el barro cuentan lo que lleva haciendo horas: arcos amplios donde ha rodeado a la bestia, acometidas breves para medir su alcance, retiradas largas cuando demasiadas gargantas giraron a la vez. Raspones frescos le marcan los brazos; limo reseco en la clava dice que ya ha estado dentro de su radio. Cuando por fin te mira, la voz es baja y de oficio, la irritación apuntando sobre todo a sí mismo. «Probé el camino recto», dice. «Abrí un cuello. Antes de asentar los pies, respondieron dos. Desde entonces le doy fingimientos, no triunfos: la mantengo ocupada mientras pienso.»\n\nSolo se gira lo bastante para clavarte la mirada. «La sujeto cuando se compromete. Necesito otros ojos. Acércate en espíritu si no en botas: mira cómo se turnan las cabezas, cuál manda, cuál miente. Cuando volvamos a golpear, será con plan. Cortas un cuello sin rematar el trabajo y el pantano te devuelve dos: esa es la ley aquí. El heroísmo sin tino solo alimenta el barro. Si vienes conmigo, examina la Hidra primero. Aprende su ritmo antes de contestarle.»',
        wizard:
          'Entre los juncos vibra un poder como la cuerda de un arpa después de pulsarse. La Hidra no es solo carne; algo olímpico late en ella, viejo y paciente. Si observas cómo las cabezas se turnan, quizá veas dónde se deshilacha el encantamiento.',
        hero:
          'Tus piernas ya conocen este suelo: blando, traicionero, listo para torcerte el tobillo en el peor momento. El siseo viene de más gargantas de las que puedes contar de un vistazo. Lanzarte a ciegas sería un regalo para la bestia: tus instintos gritan paciencia aunque el pulso pida otra cosa.',
        thief:
          'Terreno alto—pilotes podridos, una columna caída—te da una línea de visión que el pantano preferiría ocultar. Las cabezas se mueven por turnos, como centinelas que cambian guardia. Hay patrón; los patrones son invitaciones, si uno es bastante grosero para aceptarlas.',
        examine:
          'Observas a la criatura como quien lee huellas: no un solo animal, sino muchas intenciones compartiendo un cuerpo pesado. Entre los juncos se deja ver por turnos—cuellos que suben y bajan como remos, lenguas que prueban el mismo banco de niebla. Los cuentos le ponen nombre—Hidra—y todos repiten la misma aritmética cruel que acaba de decir Hércules: si acortas un cuello sin cerrar la cuenta, el pantano contesta con más gargantas, como si una herida abierta fuera una invitación y no un final.\n\nJunto al agua, viejos muñones lucen casi vidriosos, lisos, donde alguien remató el trabajo por completo. Otros lucen más vivos—inquietos—donde solo importó la prisa. La lección está en las escamas: no es tanto la fuerza del golpe como si el cuerpo alcanza a responder antes de que el daño quede sellado.\n\nLas cabezas no arremeten al azar; una te roba la mirada mientras otra busca profundidad. El aire huele a cieno y podredumbre, y bajo eso un filo de pez y brea vieja en escudos abollados medio hundidos, como si otros cazadores hubieran pensado más allá del primer tajo y aun así no hubieran tenido tiempo de rematar.\n\nHércules no añade palabras. El puño en la clava dice el resto: cargar a ciegas no es luchar contra un cuello—es alimentar una cuenta que crece.',
      },
      dedalo_quest: {
        base: 'Dédalo te recibe en la entrada de su infame Laberinto. El genio inventor parece preocupado, sus manos jugueteando con varios dispositivos mecánicos. "El Minotauro ha aprendido los caminos originales del laberinto," susurra. "Debemos encontrar una nueva ruta."',
        wizard:
          'Percibes complejos encantamientos tejidos en las paredes del Laberinto—magia que cambia y altera los caminos. Quizá puedan manipularse.',
        hero: 'La arquitectura del laberinto te habla: posiciones defensivas, puntos de estrangulamiento y posibles lugares de emboscada son claros para tu ojo entrenado.',
        thief:
          'Tu experiencia en navegación revela marcas y señales sutiles—exploradores anteriores han dejado rastros que podrían ayudar a guiar el camino.',
      },
      persephone_quest: {
        base: 'La entrada al Inframundo se alza ante ti: una cueva oscura que emana aire frío y resuena con susurros distantes. Las instrucciones de Deméter fueron claras: encuentra a su hija Perséfone y ayúdala a escapar del reino de Hades.',
        wizard:
          'La frontera entre la vida y la muerte es palpable aquí. Tus sentidos mágicos detectan las antiguas protecciones que separan el mundo mortal del reino de Hades.',
        hero: 'Incluso tu corazón valiente siente el peso de este lugar. Pero has enfrentado a la muerte antes, y tu determinación solo se hace más fuerte.',
        thief:
          'Las sombras aquí son diferentes: más profundas, más vivas. Pero donde hay guardias y puertas, siempre hay puntos ciegos que explotar.',
      },
      hydra_study: {
        base:
          'Te acercas hasta que el pantano te deja ver sin ser visto. Nueve gargantas surcan el aire como un solo pensamiento partido en celos; las escamas captan la luz de un modo que la carne no debería—demasiado limpio, demasiado deliberado. Yelmos hundidos y escudos astillados marcan batallas viejas que el barro aún reclama.\n\nLa lección es fea y simple: esto no es un duelo; es un asedio contra un acertijo que fabrica acertijos.\n\nHércules suelta el aire entre dientes. «¿Ves? Premia la prisa.»',
        wizard:
          'Viejos dictados resurgen solos: una herida que no cierra bien si el fuego no zanja el debate. No necesitas ahora una biblioteca—necesitas una chispa que te obedezca a ti, no al monstruo.',
        hero:
          'El acero solo compra tiempo, no victoria. Cada apertura que imaginas se cierra cuando piensas en un muñón que brota en dos nuevas fauces. Necesitas calor—calor serio, que ate—antes de comprometer el peso de un mandoble.',
        thief:
          'Las cabezas se turnan como cómplices en un mercado. Más útil: el barro esconde ánforas—fuego griego—como regalos groseros entre ruinas. Una trampa no mata de golpe, pero puede regalar el segundo que importa.',
        examine:
          'Desde aquí puedes contar lo que la prisa esconde: las escamas de la Hidra se superponen como tejas, cada cresta guarda un limo que no termina de secarse. Cicatrices viejas brillan pálidas—historias de hojas que aprendieron tarde. El suelo del pantano atesora trofeos—hebillas, puntas de lanza—medio tragados y educados al respecto. Los juncos se inclinan por donde otros pasaron con prisa. El aliento de Hércules es firme; el tuyo quiere correr. La distancia es mentira: cada metro se negocia hasta que deja de serlo.',
      },
      hydra_preparation: {
        base:
          'La sonrisa de Hércules es sombría, pero real. «Bien. El hambre grita; la disciplina calla.» Golpea la clava una vez contra la palma. «Le daremos un cuento que no conoce: fuego primero, fuerza después.»',
        wizard:
          'Medio hundido en el cieno duerme un bastón con vetas de ascua. Cuando cierras los dedos, la madera responde como un aliento contenido. No es magia de feria; es la clase que cauteriza mentiras.',
        hero:
          'Un brasero aún respira sobre un plinto rajado—brasas dormidas bajo ceniza. Tu hoja conoce el bronce; que aprenda la llama. Al pasar el acero por el calor, el aire sabe un instante a juramentos cumplidos.',
        thief:
          'Cartografías el terreno como bóveda: líneas de vista, charcos de salpicadura, adónde huirá el bulto de escamas si entra el pánico. Las vasijas encajan con paciencia de ladrón—inocentes hasta el instante en que no lo son.',
        examine:
          'El lugar de ensayo cuenta su propio plan: luz de ascua en la mandíbula de Hércules, ceniza que cae como nieve lenta, la Hidra un murmullo entre juncos—tan cerca que presiona la piel. Las herramientas esperan con insultante inocencia—bastón, hoja, arcilla—cada una pide respeto. El barro registra cada decisión que aún no tomaste. El aire sabe a metal y hojas quemadas. Es la calma que los cuentos saltan; tú estás dentro, contando latidos.',
      },
      hydra_equipment: {
        base:
          'El pantano contiene el aliento. Hércules se acomoda los hombros; sientes al mito tensarse al lado como cuerda armada. Lo que reuniste ya no es «equipo»—es una promesa que tendrás que cumplir delante de todos.',
        wizard:
          'El calor del bastón sube por las muñecas. Chispas impacientes roen la ferralla, como queriendo presentarse.',
        hero:
          'El fuego recorre el fuller de tu espada en una línea firme. El peso en tus manos se siente honesto—ganado, no regalado.',
        thief:
          'Líneas de intención, no de cuerda: ángulos, tiempo, la aritmética cruel del chapoteo y el tropiezo. Apilaste ventajas; ahora el mundo discute.',
      },
      hydra_battle: {
        base:
          'La Hidra se alza como si el pantano fuera solo su manto. Cabezas se yerguen, probando el aire; lenguas van y vienen como preguntas que no quieres contestar. Hércules planta los pies. «Ahora», dice bajo—permiso, aviso, desafío.\n\nTu próximo movimiento te pondrá nombre.',
        wizard:
          'El bastón vibra contra las palmas, una sola nota sostenida demasiado tiempo. Una palabra de poder, un arco disciplinado—si hablas, que sea limpio.',
        hero:
          'La llama lame la cruceta y besa los nudillos—no para quemar, sino para recordar. La apertura que buscas es estrecha; tu golpe debe serlo más.',
        thief:
          'El tablero está puesto. La bestia cree que el cuento va de dientes. Tú piensas cambiar de género.',
        examine:
          'Ya no hay distancia segura: la Hidra llena el espacio medio como el clima—cabezas a distintas alturas, ojos planos y pacientes, gargantas que trabajan. El vapor sube donde el aliento choca con el frío. Hércules es un hombro en tu visión periférica, la clava alzada como un veredicto demorado. El pie busca firmeza; el pantano discute. Cada sentido se reduce a calor, peso y tiempo—la historia reducida a física y nervio.',
      },
      hydra_victory: {
        base:
          'El último gran siseo se diluye en lluvia fina y respiración pesada. Las muchas voces de la Hidra dejan de negociar. Después el pantano suena demasiado alto—ranas, juncos goteando, tu propio pulso.\n\nHércules te aplaude el hombro con fuerza de marcar. «Así», dice la voz áspera de alivio, «termina una prueba cuando un mortal recuerda pensar.»',
        wizard:
          'Donde el fuego selló el trabajo, nada nuevo se enrosca para burlarse. La magia, por una vez, sabe a justicia sencilla.',
        hero:
          'Cada golpe que elegiste cayó como un punto y aparte sobre la frase. La bestia no pudo reescribir el párrafo.',
        thief:
          'La trampa no robó el triunfo—compró la apertura. El empuje propio de la Hidra remató lo que tu nervio empezó.',
      },
      hydra_defeat: {
        first_try:
          'Fauces chasquean donde tu sombra estuvo hace un latido. Retrocedes patinando; el barro te pinta el manto. Una risa burbujea—fina, aturdida, viva. La furia pura es el cuento que la Hidra ama. No se lo cuentes.',
        second_try:
          'Dos gargantas coordinan donde antes solo había un embate. Escapas por un margen que sabe a robo. El pantano parece más ancho, el monstruo más grande; tu orgullo, más bajo. Hay una secuencia más astuta—si vives lo suficiente para hallarla.',
        final:
          'Tu golpe cae—y el pantano responde con un milagro cruel: nuevas cabezas brotan donde cayeron las viejas, un nudo viviente que aprieta. Intentas romper filas; el barro te atrapa el talón. Lo último que oyes es otra vez el coro de siseos, más cerca de lo que parece justo.',
      },
      hydra_defeat_first: {
        examine:
          'Afianzas el aliento y haces inventario del peligro: barro salpicado hasta las rodillas, cabezas de la Hidra tejiéndose más cerca de lo cómodo, Hércules un grito y un movimiento al borde de la vista. El pantano no ofrece línea limpia—cada “claro” es una promesa que la bestia puede romper. El pulso te martilla; el aire huele a rayo antes de la tormenta. El error que casi cometes sigue colgado de los juncos, visible como lección.',
      },
      hydra_defeat_second: {
        examine:
          'El pantano se siente más pequeño. Las cabezas coordinan ahora—una finge mientras otra compromete, un trabajo en equipo que no pediste. Las botas encuentran raíces y podredumbre; el equilibrio se negocia, el tiempo no. La voz de Hércules corta el siseo, ruda de advertencia. El sudor escuece; el agua fría también. La criatura no está enfadada—es eficiente. Necesitas un plan con fuego, no otra carrera de orgullo.',
      },
      quest_complete: {
        text:
          'La luz se reúne como si el alba hubiera citado contigo. La prueba queda atrás; el camino de regreso se desenrolla entre niebla y mito. Te ganaste un silencio que pesa más que el aplauso.',
        wizard:
          'El favor de Atenea no es un grito—es una mano firme en la balanza. La sabiduría, sospechas, es negarse a sorprenderse dos veces por la misma trampa.',
        hero:
          'La gloria, cuando llega, sabe a aire limpio después del humo. El Olimpo no necesita tu discurso; ya leyó lo que hiciste.',
        thief:
          'A los dioses les gusta una salida astuta tanto como una entrada valiente. Que discutan cuál les diste; tú sabes que fueron ambas.',
      },
    },

    // Settings
    settings: 'Configuración',
    language: 'Idioma',
  },
};
