export function addedSpells() {
  const listOfAddedSpells = [
    {
      name: "Control Flames",
      level: 0,
      school: { name: "Transmutation" },
      range: "60 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:",

        "1. You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.",
        "2. You instantaneously extinguish the flames within the cube.",
        "3. You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.",
        "4. You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.",
      ],
      higher_level: [
        "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Create Bonfire",
      level: 0,
      school: "Conjuration",
      range: "60 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      concentration: true,
      duration: "1 Minute",
      desc: [
        "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there.",
        "The bonfire ignites flammable objects in its area that aren’t being worn or carried.",
      ],
      higher_level: [
        "The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      ],
      classes: [
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Warlock" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Frostbite",
      level: 0,
      school: "Evocation",
      range: "60 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
      ],
      higher_level: [
        "The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      ],
      classes: [
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Warlock" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Gust",
      level: 0,
      school: { name: "Transmutation" },
      range: "30 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You seize the air and compel it to create one of the following effects at a point you can see within range:",

        "1. One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.",
        "2. You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn’t pushed with enough force to cause damage.",
        "3. You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Magic Stone",
      level: 0,
      school: { name: "Transmutation" },
      range: "Touch",
      casting_time: "1 bonus action",
      components: ["V", "S"],
      concentration: false,
      duration: "1 Minute",
      desc: [
        "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker’s, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.",
        "If you cast this spell again, the spell ends early on any pebbles still affected by it.",
      ],
      classes: [{ name: "Druid" }, { name: "Warlock" }, { name: "Artificer" }],
    },
    {
      name: "Mold Earth",
      level: 0,
      school: { name: "Transmutation" },
      range: "30 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
        "1. If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn’t have enough force to cause damage.",
        "2. You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.",
        "3. If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.",
      ],
      higher_level: [
        "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Shape Water",
      level: 0,
      school: { name: "Transmutation" },
      range: "30 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
        "1. You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.",
        "2. You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.",
        "3. You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.",
        "4. You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.",
      ],
      higher_level: [
        "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Thunderclap",
      level: 0,
      school: "Evocation",
      range: "5 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage.",
      ],
      higher_level: [
        "The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      ],
      classes: [
        { name: "Bard" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Warlock" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Absorb Elements",
      level: 1,
      school: "Abjuration",
      range: "Self",
      casting_time: "1 action or 1 reaction",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
      ],
      classes: [
        { name: "Druid" },
        { name: "Ranger" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Beast Bond",
      level: 1,
      school: "Divination",
      range: "Touch",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      concentration: false,
      duration: "10 minutes",
      material: "a bit of fur wrapped in a cloth",
      desc: [
        "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
      ],
      classes: [{ name: "Druid" }, { name: "Ranger" }],
    },
    {
      name: "Catapult",
      level: 1,
      school: "Transmutation",
      range: "60 feet",
      casting_time: "1 action",
      components: ["S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
      ],
      classes: [
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Earth Tremor",
      level: 1,
      school: "Evoation",
      range: "10 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Ice Knife",
      level: 1,
      school: "Conjuration",
      range: "60 feet",
      casting_time: "1 action",
      components: ["S", "M"],
      concentration: false,
      duration: "Instantaneous",
      material: "a drop of water or piece of ice",
      desc: [
        "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Aganazzar's Scorcher",
      level: 2,
      school: "Evoation",
      range: "30 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      concentration: false,
      duration: "Instantaneous",
      material: "a red dragon's scale",
      desc: [
        "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Dust Devil",
      level: 2,
      school: "Conjuration",
      range: "60 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      concentration: true,
      duration: "1 minute",
      material: "a pinch of dust",
      desc: [
        "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell’s duration.",
        "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isn’t pushed.",
        "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Earthbind",
      level: 2,
      school: "Transmutation",
      range: "300 feet",
      casting_time: "1 action",
      components: ["V"],
      concentration: true,
      duration: "1 minute",
      desc: [
        "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends.",
      ],
      classes: [
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Warlock" },
      ],
    },
    {
      name: "Maximilian's Earthen Grasp",
      level: 2,
      school: "Transmutation",
      range: "30 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      concentration: true,
      duration: "1 minute",
      material: "a miniature hand sculpted from clay",
      desc: [
        "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell’s duration.",
        "As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.",
        "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.",
        "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Pyrotechnics",
      level: 2,
      school: "Transmutation",
      range: "60 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      concentration: false,
      duration: "Instantaneous",
      desc: [
        "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.",
        "Fireworks: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.",
        "Smoke: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Sorcerer" },
        { name: "Wizard" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Skywrite",
      level: 2,
      school: "Transmutation",
      range: "sight",
      casting_time: "1 action",
      components: ["V", "S"],
      concentration: true,
      ritual: true,
      duration: "1 hour",
      desc: [
        "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell’s duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Druid" },
        { name: "Artificer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Snilloc's Snowball Swarm",
      level: 2,
      school: "Evocation",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      concentration: true,
      duration: "Instantaneous",
      material: "a piece of ice or a small white rock",
      desc: [
        "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Druid" },
        { name: "Artificer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Warding Wind",
      level: 2,
      school: "Evocation",
      range: "(Self) 10 feet",
      casting_time: "1 action",
      components: ["V"],
      concentration: true,
      duration: "10 minutes",
      desc: [
        "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell’s duration. The wind has the following effects:",
        "1. It deafens you and other creatures in its area.",
        "2. It extinguishes unprotected flames in its area that are torch-sized or smaller.",
        "3. It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
        "4. The area is difficult terrain for creatures other than you.",
        "5. The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind.",
      ],
      classes: [
        { name: "Bard" },
        { name: "Druid" },
        { name: "Sorcerer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Erupting Earth",
      level: 3,
      school: "Tramsutation",
      range: "120 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Instantaneous",
      material: "a piece of obsidian",
      desc: [
        "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Flame Arrows",
      level: 3,
      school: "Tramsutation",
      range: "Touch",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "1 hour",
      concentration: true,
      desc: [
        "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell’s magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.",
      ],
      classes: [
        { name: "Druid" },
        { name: "Ranger" },
        { name: "Artificer" },
        { name: "Sorcerer" },
        { name: "Wizard" },
      ],
    },
    {
      name: "Melf's minute meteors",
      level: 3,
      school: "Evocation",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "10 minutes",
      concentration: true,
      material: "niter, sulfur, and pine tar formed into a bead",
      desc: [
        "You create six tiny meteors in your space. They float in the air and orbit you for the spell’s duration. When you cast the spell — and as a bonus action on each of your turns thereafter — you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Tidal Wave",
      level: 3,
      school: "Conjuration",
      range: "120 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Instantaneous",
      material: "a drop of water",
      desc: [
        "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.",
      ],

      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Wall of Sand",
      level: 3,
      school: "Evoation",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "10 minutes",
      material: "a handfull of sand",
      concentration: true,
      desc: [
        "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall’s space and must spend 3 feet of movement for every 1 foot it moves there.",
      ],

      classes: [{ name: "Wizard" }],
    },
    {
      name: "Wall of Water",
      level: 3,
      school: "Evoation",
      range: "60 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "10 minutes",
      material: "a drop of water",
      concentration: true,
      desc: [
        "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall’s space is difficult terrain.",
        "Any ranged weapon attack that enters the wall’s space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall’s water doesn’t fill it.",
      ],

      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Elemental Bane",
      level: 4,
      school: "Transmutation",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "10 minutes",
      concentration: true,
      desc: [
        "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
      ],

      classes: [
        { name: "Druid" },
        { name: "Warlock" },
        { name: "Wizard" },
        { name: "Artificer" },
      ],
    },
    {
      name: "Storm Sphere",
      level: 4,
      school: "Evocation",
      range: "150 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "1 minutes",
      concentration: true,
      desc: [
        "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell’s duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere’s space is difficult terrain.",
        "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.",
        "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.",
      ],

      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Vitriolic Sphere",
      level: 4,
      school: "Evocation",
      range: "150 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Instantaneous",
      material: "a drop of giant slug bile",
      desc: [
        "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
      ],

      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Watery Sphere",
      level: 4,
      school: "Conjuration",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "1 minute",
      concentration: true,
      material: "a droplet of water",
      desc: [
        "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell’s duration.",
        "Any creature in the sphere’s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature’s choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.",
        "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.",
        "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.",
        "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Control Winds",
      level: 5,
      school: "transmutation",
      range: "300 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "1 hour",
      concentration: true,
      desc: [
        "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell’s duration.",
        "Gusts: A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.",
        "Downdraft: You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.",
        "Updraft: You cause a sustained updraft within the cube, rising upward from the cube’s bottom edge. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Immolation",
      level: 5,
      school: "Evocation",
      range: "90 feet",
      casting_time: "1 action",
      components: ["V"],
      duration: "1 minute",
      concentration: true,
      desc: [
        "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell’s duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can’t be extinguished by nonmagical means.",
        "If damage from this spell kills a target, the target is turned to ash.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Maelstrom",
      level: 5,
      school: "Evocation",
      range: "120 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "1 minute",
      concentration: true,
      material: "paper or leaf in the shape of a funnel",
      desc: [
        "A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Transmute Rock",
      level: 5,
      school: "Transmutation",
      range: "120 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Until dispelled",
      material: "clay and water",
      desc: [
        "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.",
        "Transmute Rock to Mud: Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell’s duration.",
        "The ground in the spell’s area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.",
        "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.",
        "Transmute Mud to Rock: Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell’s duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage.",
      ],
      classes: [{ name: "Druid" }, { name: "Artificer" }, { name: "Wizard" }],
    },
    {
      name: "Bones of the Earth",
      level: 6,
      school: "Transmutation",
      range: "120 feet",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "Instantaneous",
      desc: [
        "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.",
        "If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
        "If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature’s choice) against the spell’s save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.",
      ],
      higher_level: [
        "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.",
      ],
      classes: [{ name: "Druid" }],
    },
    {
      name: "Investiture of Flame",
      level: 6,
      school: "Transmutation",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "10 minutes",
      concentration: true,
      desc: [
      "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell’s duration. The flames don’t harm you. Until the spell ends, you gain the following benefits:",
      "1: You are immune to fire damage and have resistance to cold damage.",
      "2: Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.",
      "3: You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }, { name: "Warlock" }],
    },
    {
      name: "Investiture of Ice",
      level: 6,
      school: "Transmutation",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "10 minutes",
      concentration: true,
      desc: [
      "Until the spell ends, ice rimes your body, and you gain the following benefits:",
      "1: You are immune to cold damage and have resistance to fire damage.",
      "2: You can move across difficult terrain created by ice or snow without spending extra movement.",
      "3: The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.",
      "4: You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }, { name: "Warlock" }],
    },
    {
      name: "Investiture of Stone",
      level: 6,
      school: "Transmutation",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "10 minutes",
      concentration: true,
      desc: [
      "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:",
      "1: You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
      "2: You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.",
      "3: You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can’t end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }, { name: "Warlock" }],
    },
    {
      name: "Investiture of Wind",
      level: 6,
      school: "Transmutation",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "10 minutes",
      concentration: true,
      desc: [
      "Until the spell ends, wind whirls around you, and you gain the following benefits:",
      "1: Ranged weapon attacks made against you have disadvantage on the attack roll.",
      "2: You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.",
      "3: You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }, { name: "Warlock" }],
    },
    {
      name: "Primordial Ward",
      level: 6,
      school: "Abjuration",
      range: "Self",
      casting_time: "1 action",
      components: ["V", "S"],
      duration: "1 minute",
      concentration: true,
      desc: [
      "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell’s duration. When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.",
      ],
      classes: [{ name: "Druid" }],
    },
    {
      name: "Whirlwind",
      level: 7,
      school: "Evocation",
      range: "300 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "1 minute",
      concentration: true,
      material: "a piece of straw",
      desc: [
        "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren’t secured to anything and that aren’t worn or carried by anyone.",
        "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.",
        "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 × 10 feet away from it in a random direction.",
      ],
      classes: [{ name: "Druid" }, { name: "Sorcerer" }, { name: "Wizard" }],
    },
    {
      name: "Abi-Dalzim's Horrid Wilting",
      level: 9,
      school: "Necromancy",
      range: "150 feet",
      casting_time: "1 action",
      components: ["V", "S", "M"],
      duration: "Instantaneous",
      material: "a bit of sponge",
      desc: [
        "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren’t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.",
        "Nonmagical plants in the area that aren’t creatures, such as trees and shrubs, wither and die instantly.",
      ],
      classes: [{ name: "Sorcerer" }, { name: "Wizard" }],
    },
  ];

  return listOfAddedSpells;
}

export function standardLanguages() {
  const listOfStandardLanguages = [
    "Common",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Hafling",
    "Orc",
  ];
  return listOfStandardLanguages;
}

export function equipmentType() {
  const listOfEquipmentType = [
    "Weapon",
    "Consumable",
    "Armor",
    "Item",
    "Other",
  ];
  return listOfEquipmentType;
}
export function damageTypes() {
  const listAllDamageTypes = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
    "Healing",
    "Other",
  ];
  return listAllDamageTypes;
}
export function exoticLanguages() {
  const listOfExoticLanguages = [
    "Abyssal",
    "Celestial",
    "Draconic",
    "Deep Speech",
    "Infernal",
    "Primordial",
    "Undercommon",
  ];
  return listOfExoticLanguages;
}

export function rarity() {
  const listOfRarities = [
    "Common",
    "Uncommon",
    "Rare",
    "Very Rare",
    "Legendary",
    "Artifact",
  ];
  return listOfRarities;
}

export function equipmentPacks() {
  const listOfEquipmentPacks = [
    {
      pack: "Burglar's Pack",
      description:
        "includes a backpack, a bag of 1000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
    },
    {
      pack: "Diplomat's Pack",
      description:
        "Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.",
    },
    {
      pack: "Dungeoneer's Pack",
      description:
        "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
    },
    {
      pack: "Entertainer's Pack",
      description:
        "Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.",
    },
    {
      pack: "Explorer's Pack",
      description:
        "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
    },
    {
      pack: "Priest's Pack",
      description:
        "Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.",
    },
    {
      pack: "Scholar's Pack",
      description:
        "Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.",
    },
  ];
  return listOfEquipmentPacks;
}

export function Tools() {
  const listOfTools = [
    {
      category: "Artisan's Tools",
      tools: [
        "Alchemist's Supplies",
        "Brewer's Supplies",
        "Calligrapher's Supplies",
        "Carpenter's Tools",
        "Cartographer's Tools",
        "Cobbler's Tools",
        "Cook's Utensils",
        "Glassblower's Tools",
        "Jeweler's Tools",
        "Leatherworker's Tools",
        "Mason's Tools",
        "Painter's Supplies",
        "Potter's Tools",
        "Smith's Tools",
        "Tinker's Tools",
        "Weaver's Tools",
        "Woodcarver's Tools",
        "Disguise Kit",
        "Forgery Kit",
        "Herbalism Kit",
        "Navigator's Tools",
        "Poisoner's Kit",
        "Thieves' Tools",
      ],
    },
    {
      category: "Gaming Set",
      tools: [
        "Dice Set",
        "Dragonchess Set",
        "Playing Card Set",
        "Three-Dragon Ante Set",
      ],
    },
    {
      category: "Musical Instrument",
      tools: [
        "Bagpipes",
        "Drum",
        "Dulcimer",
        "Flute",
        "Lute",
        "Lyre",
        "Horn",
        "Pan Flute",
        "Shawm",
        "Viol",
      ],
    },
  ];
  return listOfTools;
}
const diceRolls = [
  { dice: "advantage", description: "Roll 2d20 and take the higher roll." },
  { dice: "disadvantage", description: "Roll 2d20 and take the lower roll" },
];

export function skills() {
  const listOfSkills = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  return listOfSkills;
}

export function abilities() {
  const listOfAbilities = [
    { ability: "acrobatics", mod: "dex" },
    { ability: "animal handling", mod: "wis" },
    { ability: "arcana", mod: "int" },
    { ability: "athletics", mod: "str" },
    { ability: "deception", mod: "cha" },
    { ability: "history", mod: "int" },
    { ability: "insight", mod: "wis" },
    { ability: "intimidation", mod: "cha" },
    { ability: "investigation", mod: "int" },
    { ability: "medicine", mod: "wis" },
    { ability: "nature", mod: "int" },
    { ability: "perception", mod: "wis" },
    { ability: "performance", mod: "cha" },
    { ability: "persuasion", mod: "cha" },
    { ability: "religion", mod: "int" },
    { ability: "sleight of hand", mod: "dex" },
    { ability: "stealth", mod: "dex" },
    { ability: "survival", mod: "wis" },
  ];
  return listOfAbilities;
}

export function weaponProperties() {
  const listOfAllWeaponProperties = [
    "Ammunition",
    "Finesse",
    "Heavy",
    "Light",
    "Loading",
    "Range",
    "Reach",
    "Special",
    "Thrown",
    "Two-Handed",
    "Versatile",
    "Improvised",
    "Silvered",
  ];
  return listOfAllWeaponProperties;
}

export function Conditions() {
  const listOfConditions = [
    {
      condition: "Blinded",
      description: `A blinded creature can't see and automatically fails any ability check that requires sight.\n 
    Attacks against creature have advantage, and the creature's attacks have disadvantage.`,
    },

    {
      condition: "Charmed",
      description: `A charmed creature can't attack nor cast harmful spells against the charmer \n
    The charm has advantage on ability checks that require charisma with the charmed creature.`,
    },

    {
      condition: "Deafened",
      description: `A deafened creature can't hear and automatically fails any ability check that requires hearing.`,
    },

    {
      condition: "Exhaustion",
      description: `
    Exhaustion is measured in six levels that stack Example: A creature with Level 4 Exhaustion suffers effects 1-4.\n
    Level 1: Disadvantage on ability checks\n
    Level 2: Speed halved\n
    Level 3: Disadvantage on attack rolls and saving throws\n
    Level 4: Hit point maximum halved\n
    Level 5: Speed reduced to 0\n
    Level 6: Death`,
    },

    {
      condition: "Frightened",
      description: `A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.\n
    The creature can't willingly move closer to the source of its fear.`,
    },

    {
      condition: "Grappled",
      description: `A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n
    The condition ends if the grappler is incapacitated.\n
    The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect.`,
    },

    {
      condition: "Incapacitated",
      description: `An incapacitated creature can't take actions or reactions.`,
    },

    {
      condition: "Invisible",
      description: `An invisible creature is impossible to see without the aid of magic or a special sense.\n
    For the purpose of hiding, the creature is heavily obscured.\n
    The creature's location can be detected by any noise it makes or any tracks it leaves.`,
    },

    {
      condition: "Paralyzed",
      description: `A paralyzed creature is incapacitated and can't move or speak.\n
    The creature automatically fails strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.\n
    Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`,
    },

    {
      condition: "Petrified",
      description: `A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone).\n
    Its weight increases by a factor of ten, and it ceases aging.\n
    The creature is incapacitated, can't move or speak, and is unaware of its surroundings.\n
    Attack rolls against the creature have advantage.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    The creature has resistance to all damage.\n
    The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.`,
    },

    {
      condition: "Poisoned",
      description: `A poisoned creature has disadvantage on attack rolls and ability checks.`,
    },

    {
      condition: "Prone",
      description: `A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.\n
    The creature has disadvantage on attack rolls.\n
    An attack roll against the creature has advantage if the attacker is within 5 feet of the creature.\n
    Otherwise, the attack roll has disadvantage.`,
    },

    {
      condition: "Restrained",
      description: `A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n
    Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.\n
    The creature has disadvantage on Dexterity saving throws.`,
    },

    {
      condition: "Stunned",
      description: `A stunned creature is incapacitated, can't move, and can speak only falteringly.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.`,
    },

    {
      condition: "Unconscious",
      description: `An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.\n
    The creature drops whatever it's holding and falls prone.\n
    The creature automatically fails Strength and Dexterity saving throws.\n
    Attack rolls against the creature have advantage.\n
    Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`,
    },
  ];
}
