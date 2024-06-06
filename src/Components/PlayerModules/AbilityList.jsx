import React, { useEffect, useState } from "react";
import { calculateAbilityScore } from "../../utils/calculations";
import { abilities } from "../../utils/gameInformation";
import useSkillStore from "../../stores/user";

const AbilityList = () => {
  const { statMod, setStatMod } = useSkillStore();
  const abilityArray = abilities();

  const mathStuff = (ability) => {
    return calculateAbilityScore(statMod[ability.mod]);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ability</th>
            <th>mod</th>
            <th>prof</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          {abilityArray.map((abObj) => (
            <tr className="ability-stuff" key={abObj.ability}>
              <td className="ability-name" key={abObj.ability}>
                {abObj.ability}
              </td>
              <td className="abilityMod">{abObj.mod}</td>
              <td className="prof">no</td>
              <td className="score">{mathStuff(abObj)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AbilityList;
