import React from "react";

const spellsModel = (spell) => {
  return (
    
      <table className="spell-table">
        <tbody >
          <tr className='spell-table-details-model'>
            <th className='spell-table-name'>{spell.name}</th>    
          <td>
            <span className="subtle">Level: </span>
            {spell.level}
          </td>
          {spell.material == null ? (
            <td>
              <span className="subtle">Components: </span>
              {spell.components.join(", ")}
            </td>
          ) : (
            <td>
              <span className="subtle">Components: </span>
              {spell.components.join(", ") + "(" + spell.material + ")"}
            </td>
          )}

          <td>
            <span className="subtle">Concentration: </span>
            {spell.concentration ? "Yes" : "No"}
          </td>
          <td>
            <span className="subtle">range: </span>
            {spell.range}
          </td>
          <td>
            <span className="subtle">Casting Time: </span>
            {spell.casting_time}
          </td>
          <td>
            <span className="subtle">Duration: </span>
            {spell.duration}
          </td>
          <td>
            <span className="subtle">Description: </span>
            {spell.desc.map((item, index) => (
              <p key={index}>{item.trim()}</p>
            ))}
          </td>
          <td>{spell.higher_level}</td>
          <td>
            <span className="subtle">School: </span>
            {spell.school.name}
          </td>
          <td>
            <span className="subtle">Class: </span>
            {spell.classes.map((classObj) => classObj.name).join(", ")}
          </td>
          </tr>
        </tbody>
      </table>

  );
};

export default spellsModel;
