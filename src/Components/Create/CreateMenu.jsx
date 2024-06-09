import React, { useState, useEffect, useCallback } from "react";
import { SkillScores, SavingThrows, ItemModule } from "../PlayerModules";
import MobileModules from "./MobileModule";
import PCModules from "./PCModule";
import {Navbar} from "../UI";

const moduleOptions = [
  { id: "testing", name: "Testing Module", component: SkillScores },
  { id: "savingThrows", name: "Saving Throws Module", component: SavingThrows },
  { id: "itemModule", name: "Item Module", component: ItemModule },
];

const ModulesPage = () => {
 
  const [modules, setModules] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const addModule = useCallback((moduleId) => {
    const selectedModule = moduleOptions.find((mod) => mod.id === moduleId);
    if (selectedModule) {
      setModules([
        ...modules,
        {
          id: `${moduleId}-${Date.now()}`,
          component: selectedModule.component,
        },
      ]);
      
    }
  }, [modules]);


  // Ending here for now. Issue is that it saves the modules, but overwrites them when you refresh
  // for now, I will just save the modules to local storage and then load them in useEffect
  useEffect(() => {
   if(localStorage.getItem("components") !== null){
    addModule(JSON.parse(localStorage.getItem("components")));
   }
   JSON.stringify(localStorage.setItem("components", JSON.stringify(modules)));
  }, [addModule, modules]);

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
      .filter(option => !modules.some(module => module.component === option.component))
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
