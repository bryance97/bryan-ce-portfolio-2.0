import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row px-1">
      <h1>Bryan's Portfolio 2.0</h1>
      <img src={coverImage} alt="lines"></img>
      {props.children}
    </header>
  );
}

export default Header;
