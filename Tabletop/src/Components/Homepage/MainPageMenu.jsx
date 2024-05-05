import React from "react";
import styled from "styled-components";


const MainMenuList = styled.div`
    align-content: center;
    padding-left: 10%;
    display: block;
`;

const MainMenuButton = styled.a`
    display: flex;
    margin-bottom: 1px;
    border: 1px solid black;
    max-width: 100%;
    max-height: 47%;
    align-items: center;
    &:hover {
        color: white;
        background-color:gray;
        cursor: pointer;
    }
    padding: 3px;
    overflow: hidden;
`;

const MainMenu = () => {


    return (
        <div>
            <MainMenuList>
                <MainMenuButton>Generate Cards</MainMenuButton>
                <MainMenuButton>Generate Character</MainMenuButton>
                <MainMenuButton>Beasts</MainMenuButton>
                <MainMenuButton>Homebrew</MainMenuButton>
                <MainMenuButton>Character</MainMenuButton>
            </MainMenuList>
            
        </div>
    )
}

export default MainMenu;