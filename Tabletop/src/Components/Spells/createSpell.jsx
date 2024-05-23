import React from "react";

const CreateSpell = () => {


    const DropdownSpellMenu = () => {
        return (
            <div>
                <p>V</p>
                <p>S</p>
                <p>M</p>
            </div>
        );
    };


  return (
    <div className="create-spell-model">
        <form>
            <div>
            <label htmlFor='spellName'>Spell Name </label>
            <input type="text" name='spellName' placeholder="Spell Name"/>
            </div>
            <div>
            <label htmlFor='spellLevel'>Spell Level </label>
            <input type="number" name='spellLevel' placeholder="Spell Level" min='0' max='9'/>
            </div>
            <div>
            <label htmlFor='spellComponents'>Components</label>
            <input type="checkbox" name="spellComponents"/>
            </div>
            <div>
            <label htmlFor='spellConcentration'>Concentration</label>
            <input type="checkbox" name="spellConcentration"/>
            </div>
        </form>
    </div>
  );
};

export default CreateSpell;
