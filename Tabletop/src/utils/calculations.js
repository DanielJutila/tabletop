
export const calculateAbilityModifier = (stat, prof) => {
    if(!prof){
        prof = 0;
    }
    return Math.floor((stat - 10) / 2) + prof;
};

export const calculateSpellSaveDC = (stat, profBonus) => {
    return 8 + calculateAbilityModifier(stat, profBonus);
};

export const statModifier = (stat) => {
    const modifiedStat = {};
    for (const ability in stat){
        const modifier = calculateAbilityModifier(stat[ability]);

        modifiedStat[ability] = modifier;
    }
    return modifiedStat;
};