import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../auth0-wrapper";
// import { connect } from 'react-redux';

// import { login_request } from '../actions/index';
import './NavBar.scss';

const LoggedInNav = () => (
  <div className="logged-in-nav-container">
    <div className="logged-in-nav">
      <ul>
        <li><NavLink to="/personal">My Achievements</NavLink></li>
        <li><NavLink to="/team">My Team</NavLink></li>
      </ul>
    </div>
  </div>
)

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <nav>
        <NavLink to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" /></NavLink>
        <div className="menu">
          {!isAuthenticated && (
            <button className="btn login-btn"
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

          {isAuthenticated && <button className="btn logout-btn" onClick={() => logout()}>Log out</button>}
        </div>
      </nav>
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;