import React, { useState } from "react";

const CreateSpell = () => {
  const [dropdownMenu, setDropdown] = useState([]);

  const DropdownSpellMenu = (e, listArray) => {
    const click = e.target.className;
    console.log(click);

    if (!dropdownMenu.includes(click)) {
      setDropdown([...dropdownMenu, click]);
   

      const loop = () => {
        let arr = [];
        for (let i = 0; i < listArray.length; i++) {
          arr.push({
            label: `<label>${listArray[i]}</label>`,
            input: `<input type="checkbox"/>`,
          });
        }
        return arr;
      };
      const arr = loop();
      const dropdown = document.createElement("div");
      dropdown.className = e.target.className;
      dropdown.innerHTML = arr
        .map((item) => {
          return `
                ${item.label}
                ${item.input}
                `;
        })
        .join("");

      e.target.appendChild(dropdown);
    }
  };

  return (
    <div className="create-spell-model">
      <form>
        <div>
          <label htmlFor="spellName">Spell Name </label>
          <input type="text" name="spellName" placeholder="Spell Name" />
        </div>
        <div>
          <label htmlFor="spellLevel">Spell Level </label>
          <input
            type="number"
            name="spellLevel"
            placeholder="Spell Level"
            min="0"
            max="9"
          />
        </div>
        <div>
          <label
            className="components"
            onClick={(e) => DropdownSpellMenu(e, ["V", "S", "M"])}
          >
            Components
          </label>
        </div>
        <div>
          <label htmlFor="spellConcentration">Concentration</label>
          <input type="checkbox" name="spellConcentration" />
        </div>
        <div>
          <label htmlFor="spellRange">Range</label>
          <input type="number" name="spellRange" placeholder="Range" />
          <label className='rangeMeasurement' onClick={(e) => DropdownSpellMenu(e, ['Self', 'Touch', 'Feet', 'Meters', 'Sight'])}> feet</label>
        </div>
      </form>
    </div>
  );
};

export default CreateSpell;
