import {create} from 'zustand';

const skillScore = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
}

const statMod = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
}
const useSkillStore = create((set) => ({
    skillScores: skillScore,
    statMod: statMod,
    setSkillScores: (newScores) => set({skillScores: newScores}),
    setStatMod: (newMod) => set({statMod: newMod}),
    resetScore: () => set({skillScores: skillScore}),
}));

export default useSkillStore;