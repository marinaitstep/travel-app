import React from "react";

function Nav (){
  const SignOut = () => {
    console.log('test')
  }
    return(
        <nav className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <a href="/bookings" className="nav-header__inner">
              <span className="visually-hidden">Bookings</span>
              <img src="../images/briefcase.svg" alt=" icon" />
              </a>
            </li>
            <li className="nav-header__item" title="Profile">
              <div className="nav-header__inner profile-nav" tabindex="0">
                <span className="visually-hidden">Profile</span>
                <img src="../images/user.svg" alt="profile icon" />
                <ul className="profile-nav__list">
                  <li className="profile-nav__item profile-nav__username">John Doe</li>
                  <li className="profile-nav__item">
                  <button className="profile-nav__sign-out button" onClick={SignOut}><a href="/sign-in" id="signout">Sign Out</a></button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;