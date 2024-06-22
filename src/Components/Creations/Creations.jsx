import React, { useState } from "react";
import {Navbar} from '../UI/'
import CreateItems from './CreateItems'


const PlayerSheet = () => {
 
  const [showItems, setShowItems] = useState(false);

  const toggleCreateItems = () => {
    setShowItems(!showItems);
  };

  return (
      <>
     
      {showItems ? (
        <>
         <Navbar/>
          <p>See Creations</p>
          <p>Create Character</p>
          <p onClick={toggleCreateItems}>Create Items</p>
          <p>Create Spells</p>
        </>
      ) : (
        <CreateItems 
        goBack={toggleCreateItems} />
      )}
      </>
    );
  };

export default PlayerSheet;