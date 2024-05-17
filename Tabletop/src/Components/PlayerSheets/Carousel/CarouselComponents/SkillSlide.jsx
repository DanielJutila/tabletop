import React, { useEffect, useState } from "react";
import { SavingThrows, SkillScores, MainPageTopBar } from "../CarouselModules.jsx";


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
