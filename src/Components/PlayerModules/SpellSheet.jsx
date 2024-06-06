import React, {useState, useEffect} from 'react';
import {spellsApi} from '../../utils/dndApi';



const SpellSheet = () => {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        spellsApi().then(data => setSpells(data));
       setTimeout(() => console.log(spells), 1000);
    }, []);
    return (
        <>
            <section className="spell-sheet-section">
                <p>Spell Sheet</p>
                <div className="spell-sheet">
                    <p>Spell List</p>
                    <p>Spell Slots</p>
                    <p>Spell Save DC</p>
                    <p>Spell Attack Bonus</p>
                </div>
            </section>
        </>
    );
}

export default SpellSheet;