import React, { useEffect, useState } from "react";
import { spellsApi, specificSpellsApi } from "../../utils/dndApi";
import { Navbar, Header } from "../UI/index";
import Modal from "react-modal";
import spellModel from "./spellsModel";
import { addedSpells } from "../../utils/gameInformation";
import { create } from "zustand";
import CreateSpell from "./createSpell";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [searchedSpells, setSearchedSpells] = useState([]);
  const [spellLevel, setSpellLevel] = useState();
  const [createSpell, setCreateSpell] = useState(false);
  const [openSpellModal, setOpenSpellModal] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);

  //This just holds one big list.
  const [allSpells, setAllSpells] = useState([]);

  const toggleSpellModal = (spell) => {
    setSelectedSpell(spell);
    setOpenSpellModal(!openSpellModal);
  };
  const toggleCreateSpell = () => {

    setCreateSpell(!createSpell);
  };

  const spellLevelChange = (newLevel) => {
    setSpellLevel(newLevel);
  };

  useEffect(() => {
    spellsApi().then((data) => setSpells(data));
  }, []);

  const spellList = async () => {
    setSearchedSpells([]);
    const spellPromises = spells
      .map((spell) => {
        if (spellLevel === "" || spellLevel === undefined) {
          return specificSpellsApi(spell.index);
        }
        if (spell.level == spellLevel) {
          return specificSpellsApi(spell.index);
        }
        return null;
      })
      .filter(Boolean);

    let spellData = await Promise.all(spellPromises);
    setAllSpells(spellData); // Store the original list of spells here

    addedSpells().map((spell) => {
      if (spell.level == spellLevel) {
        spellData.push(spell);
      }
    });

    setSearchedSpells(spellData);
  };

  const spellSearch = (e) => {
    const search = e.toLowerCase().replace(/\s+/g, '');
    const filteredSpells = allSpells.filter((spell) =>
      spell.name.toLowerCase().replace(/\s+/g, '').includes(search)
    );
    setSearchedSpells(filteredSpells);
  };

  const loadList = () => {
    if (searchedSpells.length <= 0) {
      spellList();
    }
  };

  const ListOfSpells = () => {
    return (
      <table>
        {searchedSpells
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((spell) => (
            <tbody key={spell.name}>
              <tr className="spell-table-details">
                <th
                  onClick={() => toggleSpellModal(spell)}
                  className="spell-table-name"
                >
                  {spell.name}
                </th>

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
              </tr>
            </tbody>
          ))}
      </table>
    );
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="spellSearch">
        <p onClick={spellList}>Search</p>
        <section>
          <p className="spellSearchTitle">Search Spells</p>
          <input
            className="spellSearchInput"
            type="text"
            onChange={(e) => spellSearch(e.target.value)}
            onClick={loadList}
          />
        </section>
        <section>
          <label>Level</label>
          <input
            className="spellLevel"
            type="number"
            onChange={(e) => spellLevelChange(e.target.value)}
          />
        </section>
          <p className="create-spell" onClick={toggleCreateSpell}>Add Spell</p>
      </div>
      

      <div className="spellList">
        <ListOfSpells />
      </div>

      <Modal
        className="spell-model"
        isOpen={createSpell}
        onRequestClose={() => {
          toggleCreateSpell();
          setCreateSpell(false);
        }}
      >
        <CreateSpell/>
      </Modal>

      <Modal
        className="spell-model"
        isOpen={openSpellModal}
        onRequestClose={() => {
          toggleSpellModal();
          setOpenSpellModal(false);
        }}
      >
        {selectedSpell && spellModel(selectedSpell)}
      </Modal>
    </>
  );
};

export default Spells;
