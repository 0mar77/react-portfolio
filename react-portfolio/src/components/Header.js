import Navigation from './Navigations';
import React from 'react';

function Header ({ changeState }) {

  return (
    <header>
        <h1>Luis Omar Duran Vega</h1>
        <Navigation changeState={changeState} />
    </header>
  );
}

export default Header;