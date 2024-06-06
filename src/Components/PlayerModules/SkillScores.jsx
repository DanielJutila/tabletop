import React, {useState, useEffect} from "react";
import useSkillStore from "../../stores/user";
import {
    statModifier,
  } from "../../utils/calculations";

const SavingThrows = () => {
    const [showMod, setShowMod] = useState(false);
    const toggleShowMod = () => {
      setShowMod(!showMod);
    };
  
    const { skillScores, setSkillScores } = useSkillStore();
    const { statMod, setStatMod } = useSkillStore();
  
    const [abilityScores, setAbilityScores] = useState({
      str: 12,
      dex: 17,
      con: 10,
      int: 7,
      wis: 19,
      cha: 5,
    });
  
    const [abilityMod, setAbilityMod] = useState({
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    });
  
    useEffect(() => {
      const modifiedScores = statModifier(abilityScores);
      setAbilityMod((prevState) => ({
        ...prevState,
        ...modifiedScores,
      }));
      setStatMod(abilityMod);
      setSkillScores(abilityScores);
    }, [
      statMod,
      skillScores,
      abilityScores,
      abilityMod,
      setSkillScores,
      setStatMod,
      setAbilityMod,
      setAbilityScores,
    ]);
  
    const handleAbilityClick = () => {
        toggleShowMod();
      };
return (    
    <label className="player-sheet-abilities">
    <ul className="ability-uo-list">
      {!showMod
        ? Object.entries(abilityScores).map(([ability, score]) => (
            <li
              key={ability}
              className={`ability-name ${ability}`}
              onClick={() => handleAbilityClick()}
            >
              <span className={`ab-${ability}`}>{ability}: </span>
              <span className={`ab-score`}>{score}</span>
            </li>
          ))
        : Object.entries(abilityMod).map(([ability, mod]) => (
            <li
              key={ability}
              onClick={() => handleAbilityClick()}
              className={`ability-name ${ability}`}
            >
              <span className={`ab-${ability}`}>{ability}: </span>
              <>
                {mod >= 0 ? (
                  <span className={`ab-score`}> +{mod}</span>
                ) : (
                  <span className={`ab-score`}>{mod}</span>
                )}
              </>
            </li>
          ))}
    </ul>
  </label>
);
};


export default SavingThrows;