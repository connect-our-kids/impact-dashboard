import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0, Auth0Context } from "../auth0-wrapper";

import './NavBar.scss';
import { redirectUri } from '../index';

const LoggedInNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <NavLink to="/" exact className="subNav__link">National Numbers</NavLink>
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
        {/* Family Connections is not yet available but it should be added to this list when it comes out mid 2020 */}
        {/* Also the account link below needs to be updated to point to the proper url for editing account information */}
        <li><a href="https://connectourkids.org/">Account</a></li> 
        <li><a href="https://search.connectourkids.org/">People Search</a></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const MobileDropdown = ({ open, setOpen }) => {
  const { logout } = useAuth0();
  return (
    <div className={`nav__mobile-dropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/" exact className="subNav__link" onClick={() => setOpen(false)} >National Numbers</NavLink></li>
        <li><NavLink to="/personal" className="subNav__link" onClick={() => setOpen(false)} >My Achievements</NavLink></li>
        <li><NavLink to="/team" className="subNav__link" onClick={() => setOpen(false)} >My Team</NavLink></li>
        <li><a href="https://connectourkids.org/" onClick={() => setOpen(false)} >Account</a></li>
        <li><a href="https://search.connectourkids.org/" onClick={() => setOpen(false)} >People Search</a></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { user } = useContext(Auth0Context);
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown
  console.log(user, "setUs");  
  return (
    <>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(false)}><img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" className="nav__logo" /></Link>
        <div className="nav__mobile-menu">

        </div>
        <div className={`nav__menu${open ? " open" : " closed"}`}>
          {!isAuthenticated && (
            <button className="nav__btn nav__btn--login" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
            {isAuthenticated && user && (
              <>
                <img className="nav__avatar" src={user.picture} alt="User avatar" width="32" />
                <img className="nav_dropdownIconOpen" src={process.env.PUBLIC_URL + '/arrow-down-sign-to-navigate.svg'} alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src={process.env.PUBLIC_URL + '/close-button.svg'} alt="dropdown close" onClick={() => setOpen(false)} />
                <img className="nav__mobile-menu-btn" src={process.env.PUBLIC_URL + '/menu-button.svg'} alt="mobile menu" width="32" onClick={() => setOpen(!open)} />
                <LoggedInDropdown open={open} />
              </>
            )}
        </div>
      </nav>
      <MobileDropdown open={open} setOpen={setOpen} />
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;