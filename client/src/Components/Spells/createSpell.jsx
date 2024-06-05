import React, { useState } from "react";

const CreateSpell = () => {
  const [dropdownMenu, setDropdown] = useState([]);

  const DropdownSpellMenu = (e, listArray, listType) => {
    const click = e.target.className;
    console.log(click);
    if (!dropdownMenu.includes(click)) {
      setDropdown([...dropdownMenu, click]);
      const loop = () => {
        let arr = [];
        for (let i = 0; i < listArray.length; i++) {
          arr.push({
            label: `<label>${listArray[i]}</label>`,
            input: `<input name='one-only' type="${listType}"/>`,
          });
        }
        return arr;
      };
      const arr = loop();
      const dropdown = document.createElement("ul");
      dropdown.innerHTML = arr
        .map((item) => {
          return `
                <li>${item.label}</li>
                <li>${item.input}</li>
                `;
        })
        .join("");

      e.target.appendChild(dropdown);
    }
  };

  const isDropdown = (e) => {
    // if(!e.target.classList.contains('dropdownActive')){
    //   e.target.classList.add('dropdownActive')
    // } else {
    //   e.target.classList.remove('dropdownActive')
    // }
  };

  return (
    <div>
      <form className="create-spell-model">
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
            onClick={(e) => { DropdownSpellMenu(e, ["V", "S", "M"], "checkbox"), isDropdown(e)}}
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
          <input
            className="spellRange"
            type="number"
            name="spellRange"
            placeholder="0"
          />
          <label
            className="rangeMeasurement"
            onClick={(e) =>
              {
              DropdownSpellMenu(
                e,
                ["Self", "Touch", "Feet", "Sight","Miles", "Global","NA" ],
                "radio",
              ), isDropdown(e)}
            }
            
          >
            feet
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreateSpell;
