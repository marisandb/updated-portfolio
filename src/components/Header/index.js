import React from 'react';
import coverImage from '../../assets/cover/hero.png';

function Header(props) {

  return (
    <header>
      <img src={coverImage} alt="black background with multiple white pyramids"></img>
      {props.children}
    </header>
  );
}

export default Header;
