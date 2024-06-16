import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../UserManagment/LoginForm";
import Modal from "react-modal";
import { isUserLoggedIn, getUserData, logout } from "../../stores/usersPB";
import userDataStore from '../../stores/userData';


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
  const {username, setUserData} = userDataStore();

  const [user, setUser] = useState({});

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleLogin = () => setLogin(!login);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isUserLoggedIn()) {
        const userData = await getUserData();
        setUser(userData);
      }
    };
    fetchUserData();

    setUserData(user.username);
  }, [setUserData, user.username]);

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
                <Link onClick={() => { logout(); toggleLogin(); }}>
                {username}
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
