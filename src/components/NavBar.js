import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0, Auth0Context } from "../auth0-wrapper";

import './NavBar.scss';
import { redirectUri } from '../index';

const LoggedInNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <NavLink to="/personal" className="subNav__link">My Achievements</NavLink>
        <NavLink to="/team" className="subNav__link">My Team</NavLink>
    </div>
  </div>
)

const LoggedInDropdown = ({ open }) => {
  const { logout } = useAuth0();
  return (
    <div className={`nav__loggedInDropdown${open ? " open" : ""}`}>
      <ul>
        <li><a href="https://search.connectourkids.org/">Account</a></li>
        <li><a href="https://search.connectourkids.org/">Family Connections</a></li>
        <li><a href="https://search.connectourkids.org/">People Search</a></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { user } = useContext(Auth0Context);
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown

  return (
    <>
      <nav className="nav">
        <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" className="nav__logo" /></Link>
        <div className={`nav__menu${open ? " open" : " closed"}`}>
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
                <img className="nav_dropdownIconOpen" src="arrow-down-sign-to-navigate.svg" alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src="close-button.svg" alt="dropdown close" onClick={() => setOpen(false)} />
                <LoggedInDropdown open={open}/>
              </>
            )}
        </div>
      </nav>
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;