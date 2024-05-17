
export function standardLanguages() {
    const listOfStandardLanguages = [
        'Common',
        'Dwarvish',
        'Elvish',
        'Giant',
        'Gnomish',
        'Goblin',
        'Hafling',
        'Orc'
    ];
    return listOfStandardLanguages;
} 

export function equipmentType(){
    const listOfEquipmentType = [
        'Weapon',
        'Consumable',
        'Armor',
        'Item',
        'Other'
    ]
    return listOfEquipmentType;
}
export function damageTypes(){
    const listAllDamageTypes = [
        'Acid',
        'Bludgeoning',
        'Cold',
        'Fire',
        'Force',
        'Lightning',
        'Necrotic',
        'Piercing',
        'Poison',
        'Psychic',
        'Radiant',
        'Slashing',
        'Thunder',
        'Healing',
        'Other'
    ]
    return listAllDamageTypes;
}
export function exoticLanguages(){
const listOfExoticLanguages = [
    'Abyssal',
    'Celestial',
    'Draconic',
    'Deep Speech',
    'Infernal',
    'Primordial',
    'Undercommon'
]
return listOfExoticLanguages;
}

export function rarity(){
    const listOfRarities = [
        "Common",
        "Uncommon",
        "Rare",
        "Very Rare",
        "Legendary",
        "Artifact"
    ]
    return listOfRarities;
}

export function equipmentPacks(){
const listOfEquipmentPacks = [
    {pack: 'Burglar\'s Pack', description: 'includes a backpack, a bag of 1000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.'},
    {pack: 'Diplomat\'s Pack', description: 'Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.'},
    {pack: 'Dungeoneer\'s Pack', description: 'Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.'},
    {pack: 'Entertainer\'s Pack', description: 'Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.'},
    {pack: 'Explorer\'s Pack', description: 'Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.'},
    {pack: 'Priest\'s Pack', description: 'Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.'},
    {pack: 'Scholar\'s Pack', description: 'Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.'},
]
return listOfEquipmentPacks;
}


export function Tools(){
const listOfTools = [
    {category: 'Artisan\'s Tools', tools: ['Alchemist\'s Supplies', 'Brewer\'s Supplies', 'Calligrapher\'s Supplies', 'Carpenter\'s Tools', 'Cartographer\'s Tools', 'Cobbler\'s Tools', 'Cook\'s Utensils', 'Glassblower\'s Tools', 'Jeweler\'s Tools', 'Leatherworker\'s Tools', 'Mason\'s Tools', 'Painter\'s Supplies', 'Potter\'s Tools', 'Smith\'s Tools', 'Tinker\'s Tools', 'Weaver\'s Tools', 'Woodcarver\'s Tools', 'Disguise Kit', 'Forgery Kit', 'Herbalism Kit', 'Navigator\'s Tools', 'Poisoner\'s Kit', 'Thieves\' Tools']},
    {category: 'Gaming Set', tools: ['Dice Set', 'Dragonchess Set', 'Playing Card Set', 'Three-Dragon Ante Set']},
    {category: 'Musical Instrument', tools: ['Bagpipes', 'Drum', 'Dulcimer', 'Flute', 'Lute', 'Lyre', 'Horn', 'Pan Flute', 'Shawm', 'Viol']},

]
return listOfTools;
}
const diceRolls = [
    {dice: 'advantage', description: 'Roll 2d20 and take the higher roll.'},
    {dice: 'disadvantage', description: 'Roll 2d20 and take the lower roll'},
]

export function skills(){
const listOfSkills = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
]
return listOfSkills;
}


export function abilities(){
const listOfAbilities = [
    {ability: 'acrobatics', mod: 'dex'},
    {ability: 'animal handling', mod: 'wis'},
    {ability: 'arcana', mod: 'int'},
    {ability: 'athletics', mod: 'str'},
    {ability: 'deception', mod: 'cha'},
    {ability: 'history', mod: 'int'},
    {ability: 'insight', mod: 'wis'},
    {ability: 'intimidation', mod: 'cha'},
    {ability: 'investigation', mod: 'int'},
    {ability: 'medicine', mod: 'wis'},
    {ability: 'nature', mod: 'int'},
    {ability: 'perception', mod: 'wis'},
    {ability: 'performance', mod: 'cha'},
    {ability: 'persuasion', mod: 'cha'},
    {ability: 'religion', mod: 'int'},
    {ability: 'sleight of hand', mod: 'dex'},
    {ability: 'stealth', mod: 'dex'},
    {ability: 'survival', mod: 'wis'},
]
return listOfAbilities;
}

export function weaponProperties(){
    const listOfAllWeaponProperties = [
        'Ammunition',
        'Finesse',
        'Heavy',
        'Light',
        'Loading',
        'Range',
        'Reach',
        'Special',
        'Thrown',
        'Two-Handed',
        'Versatile',
        'Improvised',
        'Silvered',
    ]
    return listOfAllWeaponProperties;
}

export function Conditions(){
const listOfConditions = [
    {condition: 'Blinded', description: `A blinded creature can't see and automatically fails any ability check that requires sight.\n 
    Attacks against creature have advantage, and the creature's attacks have disadvantage.`},

    {condition: 'Charmed', description: `A charmed creature can't attack nor cast harmful spells against the charmer \n
    The charm has advantage on ability checks that require charisma with the charmed creature.`},
    
    {condition: 'Deafened', description: `A deafened creature can't hear and automatically fails any ability check that requires hearing.`},

    {condition: 'Exhaustion', description: `
    Exhaustion is measured in six levels that stack Example: A creature with Level 4 Exhaustion suffers effects 1-4.\n
    Level 1: Disadvantage on ability checks\n
    Level 2: Speed halved\n
    Level 3: Disadvantage on attack rolls and saving throws\n
    Level 4: Hit point maximum halved\n
    Level 5: Speed reduced to 0\n
    Level 6: Death`},

    {condition: 'Frightened', description: `A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.\n
    The creature can't willingly move closer to the source of its fear.`},

    {condition: 'Grappled', description: `A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n
    The condition ends if the grappler is incapacitated.\n
    The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect.`},

    {condition: 'Incapacitated', description: `An incapacitated creature can't take actions or reactions.`},

    {condition: 'Invisible', description: `An invisible creature is impossible to see without the aid of magic or a special sense.\n
    For the purpose of hiding, the creature is heavily obscured.\n
    The creature's location can be detected by any noise it makes or any tracks it leaves.`},

    {condition: 'Paralyzed', description: `A paralyzed creature is incapacitated and can't move or speak.\n
    The creature automatically fails strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.\n
    Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`},

    {condition: 'Petrified', description: `A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone).\n
    Its weight increases by a factor of ten, and it ceases aging.\n
    The creature is incapacitated, can't move or speak, and is unaware of its surroundings.\n
    Attack rolls against the creature have advantage.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    The creature has resistance to all damage.\n
    The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.`},

    {condition: 'Poisoned', description: `A poisoned creature has disadvantage on attack rolls and ability checks.`},

    {condition: 'Prone', description: `A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.\n
    The creature has disadvantage on attack rolls.\n
    An attack roll against the creature has advantage if the attacker is within 5 feet of the creature.\n
    Otherwise, the attack roll has disadvantage.`},

    {condition: 'Restrained', description: `A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n
    Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.\n
    The creature has disadvantage on Dexterity saving throws.`},

    {condition: 'Stunned', description: `A stunned creature is incapacitated, can't move, and can speak only falteringly.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.`},

    {condition: 'Unconscious', description: `An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.\n
    The creature drops whatever it's holding and falls prone.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.\n
    Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`},
]
}

