import React from 'react';
import Nav from './Nav';

function Header (){
  return(
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">Travel App</a>
        <Nav/>
      </div>
    </header>
  )
}

export default Header;