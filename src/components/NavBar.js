import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../auth0-wrapper";
// import { connect } from 'react-redux';

// import { login_request } from '../actions/index';
import './NavBar.scss';

const LoggedInNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <NavLink to="/personal" className="subNav__link">My Achievements</NavLink>
        <NavLink to="/team" className="subNav__link">My Team</NavLink>
    </div>
  </div>
)

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <nav className="nav">
        <NavLink to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" className="nav__logo" /></NavLink>
        <div className="nav__menu">
          {!isAuthenticated && (
            <button className="nav__btn nav__btn--login"
              onClick={() => {
                  // login_request()
                  loginWithRedirect({})
                  //having an error populate when log in is clicked
                }
              }
            >
              Log In
            </button>
          )}

          {isAuthenticated && <button className="nav__btn nav__btn--logout" onClick={() => logout()}>Log out</button>}
        </div>
      </nav>
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;