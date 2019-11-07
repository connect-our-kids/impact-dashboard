import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0, Auth0Context } from "../auth0-wrapper";
// import { connect } from 'react-redux';

// import { login_request } from '../actions/index';
import './NavBar.scss';
const redirectURI = window.location.origin; // + '/dev-sean/';

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
  const { user } = useContext(Auth0Context);
  console.log('user picture in NavBar.js', user);

  return (
    <>
      <nav className="nav">
        <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" className="nav__logo" /></Link>
        <div className="nav__menu">
          {!isAuthenticated && (
            <button className="nav__btn nav__btn--login"
              onClick={() => {
                  // login_request()
                  loginWithRedirect()
                  //having an error populate when log in is clicked
                }
              }
            >
              Log In
            </button>
          )}

            {isAuthenticated && user && (
              <>
                <img className="nav__avatar" src={user.picture} alt="User avatar" width="32" />
                <button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectURI})}>Log out</button>
              </>
            )}
        </div>
      </nav>
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;