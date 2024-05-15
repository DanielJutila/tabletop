import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUp from "../UserManagment/SignupForm";
import Login from "../UserManagment/LoginForm";
import Modal from "react-modal";

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
  const [loginOrSignup, setLoginOrSignup] = useState(true);

  //False === signup, True === login
  const toggleLoginOrSignup = () => setLoginOrSignup(!loginOrSignup);
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
              <Link to="/about"> About </Link>
              <Link to="/create"> Create </Link>
              <Link to="/playersheet">Sheets </Link>
              <Link to="/">Generate</Link>
              <Link to="/">DM help</Link>
            </>
          )}
        </div>

        <div className="main-navbar-default">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/create"> Create </Link>
          <Link to="/playersheet">Sheets </Link>
          <Link to="/">Generate</Link>
          <Link to="/">DM help</Link>
        </div>
        <Link
          onClick={toggleLogin}
          className="default-navbar-profile"
          to="/profile"
        >
          Profile
        </Link>
      </nav>
      <Modal
        style={modalStyle}
        isOpen={login}
        onRequestClose={() => {
          toggleLogin();
          setLogin(false);
        }}
      >
        <Login_Signup id="loginButton" onClick={toggleLoginOrSignup}>
          Login
        </Login_Signup>
        <Login_Signup id="signupButton" onClick={toggleLoginOrSignup}>
          Signup
        </Login_Signup>
        {loginOrSignup ? <Login /> : <SignUp />}
      </Modal>
    </>
  );
};

export default Navbar;
