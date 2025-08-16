import React from 'react';

const Header = ({ name, title, profilePicture }) => {
  return (
    <header>
      {profilePicture && <img src={profilePicture} alt="Profile" style={{width: '150px', height: '150px', borderRadius: '50%'}} />}
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  );
};

export default Header;
