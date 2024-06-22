import React, { createContext, useState, useEffect, useCallback } from "react";
import { SkillScores, SavingThrows, ItemModule, SpellSheet } from "../PlayerModules";
import MobileModules from "./MobileModule";
import { Navbar } from "../UI";

const moduleOptions = [
  { id: "SkillScore", name: "Skill Scores", component: SkillScores },
  { id: "savingThrows", name: "Saving Throws", component: SavingThrows },
  { id: "itemModule", name: "Item Module", component: ItemModule },
  { id: "spellSheet", name: "Spell Sheet", component: SpellSheet },
];

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const addModule = useCallback((moduleId) => {
    const selectedModule = moduleOptions.find((mod) => mod.id === moduleId);
    if (selectedModule) {
      setModules((prevModules) => [
        ...prevModules,
        {
          id: `${moduleId}-${Date.now()}`,
          component: selectedModule.component,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    const savedModules = JSON.parse(localStorage.getItem("components"));
    if (savedModules && savedModules.length > 0) {
      savedModules.forEach((module) => addModule(module.id));
    }
  }, [addModule]);

  useEffect(() => {
    const modulesToSave = modules.map((module) => ({
      ...module,
      id: module.id.split("-")[0], // This will remove the date part
    }));
    localStorage.setItem("components", JSON.stringify(modulesToSave));
  }, [modules]);

  const removeModule = (moduleId) => {
    setModules((prevModules) =>
      prevModules.filter((module) => module.id !== moduleId)
    );
  };

  const moveModule = (fromIndex, toIndex) => {
    const updatedModules = [...modules];
    const [movedModule] = updatedModules.splice(fromIndex, 1);
    updatedModules.splice(toIndex, 0, movedModule);
    setModules(updatedModules);
  };
  return (
    <div>
      <Navbar />
          <div className="modules-container">
            {modules.map((module, index) => (
              <MobileModules
                key={module.id}
                id={module.id}
                Component={module.component}
                onRemove={removeModule}
                index={index}
                moveModule={moveModule}
                modules={modules}
              />
            ))}
          </div>
      <button onClick={() => setShowOptions(!showOptions)}>+</button>
      {showOptions && (
        <div>
          {moduleOptions
            .filter(
              (option) =>
                !modules.some((module) => module.id.startsWith(option.id))
            )
            .map((option) => (
              <div key={option.id}>
                <button onClick={() => addModule(option.id)}>
                  {option.name}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ModulesPage;
