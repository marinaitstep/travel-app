import React from 'react';
import Nav from './Nav';

const Header = () =>{
  return(
    <header className="header">
      <div className="header__inner">
        <a href="./index.html" className="header__logo">Travel App</a>
        <Nav/>
      </div>
    </header>
  )
}

export default Header;