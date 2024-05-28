import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../UserManagment/LoginForm";
import Modal from "react-modal";
import { isUserLoggedIn, getUserData } from "../../stores/usersPB";

const Login_Signup = styled.button`
  background-color: #04aa6d;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData , setUserData] = useState(null);

  const isLoggedIn = isUserLoggedIn();
  useEffect(() => {
    if (isLoggedIn) {
      getUserData().then((data) => setUserData(data));
    }
  }, [isLoggedIn]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleLogin = () => setLogin(!login);

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 50);
  };

  return (
    <>
      <nav className="main-navbar" onBlur={handleBlur}>
        <button
          className="main-navbar-dropdown-button"
          onClick={toggleOpen}
          
        >
          ☰
        </button>

        <div className="main-navbar-dropdown-menu" >
          {isOpen && (
            <>
              <Link to="/"> Home </Link>
              <Link to="/spells">Spells</Link>
              <Link to="/create"> Create </Link>
              <Link to="/playersheet">Sheets </Link>
              <Link to="/">DM help</Link>
            </>
          )}
        </div>

        <div className="main-navbar-default">
          <Link to="/"> Home </Link>
          <Link to="/spells">Spells</Link>
          <Link to="/create"> Create </Link>
          <Link to="/playersheet">Sheets </Link>
          <Link to="/">DM help</Link>
        </div>

        {isUserLoggedIn() ? (
                <Link>
                {userData.username}
              </Link>
      ) : (
        <Link
          onClick={toggleLogin}
          className="default-navbar-profile"
        >
          Login/Signup
        </Link>
      )}
      </nav>
        <Modal
        style={modalStyle}
        isOpen={login}
        onRequestClose={() => {
          toggleLogin();
          setLogin(false);
        }}
      >
        <Login />
      </Modal>
        
  
    </>
  );
};

export default Navbar;
