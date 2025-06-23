import React from 'react';

import '../styles/header.css';
import pokebaseLogo from '../assets/pokebase.png';


function Header({ onSearch }) { //props for search function
  return (
    <header className="header"> 
      <img src={pokebaseLogo} alt="Pokebase Logo" className="logo" />
      
      <input
        type="text"
        placeholder="Search Pokémon by name..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </header>
  );
}

export default Header;
