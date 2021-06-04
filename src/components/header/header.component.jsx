import React from 'react';

import './header.styles.scss';

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <h1>LOGO</h1>
    </div>
    <div className="menu-options">
      <ul>About</ul>
      <ul>Shop</ul>
      <ul>Contact</ul>
    </div>
  </div>
)

export default Header;