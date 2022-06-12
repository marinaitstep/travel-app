import React from 'react';
import Nav from './Nav';

function Header (nav){


  return(
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">Travel App</a>
        {nav.nav && <Nav/>}
      </div>
    </header>
  )
}

export default Header;