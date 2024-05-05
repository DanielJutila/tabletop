import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {minWidth, maxWidth} from './breakpoints'
import SignUp from '../UserManagment/SignupForm';
import Login from '../UserManagment/LoginForm';
import Modal from 'react-modal';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: black;
    flex-direction: row;
    
`;
const NavbarLink = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 1rem 1rem; 
    &:hover {
        background-color: gray;
    }

`;
const NavbarProfile = styled(Link)`
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 1rem;
    margin-right: 1.4rem;
    &:hover {
        background-color: gray;
    }
        @media(${maxWidth.sm}) {
            &.ProfileDefault {
                display: none;
            };
        };
        @media (${minWidth.sm}) {
            &.ProfileDrop {
               display: none;
            };
        };
    
`;

const DropDownMainMenu = styled.div`
    @media (${maxWidth.sm}) {
        flex-direction: column;
    };
    @media (${minWidth.sm}) {
        display: none;
    };
    position: absolute;
    max-width: 20%;
    display: flex;
    z-index: 1;
    background-color: black;
    padding-right: 1rem;

`;
const DropDownButton = styled.button`
@media (${maxWidth.sm}) {
background-color: black;
color: white;
padding: 16px;
font-size: 16px;
border: none;
cursor: pointer;

&:hover, &:focus {
    background-color: #2980B9;
}
};

@media (${minWidth.sm}) {
    display: none;
};

`
const DefaultNavBar = styled.div`
    @media (${maxWidth.sm}) {
        display: none;
    };
    @media (${minWidth.sm}) {
        display: flex;
};
`;

const Login_Signup = styled.button`
    background-color: #04AA6D;
    border-radius: 10px;
    border: none;
    color: white;
    padding: .5rem;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-right: 1rem;
`;

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
    }
};

const Navbar = () => {
    const [login, setLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loginOrSignup, setLoginOrSignup] = useState(true);


    //False === signup, True === login
    const toggleLoginOrSignup = () => setLoginOrSignup(!loginOrSignup);
    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleLogin = () => setLogin(!login);

    const handleBlur = () => {
            setIsOpen(false); 
    };

    return (
        <>
            <NavBar>
            <DropDownButton onClick={toggleOpen} onBlur={handleBlur}>☰</DropDownButton>
            <NavbarProfile onClick={toggleLogin} className='ProfileDrop' to='/profile'> Profile </NavbarProfile>
            </NavBar>
            <DropDownMainMenu>
            {isOpen && (
                <>
                        <NavbarLink to='/'> Home </NavbarLink>
                        <NavbarLink to='/about'> About </NavbarLink>
                        <NavbarLink to='/'> Homebrew </NavbarLink>
                        <NavbarLink to='/'>Character </NavbarLink>
                        <NavbarLink to='/'>Generate</NavbarLink>
                        <NavbarLink to='/'>DM help</NavbarLink>
                        </>
                )}
                </DropDownMainMenu>
            <NavBar>
                <DefaultNavBar>
                    <NavbarLink to='/' > Home </NavbarLink>
                    <NavbarLink to='/about'> About </NavbarLink>
                    <NavbarLink to='/'> Homebrew </NavbarLink>
                    <NavbarLink to='/'> Character </NavbarLink>
                    <NavbarLink to='/'>Generate</NavbarLink>
                    <NavbarLink to='/'>DM help</NavbarLink>
                </DefaultNavBar>
                <NavbarProfile onClick={toggleLogin} className='ProfileDefault' to='/profile'> Profile </NavbarProfile>
            </NavBar>
            <Modal style={modalStyle} isOpen={login} onRequestClose={() => {toggleLogin(); setLogin(false)}}>
                <Login_Signup id='loginButton' onClick={toggleLoginOrSignup}>Login</Login_Signup>
                <Login_Signup id='signupButton' onClick={toggleLoginOrSignup}>Signup</Login_Signup>
                {loginOrSignup ? <Login/> : <SignUp/>}
            </Modal>
        </>
    );
}

export default Navbar;