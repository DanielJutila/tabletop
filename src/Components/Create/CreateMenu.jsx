import React, { useState, useCallback, useEffect } from "react";
import { SkillScores, SavingThrows } from "../PlayerModules";
import MobileModules from './MobileModule';
import PCModules from './PCModule';

const moduleOptions = [
  { id: 'testing', name: 'Testing Module', component: SkillScores },
  { id: 'savingThrows', name: 'Saving Throws Module', component: SavingThrows },
];

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const addModule = (moduleId) => {
    const selectedModule = moduleOptions.find((mod) => mod.id === moduleId);
    if (selectedModule) {
      setModules([...modules, { id: `${moduleId}-${Date.now()}`, component: selectedModule.component }]);
      setShowOptions(false); // Hide options after selecting
    }
  };

  const removeModule = (moduleId) => {
    setModules(modules.filter((module) => module.id !== moduleId));
  };

  const moveModule = (fromIndex, toIndex) => {
    const updatedModules = [...modules];
    const [movedModule] = updatedModules.splice(fromIndex, 1);
    updatedModules.splice(toIndex, 0, movedModule);
    setModules(updatedModules);
  };

  return (
    <div>
      {/* Render based on screen size */}
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

      <div className="pc-modules-container">
        {modules.map((module, index) => (
          <PCModules
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
          {moduleOptions.map((option) => (
            <div key={option.id}>
              <button onClick={() => addModule(option.id)}>{option.name}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModulesPage;