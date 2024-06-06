import React, { useEffect, useState } from "react";
import { SavingThrows, SkillScores, MainPageTopBar } from "../../../PlayerModules/";


const SkillSlide = () => {
  
  return (
    <div>
          <MainPageTopBar />
          <SkillScores />
          <SavingThrows />
    </div>
  );
};

export default SkillSlide;
