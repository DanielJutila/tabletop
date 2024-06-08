import React, { useState, useCallback } from 'react';
import { SkillScores, SavingThrows } from '../PlayerModules';
import MobileModules from './MobileModule';
import PCModules from './PCModule';

const moduleOptions = [
  { id: 'testing', name: 'Testing Module', component: SkillScores },
  { id: 'savingThrows', name: 'Saving Throws Module', component: SavingThrows },
];

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleLongPress = useCallback(() => {
    console.log('show delete true');
    setShowDelete(true);
    setIsDraggingEnabled(true);
  }, []);

  const handleClickOutside = useCallback(() => {
    //delay to prevent click on delete button to 
    setShowDelete(false);
    setIsDraggingEnabled(false);
  }, []);

  const addModule = (moduleId) => {
    const selectedModule = moduleOptions.find((mod) => mod.id === moduleId);
    if (selectedModule) {
      setModules([...modules, { id: `${moduleId}-${Date.now()}`, component: selectedModule.component }]);
    }
  };

  const removeModule = (moduleId) => {
    setModules(modules.filter((module) => module.id !== moduleId));
    setShowDelete(false);
  };

  const moveModule = (fromIndex, toIndex) => {
    const updatedModules = [...modules];
    const [movedModule] = updatedModules.splice(fromIndex, 1);
    updatedModules.splice(toIndex, 0, movedModule);
    setModules(updatedModules);
  };

  return (
    <div>
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
            showDelete={showDelete}
            isDraggingEnabled={isDraggingEnabled}
            onLongPress={handleLongPress}
            onClickOutside={handleClickOutside}
          />
        ))}
      </div>
      {/* <button onClick={() => addModule('testing')}>Add Testing Module</button>
      <button onClick={() => addModule('savingThrows')}>Add Saving Throws Module</button> */}
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