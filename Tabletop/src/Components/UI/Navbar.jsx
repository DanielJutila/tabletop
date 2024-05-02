import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBar = styled.div`
    display: 'flex';
    justifyContent: 'justify-content-center';
    padding: '1rem';
    background-color: 'black';
`;
const Navbar = () => {
    return (
        
            <NavBar>
                <Link to='/' > Home </Link>
                <Link to='/'> About </Link>
                <Link to='/'> Homebrew </Link>
                <Link to='/'> Character </Link>
            </NavBar>
    );
}

export default Navbar;